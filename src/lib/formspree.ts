export interface FormspreeResult {
  success: boolean;
  status: "sent" | "failed" | "skipped";
  error?: string;
}

/**
 * Server-side forwarder to Formspree endpoint.
 * Non-blocking and fail-safe: Never throws an uncaught error.
 * Uses FORMSPREE_FORM_ID environment variable (never hardcoded).
 */
export async function forwardToFormspree(
  payload: Record<string, unknown>
): Promise<FormspreeResult> {
  const formId = process.env.FORMSPREE_FORM_ID?.trim();

  if (!formId || formId === "your_form_id") {
    // Gracefully skip forwarding if not configured in environment
    return {
      success: false,
      status: "skipped",
      error: "FORMSPREE_FORM_ID is not configured in environment variables",
    };
  }

  const endpoint = `https://formspree.io/f/${encodeURIComponent(formId)}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      return {
        success: true,
        status: "sent",
      };
    }

    let errorDetail = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      if (data && Array.isArray(data.errors) && data.errors.length > 0) {
        errorDetail = data.errors.map((e: { message?: string }) => e.message || "").filter(Boolean).join(", ") || errorDetail;
      } else if (data && data.error) {
        errorDetail = String(data.error);
      }
    } catch {
      // Ignore JSON parse errors on non-200 responses
    }

    return {
      success: false,
      status: "failed",
      error: errorDetail,
    };
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? err.name === "AbortError"
          ? "Request timed out after 8s"
          : err.message
        : "Unknown forwarding error";

    return {
      success: false,
      status: "failed",
      error: message,
    };
  }
}
