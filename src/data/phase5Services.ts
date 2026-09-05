import { StartupServiceData } from "./startupServices";

export const PHASE5_CONSULTATION_DATA: Record<string, StartupServiceData> = {
  "business-consultation": {
    slug: "business-consultation",
    route: "/consultation/business",
    title: "Business Consultation",
    subtitle: "Strategic guidance on entity selection, business model structuring, corporate governance, and growth roadmap.",
    heroBadge: "Senior CA & CS Advisory",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.9,
    reviewCount: 1840,
    overview: {
      whatIsTitle: "What is Business Consultation?",
      whatIsContent: "Our Business Consultation sessions pair you with experienced Chartered Accountants and legal advisors to analyze your business concept, evaluate entity structures (Pvt Ltd vs LLP vs OPC), and plan corporate expansion.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "First-time entrepreneurs, business owners scaling operations, foreign entities entering India, and established firms restructuring operations."
    },
    benefits: [
      { title: "Optimal Entity Selection", description: "Choose between Pvt Ltd, LLP, Partnership or Proprietorship based on tax efficiency & funding goals.", iconName: "ShieldCheck" },
      { title: "Risk Mitigation", description: "Identify hidden legal compliance bottlenecks before launching products or signing contracts.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Schedule Session", description: "Select preferred date and time slot for 1-on-1 consultation." },
      { stepNumber: "02", title: "Share Business Overview", description: "Provide brief notes on your business model and specific questions." },
      { stepNumber: "03", title: "Expert Advisory Call", description: "45-minute video advisory session with Senior CA & CS." }
    ],
    documentsRequired: [
      "Brief notes on proposed business activities",
      "List of co-founders / partners details",
      "Specific questions regarding entity structure or taxation"
    ],
    documentsDisclaimer: "Consultation provides general educational and strategic guidance.",
    pricingTiers: [
      { name: "30-Min Strategy Call", priceTag: "Starting from ₹1,499", description: "1-on-1 Senior CA Advisory.", features: ["30-Minute Video Consultation", "Entity Structure Recommendation", "Tax Efficiency Checklist", "Follow-up Advisory Summary"] }
    ],
    faqs: [
      { question: "How is the consultation conducted?", answer: "Consultations are conducted online via 1-on-1 Google Meet or Zoom video calls with a dedicated CA/CS." }
    ],
    seoTitle: "Business Consultation Services | CA & CS Advisory | The Comply One",
    seoDescription: "Book 1-on-1 Business Consultation with Senior Chartered Accountants and Company Secretaries. Entity selection, tax planning & growth strategy."
  },

  "tax-consultation": {
    slug: "tax-consultation",
    route: "/consultation/tax",
    title: "Income Tax Consultation",
    subtitle: "Strategic tax planning, dual tax regime evaluation, capital gains advice, and direct tax optimization.",
    heroBadge: "Chartered Accountant Advisory",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.9,
    reviewCount: 2420,
    overview: {
      whatIsTitle: "What is Tax Consultation?",
      whatIsContent: "Our Direct Tax Advisory sessions help individuals, salaried executives, directors, and corporate entities minimize tax liability, plan advance tax, and navigate complex Income Tax provisions.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "Company directors, stock/crypto traders, property sellers with capital gains, foreign income earners, and businesses seeking tax optimization."
    },
    benefits: [
      { title: "Maximum Legal Tax Refunds", description: "Identify eligible deductions under Section 80C, 80D, 80G, and allowable business expenses.", iconName: "TrendingUp" }
    ],
    processSteps: [
      { stepNumber: "01", title: "Upload Income Summary", description: "Provide Form 16, 26AS or P&L summary." },
      { stepNumber: "02", title: "CA Review & Computation", description: "CA evaluates Old vs New tax regimes." },
      { stepNumber: "03", title: "Advisory Call", description: "1-on-1 strategy session to finalize tax filing." }
    ],
    documentsRequired: ["Form 16 / Salary slips", "Form 26AS & AIS/TIS summary", "Capital gains statements if applicable"],
    documentsDisclaimer: "Advisory is tailored to individual tax profiles.",
    pricingTiers: [{ name: "CA Tax Session", priceTag: "Starting from ₹1,499", description: "30-min CA Tax Consultation.", features: ["30-Minute CA Video Session", "Dual Regime Comparison", "Capital Gains Planning", "Tax Savings Report"] }],
    faqs: [{ question: "Can the CA help calculate capital gains on real estate or stocks?", answer: "Yes, our CAs calculate indexed cost of acquisition and advise on Section 54/54F reinvestment exemptions." }],
    seoTitle: "Income Tax Consultation with CA Online | The Comply One",
    seoDescription: "Book 1-on-1 Income Tax Consultation with expert Chartered Accountants. Capital gains planning, dual-regime optimization & ITR advice."
  },

  "gst-consultation": {
    slug: "gst-consultation",
    route: "/consultation/gst",
    title: "GST Advisory & Consultation",
    subtitle: "Expert guidance on HSN code mapping, GST rate classification, ITC matching, and notice resolution.",
    heroBadge: "GST Expert Advisory",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.8,
    reviewCount: 1950,
    overview: {
      whatIsTitle: "What is GST Consultation?",
      whatIsContent: "GST Advisory provides expert clarity on complex indirect tax issues including HSN/SAC code classification, GSTR-2B Input Tax Credit matching, export LUT rules, and show-cause notice replies.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "E-commerce sellers, exporters of goods/software, logistics operators, and businesses receiving GST notices."
    },
    benefits: [{ title: "Input Tax Credit Protection", description: "Resolve supplier ITC mismatches and prevent tax demand notices from authorities.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Share GST Query", description: "Submit specific GST question or notice copy." },
      { stepNumber: "02", title: "GST Expert Audit", description: "Expert analyzes HSN rules & portal records." },
      { stepNumber: "03", title: "Advisory Call", description: "45-minute video resolution call." }
    ],
    documentsRequired: ["GSTIN details", "Sample invoices or show-cause notice copy", "Specific questions list"],
    documentsDisclaimer: "Consultation covers GST portal rules and legal procedures.",
    pricingTiers: [{ name: "GST Strategy Call", priceTag: "Starting from ₹1,499", description: "30-min GST Advisory.", features: ["30-Minute GST Expert Session", "HSN/SAC Rate Classification", "ITC Audit Advice", "Notice Response Guidance"] }],
    faqs: [{ question: "Can the advisor help draft a reply to a GST notice?", answer: "Yes, during the call the advisor will review the notice and outline the legal points required in the reply." }],
    seoTitle: "GST Consultation & Advisory Online | The Comply One",
    seoDescription: "Book 1-on-1 GST Consultation with indirect tax experts. HSN code classification, GSTR-2B ITC matching & notice response guidance."
  },

  "legal-consultation": {
    slug: "legal-consultation",
    route: "/consultation/legal",
    title: "Legal & Corporate Consultation",
    subtitle: "Guidance on commercial contracts, founders' agreements, trademark strategy, and regulatory compliance.",
    heroBadge: "Legal & IP Advisory",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.9,
    reviewCount: 1620,
    overview: {
      whatIsTitle: "What is Legal Consultation?",
      whatIsContent: "Our Corporate & Legal Advisory connects startup founders and corporate executives with experienced legal counsel to review commercial agreements, co-founder equity splits, and intellectual property protection.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "Co-founders entering partnerships, business owners signing vendor/client contracts, and brand owners facing trademark opposition."
    },
    benefits: [{ title: "Contractual Safeguards", description: "Ensure NDAs, employment agreements, and service contracts protect your business assets.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Upload Draft Agreement", description: "Share contract draft or legal query." },
      { stepNumber: "02", title: "Counsel Review", description: "Legal advocate reviews terms & risk factors." },
      { stepNumber: "03", title: "Advisory Call", description: "45-minute contract advisory call." }
    ],
    documentsRequired: ["Draft contract / Founders agreement (if available)", "Summary of legal query", "Parties involved"],
    documentsDisclaimer: "Advisory provides commercial contract guidance; not individual litigation representation.",
    pricingTiers: [{ name: "Legal Strategy Session", priceTag: "Starting from ₹1,999", description: "30-min Legal Counsel Session.", features: ["30-Minute Advocate Advisory", "Contract Clause Risk Review", "Founders' Agreement Checklist", "IP Trademark Roadmap"] }],
    faqs: [{ question: "What contracts can be reviewed during consultation?", answer: "Founders' agreements, employment contracts, vendor SLAs, NDAs, lease deeds, and trademark opposition documents." }],
    seoTitle: "Legal & Corporate Consultation Online | The Comply One",
    seoDescription: "Book 1-on-1 Legal & Corporate Consultation with legal experts. Founders' agreements, contract clause risk review & trademark advice."
  },

  "startup-consultation": {
    slug: "startup-consultation",
    route: "/consultation/startup",
    title: "Startup India & Fundraising Advisory",
    subtitle: "DPIIT recognition guidance, Section 80-IAC 3-year tax holiday, angel tax exemption, and valuation advisory.",
    heroBadge: "Startup & Venture Advisory",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.9,
    reviewCount: 2890,
    overview: {
      whatIsTitle: "What is Startup Consultation?",
      whatIsContent: "Specialized advisory for high-growth tech and non-tech startups navigating DPIIT Startup India recognition, Section 80-IAC income tax exemptions, cap table structuring, and investor due-diligence readiness.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "Early-stage founders, bootstrapped startups raising seed capital, and innovative enterprises."
    },
    benefits: [{ title: "Tax Holiday Eligibility", description: "Prepare your application for 3-year 100% income tax exemption under Section 80-IAC.", iconName: "Award" }],
    processSteps: [
      { stepNumber: "01", title: "Share Pitch Deck", description: "Provide pitch deck & innovation notes." },
      { stepNumber: "02", title: "Startup Advisor Review", description: "Advisor evaluates DPIIT eligibility." },
      { stepNumber: "03", title: "Advisory Session", description: "45-minute fundraising & tax session." }
    ],
    documentsRequired: ["Pitch Deck / Business Model Write-up", "Incorporation Certificate", "Cap table summary"],
    documentsDisclaimer: "Provides strategic guidance on Government Seed Schemes and DPIIT portals.",
    pricingTiers: [{ name: "Startup Founder Call", priceTag: "Starting from ₹1,999", description: "30-min Startup Advisory.", features: ["30-Minute Startup Advisor Call", "DPIIT 80-IAC Eligibility Check", "Cap Table & ESOP Guidance", "Investor Due-Diligence Checklist"] }],
    faqs: [{ question: "How to qualify for 3-year tax exemption under 80-IAC?", answer: "The startup must be DPIIT recognized, incorporated as a Pvt Ltd or LLP after 1st April 2016, and approved by the Inter-Ministerial Board (IMB)." }],
    seoTitle: "Startup India & Fundraising Consultation | The Comply One",
    seoDescription: "Book 1-on-1 Startup Advisory with CA/CS experts. DPIIT recognition, Sec 80-IAC tax holiday, cap table structuring & investor readiness."
  },

  "compliance-consultation": {
    slug: "compliance-consultation",
    route: "/consultation/compliance",
    title: "Statutory Compliance Audit Consultation",
    subtitle: "Comprehensive health check of ROC filings, director KYC, statutory registers, and corporate secretarial records.",
    heroBadge: "Secretarial Health Check",
    turnaroundTime: "1-on-1 Consultation Call",
    rating: 4.9,
    reviewCount: 1420,
    overview: {
      whatIsTitle: "What is Compliance Consultation?",
      whatIsContent: "Our Compliance Health Check session provides a thorough audit of your company or LLP master data on MCA V3, GST portal, and Income Tax department to catch overdue filings before penalties accrue.",
      whoShouldChooseTitle: "Who Can Benefit?",
      whoShouldChooseContent: "Company directors wanting to verify their secretarial status, firms preparing for M&A, and dormant companies planning strike-off."
    },
    benefits: [{ title: "Catch Overdue Filings Early", description: "Identify missed AOC-4, MGT-7, DIR-3 KYC, or INC-20A filings before ₹100/day penalties build up.", iconName: "ShieldCheck" }],
    processSteps: [
      { stepNumber: "01", title: "Provide Master Data", description: "Provide CIN / LLPIN / GSTIN number." },
      { stepNumber: "02", title: "CS Master Audit", description: "Company Secretary audits public ROC records." },
      { stepNumber: "03", title: "Advisory Call", description: "45-minute compliance report call." }
    ],
    documentsRequired: ["CIN / LLPIN / GSTIN", "List of current directors", "Last filed AOC-4/MGT-7 date"],
    documentsDisclaimer: "Covers public ROC master data and statutory record review.",
    pricingTiers: [{ name: "Compliance Health Check", priceTag: "Starting from ₹1,499", description: "CS Master Audit Call.", features: ["30-Minute CS Advisory Session", "ROC Master Data Health Report", "Overdue Penalty Calculation", "Secretarial Action Plan"] }],
    faqs: [{ question: "How does the CS check my company compliance status?", answer: "Our Company Secretary accesses official MCA master data, index of charges, and past filing receipts." }],
    seoTitle: "Corporate Compliance Consultation & Health Audit | The Comply One",
    seoDescription: "Book 1-on-1 Corporate Compliance Consultation with Company Secretaries. ROC master data audit, overdue penalty check & secretarial roadmap."
  }
};
