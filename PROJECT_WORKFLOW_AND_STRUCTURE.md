# The Comply One — Complete Project Structure & Workflow Guide

> **Production Architecture Documentation**  
> *Framework*: Next.js 15 (App Router, Turbopack, Standalone/Node Compatible)  
> *Database*: MongoDB Atlas + Mongoose (Cloud-Native, Connection-Cached)  
> *Email Engine*: Resend API (`thecomplyone.com` verified domain)  
> *Authentication*: Stateless Cryptographically Signed HMAC SHA-256 Session Cookies  
> *Styling*: Tailwind CSS v4  

---

## Table of Contents
1. [High-Level Architecture](#1-high-level-architecture)
2. [Complete Project Directory Structure](#2-complete-project-directory-structure)
3. [Deep Dive: Core Workflows](#3-deep-dive-core-workflows)
   - [Workflow A: User Registration (Signup)](#workflow-a-user-registration-signup)
   - [Workflow B: User Login & Session Management](#workflow-b-user-login--session-management)
   - [Workflow C: Protected Route Access & Logout](#workflow-c-protected-route-access--logout)
   - [Workflow D: Forgot Password & Live OTP Email Dispatch](#workflow-d-forgot-password--live-otp-email-dispatch)
   - [Workflow E: Password Reset & OTP Invalidation](#workflow-e-password-reset--otp-invalidation)
   - [Workflow F: MongoDB Atlas Connection Pooling](#workflow-f-mongodb-atlas-connection-pooling)
   - [Workflow G: Legacy db.json Migration to Atlas](#workflow-g-legacy-dbjson-migration-to-atlas)
4. [Environment Variables Reference](#4-environment-variables-reference)
5. [Security & Production Hardening Checklist](#5-security--production-hardening-checklist)
6. [Platform-Independent Build & Deployment Guide](#6-platform-independent-build--deployment-guide)

---

## 1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT BROWSER                                │
│  (Next.js React Server & Client Components / Forms / Responsive UI)     │
└───────────────────┬─────────────────────────────────▲───────────────────┘
                    │ HTTPS Requests                  │ HTTP-Only Cookies
                    │ (JSON Payloads)                 │ & JSON Responses
┌───────────────────▼─────────────────────────────────┴───────────────────┐
│                       NEXT.JS APPLICATION LAYER                         │
│                                                                         │
│  [API Routes: /api/auth/*]        [Protected Pages: /dashboard]         │
│  - signup, login, logout          - Server Component checks             │
│  - forgot-password, reset-pwd     - HMAC SHA-256 Token Verification     │
│                                                                         │
│  [Core Libraries: src/lib/*]      [Mongoose Models: src/models/*]       │
│  - auth.ts (HMAC signing)         - User.ts (users collection)          │
│  - db.ts (Data Service Layer)     - PasswordResetOTP.ts (otps + TTL)    │
│  - mongodb.ts (Connection Pool)                                         │
│  - mail.ts (Resend SDK Engine)                                          │
└───────────┬─────────────────────────────────────────┬───────────────────┘
            │ Driver Connection                       │ REST API (HTTPS)
            ▼                                         ▼
┌───────────────────────────────┐         ┌───────────────────────────────┐
│     MONGODB ATLAS CLOUD       │         │        RESEND EMAIL API       │
│  - Cluster: thecomplyone      │         │  - Domain: thecomplyone.com   │
│  - Collections: users, otps   │         │  - From: noreply@...          │
│  - TTL Index: 24-hour cleanup │         │  - High deliverability emails │
└───────────────────────────────┘         └───────────────────────────────┘
```

---

## 2. Complete Project Directory Structure

```
the-comply-one/
├── .env.example                 # Production environment variables template
├── .env.local                   # Local secret environment variables (Git-ignored)
├── .gitignore                   # Files & directories excluded from version control
├── eslint.config.mjs            # ESLint flat configuration (with Next.js & TS rules)
├── next.config.ts               # Next.js framework configuration
├── package.json                 # Project dependencies, scripts, and Node.js engines
├── package-lock.json            # Deterministic lockfile for installed packages
├── postcss.config.mjs           # PostCSS configuration for Tailwind CSS v4
├── README.md                    # Quickstart guide
├── tsconfig.json                # TypeScript compiler configuration & path aliases (@/*)
│
├── data/
│   └── db.json                  # Legacy development data (Obsolete at runtime; preserved for migration)
│
├── public/                      # Static assets served directly by Next.js
│   ├── favicon.ico              # Site favicon
│   ├── logo.svg                 # The Comply One brand logo
│   └── images/                  # Static hero/service images & illustrations
│
├── scripts/
│   └── migrate_db_json.js       # One-time migration script from data/db.json -> MongoDB Atlas
│
└── src/
    ├── app/                     # Next.js 15 App Router (Pages, Layouts & APIs)
    │   ├── layout.tsx           # Root HTML layout, Geist fonts, metadataBase
    │   ├── page.tsx             # Landing Homepage (Hero, Services, CTA, Testimonials)
    │   ├── globals.css          # Tailwind CSS v4 imports and base utility layers
    │   ├── not-found.tsx        # Branded 404 error page
    │   │
    │   ├── api/                 # Server-side HTTP API endpoints
    │   │   └── auth/
    │   │       ├── signup/
    │   │       │   └── route.ts          # POST /api/auth/signup (User registration)
    │   │       ├── login/
    │   │       │   └── route.ts          # POST /api/auth/login (Credential check & session cookie)
    │   │       ├── logout/
    │   │       │   └── route.ts          # POST /api/auth/logout (Cookie invalidation)
    │   │       ├── me/
    │   │       │   └── route.ts          # GET /api/auth/me (Current user session data)
    │   │       ├── forgot-password/
    │   │       │   └── route.ts          # POST /api/auth/forgot-password (OTP generation & email)
    │   │       └── reset-password/
    │   │           └── route.ts          # POST /api/auth/reset-password (OTP verify & pwd update)
    │   │
    │   ├── (auth pages)/
    │   │   ├── login/
    │   │   │   └── page.tsx              # Sign-In UI form
    │   │   ├── signup/
    │   │   │   └── page.tsx              # Registration UI form
    │   │   ├── forgot-password/
    │   │   │   └── page.tsx              # Request 6-digit OTP UI form
    │   │   └── reset-password/
    │   │       └── page.tsx              # Enter OTP & new password UI form
    │   │
    │   ├── dashboard/                    # Authenticated User Dashboard
    │   │   ├── page.tsx                  # Server Component (Verifies cookie; redirects if unauthed)
    │   │   └── DashboardClient.tsx       # Client Component (Interactive user dashboard interface)
    │   │
    │   ├── (legal & company pages)/
    │   │   ├── about/page.tsx
    │   │   ├── contact/page.tsx
    │   │   ├── privacy-policy/page.tsx
    │   │   ├── terms-and-conditions/page.tsx
    │   │   ├── faq/page.tsx
    │   │   ├── pricing/page.tsx
    │   │   ├── refer/page.tsx
    │   │   └── reviews/page.tsx
    │   │
    │   └── (service pages)/              # Corporate & compliance service landing pages
    │       ├── private-limited-company/page.tsx
    │       ├── limited-liability-partnership/page.tsx
    │       ├── one-person-company/page.tsx
    │       ├── gst/page.tsx
    │       ├── trademark/page.tsx
    │       ├── fssai-registration/page.tsx
    │       ├── income-tax/page.tsx
    │       ├── mca/page.tsx
    │       ├── msme-registration/page.tsx
    │       ├── digital-signature/page.tsx
    │       ├── import-export-code/page.tsx
    │       ├── indian-subsidiary/page.tsx
    │       ├── partnership/page.tsx
    │       ├── producer-company/page.tsx
    │       ├── professional-tax-registration/page.tsx
    │       ├── proprietorship/page.tsx
    │       ├── public-limited-company/page.tsx
    │       ├── section-8-company/page.tsx
    │       ├── shop-establishment-registration/page.tsx
    │       ├── society-registration/page.tsx
    │       ├── startup-registration/page.tsx
    │       └── trust-registration/page.tsx
    │
    ├── components/              # Reusable React UI Components
    │   ├── common/
    │   │   ├── Header.tsx       # Main navigation header (Sign In, Dashboard, Services)
    │   │   ├── Footer.tsx       # Global footer with compliance links and disclaimers
    │   │   └── Navbar.tsx       # Mobile/desktop responsive navigation menu
    │   ├── home/                # Homepage specific widgets & sections
    │   ├── service/             # Dynamic service templates, pricing grids, FAQs
    │   ├── reviews/             # Testimonials & ratings cards
    │   └── ui/                  # Atom-level UI primitives
    │       ├── Button.tsx       # Variant-driven buttons (primary, outline, ghost)
    │       └── ...              # Input fields, badges, cards, modals
    │
    ├── lib/                     # Server-Side Business Logic & Drivers
    │   ├── auth.ts              # HMAC SHA-256 session token generation and verification
    │   ├── db.ts                # Database Service Layer (Encapsulates all Mongoose queries)
    │   ├── mail.ts              # Resend Transactional Mail client & HTML/text templates
    │   └── mongodb.ts           # Global cached Mongoose connection manager
    │
    ├── models/                  # Mongoose ODM Schemas
    │   ├── User.ts              # MongoDB User Schema (users collection)
    │   └── PasswordResetOTP.ts  # MongoDB OTP Schema with TTL index (otps collection)
    │
    ├── config/                  # Global site constants, navigation links & metadata
    ├── data/                    # Static service catalogues, testimonials & pricing tables
    ├── services/                # Helper service abstractions
    └── types/                   # Shared TypeScript interfaces & definitions
```

---

## 3. Deep Dive: Core Workflows

### Workflow A: User Registration (Signup)

```
[User on /signup]
       │
       ▼ Submits { fullName, email, password, phone, entityType }
[POST /api/auth/signup]
       │
       ├─► 1. Normalizes email: email.trim().toLowerCase()
       ├─► 2. Validates email regex & minimum 6-character password
       ├─► 3. Calls findUserByEmail(email) -> Checks MongoDB Atlas
       │       └─► If user exists -> Returns 409 Conflict ("Account already exists")
       ├─► 4. Generates bcrypt salt: bcrypt.genSalt(10)
       ├─► 5. Hashes password: bcrypt.hash(password, salt)
       ├─► 6. Calls createUser(...) -> Persists in MongoDB Atlas `users` collection
       ▼
[HTTP 200 Response: { success: true, message: "Account created successfully!" }]
       │
       ▼ Client redirects user to /login
```

---

### Workflow B: User Login & Session Management

```
[User on /login]
       │
       ▼ Submits { email, password }
[POST /api/auth/login]
       │
       ├─► 1. Normalizes email and queries MongoDB Atlas via findUserByEmail(email)
       │       └─► If not found -> Returns 401 Unauthorized ("Invalid email or password")
       ├─► 2. Compares plain password with DB hash: bcrypt.compare(password, user.passwordHash)
       │       └─► If mismatch -> Returns 401 Unauthorized ("Invalid email or password")
       ├─► 3. Creates cryptographically signed HMAC SHA-256 session token (valid 7 days):
       │       token = base64Url(payload) + "." + HMAC_SHA256(base64Url(payload), SESSION_SECRET)
       ├─► 4. Attaches HTTP-Only cookie:
       │       name: "auth_session"
       │       httpOnly: true
       │       secure: process.env.NODE_ENV === "production"
       │       sameSite: "lax"
       │       path: "/"
       │       maxAge: 7 * 24 * 60 * 60 (7 days)
       ▼
[HTTP 200 Response: { success: true, user: { id, email, name } }]
       │
       ▼ Client redirects to /dashboard
```

---

### Workflow C: Protected Route Access & Logout

#### Accessing `/dashboard`:
1. **Server Component Execution**: When a browser requests `/dashboard`, Next.js executes `src/app/dashboard/page.tsx` on the server before rendering any HTML.
2. **Cookie Extraction**: Reads cookie `auth_session` via `await cookies()`.
3. **Cryptographic Signature Verification**:
   - `verifySessionToken(token)` splits `base64Payload` and `signature`.
   - Recomputes HMAC SHA-256 and compares with `crypto.timingSafeEqual` (prevents timing attacks).
   - Validates `exp` timestamp.
4. **Authorization Outcome**:
   - **Invalid or Expired**: Redirects immediately to `/login` via `redirect("/login")`.
   - **Valid**: Passes typed user details `{ id, email, name }` to `<DashboardClient user={user} />`.

#### Logging Out (`POST /api/auth/logout`):
- Sets `auth_session` cookie value to `""` with `maxAge: 0`.
- Browser clears the session cookie immediately.

---

### Workflow D: Forgot Password & Live OTP Email Dispatch

```
[User on /forgot-password]
       │
       ▼ Enters registered email: e.g. victoryspark577@gmail.com
[POST /api/auth/forgot-password]
       │
       ├─► 1. Validates email format & checks user in MongoDB Atlas:
       │       └─► If not found -> Returns 404 ("No account found with this email")
       ├─► 2. Invalidates any previous OTPs: invalidatePreviousOTPs(email)
       │       └─► MongoDB: otps.updateMany({ email, used: false }, { used: true })
       ├─► 3. Generates cryptographically secure 6-digit numeric OTP:
       │       otp = crypto.randomInt(100000, 1000000).toString()
       ├─► 4. Hashes OTP with bcrypt (salt rounds: 10):
       │       *Plain-text OTP is NEVER stored in database*
       ├─► 5. Calculates expiration: Date.now() + 10 * 60 * 1000 (10 Minutes)
       ├─► 6. Saves OTP hash to MongoDB Atlas `otps` collection
       ├─► 7. Dispatches email via Resend API:
       │       - Sender: process.env.EMAIL_FROM ("The Comply One <noreply@thecomplyone.com>")
       │       - Recipient: recipient's registered email
       │       - Subject: `[${otp}] Your Comply One Password Reset Code`
       │       - Branded HTML & plain text templates
       ▼
[HTTP 200 Response: { success: true, message: "A 6-digit verification code has been sent..." }]
       *Notice: OTP is NEVER returned in response, logged to terminal, or exposed in UI.*
```

---

### Workflow E: Password Reset & OTP Invalidation

```
[User on /reset-password]
       │
       ▼ Enters { email, otp, newPassword, confirmPassword }
[POST /api/auth/reset-password]
       │
       ├─► 1. Validates password matching and length (>= 6 chars)
       ├─► 2. Finds latest active OTP record in MongoDB Atlas:
       │       findActiveOTP(email) -> { email, used: false, expiresAt: { $gt: now } }
       │       └─► If none found -> Returns 400 ("No active OTP found or expired")
       ├─► 3. Checks 10-minute expiry:
       │       └─► If now > expiresAt -> Marks used and returns 400 ("OTP has expired")
       ├─► 4. Compares plain entered OTP with stored bcrypt hash:
       │       bcrypt.compare(otp, activeOtpRecord.otpHash)
       │       └─► If mismatch -> Returns 400 ("Invalid verification code")
       ├─► 5. Hashes new password with bcrypt:
       │       newPasswordHash = bcrypt.hash(newPassword, 10)
       ├─► 6. Updates user record in MongoDB Atlas:
       │       users.updateOne({ email }, { passwordHash: newPasswordHash })
       ├─► 7. Permanently invalidates the OTP:
       │       markOTPAsUsed(activeOtpRecord.id)
       │       invalidatePreviousOTPs(email)
       ▼
[HTTP 200 Response: { success: true, message: "Your password has been successfully reset!" }]
       │
       ▼ Client redirects user to /login?resetSuccess=true
```

---

### Workflow F: MongoDB Atlas Connection Pooling

```typescript
// Located in: src/lib/mongodb.ts
// Handles Next.js Serverless and Node runtime connection lifecycles:

1. Checks if a global connection (global.mongooseCache.conn) is already open:
   - IF YES: Reuses existing connection immediately (0ms overhead).
2. IF NO:
   - Checks if a connection promise is in-flight (prevents race conditions).
   - Establishes connection using MONGODB_URI with:
     * bufferCommands: false (Fast failure if disconnected)
     * maxPoolSize: 10 (Controls connection limits)
3. Caches connection in memory for all subsequent API requests.
```

---

### Workflow G: Legacy db.json Migration to Atlas

If you have users previously registered in `data/db.json`, they can be moved into MongoDB Atlas without requiring users to reset their passwords:

```bash
node scripts/migrate_db_json.js
```

**How it works**:
1. Reads `MONGODB_URI` from `.env.local`.
2. Connects to your MongoDB Atlas cluster.
3. Iterates over all users in `data/db.json`.
4. Checks if each user already exists in Atlas (prevents duplicate key errors).
5. Inserts new user documents preserving their original bcrypt hashes, names, and timestamps.

---

## 4. Environment Variables Reference

Only **4 environment variables** are required for production. Never hardcode secrets in code or commit `.env.local` to Git.

| Variable Name | Purpose | Example Value |
| :--- | :--- | :--- |
| `MONGODB_URI` | MongoDB Atlas cluster connection string | `mongodb+srv://<user>:<pwd>@cluster0.abcde.mongodb.net/thecomplyone?retryWrites=true&w=majority` |
| `RESEND_API_KEY` | Secret API key generated in Resend dashboard | `re_1234567890abcdef...` |
| `EMAIL_FROM` | Exact verified sender name & email | `"The Comply One <noreply@thecomplyone.com>"` |
| `NEXT_PUBLIC_APP_URL` | Canonical public domain of the application | `"https://thecomplyone.com"` |

---

## 5. Security & Production Hardening Checklist

- [x] **Zero File System Runtime Writes**: Application does not rely on local disk storage.
- [x] **Stateless Sessions**: Authentication uses cryptographically signed HMAC SHA-256 tokens stored in HTTP-Only cookies.
- [x] **Bcrypt Password & OTP Hashing**: No passwords or OTP codes are ever stored in plain text.
- [x] **No OTP Leakage**: OTP is excluded from JSON API responses, console outputs, and client UI.
- [x] **One-Time Use & Expiration**: OTPs are valid for strictly 10 minutes and marked `used: true` immediately after consumption.
- [x] **MongoDB Auto-Cleanup (TTL)**: OTP collection automatically purges records older than 24 hours via MongoDB index.
- [x] **Verified Email Identity**: Transactional emails originate exclusively from `The Comply One <noreply@thecomplyone.com>`.
- [x] **Strict Type Safety**: TypeScript compiles with zero errors (`npx tsc --noEmit`).
- [x] **Clean Code Standards**: ESLint runs with zero warnings or errors (`npm run lint`).

---

## 6. Platform-Independent Build & Deployment Guide

The application is completely standard Next.js 15 and runs on **any** hosting provider (AWS, DigitalOcean, Hetzner, GCP, Azure, Render, Railway, Fly.io, or standard Linux VPS).

### Recommended Runtime
- **Node.js**: `v20.x LTS` (or `v22.x LTS`)
- **Package Manager**: `npm` (v10+)

---

### Option 1: Standard Node.js Host / VPS / VM

```bash
# 1. Clone your git repository
git clone <your-repo-url>
cd the-comply-one

# 2. Install dependencies
npm ci

# 3. Create .env.local with your 4 production variables
# (MONGODB_URI, RESEND_API_KEY, EMAIL_FROM, NEXT_PUBLIC_APP_URL)

# 4. Build the production application
npm run build

# 5. Start the production server (Runs on port 3000 by default)
npm run start
```

*Using PM2 for 24/7 background uptime:*
```bash
npm install -g pm2
pm2 start npm --name "comply-one" -- start
pm2 save
pm2 startup
```

---

### Option 2: Cloud / PaaS Hosting Dashboard

In your cloud hosting dashboard (e.g. Railway, Render, etc.):
1. Connect your **GitHub / GitLab** repository.
2. Set Build Command: `npm run build`
3. Set Start Command: `npm run start`
4. Set Node Version: `20.x`
5. In the **Environment Variables** tab, add:
   - `MONGODB_URI`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `NEXT_PUBLIC_APP_URL`
6. Click **Deploy**.

---

### Option 3: Docker Container Deployment

Create a `Dockerfile` in the root:
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```
Run container:
```bash
docker build -t the-comply-one .
docker run -d -p 3000:3000 --env-file .env.local the-comply-one
```
