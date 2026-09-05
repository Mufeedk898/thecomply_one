"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Video,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Upload,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface VideoReviewItem {
  id: string;
  customerName: string;
  companyName: string;
  designation?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  videoPublicId?: string;
  thumbnailPublicId?: string;
  reviewText?: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: string;
}

export function VideoReviewManager() {
  const [reviews, setReviews] = useState<VideoReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Modal States
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<VideoReviewItem | null>(null);
  const [deletingReviewId, setDeletingReviewId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    customerName: "",
    companyName: "",
    designation: "",
    videoUrl: "",
    thumbnailUrl: "",
    videoPublicId: "",
    thumbnailPublicId: "",
    reviewText: "",
    displayOrder: 0,
    isPublished: true,
  });

  // Uploading States
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const [isThumbUploading, setIsThumbUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadAdminReviews() {
      try {
        const res = await fetch("/api/admin/video-reviews", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success) {
            setReviews(data.reviews || []);
          }
        } else if (isMounted && (res.status === 403 || res.status === 401)) {
          setErrorMessage("Access denied. Admin authorization required.");
        }
      } catch (err) {
        console.error("Failed to fetch admin video reviews:", err);
        if (isMounted) {
          setErrorMessage("Network error loading reviews.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadAdminReviews();
    return () => {
      isMounted = false;
    };
  }, []);

  const fetchAdminReviews = async () => {
    try {
      const res = await fetch("/api/admin/video-reviews", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setReviews(data.reviews || []);
        }
      }
    } catch (err) {
      console.error("Failed to fetch admin video reviews:", err);
    }
  };

  // Open Add Form
  const handleOpenAddModal = () => {
    setEditingReview(null);
    setFormData({
      customerName: "",
      companyName: "",
      designation: "",
      videoUrl: "",
      thumbnailUrl: "",
      videoPublicId: "",
      thumbnailPublicId: "",
      reviewText: "",
      displayOrder: reviews.length + 1,
      isPublished: true,
    });
    setErrorMessage(null);
    setIsFormModalOpen(true);
  };

  // Open Edit Form
  const handleOpenEditModal = (review: VideoReviewItem) => {
    setEditingReview(review);
    setFormData({
      customerName: review.customerName,
      companyName: review.companyName,
      designation: review.designation || "",
      videoUrl: review.videoUrl,
      thumbnailUrl: review.thumbnailUrl || "",
      videoPublicId: review.videoPublicId || "",
      thumbnailPublicId: review.thumbnailPublicId || "",
      reviewText: review.reviewText || "",
      displayOrder: review.displayOrder,
      isPublished: review.isPublished,
    });
    setErrorMessage(null);
    setIsFormModalOpen(true);
  };

  // Video File Upload Handler
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsVideoUploading(true);
    setErrorMessage(null);

    try {
      const uploadBody = new FormData();
      uploadBody.append("file", file);
      uploadBody.append("uploadType", "video");

      const res = await fetch("/api/admin/video-reviews/upload", {
        method: "POST",
        body: uploadBody,
      });

      const data = await res.json();
      setIsVideoUploading(false);

      if (res.ok && data.success && data.videoUrl) {
        setFormData((prev) => ({
          ...prev,
          videoUrl: data.videoUrl,
          videoPublicId: data.publicId || "",
        }));
      } else {
        setErrorMessage(data.error || "Failed to upload video file.");
      }
    } catch (err) {
      console.error("Video upload error:", err);
      setIsVideoUploading(false);
      setErrorMessage("Network error during video upload.");
    } finally {
      if (videoInputRef.current) videoInputRef.current.value = "";
    }
  };

  // Thumbnail File Upload Handler
  const handleThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsThumbUploading(true);
    setErrorMessage(null);

    try {
      const uploadBody = new FormData();
      uploadBody.append("file", file);
      uploadBody.append("uploadType", "thumbnail");

      const res = await fetch("/api/admin/video-reviews/upload", {
        method: "POST",
        body: uploadBody,
      });

      const data = await res.json();
      setIsThumbUploading(false);

      if (res.ok && data.success && data.thumbnailUrl) {
        setFormData((prev) => ({
          ...prev,
          thumbnailUrl: data.thumbnailUrl,
          thumbnailPublicId: data.publicId || "",
        }));
      } else {
        setErrorMessage(data.error || "Failed to upload thumbnail.");
      }
    } catch (err) {
      console.error("Thumbnail upload error:", err);
      setIsThumbUploading(false);
      setErrorMessage("Network error during thumbnail upload.");
    } finally {
      if (thumbInputRef.current) thumbInputRef.current.value = "";
    }
  };

  // Save Form Handler
  const handleSaveReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.companyName || !formData.videoUrl) {
      setErrorMessage("Customer Name, Company Name, and Video URL are required.");
      return;
    }

    setIsSaving(true);
    setErrorMessage(null);

    try {
      const url = editingReview
        ? `/api/admin/video-reviews/${editingReview.id}`
        : "/api/admin/video-reviews";
      const method = editingReview ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setIsSaving(false);

      if (res.ok && data.success) {
        setSuccessMessage(editingReview ? "Review updated successfully." : "Review created successfully.");
        setIsFormModalOpen(false);
        fetchAdminReviews();
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setErrorMessage(data.error || "Failed to save review.");
      }
    } catch (err) {
      console.error("Save review error:", err);
      setIsSaving(false);
      setErrorMessage("Network error while saving review.");
    }
  };

  // Toggle Publish Status
  const handleTogglePublish = async (review: VideoReviewItem) => {
    try {
      const res = await fetch(`/api/admin/video-reviews/${review.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !review.isPublished }),
      });

      if (res.ok) {
        fetchAdminReviews();
      }
    } catch (err) {
      console.error("Toggle publish error:", err);
    }
  };

  // Delete Confirmation Handler
  const handleDeleteConfirm = async () => {
    if (!deletingReviewId) return;

    setIsSaving(true);
    try {
      const res = await fetch(`/api/admin/video-reviews/${deletingReviewId}`, {
        method: "DELETE",
      });

      setIsSaving(false);
      setIsDeleteModalOpen(false);

      if (res.ok) {
        setSuccessMessage("Video review deleted successfully.");
        fetchAdminReviews();
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Failed to delete review.");
      }
    } catch (err) {
      console.error("Delete review error:", err);
      setIsSaving(false);
      setIsDeleteModalOpen(false);
      setErrorMessage("Network error deleting review.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <Video className="w-4 h-4" />
            Media & Client Reviews
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Video Reviews Management
          </h2>
        </div>

        <Button onClick={handleOpenAddModal} variant="primary" size="md" className="gap-2 shadow-md">
          <Plus className="w-4 h-4" />
          <span>Add Video Review</span>
        </Button>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Loading Skeleton / Table */}
      {isLoading ? (
        <div className="space-y-3 py-8">
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Video className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">No Video Reviews Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
            Upload your first video review to display on the home page.
          </p>
          <Button onClick={handleOpenAddModal} variant="outline" size="sm">
            Add First Review
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Preview</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4 text-center">Order</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviews.map((rev) => (
                <tr key={rev.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4">
                    <div className="relative w-16 h-10 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center border border-slate-200">
                      {rev.thumbnailUrl ? (
                        <Image src={rev.thumbnailUrl} alt={rev.customerName} fill className="object-cover" />
                      ) : (
                        <Video className="w-5 h-5 text-slate-400" />
                      )}
                      <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 text-sm">{rev.customerName}</div>
                    {rev.designation && <div className="text-[11px] text-slate-500">{rev.designation}</div>}
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-800">{rev.companyName}</td>
                  <td className="py-3 px-4 text-center font-bold text-slate-700">{rev.displayOrder}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleTogglePublish(rev)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider transition-colors ${
                        rev.isPublished
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {rev.isPublished ? (
                        <>
                          <Eye className="w-3 h-3 text-emerald-600" /> Published
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3 text-slate-500" /> Draft
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleOpenEditModal(rev)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                      title="Edit Review"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setDeletingReviewId(rev.id);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Delete Review"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Hidden File Inputs */}
      <input type="file" ref={videoInputRef} onChange={handleVideoUpload} accept="video/mp4,video/webm,video/quicktime,video/x-msvideo" className="hidden" />
      <input type="file" ref={thumbInputRef} onChange={handleThumbUpload} accept="image/jpeg,image/jpg,image/png,image/webp" className="hidden" />

      {/* Add/Edit Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-lg font-extrabold text-slate-900">
                {editingReview ? "Edit Video Review" : "Add New Video Review"}
              </h3>
              <button onClick={() => setIsFormModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Customer Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Tech Solutions"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Designation</label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder="e.g. Managing Director / Founder"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>

              {/* Video Upload Area */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Video File *</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    required
                    readOnly
                    value={formData.videoUrl}
                    placeholder="Upload video file via button ->"
                    className="flex-1 px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={isVideoUploading}
                    onClick={() => videoInputRef.current?.click()}
                    className="shrink-0 gap-1.5"
                  >
                    {isVideoUploading ? <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> : <Upload className="w-4 h-4" />}
                    <span>{isVideoUploading ? "Uploading..." : "Upload Video"}</span>
                  </Button>
                </div>
                {formData.videoUrl && (
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">✓ Video uploaded to Cloudinary</p>
                )}
              </div>

              {/* Thumbnail Upload Area */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Thumbnail Cover Image</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    readOnly
                    value={formData.thumbnailUrl}
                    placeholder="Optional thumbnail upload"
                    className="flex-1 px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={isThumbUploading}
                    onClick={() => thumbInputRef.current?.click()}
                    className="shrink-0 gap-1.5"
                  >
                    {isThumbUploading ? <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> : <Upload className="w-4 h-4" />}
                    <span>{isThumbUploading ? "Uploading..." : "Upload Thumbnail"}</span>
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Review Text / Testimonial Quote</label>
                <textarea
                  rows={3}
                  value={formData.reviewText}
                  onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                  placeholder="Client feedback summary..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 items-center pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Display Order</label>
                  <input
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value, 10) || 0 })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900"
                  />
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isPublished" className="text-xs font-bold text-slate-800 cursor-pointer">
                    Publish Immediately
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsFormModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm" disabled={isSaving || isVideoUploading}>
                  {isSaving ? "Saving Review..." : "Save Review"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-3xl border border-slate-200 shadow-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900">Are you sure you want to delete this video review?</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                This will permanently delete the review record and remove the associated media assets from Cloudinary.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={() => setIsDeleteModalOpen(false)}>
                Cancel
              </Button>
              <button
                type="button"
                disabled={isSaving}
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors disabled:opacity-50"
              >
                {isSaving ? "Deleting..." : "Yes, Delete Review"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
