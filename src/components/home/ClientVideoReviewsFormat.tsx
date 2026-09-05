"use client";

import React, { useState, useEffect } from "react";
import { CLIENT_VIDEO_REVIEWS, VideoReview } from "@/data/videoReviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Play,
  X,
  Star,
  Video,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ClientVideoReviewsFormatProps {
  reviews?: VideoReview[];
}

export function ClientVideoReviewsFormat({
  reviews = CLIENT_VIDEO_REVIEWS,
}: ClientVideoReviewsFormatProps) {
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);
  const [fetchedReviews, setFetchedReviews] = useState<VideoReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    async function loadPublicReviews() {
      try {
        const res = await fetch("/api/video-reviews", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
            const mapped: VideoReview[] = data.reviews.map((r: {
              id: string;
              customerName: string;
              companyName: string;
              designation?: string;
              videoUrl: string;
              thumbnailUrl?: string;
              reviewText?: string;
            }) => ({
              id: r.id,
              clientName: r.customerName,
              companyName: r.companyName,
              designation: r.designation || "Business Owner",
              serviceName: "Compliance Advisory",
              videoUrl: r.videoUrl,
              posterUrl: r.thumbnailUrl || undefined,
              quote: r.reviewText || "Outstanding statutory compliance support and guidance from The Comply One.",
              rating: 5,
            }));
            setFetchedReviews(mapped);
          }
        }
      } catch (err) {
        console.error("Failed to load video reviews:", err);
      }
    }

    loadPublicReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayReviews = fetchedReviews.length > 0 ? fetchedReviews : reviews;
  const cardsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? displayReviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length);
  };

  // Compute visible 3 cards dynamically with wrap-around support
  const visibleReviews: VideoReview[] = [];
  if (displayReviews.length > 0) {
    const count = Math.min(cardsPerPage, displayReviews.length);
    for (let i = 0; i < count; i++) {
      const idx = (currentIndex + i) % displayReviews.length;
      visibleReviews.push(displayReviews[idx]);
    }
  }

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Neon Glowing Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Video Stories 🎥"
          title="Verified Client Video Reviews"
          subtitle="Watch real founders & business owners share their experience incorporating and staying compliant with The Comply One."
          titleClassName="text-white"
        />

        {/* Carousel Container with Left (Previous) & Right (Next) Buttons */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-12 mb-12">
          
          {/* Left / Previous Video Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Video Reviews"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 text-white border border-slate-700/90 shadow-2xl hover:bg-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            title="Previous Video Reviews"
          >
            <ChevronLeft className="w-6 h-6 text-white -ml-0.5" />
          </button>

          {/* Right / Next Video Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Video Reviews"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 text-white border border-slate-700/90 shadow-2xl hover:bg-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            title="Next Video Reviews"
          >
            <ChevronRight className="w-6 h-6 text-white -mr-0.5" />
          </button>

          {/* 3 Column 9:16 Vertical Video Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              
              {/* 9:16 Vertical Video Thumbnail / Player Container */}
              <div className="relative aspect-[9/16] w-full max-h-[460px] bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-700/60">
                {review.videoUrl ? (
                  <div className="relative w-full h-full group/video">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={review.posterUrl}
                      className="w-full h-full object-cover"
                    >
                      <source src={review.videoUrl} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>

                    {/* Service Pill Badge on Top Right */}
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-400 border border-amber-400/30 pointer-events-none z-10">
                      {review.serviceName}
                    </div>
                  </div>
                ) : (
                  /* Interactive 9:16 Video Placeholder Card */
                  <div
                    onClick={() => setActiveVideo(review)}
                    className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 cursor-pointer group/video"
                  >
                    {/* Background Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/video:opacity-100 transition-opacity" />

                    {/* Animated Pulsing Play Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 group-hover/video:scale-110 group-hover/video:bg-blue-500 transition-all duration-300 border-2 border-white/20">
                      <Play className="w-7 h-7 ml-1 fill-white" />
                    </div>

                    <span className="relative z-10 text-xs font-bold text-slate-300 mt-4 group-hover/video:text-white transition-colors flex items-center gap-1.5 text-center">
                      <Video className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Watch 9:16 Video Review</span>
                    </span>

                    {/* 9:16 Format Badge */}
                    <div className="absolute top-3 left-3 bg-blue-600/30 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-blue-300 border border-blue-400/30">
                      9:16 Reel
                    </div>

                    {/* Service Pill Badge on Top Right */}
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-400 border border-amber-400/30">
                      {review.serviceName}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Rating & Quote */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-300 ml-1">5.0 / 5.0</span>
                  </div>

                  <div className="relative">
                    <Quote className="w-4 h-4 text-slate-600 absolute -left-1 -top-1 rotate-180 opacity-40 pointer-events-none" />
                    <p className="text-xs text-slate-200 leading-relaxed font-normal italic pl-3 border-l-2 border-blue-500/40 line-clamp-3">
                      &quot;{review.quote}&quot;
                    </p>
                  </div>
                </div>

                {/* Client Info Footer */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      {review.clientName}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate max-w-[170px]">
                      {review.designation} • {review.companyName}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 border border-blue-400/30 flex items-center justify-center font-extrabold text-xs shrink-0">
                    {review.clientName.charAt(0)}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Pagination Indicator Dots */}
        {displayReviews.length > 3 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {displayReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === i
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

        {/* 9:16 Vertical Video Lightbox Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-sm bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 p-5 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pr-8">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-400/20">
                  9:16 Vertical Video Review
                </span>
                <h3 className="text-base font-bold text-white truncate mt-1">
                  {activeVideo.clientName} ({activeVideo.companyName})
                </h3>
              </div>

              {/* 9:16 Vertical Video Frame */}
              <div className="aspect-[9/16] w-full max-h-[70vh] bg-black rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 relative mx-auto">
                {activeVideo.videoUrl ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    poster={activeVideo.posterUrl}
                    className="w-full h-full object-cover"
                  >
                    <source src={activeVideo.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="text-center p-6 space-y-3">
                    <Video className="w-10 h-10 text-blue-500 mx-auto animate-pulse" />
                    <h4 className="text-sm font-bold text-white">
                      9:16 Video Ready Format
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Upload your vertical Reel/Short client video (e.g. <code className="text-amber-400">/videos/review1.mp4</code>) and it will play automatically in 9:16 vertical mode!
                    </p>
                  </div>
                )}
              </div>

              {/* Quote Footer */}
              <div className="bg-slate-800/60 p-3 rounded-xl text-xs text-slate-300 italic border border-slate-700/60">
                &quot;{activeVideo.quote}&quot; — <span className="font-bold text-white not-italic">{activeVideo.clientName}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
