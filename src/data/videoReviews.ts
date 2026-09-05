export interface VideoReview {
  id: string;
  clientName: string;
  designation: string;
  companyName: string;
  serviceName: string;
  rating: number;
  quote: string;
  videoUrl?: string; // Path to video file e.g. "/videos/review1.mp4"
  posterUrl?: string; // Video thumbnail image path
}

export const CLIENT_VIDEO_REVIEWS: VideoReview[] = [
  {
    id: "video-1",
    clientName: "Imran",
    designation: "Business Owner",
    companyName: "IEC Registration Client",
    serviceName: "Import Export Code (IEC) Registration",
    rating: 5,
    quote: "Mera naam Imran hai. Maine IEC ke liye The Comply One ki service li thi — team bahut professional hai aur response super fast mila!",
    videoUrl: "/videos/review1.mp4",
    posterUrl: "",
  },
  {
    id: "video-2",
    clientName: "Aditya Sharma",
    designation: "Owner",
    companyName: "Aditya Group",
    serviceName: "Taxation Registration & Compliance",
    rating: 5,
    quote: "My name is Aditya Sharma, owner of Aditya Group. Humari company ka taxation registration & compliance The Comply One se hai — amazing services!",
    videoUrl: "/videos/review2.mp4",
    posterUrl: "",
  },
  {
    id: "video-3",
    clientName: "MD Ashraf",
    designation: "Founder",
    companyName: "Company Registration Client",
    serviceName: "Private Limited Company Registration",
    rating: 5,
    quote: "Mera naam MD Ashraf hai. Maine company registration ke liye The Comply One ki service li thi. Process smooth complete hua, highly recommended!",
    videoUrl: "/videos/review3.mp4",
    posterUrl: "",
  },
];
