import { NavCategory } from "@/types";

export const NAVIGATION_CATEGORIES: NavCategory[] = [
  {
    key: "startup",
    title: "Startup",
    href: "/services?category=startup",
    featuredTitle: "Incorporate in India",
    featuredDesc: "Launch your Private Limited, LLP, or OPC with complete ROC registration and DIN setup.",
    items: [
      {
        title: "Proprietorship",
        href: "/proprietorship/registration",
        description: "Simplest business structure for solo proprietors & micro-businesses.",
        popular: true,
      },
      {
        title: "Partnership",
        href: "/partnership/registration",
        description: "Registered deed for 2+ partners under Partnership Act, 1932.",
      },
      {
        title: "One Person Company",
        href: "/one-person-company",
        description: "Corporate identity with limited liability for single founders.",
      },
      {
        title: "Limited Liability Partnership",
        href: "/llp",
        description: "Combines partnership flexibility with limited corporate liability.",
        popular: true,
      },
      {
        title: "Private Limited Company",
        href: "/private-limited-company",
        description: "Most preferred structure for fundraising & VC investment.",
        popular: true,
      },
      {
        title: "Public Limited Company",
        href: "/public-limited-company",
        description: "Corporate entity for large enterprises raising capital from public.",
      },
    ],
  },
  {
    key: "registrations",
    title: "Registrations",
    href: "/registrations",
    featuredTitle: "Government Licenses & Registrations",
    featuredDesc: "Obtain mandatory government registrations & operational licenses quickly.",
    items: [
      {
        title: "Proprietorship Registration",
        href: "/proprietorship/registration",
        description: "Simplest business structure for solo proprietors & micro-businesses.",
        popular: true,
      },
      {
        title: "Partnership Registration",
        href: "/partnership/registration",
        description: "Registered deed for 2+ partners under Partnership Act, 1932.",
      },
      {
        title: "LLP Registration",
        href: "/llp",
        description: "Combines partnership flexibility with limited corporate liability.",
        popular: true,
      },
      {
        title: "One Person Company Registration",
        href: "/one-person-company",
        description: "Corporate identity with limited liability for single founders.",
      },
      {
        title: "Private Limited Company Registration",
        href: "/private-limited-company",
        description: "Most preferred structure for fundraising & VC investment.",
        popular: true,
      },
      {
        title: "Public Limited Company Registration",
        href: "/public-limited-company",
        description: "Corporate entity for large enterprises raising public capital.",
      },
      {
        title: "Society Registration",
        href: "/society-registration",
        description: "Registration of welfare societies under Societies Registration Act.",
      },
      {
        title: "Startup India Registration",
        href: "/startup-registration",
        description: "DPIIT recognition for 80-IAC tax exemptions & seed funding.",
        popular: true,
      },
      {
        title: "MSME / Udyam Registration",
        href: "/msme-registration",
        description: "Government Udyam certificate for subsidies & priority bank loans.",
        popular: true,
      },
      {
        title: "Digital Signature Certificate (DSC)",
        href: "/digital-signature",
        description: "Class 3 e-token issuance for MCA, Income Tax & GST portal access.",
      },
      {
        title: "FSSAI Food License",
        href: "/fssai-registration",
        description: "Basic, State & Central 14-digit food safety license allocation.",
        popular: true,
      },
      {
        title: "Import Export Code (IEC)",
        href: "/import-export-code",
        description: "10-digit code issued by DGFT for cross-border import/export.",
      },
      {
        title: "Professional Tax Registration",
        href: "/professional-tax-registration",
        description: "State-level PT registration for employers and professionals.",
      },
      {
        title: "Shop & Establishment Registration",
        href: "/shop-establishment-registration",
        description: "Mandatory municipal license for physical offices & retail shops.",
      },
    ],
  },
  {
    key: "trademark",
    title: "Trademark",
    href: "/trademark",
    featuredTitle: "Intellectual Property Safeguard",
    featuredDesc: "Protect your brand identity, logo, tagline, and original creations across India.",
    items: [
      {
        title: "Trademark & IP Services",
        href: "/trademark",
        description: "Coming Soon • Intellectual Property & Brand Protection Desk.",
        popular: true,
      },
    ],
  },
  {
    key: "gst",
    title: "GST",
    href: "/gst",
    featuredTitle: "End-to-End GST Compliance",
    featuredDesc: "Automated GST return filing, LUT application, and ITC reconciliation.",
    items: [
      {
        title: "GST Registration",
        href: "/gst/registration",
        description: "15-digit GSTIN allocation within 3 to 5 working days.",
        popular: true,
      },
      {
        title: "GST Return Filing",
        href: "/gst/return-filing",
        description: "Monthly GSTR-1 & GSTR-3B filings with 100% ITC reconciliation.",
        popular: true,
      },
      {
        title: "GST Letter of Undertaking (LUT)",
        href: "/gst/lut-filing",
        description: "Export goods & services without paying IGST upfront.",
        popular: true,
      },
      {
        title: "GST Cancellation",
        href: "/gst/cancellation",
        description: "Legally surrender unneeded or dormant GSTIN registrations.",
      },
      {
        title: "GST Revocation",
        href: "/gst/revocation",
        description: "Revoke cancelled GSTIN registrations & clear pending returns.",
      },
      {
        title: "GST Amendment",
        href: "/gst/amendment",
        description: "Update core & non-core GST details (address, bank, partners).",
      },
      {
        title: "GST Annual Return (GSTR-9)",
        href: "/gst/annual-return",
        description: "Year-end annual return filing & GSTR-9C reconciliation.",
      },
      {
        title: "GST Compliance Retainer",
        href: "/gst/compliance",
        description: "Full-year GST compliance, notice management & ITC protection.",
      },
      {
        title: "GST E-Invoicing",
        href: "/gst/e-invoicing",
        description: "B2B electronic invoice generation & IRN portal integration.",
      },
      {
        title: "GST E-Way Bill",
        href: "/gst/e-way-bill",
        description: "E-way bill generation for commercial goods movement.",
      },
    ],
  },
  {
    key: "income-tax",
    title: "Income Tax",
    href: "/income-tax",
    featuredTitle: "Tax Optimization & Returns",
    featuredDesc: "Accurate tax planning, TDS return filing, and ITR submission for businesses & executives.",
    items: [
      {
        title: "Income Tax Return Filing",
        href: "/income-tax/return-filing",
        description: "Complete ITR filing for individuals, freelancers, and businesses.",
        popular: true,
      },
      {
        title: "ITR Filing for Individuals",
        href: "/income-tax/individual-return",
        description: "ITR-1, ITR-2 for salaried employees, directors & HNIs.",
      },
      {
        title: "Business Tax Filing",
        href: "/income-tax/business-return",
        description: "ITR-3, ITR-4 (Presumptive Tax), and ITR-6 for corporate entities.",
        popular: true,
      },
      {
        title: "Tax Audit (Sec 44AB)",
        href: "/income-tax/tax-audit",
        description: "Mandatory CA tax audit report filing for high-turnover entities.",
        popular: true,
      },
      {
        title: "TDS Return Filing",
        href: "/income-tax/tds-return",
        description: "Quarterly 24Q, 26Q, 27Q filings & Form 16/16A generation.",
      },
      {
        title: "TDS Registration (TAN)",
        href: "/income-tax/tds-registration",
        description: "Obtain 10-digit Tax Deduction Account Number for employers.",
      },
      {
        title: "Advance Tax Calculation",
        href: "/income-tax/advance-tax",
        description: "Quarterly advance tax computation & payment challan guidance.",
      },
      {
        title: "Income Tax Notice Assistance",
        href: "/income-tax/notice-assistance",
        description: "Expert CA response to Section 143(1), 142(1), and 148 notices.",
      },
      {
        title: "PAN Services",
        href: "/income-tax/pan",
        description: "New Permanent Account Number application & correction.",
      },
      {
        title: "TAN Services",
        href: "/income-tax/tan",
        description: "TAN allotment & correction services for deductors.",
      },
    ],
  },
  {
    key: "mca",
    title: "MCA",
    href: "/mca",
    featuredTitle: "Corporate ROC Filings",
    featuredDesc: "Stay 100% compliant with Ministry of Corporate Affairs regulations and avoid penalties.",
    items: [
      {
        title: "MCA Compliance Retainer",
        href: "/mca/compliance",
        description: "Full-year secretarial compliance & ROC filing retainer.",
        popular: true,
      },
      {
        title: "Company Annual Filing (AOC-4 & MGT-7)",
        href: "/mca/company-annual-filing",
        description: "Mandatory annual financial statement & annual return submission.",
        popular: true,
      },
      {
        title: "LLP Annual Filing (Form 11 & Form 8)",
        href: "/mca/llp-annual-filing",
        description: "Annual statement of accounts & return filing for LLPs.",
      },
      {
        title: "Director KYC (DIR-3 KYC)",
        href: "/mca/director-kyc",
        description: "Annual mandatory verification for all DIN holders in India.",
        popular: true,
      },
      {
        title: "DIN Services",
        href: "/mca/din",
        description: "Director Identification Number allocation & DIR-6 updates.",
      },
      {
        title: "DSC Services",
        href: "/mca/dsc",
        description: "Class 3 e-Token Digital Signature Certificate for directors.",
      },
      {
        title: "Company Name Change",
        href: "/mca/company-name-change",
        description: "RUN name approval & INC-24 corporate name alteration.",
      },
      {
        title: "Registered Office Change",
        href: "/mca/registered-office-change",
        description: "INC-22 filing for address changes within state or across ROCs.",
      },
      {
        title: "Director Change (Add / Remove)",
        href: "/mca/director-change",
        description: "DIR-12 filing for appointment or resignation of board members.",
      },
      {
        title: "Company Closure (Strike Off)",
        href: "/mca/company-closure",
        description: "STK-2 application for legally closing dormant companies.",
      },
    ],
  },
  {
    key: "compliance",
    title: "Compliance",
    href: "/compliance",
    featuredTitle: "Corporate Secretarial & Audits",
    featuredDesc: "Comprehensive annual retainers, secretarial maintenance, and statutory records.",
    items: [
      {
        title: "Annual Compliance Retainer",
        href: "/compliance/annual",
        description: "Complete full-year compliance retainer for companies & LLPs.",
        popular: true,
      },
      {
        title: "GST Compliance",
        href: "/compliance/gst",
        description: "Monthly GSTR filings, ITC matching & GST audit readiness.",
      },
      {
        title: "Income Tax Compliance",
        href: "/compliance/income-tax",
        description: "Quarterly advance tax, ITR filings & tax optimization.",
      },
      {
        title: "Payroll & HR Compliance",
        href: "/compliance/payroll",
        description: "PF/ESI returns, monthly payroll processing & Form 16.",
        popular: true,
      },
      {
        title: "TDS Compliance",
        href: "/compliance/tds",
        description: "Quarterly TDS filings, TCS returns & Form 16/16A generation.",
      },
      {
        title: "ROC Compliance",
        href: "/compliance/roc",
        description: "AOC-4, MGT-7, DIR-3 KYC, and INC-20A corporate filings.",
      },
      {
        title: "Secretarial Compliance",
        href: "/compliance/secretarial",
        description: "Maintaining MGT-1, MGT-2, MBP-1, and AGM board minutes.",
      },
      {
        title: "Compliance Calendar",
        href: "/compliance/calendar",
        description: "Interactive statutory due-date tracker & automated reminders.",
        popular: true,
      },
    ],
  },
  {
    key: "consultation",
    title: "Consultation",
    href: "/consultation",
    featuredTitle: "Expert CA & CS Advisory",
    featuredDesc: "One-on-one professional guidance for business setup, taxation, GST, compliance, and legal requirements.",
    items: [
      {
        title: "Business Consultation",
        href: "/consultation/business",
        description: "Entity selection, business model structuring & expansion strategy.",
        popular: true,
      },
      {
        title: "Tax Consultation",
        href: "/consultation/tax",
        description: "Direct tax planning, dual regime evaluation & savings advice.",
        popular: true,
      },
      {
        title: "GST Consultation",
        href: "/consultation/gst",
        description: "GST classification, ITC optimization & notice resolution.",
      },
      {
        title: "Legal Consultation",
        href: "/consultation/legal",
        description: "Commercial contracts, co-founder agreements & IP protection.",
        popular: true,
      },
      {
        title: "Startup Consultation",
        href: "/consultation/startup",
        description: "DPIIT recognition, 80-IAC tax holiday & investor pitch review.",
      },
      {
        title: "Compliance Consultation",
        href: "/consultation/compliance",
        description: "MCA ROC roadmap, secretarial audits & statutory health check.",
      },
    ],
  },
];
