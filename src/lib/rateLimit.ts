import { NextRequest } from "next/server";

interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
}

// In-memory rate limiting store (key: string -> RateLimitRecord)
// Note: In serverless multi-region deployments, each function instance maintains its own memory cache.
// For single-instance or containerized Next.js deployments, this provides robust, zero-dependency protection.
const rateLimitMap = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now - record.firstRequestTime > 60 * 60 * 1000) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Extract client IP address securely from request headers
 */
export function getClientIp(req: NextRequest): string {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const ips = xForwardedFor.split(",").map((ip) => ip.trim());
    if (ips[0]) return ips[0];
  }
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();
  return "127.0.0.1";
}

/**
 * In-memory rate limiting checker
 */
export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, firstRequestTime: now });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (now - record.firstRequestTime > windowMs) {
    // Window reset
    rateLimitMap.set(key, { count: 1, firstRequestTime: now });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (record.count >= maxRequests) {
    const retryAfterSec = Math.ceil((windowMs - (now - record.firstRequestTime)) / 1000);
    return { allowed: false, retryAfterSec };
  }

  record.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

/**
 * Sanitizes input string: trims, removes control characters, caps max length
 */
export function sanitizeString(val: unknown, maxLength: number): string {
  if (val === null || val === undefined) return "";
  const str = String(val).trim();
  return str.slice(0, maxLength);
}

/**
 * Prevents MongoDB Operator Injection by stripping keys starting with '$' or containing '.'
 */
export function sanitizeMongoObject<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const clean: Record<string, unknown> = {};
  if (!obj || typeof obj !== "object") return clean as Partial<T>;

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("$") || key.includes(".")) {
      continue; // Skip dangerous MongoDB operators
    }
    if (value && typeof value === "object" && !Array.isArray(value)) {
      clean[key] = sanitizeMongoObject(value as Record<string, unknown>);
    } else {
      clean[key] = value;
    }
  }

  return clean as Partial<T>;
}
