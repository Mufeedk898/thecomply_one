export interface CustomerReview {
  id: string;
  name: string;
  company?: string;
  service: string;
  rating: number;
  description: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "review-01",
    name: "Customer Name (Placeholder)",
    company: "Tech Venture Partner",
    service: "Private Limited Company Registration",
    rating: 5.0,
    description: "Experience sharing on incorporating a tech startup with 100% digital CA guidance and fast 5-day DIN allocation.",
  },
  {
    id: "review-02",
    name: "Business Founder (Placeholder)",
    company: "Logistics Enterprise",
    service: "GST Return Filing & LUT Approval",
    rating: 5.0,
    description: "How monthly GSTR-1 and GSTR-3B filings saved time and ensured 100% ITC matching without missing deadlines.",
  },
  {
    id: "review-03",
    name: "Managing Director (Placeholder)",
    company: "Retail Brands India",
    service: "Trademark Registration ™",
    rating: 5.0,
    description: "Brand protection and trademark application filing under Class 35 within 24 hours with dedicated attorney follow-up.",
  },
  {
    id: "review-04",
    name: "Startup Founder (Placeholder)",
    company: "Fintech Solutions",
    service: "Annual MCA Compliance Retainer",
    rating: 5.0,
    description: "Full-year secretarial audit covering AOC-4, MGT-7, DIR-3 KYC, and Board Minutes under a single retainer.",
  },
  {
    id: "review-05",
    name: "Company Director (Placeholder)",
    company: "Manufacturing LLP",
    service: "Income Tax Audit & ITR-6 Filing",
    rating: 5.0,
    description: "Section 44AB CA Tax Audit execution and dual tax regime optimization for maximum tax savings.",
  },
  {
    id: "review-06",
    name: "Co-Founder (Placeholder)",
    company: "E-Commerce Venture",
    service: "DPIIT Startup India Advisory",
    rating: 5.0,
    description: "Guidance on 80-IAC 3-year tax holiday application, angel tax exemption, and cap table structuring.",
  },
];
