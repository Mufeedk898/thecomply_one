export interface StartupServiceTier {
  name: string;
  priceTag: string; // e.g. "Starting from ₹1,499"
  period?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface StartupServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface StartupServiceBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface StartupServiceFAQ {
  question: string;
  answer: string;
}

export interface StartupServiceData {
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  heroBadge?: string;
  turnaroundTime: string;
  rating: number;
  reviewCount: number;
  overview: {
    whatIsTitle: string;
    whatIsContent: string;
    whoShouldChooseTitle: string;
    whoShouldChooseContent: string;
  };
  benefits: StartupServiceBenefit[];
  processSteps: StartupServiceProcessStep[];
  documentsRequired: string[];
  documentsDisclaimer: string;
  pricingTiers: StartupServiceTier[];
  faqs: StartupServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const STARTUP_SERVICES_DATA: Record<string, StartupServiceData> = {
  "proprietorship": {
    slug: "proprietorship",
    route: "/proprietorship/registration",
    title: "Proprietorship Registration",
    subtitle: "Start your business with a simple and flexible proprietorship structure.",
    heroBadge: "Fastest 3-5 Days Registration",
    turnaroundTime: "3 - 5 Working Days",
    rating: 4.9,
    reviewCount: 3840,
    overview: {
      whatIsTitle: "What is a Sole Proprietorship?",
      whatIsContent: "A Sole Proprietorship is the simplest, most common business entity structure in India, owned, managed, and controlled by a single individual. It does not require complex corporate incorporation filings; instead, registration is established through government business licenses such as Udyam MSME and GSTIN.",
      whoShouldChooseTitle: "Who Should Choose Proprietorship?",
      whoShouldChooseContent: "Proprietorship is ideal for solo entrepreneurs, freelancers, local retailers, consultants, home-based businesses, and small traders who want to launch operations quickly with minimal regulatory overhead and low setup costs."
    },
    benefits: [
      {
        title: "Complete Control",
        description: "100% ownership and decision-making power retained solely by the proprietor without board approvals.",
        iconName: "UserCheck"
      },
      {
        title: "Minimal Compliance",
        description: "No annual MCA or ROC filings required. Simplify tax returns under your personal Income Tax PAN.",
        iconName: "ShieldCheck"
      },
      {
        title: "Quick & Low Cost Setup",
        description: "Get registered in as fast as 3-5 working days with minimal government documentation fees.",
        iconName: "Zap"
      },
      {
        title: "Easy Profit Transfer",
        description: "All profits accrue directly to the proprietor after paying personal income tax under applicable slabs.",
        iconName: "TrendingUp"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Submit basic personal details and business activity information on our encrypted online portal."
      },
      {
        stepNumber: "02",
        title: "Document Collection",
        description: "Upload PAN, Aadhaar, and premises proof. Our CA team verifies compliance and HSN codes."
      },
      {
        stepNumber: "03",
        title: "Expert Processing",
        description: "We file your Udyam MSME registration and state Shop & Establishment or GST application."
      },
      {
        stepNumber: "04",
        title: "Registration & Filing",
        description: "Government authorities issue official registration certificates and 15-digit GSTIN."
      },
      {
        stepNumber: "05",
        title: "Get Your Documents",
        description: "Receive Certificate of Registration, MSME setup, and current bank account resolution package."
      }
    ],
    documentsRequired: [
      "PAN Card copy of the Proprietor",
      "Aadhaar Card / Voter ID / Passport of the Proprietor",
      "Passport size photograph of the Proprietor",
      "Proof of Business Address (Electricity Bill / Rent Agreement + NOC)",
      "Bank Account Statement / Cancelled Cheque"
    ],
    documentsDisclaimer: "Document requirements may vary depending on municipal location, state regulations, and business activity type.",
    pricingTiers: [
      {
        name: "Basic Setup",
        priceTag: "Starting from ₹1,499",
        description: "Essential registration for micro-enterprises and freelancers.",
        features: [
          "Udyam MSME Registration Certificate",
          "GST Registration Consultation",
          "Dedicated Expert Support",
          "Current Bank Account Opening Guidance"
        ]
      },
      {
        name: "Standard Package",
        priceTag: "Starting from ₹2,999",
        description: "Complete business registration package with GSTIN allocation.",
        features: [
          "Udyam MSME Certificate",
          "Official 15-digit GSTIN Registration",
          "Shop & Establishment License guidance",
          "Official Bank Account Resolution Letter",
          "Dedicated CA Manager"
        ],
        recommended: true
      },
      {
        name: "Fast-Track All-In-One",
        priceTag: "Starting from ₹4,999",
        description: "Full operational setup with 1st quarter compliance support.",
        features: [
          "Everything in Standard Package",
          "Priority 48-Hour Processing",
          "First Quarter GST Return Filing",
          "Trademark Search & Brand Advisory",
          "Lifetime Document Vault Access"
        ]
      }
    ],
    faqs: [
      {
        question: "Is a separate PAN card required for a Proprietorship?",
        answer: "No, a Sole Proprietorship operates under the proprietor's personal PAN card. There is no separate legal entity PAN issued."
      },
      {
        question: "Can I convert a Proprietorship into a Private Limited Company later?",
        answer: "Yes, as your business grows, you can easily take over the proprietorship business into a Private Limited Company or LLP structure."
      },
      {
        question: "Is GST registration mandatory for a Proprietorship?",
        answer: "GST is mandatory if your annual turnover exceeds ₹20 Lakhs for services or ₹40 Lakhs for goods, or if you sell across state borders or via e-commerce."
      },
      {
        question: "How long does Proprietorship registration take?",
        answer: "With complete documents, Udyam MSME takes 1-2 days and GST registration takes 3-5 working days."
      }
    ],
    seoTitle: "Proprietorship Registration Online in India | The Comply One",
    seoDescription: "Register your Sole Proprietorship firm online with Udyam MSME, GSTIN, and current bank account assistance in 3-5 days."
  },

  "partnership": {
    slug: "partnership",
    route: "/partnership/registration",
    title: "Partnership Firm Registration",
    subtitle: "Register your partnership firm under the Indian Partnership Act, 1932 with legal deed drafting.",
    heroBadge: "Govt Recognized Partnership Deed",
    turnaroundTime: "4 - 7 Working Days",
    rating: 4.8,
    reviewCount: 2150,
    overview: {
      whatIsTitle: "What is a Partnership Firm?",
      whatIsContent: "A Partnership Firm is a business structure formed by two or more individuals who agree to share the responsibilities, capital investment, and profits of a business. Governed under the Indian Partnership Act, 1932, a partnership firm functions through a formal Partnership Deed.",
      whoShouldChooseTitle: "Who Should Choose Partnership?",
      whoShouldChooseContent: "Partnership firm structure is ideal for co-founders, joint business ventures, family-owned businesses, and traditional trading enterprises who want to pool capital and skills without full corporate compliance."
    },
    benefits: [
      {
        title: "Pooled Capital & Expertise",
        description: "Combine financial resources, industry experience, and operational skills of multiple partners.",
        iconName: "Users"
      },
      {
        title: "Custom Profit Sharing",
        description: "Flexibility to define custom profit and loss sharing ratios in the legal Partnership Deed.",
        iconName: "PieChart"
      },
      {
        title: "Low Annual Statutory Cost",
        description: "No mandatory annual ROC filings; simple income tax return filing under Partnership PAN.",
        iconName: "ShieldCheck"
      },
      {
        title: "Simple Operational Rules",
        description: "Business decisions governed smoothly by mutual agreement terms drafted in the deed.",
        iconName: "FileText"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Provide partner names, capital contribution percentages, and proposed business name."
      },
      {
        stepNumber: "02",
        title: "Document Collection",
        description: "Our legal team verifies identity and address proofs of all partners."
      },
      {
        stepNumber: "03",
        title: "Expert Processing",
        description: "We draft a comprehensive, legally sound Partnership Deed tailored to your business terms."
      },
      {
        stepNumber: "04",
        title: "Registration & Filing",
        description: "Deed execution on non-judicial stamp paper & submission to Registrar of Firms (ROF)."
      },
      {
        stepNumber: "05",
        title: "Get Your Documents",
        description: "Receive Registered Partnership Deed, Firm PAN, TAN, and GST Certificate."
      }
    ],
    documentsRequired: [
      "PAN Card of all Partners",
      "Aadhaar Card / Passport / Voter ID of all Partners",
      "Passport size photos of all Partners",
      "Proof of Registered Business Address (Rent Agreement + Electricity Bill + Landlord NOC)",
      "Partnership Deed drafted on requisite Non-Judicial Stamp Paper"
    ],
    documentsDisclaimer: "Stamp duty costs vary by Indian state based on total capital contribution.",
    pricingTiers: [
      {
        name: "Deed Drafting",
        priceTag: "Starting from ₹2,499",
        description: "Professional drafting of legal Partnership Deed.",
        features: [
          "Custom Legal Partnership Deed Drafting",
          "Partner Terms & Profit Ratio Clause Review",
          "PAN & TAN Filing Support",
          "Digital Copy Delivery"
        ]
      },
      {
        name: "Standard Registered Firm",
        priceTag: "Starting from ₹4,999",
        description: "Complete legal deed + PAN + GST registration.",
        features: [
          "Custom Partnership Deed Drafting",
          "Stamp Paper Assistance",
          "Firm PAN & TAN Allocation",
          "GST Registration (GSTIN)",
          "Dedicated Legal Advisor"
        ],
        recommended: true
      },
      {
        name: "ROF Government Registered",
        priceTag: "Starting from ₹7,999",
        description: "Full Registrar of Firms (ROF) official registration.",
        features: [
          "Everything in Standard Package",
          "Registrar of Firms (ROF) State Filing",
          "Official ROF Certificate of Registration",
          "Current Bank Account Opening Resolution",
          "1st Year Tax Advisory"
        ]
      }
    ],
    faqs: [
      {
        question: "Is registration with Registrar of Firms (ROF) mandatory?",
        answer: "Unregistered partnerships are valid, but ROF registration allows the firm to file legal suits against third parties in court."
      },
      {
        question: "How many partners are allowed in a Partnership Firm?",
        answer: "A minimum of 2 partners is required, and the maximum allowed limit is 50 partners under the Companies Act rules."
      },
      {
        question: "What is the tax rate for a Partnership Firm?",
        answer: "Partnership firms in India are taxed at a flat rate of 30% plus applicable surcharge and cess."
      }
    ],
    seoTitle: "Partnership Firm Registration Online India | The Comply One",
    seoDescription: "Register Partnership Firm online with CA legal deed drafting, ROF registration, PAN, TAN, and GSTIN allocation."
  },

  "one-person-company": {
    slug: "one-person-company",
    route: "/one-person-company",
    title: "One Person Company Registration",
    subtitle: "Enjoy corporate status and limited liability with complete control as a single founder.",
    heroBadge: "Solo Founder Corporate Entity",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 1980,
    overview: {
      whatIsTitle: "What is a One Person Company (OPC)?",
      whatIsContent: "A One Person Company (OPC) is a legal corporate entity structure created under the Companies Act, 2013, allowing a single entrepreneur to operate a full-fledged corporate company with limited liability protection.",
      whoShouldChooseTitle: "Who Should Choose an OPC?",
      whoShouldChooseContent: "OPC is designed for solo founders, single-promoter technology startups, consultants, and individual business owners who want corporate credibility, limited liability, and vendor trust without needing a co-founder."
    },
    benefits: [
      {
        title: "100% Solo Ownership",
        description: "Single shareholder holds full corporate ownership and management authority.",
        iconName: "Crown"
      },
      {
        title: "Limited Liability Protection",
        description: "Personal assets of the founder remain safe from business debts and litigation liabilities.",
        iconName: "ShieldCheck"
      },
      {
        title: "Separate Corporate Identity",
        description: "OPC enjoys perpetual legal existence, separate PAN, CIN, and independent bank account.",
        iconName: "Building2"
      },
      {
        title: "Venture Capital Ready",
        description: "Can easily convert into a standard Private Limited Company when raising external investment.",
        iconName: "Rocket"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Submit founder and nominee details along with proposed company names."
      },
      {
        stepNumber: "02",
        title: "DSC & Name Reservation",
        description: "We issue Class 3 Digital Signatures and file SPICe+ Part A for MCA name approval."
      },
      {
        stepNumber: "03",
        title: "MoA & AoA Drafting",
        description: "Our Secretarial team drafts Memorandum & Articles of Association with Nominee consent (INC-3)."
      },
      {
        stepNumber: "04",
        title: "SPICe+ MCA Filing",
        description: "Submitting SPICe+ Part B with AGILE-PRO-S for PAN, TAN, EPFO, ESIC, and GSTIN."
      },
      {
        stepNumber: "05",
        title: "Certificate Issuance",
        description: "MCA approves incorporation and issues Certificate of Incorporation (CoI) with CIN."
      }
    ],
    documentsRequired: [
      "PAN Card of Founder Director & Nominee",
      "Aadhaar Card / Voter ID / Passport of Director & Nominee",
      "Bank Statement / Utility Bill of Director & Nominee (<2 months old)",
      "Passport size photographs of Director & Nominee",
      "Proof of Registered Office Address (Electricity bill / Rent agreement + Landlord NOC)"
    ],
    documentsDisclaimer: "Nominee must be a resident natural citizen of India.",
    pricingTiers: [
      {
        name: "Essential OPC",
        priceTag: "Starting from ₹5,499",
        description: "Basic OPC incorporation with MCA certificates.",
        features: [
          "Name Approval (SPICe+ Part A)",
          "1 Class 3 DSC for Director",
          "1 DIN Allocation",
          "Drafted MoA & AoA",
          "Incorporation Certificate & CIN"
        ]
      },
      {
        name: "Standard OPC Package",
        priceTag: "Starting from ₹8,999",
        description: "Complete incorporation + PAN/TAN + GST registration.",
        features: [
          "Everything in Essential Package",
          "Company PAN & TAN Cards",
          "GST Registration (GSTIN)",
          "Nominee Consent (INC-3) Filing",
          "Corporate Bank Account Setup Assistance",
          "Dedicated Secretarial Manager"
        ],
        recommended: true
      },
      {
        name: "All-Inclusive Founder",
        priceTag: "Starting from ₹13,999",
        description: "Incorporation + First Year INC-20A & Director KYC.",
        features: [
          "Everything in Standard Package",
          "INC-20A Commencement of Business Filing",
          "1st Year DIR-3 KYC Filing",
          "Udyam MSME Registration Certificate",
          "First Year Board Resolution Book"
        ]
      }
    ],
    faqs: [
      {
        question: "Is a nominee mandatory for OPC registration?",
        answer: "Yes, the Companies Act requires one nominee person who takes charge of the OPC in the event of the founder's death or incapacity."
      },
      {
        question: "Can an OPC have more than one director?",
        answer: "Yes, an OPC can appoint up to 15 directors, but it can only have one shareholder/member."
      },
      {
        question: "Can foreign nationals incorporate an OPC in India?",
        answer: "No, only an Indian citizen who is a resident of India is eligible to incorporate an OPC."
      }
    ],
    seoTitle: "One Person Company (OPC) Registration Online | The Comply One",
    seoDescription: "Register One Person Company (OPC) online in India. MCA name approval, DSC, DIN, MoA, AoA, PAN, TAN & GSTIN in 5-7 days."
  },

  "llp": {
    slug: "llp",
    route: "/llp",
    title: "LLP Registration",
    subtitle: "Combine operational flexibility of a partnership with limited liability corporate protection.",
    heroBadge: "Low Compliance Corporate Partner",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 2640,
    overview: {
      whatIsTitle: "What is a Limited Liability Partnership (LLP)?",
      whatIsContent: "A Limited Liability Partnership (LLP) is an alternative corporate business vehicle governed under the Limited Liability Partnership Act, 2008. It offers the benefits of limited liability of a company while allowing partners the flexibility of organizing internal management based on a mutual agreement.",
      whoShouldChooseTitle: "Who Should Choose an LLP?",
      whoShouldChooseContent: "LLP is the preferred business structure for professional service firms (CAs, lawyers, architects, consultants), tech agencies, software studios, and medium-scale service businesses seeking limited liability without high company audit costs."
    },
    benefits: [
      {
        title: "Limited Partner Liability",
        description: "Partners are not personally liable for debts of the LLP or unauthorized actions of co-partners.",
        iconName: "ShieldCheck"
      },
      {
        title: "Audit Exemptions",
        description: "No statutory audit required unless annual turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs.",
        iconName: "FileCheck"
      },
      {
        title: "No Dividend Distribution Tax",
        description: "Profits distributed to partners are tax-free in the hands of partners after LLP taxes.",
        iconName: "TrendingUp"
      },
      {
        title: "Perpetual Legal Existence",
        description: "LLP entity continues existing independently regardless of partner changes or resignation.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Partner Details",
        description: "Provide partner information, contribution amounts, and name choices."
      },
      {
        stepNumber: "02",
        title: "DSC & RUN-LLP Name Approval",
        description: "Obtain Class 3 DSCs for Designated Partners and file name reservation on MCA V3."
      },
      {
        stepNumber: "03",
        title: "FiLLiP Form Submission",
        description: "File consolidated FiLLiP application for DPIN allocation and incorporation."
      },
      {
        stepNumber: "04",
        title: "LLP Agreement Drafting & Stamp Duty",
        description: "Draft Form 3 LLP agreement with custom profit sharing & state stamp paper execution."
      },
      {
        stepNumber: "05",
        title: "Certificate & Bank Setup",
        description: "Receive CoI, DPIN, PAN, TAN, and current account resolution."
      }
    ],
    documentsRequired: [
      "PAN Card of Designated Partners",
      "Aadhaar / Voter ID / Passport of Designated Partners",
      "Bank Statement / Utility Bill of Partners (<2 months old)",
      "Passport size photographs of Partners",
      "Proof of Registered Office Address (Rent Agreement + Utility Bill + Landlord NOC)"
    ],
    documentsDisclaimer: "At least one Designated Partner must be a resident of India.",
    pricingTiers: [
      {
        name: "Essential LLP",
        priceTag: "Starting from ₹4,999",
        description: "Standard LLP incorporation with MCA portal filing.",
        features: [
          "RUN-LLP Name Approval",
          "2 Class 3 DSCs for Designated Partners",
          "2 DPIN Allocations",
          "LLP Incorporation Certificate",
          "PAN & TAN Cards"
        ]
      },
      {
        name: "Standard Agreement Bundle",
        priceTag: "Starting from ₹7,999",
        description: "Incorporation + Form 3 Agreement drafting + GSTIN.",
        features: [
          "Everything in Essential Package",
          "Custom LLP Agreement Drafting (Form 3)",
          "State Stamp Duty Assistance",
          "GST Registration (GSTIN)",
          "Corporate Bank Account Resolution"
        ],
        recommended: true
      },
      {
        name: "Complete Professional",
        priceTag: "Starting from ₹12,999",
        description: "Full setup + MSME + 1st Year Form 11 filing guidance.",
        features: [
          "Everything in Standard Package",
          "Udyam MSME Registration Certificate",
          "Trademark Search & Brand Filing Assistance",
          "First Year Annual Return (Form 11) Guidance",
          "Dedicated CA Retainer Support"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum capital required to start an LLP?",
        answer: "There is no minimum statutory capital requirement for registering an LLP in India. You can start with any capital amount."
      },
      {
        question: "Can an LLP raise equity investment from venture capital funds?",
        answer: "Venture capital firms usually prefer Private Limited Companies because LLPs cannot issue equity shares or stock options (ESOPs)."
      },
      {
        question: "How long is Form 3 LLP agreement filing allowed?",
        answer: "The LLP agreement must be drafted and filed in Form 3 with the MCA within 30 days of incorporation."
      }
    ],
    seoTitle: "LLP Registration Online in India | Limited Liability Partnership | The Comply One",
    seoDescription: "Register Limited Liability Partnership (LLP) online with DPIN, RUN-LLP name approval, LLP Agreement drafting, PAN, TAN & GST in 5-7 days."
  },

  "private-limited-company": {
    slug: "private-limited-company",
    route: "/private-limited-company",
    title: "Private Limited Company Registration",
    subtitle: "The premier corporate entity structure for fundraising, scalability, and limited liability in India.",
    heroBadge: "#1 Startup Choice in India",
    turnaroundTime: "5 - 7 Working Days",
    rating: 4.9,
    reviewCount: 5210,
    overview: {
      whatIsTitle: "What is a Private Limited Company?",
      whatIsContent: "A Private Limited Company is an independent legal entity registered under the Companies Act, 2013 with the Ministry of Corporate Affairs (MCA). It offers limited liability protection to its shareholders, holds separate property, and is legally distinct from its directors and owners.",
      whoShouldChooseTitle: "Who Should Choose a Private Limited Company?",
      whoShouldChooseContent: "Pvt Ltd structure is essential for ambitious startups aiming to raise Seed/VC funding, issue ESOP employee stock options, build high corporate brand value, protect co-founders' personal assets, and scale rapidly."
    },
    benefits: [
      {
        title: "Fundraising & Investor Ready",
        description: "The only entity structure preferred by venture capital firms, angel networks, and bank lenders.",
        iconName: "TrendingUp"
      },
      {
        title: "Limited Liability Protection",
        description: "Shareholder liability is strictly limited to unpaid share capital; personal wealth is 100% protected.",
        iconName: "ShieldCheck"
      },
      {
        title: "ESOP Share Allocation",
        description: "Attract top engineering & executive talent by granting Employee Stock Option Plans (ESOPs).",
        iconName: "Award"
      },
      {
        title: "Perpetual Succession",
        description: "Company existence remains unaffected by changes in directors or share transfers.",
        iconName: "Building2"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Your Details",
        description: "Provide director details, proposed company names, capital ratio, and business objective."
      },
      {
        stepNumber: "02",
        title: "DSC & SPICe+ Part A Filing",
        description: "Issue Class 3 DSCs and submit SPICe+ Part A on MCA V3 for official name approval."
      },
      {
        stepNumber: "03",
        title: "MoA, AoA & SPICe+ Part B E-Filing",
        description: "Draft custom MoA, AoA, and file consolidated SPICe+ Part B with AGILE-PRO-S."
      },
      {
        stepNumber: "04",
        title: "Government Incorporation Approval",
        description: "MCA issues official Certificate of Incorporation (CoI) with Corporate Identity Number (CIN)."
      },
      {
        stepNumber: "05",
        title: "PAN, TAN & Bank Account",
        description: "Receive physical/e-PAN, TAN cards, and open zero-balance corporate bank account."
      }
    ],
    documentsRequired: [
      "PAN Card of all Directors and Shareholders",
      "Aadhaar Card / Voter ID / Passport of all Directors & Shareholders",
      "Bank Statement / Electricity Bill of Directors (<2 months old)",
      "Passport size photographs of Directors",
      "Proof of Registered Office Address (Rent Agreement + Electricity Bill + Landlord NOC)"
    ],
    documentsDisclaimer: "At least one director must be a resident of India (stayed 182+ days).",
    pricingTiers: [
      {
        name: "Standard Incorporation",
        priceTag: "Starting from ₹6,999",
        description: "Complete incorporation with DIN, DSC, MoA, AoA, PAN, and TAN.",
        features: [
          "Name Approval (SPICe+ Part A)",
          "Class 3 DSC for 2 Directors",
          "2 Director Identification Numbers (DIN)",
          "Drafting MoA & AoA",
          "Certificate of Incorporation (CoI) & CIN",
          "PAN & TAN Card Issuance",
          "Corporate Bank Account Setup Assistance"
        ]
      },
      {
        name: "Pro Compliance Bundle",
        priceTag: "Starting from ₹11,999",
        description: "Incorporation + GST + MSME + INC-20A commencement.",
        features: [
          "Everything in Standard Package",
          "GST Registration (GSTIN Allocation)",
          "Udyam MSME Certificate",
          "INC-20A Commencement of Business Filing",
          "First Year Director KYC (DIR-3 KYC)",
          "Dedicated CA Relationship Manager"
        ],
        recommended: true
      },
      {
        name: "Enterprise Founder Pass",
        priceTag: "Starting from ₹18,999",
        description: "Full incorporation + 1st Year Annual ROC Filing (AOC-4 & MGT-7).",
        features: [
          "Everything in Pro Compliance Bundle",
          "Trademark Search & Brand Name Filing",
          "First Year AOC-4 & MGT-7 ROC Filings",
          "Statutory Register & Share Certificate Book",
          "Priority 24-Hour CS Support"
        ]
      }
    ],
    faqs: [
      {
        question: "How many directors are required for a Private Limited Company?",
        answer: "A minimum of 2 directors and 2 shareholders is required. A single person can be both a director and a shareholder."
      },
      {
        question: "Is physical presence required for Pvt Ltd incorporation?",
        answer: "No, the entire process is 100% online. You can scan and upload your documents through our secure portal."
      },
      {
        question: "What is the minimum capital required?",
        answer: "There is no statutory minimum paid-up capital requirement under the Companies Act. You can start with ₹1,000."
      }
    ],
    seoTitle: "Private Limited Company Registration Online India | The Comply One",
    seoDescription: "Incorporate Private Limited Company online in 5-7 days. Includes MCA name approval, DSC, DIN, MoA, AoA, PAN, TAN, GSTIN & bank account setup."
  },

  "public-limited-company": {
    slug: "public-limited-company",
    route: "/public-limited-company",
    title: "Public Limited Company Registration",
    subtitle: "Establish a public enterprise capable of issuing shares to the public and listing on stock exchanges.",
    heroBadge: "Large Scale Enterprise Entity",
    turnaroundTime: "10 - 14 Working Days",
    rating: 4.9,
    reviewCount: 960,
    overview: {
      whatIsTitle: "What is a Public Limited Company?",
      whatIsContent: "A Public Limited Company is a corporate entity structure incorporated under the Companies Act, 2013 that is permitted to offer its shares to the general public. It has no limit on the maximum number of members and enjoys high financial market credibility.",
      whoShouldChooseTitle: "Who Should Choose Public Limited?",
      whoShouldChooseContent: "Public Limited structure is designed for large industrial corporations, infrastructure projects, financial institutions, and fast-growing enterprises planning an Initial Public Offering (IPO) or large public equity raising."
    },
    benefits: [
      {
        title: "Public Equity Capital",
        description: "Power to raise substantial equity investment by issuing shares and debentures to the general public.",
        iconName: "TrendingUp"
      },
      {
        title: "Stock Exchange Listing",
        description: "Eligible to list shares on major stock exchanges (BSE/NSE) for market liquidity.",
        iconName: "Building2"
      },
      {
        title: "Unlimited Shareholders",
        description: "No restriction on the maximum number of shareholders, enabling massive institutional expansion.",
        iconName: "Users"
      },
      {
        title: "Maximum Borrowing Power",
        description: "High credit rating status for securing institutional bank debt and corporate bonds.",
        iconName: "ShieldCheck"
      }
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Share Promoter Details",
        description: "Provide details of 7 minimum shareholders and 3 minimum directors."
      },
      {
        stepNumber: "02",
        title: "DSC & RUN Name Filing",
        description: "Issue Class 3 DSCs for all directors and reserve company name with MCA."
      },
      {
        stepNumber: "03",
        title: "SPICe+ Part B & Prospectus Drafting",
        description: "Draft custom MoA, AoA with public shareholding rules and file SPICe+ Part B."
      },
      {
        stepNumber: "04",
        title: "Incorporation & CIN Allocation",
        description: "MCA approves submission and issues Certificate of Incorporation (CoI)."
      },
      {
        stepNumber: "05",
        title: "Commencement of Business (INC-20A)",
        description: "Obtain Commencement Certificate to begin commercial operations and issue public capital."
      }
    ],
    documentsRequired: [
      "PAN Card of 7 Shareholders and 3 Directors",
      "Aadhaar Card / Passport of all Directors & Shareholders",
      "Bank Statement / Utility Bill (<2 months old) for all Directors",
      "Passport size photographs of Directors",
      "Registered Office proof (Rent agreement + Utility bill + Landlord NOC)"
    ],
    documentsDisclaimer: "Minimum 7 shareholders and 3 directors required under Companies Act.",
    pricingTiers: [
      {
        name: "Public Standard",
        priceTag: "Starting from ₹19,999",
        description: "Basic Public Limited incorporation with MCA V3.",
        features: [
          "Name Reservation (SPICe+ Part A)",
          "Class 3 DSC for 3 Directors",
          "3 DIN Allocations",
          "Drafting Public MoA & AoA",
          "Certificate of Incorporation & CIN"
        ]
      },
      {
        name: "Enterprise Capital Setup",
        priceTag: "Starting from ₹29,999",
        description: "Incorporation + INC-20A + Statutory Books + GST.",
        features: [
          "Everything in Public Standard",
          "Company PAN & TAN Cards",
          "GST Registration (GSTIN)",
          "INC-20A Commencement of Business Certificate",
          "Statutory Share Certificate & Register Printing",
          "Dedicated Senior CS Advisor"
        ],
        recommended: true
      },
      {
        name: "IPO & Institutional Pass",
        priceTag: "Starting from ₹45,999",
        description: "Complete setup + Demat ISIN creation + CA Retainer.",
        features: [
          "Everything in Enterprise Capital Setup",
          "NSDL / CDSL Demat ISIN Allocation",
          "Share Capital Stamp Duty Advisory",
          "First Year AOC-4 & MGT-7 Compliance Guidance",
          "24/7 Corporate Secretarial Retainer"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of directors and shareholders required?",
        answer: "A Public Limited Company requires a minimum of 3 directors and 7 shareholders."
      },
      {
        question: "Is there a restriction on share transfer in a Public Limited Company?",
        answer: "No, shares of a Public Limited Company are freely transferable without requiring approval from other shareholders."
      },
      {
        question: "What is the due date for holding the first AGM?",
        answer: "The first AGM must be held within 9 months from the end of the first financial year of incorporation."
      }
    ],
    seoTitle: "Public Limited Company Registration Online India | The Comply One",
    seoDescription: "Register Public Limited Company online in 10-14 days. Includes MCA name approval, 3 DINs, MoA, AoA, CIN, PAN, TAN, GSTIN & ISIN guidance."
  }
};
