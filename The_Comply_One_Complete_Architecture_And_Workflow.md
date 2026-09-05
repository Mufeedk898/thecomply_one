# THE COMPLY ONE — Complete Master Architecture, Schemas & System Workflow Document

---

## 1. Executive Overview & Brand Context

**THE COMPLY ONE** is an enterprise-grade statutory compliance, CA advisory, income tax, and corporate incorporation web platform tailored for Indian startups, MSMEs, partnerships, and corporate entities. The platform delivers seamless service discovery, 5 lead enquiry submission touchpoints, client account dashboards, Cloudinary-hosted 9:16 vertical video review testimonials with carousel navigation, an Admin Operations Portal, and a production-safe Nodemailer SMTP Email OTP password reset engine.

### Official Company Credentials
- **Company Name**: THE COMPLY ONE
- **Phone**: `+91 8369500194`
- **Email**: `info@thecomplyone.com`
- **Official Address**: `Office no 4 DPK COMPOUND BH LUCKY HOTEL KHAIRANI ROAD SAKINAKA ANDHERI EAST-400072`

### Technology Stack
- **Frontend Framework**: Next.js 15 (App Router, Server & Client Components)
- **Programming Language**: TypeScript (Strict Mode)
- **Styling & UI**: Tailwind CSS v4, Framer Motion, Lucide React Icons
- **Database Layer**: MongoDB Atlas with Mongoose ODM (Serverless Connection Caching)
- **Authentication**: Auth.js / NextAuth (Credentials Provider, HTTP-Only JWT Session Cookies)
- **Password Security**: `bcryptjs` (Cost factor 10)
- **Media CDN Storage**: Cloudinary SDK v2 (Server-side 9:16 Video & Cover Thumbnail Storage)
- **Email Delivery**: Nodemailer SMTP Transporter (Primary) with Resend SDK v4 & SendGrid REST API Fallbacks

---

## 2. Complete Workspace Folder Sitemap & Directory Structure

```text
the-comply-one/
├── .env.local                       # Local Environment Secrets (MongoDB URI, SMTP, Resend, Cloudinary)
├── .env.example                     # Production Environment Variable Template
├── package.json                     # Node.js dependencies & scripts (dev, build, lint, seed:admin)
├── next.config.ts                   # Next.js security headers & Cloudinary domain rules
├── tsconfig.json                    # TypeScript compiler configuration
├── scripts/
│   └── seedAdmin.ts                 # Server-side Admin user seeding script
└── src/
    ├── app/                         # Next.js App Router Pages & REST API Endpoints
    │   ├── page.tsx                 # Public Homepage (Hero, Video Review Carousel, Popular Services)
    │   ├── admin/page.tsx           # Admin Operations Portal (Live Stats, Enquiries, Clients, Videos)
    │   ├── login/page.tsx           # Client & Admin Sign In Page (Redirects ADMIN to /admin)
    │   ├── signup/page.tsx          # Client User Registration Page
    │   ├── forgot-password/page.tsx # Production-Safe Email OTP Password Reset Page
    │   ├── dashboard/page.tsx       # Authenticated Client User Dashboard Page
    │   ├── contact/page.tsx         # Contact Us & Office Location Page
    │   ├── refer/page.tsx           # Client Referral Program Page
    │   ├── reviews/page.tsx         # Video Testimonials Gallery
    │   ├── faq/page.tsx             # Frequently Asked Questions Page
    │   ├── services/                # Service Catalogue & Dynamic Service Pages
    │   │   ├── page.tsx             # All Services Listing Page
    │   │   └── [slug]/page.tsx      # Dynamic Statutory Service Detail Page
    │   └── api/                     # Serverless REST API Routes
    │       ├── admin/
    │       │   ├── dashboard/route.ts       # GET 9 live MongoDB stats & recent enquiries
    │       │   ├── users/route.ts           # GET registered client user accounts
    │       │   └── video-reviews/           # Admin Video Review CMS APIs
    │       │       ├── route.ts             # GET & POST video reviews
    │       │       ├── [id]/route.ts        # GET, PATCH, DELETE single review
    │       │       └── upload/route.ts      # POST Cloudinary video & thumbnail upload
    │       ├── auth/
    │       │   ├── [...nextauth]/route.ts   # NextAuth credentials authentication & JWT session
    │       │   ├── me/route.ts              # GET current authenticated user profile & role
    │       │   ├── profile/photo/route.ts   # POST & DELETE user profile photo
    │       │   ├── signup/route.ts          # POST new client user registration
    │       │   ├── forgot-password/route.ts # POST rate-limited OTP generation & email dispatch
    │       │   └── reset-password/route.ts  # POST atomic OTP verification & password update
    │       ├── enquiries/                   # Lead Enquiry APIs
    │       │   ├── route.ts                 # GET filtered leads & POST new enquiry
    │       │   └── [id]/route.ts            # GET enquiry detail & PATCH status / CA assignment
    │       ├── services/                    # Service Catalogue APIs
    │       │   ├── route.ts                 # GET all active services
    │       │   └── [slug]/route.ts          # GET single service by slug
    │       └── video-reviews/route.ts       # Public GET published video reviews
    │
    ├── components/                  # React UI Components
    │   ├── admin/
    │   │   ├── VideoReviewManager.tsx   # Video Review CMS (Cloudinary Upload, Edit, Delete, Publish)
    │   │   ├── EnquiryManager.tsx       # Lead Enquiry Pipeline (Search, Filter, Assign CA, WhatsApp)
    │   │   └── ClientManager.tsx        # Registered Client Directory Table
    │   ├── common/
    │   │   ├── Header.tsx               # Header Navigation with UserProfileMenu
    │   │   ├── UserProfileMenu.tsx      # Profile Avatar Dropdown & Admin Portal Link
    │   │   ├── Footer.tsx               # Official Footer & Contact Bar
    │   │   ├── RequestSubmissionForm.tsx# Callback Request Lead Form
    │   │   └── QuotationModal.tsx       # Request Advisory Quote RFQ Modal
    │   ├── home/                        # Homepage Sections
    │   │   ├── ClientVideoReviewsFormat.tsx # 9:16 Video Review Carousel (with Prev/Next buttons)
    │   │   ├── Hero.tsx                 # Hero Banner with CTA buttons
    │   │   ├── PopularServices.tsx      # Statutory Service Cards
    │   │   ├── AiPoweredSection.tsx     # AI Compliance Hub
    │   │   └── TrustSection.tsx         # Why Comply One Section
    │   └── service/                     # Service Forms & Statutory Info Widgets
    │
    ├── lib/                         # Core Server Libraries & Helpers
    │   ├── mongodb.ts                 # Mongoose Connection Caching for Serverless
    │   ├── cloudinary.ts              # Cloudinary Media Upload & Asset Cleanup SDK
    │   ├── rateLimit.ts               # In-memory IP/Email Rate Limiter & Sanitization
    │   └── email/
    │       ├── index.ts               # Nodemailer SMTP Transporter, Resend & SendGrid Dispatchers
    │       └── templates.ts           # Branded HTML Email Templates (Enquiries & Password Reset OTP)
    │
    ├── models/                      # Mongoose Database Schemas
    │   ├── User.ts                    # Collection: users
    │   ├── Service.ts                 # Collection: services
    │   ├── Enquiry.ts                 # Collection: enquiries
    │   ├── VideoReview.ts             # Collection: videoReviews
    │   └── PasswordResetOtp.ts        # Collection: passwordResetOtps (Dedicated OTP Store with TTL)
    │
    └── types/                       # TypeScript Interfaces
        └── index.ts                   # User, Enquiry, Service, VideoReview & OTP Types
```

---

## 3. Master Database Schemas (5 MongoDB Collections)

The application operates on **5 Primary Mongoose Collections**:

### 3.1 `users` Collection (`src/models/User.ts`)
Stores user accounts, role authorization, and profile avatars.
```typescript
{
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["CLIENT", "CA_MANAGER", "ADMIN"], default: "CLIENT" },
  profilePhoto: { type: String, default: undefined }, // Base64 Data URI (Max 1MB)
  createdAt: Date,
  updatedAt: Date
}
```

### 3.2 `services` Collection (`src/models/Service.ts`)
Stores statutory compliance service catalogue data.
```typescript
{
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  category: { type: String, required: true, trim: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  processSteps: [{ title: String, description: String }],
  documentsRequired: [{ type: String }],
  benefits: [{ type: String }],
  faqs: [{ question: String, answer: String }],
  isActive: { type: Boolean, default: true },
  createdAt: Date,
  updatedAt: Date
}
```

### 3.3 `enquiries` Collection (`src/models/Enquiry.ts`)
Stores client compliance requests and lead pipeline states.
```typescript
{
  fullName: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  service: { type: String, trim: true },
  message: { type: String, trim: true },
  subject: { type: String, trim: true },
  source: { type: String, required: true, default: "WEBSITE_ENQUIRY" },
  status: {
    type: String,
    enum: ["NEW", "CONTACTED", "IN_PROGRESS", "CONVERTED", "CLOSED"],
    default: "NEW"
  },
  assignedCAManager: { type: Schema.Types.ObjectId, ref: "User", default: null },
  referral: {
    referrerName: String,
    referrerEmail: String,
    referrerMobile: String,
    referredName: String,
    referredEmail: String,
    referredMobile: String,
    notes: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### 3.4 `videoReviews` Collection (`src/models/VideoReview.ts`)
Stores Cloudinary 9:16 vertical video review URLs and asset IDs.
```typescript
{
  customerName: { type: String, required: true, trim: true, maxlength: 100 },
  companyName: { type: String, required: true, trim: true, maxlength: 150 },
  designation: { type: String, trim: true, maxlength: 100 },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  videoPublicId: { type: String }, // For Cloudinary asset cleanup
  thumbnailPublicId: { type: String }, // For Cloudinary asset cleanup
  reviewText: { type: String, trim: true, maxlength: 2000 },
  displayOrder: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true },
  createdAt: Date,
  updatedAt: Date
}
```

### 3.5 `passwordResetOtps` Collection (`src/models/PasswordResetOtp.ts`)
Dedicated collection storing bcrypt-hashed OTPs with a 10-minute TTL auto-purge index.
```typescript
{
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  email: { type: String, required: true, lowercase: true, trim: true, index: true },
  otpHash: { type: String, required: true },
  expiresAt: { type: Date, required: true }, // 10 minutes expiry
  attempts: { type: Number, default: 0, min: 0 }, // Max 5 attempts
  usedAt: { type: Date, default: null },
  createdAt: Date,
  updatedAt: Date
}
// TTL Index on expiresAt
PasswordResetOtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
```

---

## 4. End-to-End System Workflows

```text
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE COMPLY ONE                                        │
│                                                                                         │
│  [ Public Website ] ──> [ 5 Enquiry Forms ] ──> [ MongoDB enquiries ]                   │
│         │                                             │                                 │
│         ▼                                             ▼                                 │
│  [ Auth.js Login ]  ──> [ Session Cookie ]  ──> [ Nodemailer SMTP / Resend / SendGrid ] │
│         │                                             │                                 │
│         ▼                                             ▼                                 │
│  [ Role Redirect ] ──> [ Admin Portal ]    ──> [ Cloudinary 9:16 Video Reviews CMS ]   │
│         │                                             │                                 │
│         ▼                                             ▼                                 │
│  [ Forgot Password] ─> [ POST /forgot-password] ──> [ Atomic PasswordResetOtp Store ]  │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Flow 1: Client Authentication & Session Governance
1. **Registration (`POST /api/auth/signup`)**: Client submits Full Name, Email, Mobile, Password. Password is hashed with `bcryptjs` (cost 10). `role` is strictly set to `"CLIENT"`.
2. **Sign In (`/login`)**: Validates credentials via Auth.js credentials provider.
   - If `role === "ADMIN"`, system automatically redirects user to `/admin`.
   - If `role === "CLIENT"`, system redirects user to `/dashboard`.
3. **Header Avatar UI (`Header.tsx` & `UserProfileMenu.tsx`)**:
   - Logged-out: Displays `"Sign In"` and `"Get Started →"`.
   - Logged-in: Displays user's Profile Photo / Initial avatar and **Full Name ONLY**.
   - Profile Dropdown: Displays avatar upload/remove, Admin Operations Portal link (for `ADMIN`), and Sign Out button.

### Flow 2: Production-Safe Email OTP Password Reset Flow
1. **Trigger (`/login`)**: User clicks **"Forgot password?"** link next to Password field label, opening `/forgot-password`.
2. **Step 1 - Email Request (`POST /api/auth/forgot-password`)**:
   - Validates email format and applies Rate Limits (IP: max 10 requests per 15 min; Email: max 3 requests per 15 min).
   - If user exists: invalidates previous OTPs, generates cryptographically secure 6-digit OTP via Node.js `crypto.randomInt`, hashes OTP with `bcryptjs` (salt 10), saves to `PasswordResetOtp` collection (10-min expiry), and emails OTP via **Nodemailer SMTP Transporter**.
   - **Account Enumeration Defense**: Always returns generic success message (`{ success: true, message: "If an account exists with this email address, a 6-digit verification code has been sent..." }`), whether email exists or not.
3. **Step 2 - 6-Box OTP Input & Password Reset (`POST /api/auth/reset-password`)**:
   - Mobile-friendly 6-box OTP input with paste support and a visible **60-second resend cooldown timer**.
   - Accepts `email`, `otp`, `password`, `confirmPassword`.
   - **Atomic Verification & Claim**:
     - Uses atomic `findOneAndUpdate` with `{ email, usedAt: null, expiresAt: { $gt: now }, attempts: { $lt: 5 } }` to increment `attempts` atomically (`$inc: { attempts: 1 }`).
     - Rejects after 5th invalid attempt (`attempts >= 5`) and purges record.
     - Compares typed OTP against stored `otpHash` using `bcrypt.compare`.
     - Claims OTP atomically using `findOneAndUpdate({ _id, usedAt: null }, { $set: { usedAt: new Date() } })` BEFORE updating user password.
     - Hashes new password with `bcryptjs` (cost 10), updates `User.passwordHash`, and purges all remaining reset OTPs for that user.
4. **Step 3 - Confirmation**: Displays success screen and redirects user to `/login`.

### Flow 3: Lead Enquiry Pipeline & Notifications
1. Client submits any of the 5 forms (`ServiceEnquiryForm`, `RequestSubmissionForm`, `QuotationModal`, `ContactPage`, `ReferralPage`).
2. API validates inputs, checks rate limits (max 10 per 15 mins per IP), and creates MongoDB `enquiries` document with `status: "NEW"`.
3. **Asynchronous Non-Blocking Emails**:
   - Sends client confirmation email and internal admin lead alert email.
   - Email provider failures **never** interrupt MongoDB document creation.

### Flow 4: Admin Operations & Advisory Portal
1. Admin logs in at `/login` and accesses `/admin`.
2. **Overview Tab**: Displays 9 live MongoDB statistics cards computed via `countDocuments()` and top 10 recent enquiries.
3. **Enquiries Tab**: Search leads by name, phone, or email. Filter by status (`NEW`, `CONTACTED`, `IN_PROGRESS`, `CONVERTED`, `CLOSED`), source, or assigned CA.
4. **Direct Communication**: Direct `tel:` call link, `mailto:` email link, and direct WhatsApp chat link (`https://wa.me/91{mobileNumber}`).
5. **CA Assignment**: Admin assigns or reassigns CA Manager to any lead.
6. **Clients Tab**: Directory table of registered client accounts displaying safe fields (`fullName`, `email`, `mobileNumber`, `createdAt`). Never leaks password hashes or tokens.

### Flow 5: Video Review CMS & Cloudinary Carousel
1. Admin opens **Video Reviews** tab on `/admin` and clicks `+ Add Video Review`.
2. **Cloudinary Upload (`POST /api/admin/video-reviews/upload`)**: Uploads 9:16 vertical video (<= 100MB MP4/WebM) and cover thumbnail (<= 10MB JPG/PNG) to Cloudinary.
3. **MongoDB Record**: Stores `videoUrl`, `videoPublicId`, `thumbnailUrl`, `thumbnailPublicId`, `displayOrder`, `isPublished`.
4. **Public Display (`ClientVideoReviewsFormat.tsx`)**: Displays published reviews on home page video carousel featuring **Left (`<`)** and **Right (`>`)** navigation buttons and pagination dots.
5. **Orphan Cleanup**: Deleting a review calls Cloudinary `destroy` API to purge video and thumbnail assets from Cloudinary storage.

---

## 5. Security & Authorization Governance

- **Role Authorization Matrix**:
  - `ADMIN`: Full access to `/admin` dashboard, enquiry management, CA assignment, and video reviews CMS.
  - `CA_MANAGER`: Access restricted strictly to assigned enquiries; blocked from `/admin` portal (`403 Forbidden`).
  - `CLIENT`: Access restricted to personal dashboard (`/dashboard`); blocked from all admin endpoints (`403 Forbidden`).
  - Unauthenticated: Blocked from protected APIs (`401 Unauthorized`).
- **HTTP Security Headers (`next.config.ts`)**:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Payment & Order Exclusion**: Zero Razorpay/Stripe/Cart/Orders fields or collections.

---

## 6. Environment Variable Matrix (`.env.example`)

```env
# MongoDB Atlas Database URI
MONGODB_URI=mongodb://127.0.0.1:27017/the-comply-one

# Auth.js / NextAuth Configuration
AUTH_SECRET=the-comply-one-super-secret-key-32-chars-minimum
NEXTAUTH_URL=http://localhost:3000

# Admin Account Seed Credentials
ADMIN_NAME=Admin The Comply One
ADMIN_EMAIL=admin@thecomplyone.com
ADMIN_MOBILE=9876543210
ADMIN_PASSWORD=Admin@ComplyOne2026!

# Nodemailer SMTP Email Configuration (Primary for Password Reset)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-gmail-app-password
EMAIL_FROM="THE COMPLY ONE <your-email@gmail.com>"

# Resend & SendGrid Email API Configuration (Fallback for Notifications)
RESEND_API_KEY=your_resend_api_key_here
SENDGRID_API_KEY=
ADMIN_NOTIFICATION_EMAIL=info@thecomplyone.com

# Cloudinary Storage Configuration (Server-Side Only)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 7. Command Execution Cheatsheet

| Task | Command |
| :--- | :--- |
| **Start Development Server** | `npx next dev -p 3001` or `npm run dev` |
| **Seed Admin Account** | `npm run seed:admin` (Creates `admin@thecomplyone.com` / `Admin@ComplyOne2026!`) |
| **TypeScript Check** | `npx tsc --noEmit` |
| **ESLint Check** | `npm run lint` |
| **Production Build** | `npm run build` |
| **Start Production Server** | `npm start` |

---

*Document Generated for THE COMPLY ONE Development & Operational Manual.*
