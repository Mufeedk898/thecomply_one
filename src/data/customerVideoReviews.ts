export interface CustomerVideoReview {
  id: string;
  name: string;
  company?: string;
  service: string;
  thumbnail?: string;
  videoUrl: string;
  videoType: "youtube" | "vimeo" | "local" | "cdn";
  description?: string;
}

export const CUSTOMER_VIDEO_REVIEWS: CustomerVideoReview[] = [
  {
    id: "review-01",
    name: "Customer Name (Placeholder)",
    company: "Tech Venture Partner",
    service: "Private Limited Company Registration",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "Experience sharing on incorporating a tech startup with 100% digital CA guidance.",
  },
  {
    id: "review-02",
    name: "Business Founder (Placeholder)",
    company: "Logistics Enterprise",
    service: "GST Return Filing & LUT Approval",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "How monthly GSTR-1 and GSTR-3B filings saved time and ensured 100% ITC matching.",
  },
  {
    id: "review-03",
    name: "Managing Director (Placeholder)",
    company: "Retail Brands India",
    service: "Trademark Registration ™",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "Brand protection and trademark application filing under Class 35 within 24 hours.",
  },
  {
    id: "review-04",
    name: "Startup Founder (Placeholder)",
    company: "Fintech Solutions",
    service: "Annual MCA Compliance Retainer",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "Full-year secretarial audit covering AOC-4, MGT-7, DIR-3 KYC, and Board Minutes.",
  },
  {
    id: "review-05",
    name: "Company Director (Placeholder)",
    company: "Manufacturing LLP",
    service: "Income Tax Audit & ITR-6 Filing",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "Section 44AB CA Tax Audit execution and dual tax regime optimization.",
  },
  {
    id: "review-06",
    name: "Co-Founder (Placeholder)",
    company: "E-Commerce Venture",
    service: "DPIIT Startup India Advisory",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoType: "youtube",
    description: "Guidance on 80-IAC 3-year tax holiday application and cap table structuring.",
  },
];
