"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Camera, Trash2, LogOut, Loader2, ShieldCheck } from "lucide-react";

interface UserProfileData {
  id: string;
  fullName: string;
  role?: string;
  profilePhoto?: string | null;
}

export function UserProfileMenu() {
  const [user, setUser] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch current authenticated user profile
  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && data.user) {
            setUser({
              id: data.user.id,
              fullName: data.user.fullName,
              role: data.user.role,
              profilePhoto: data.user.profilePhoto || null,
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Photo File Upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMessage(null);

    // Validate MIME type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      setErrorMessage("Invalid image format. Only JPG, JPEG, PNG, and WEBP files are allowed.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Validate File Size (Max 1 MB)
    if (file.size > 1 * 1024 * 1024) {
      setErrorMessage("Image file size exceeds the 1 MB limit. Please select a smaller photo.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/auth/profile/photo", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setIsUploading(false);

      if (res.ok && data.success && data.profilePhoto) {
        setUser((prev) => (prev ? { ...prev, profilePhoto: data.profilePhoto } : null));
        setErrorMessage(null);
      } else {
        setErrorMessage(data.error || "Failed to upload profile photo.");
      }
    } catch (err) {
      console.error("Profile photo upload error:", err);
      setIsUploading(false);
      setErrorMessage("Network error. Please try again.");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Handle Remove Photo
  const handleRemovePhoto = async () => {
    setErrorMessage(null);
    setIsUploading(true);

    try {
      const res = await fetch("/api/auth/profile/photo", {
        method: "DELETE",
      });

      const data = await res.json();
      setIsUploading(false);

      if (res.ok && data.success) {
        setUser((prev) => (prev ? { ...prev, profilePhoto: null } : null));
      } else {
        setErrorMessage(data.error || "Failed to remove profile photo.");
      }
    } catch (err) {
      console.error("Remove profile photo error:", err);
      setIsUploading(false);
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (isLoading) {
    return <div className="w-8 h-8 rounded-full bg-slate-100 animate-pulse" />;
  }

  if (!user) {
    return null; // Render null if unauthenticated; Header fallback handles Sign In / Get Started
  }

  const initial = user.fullName ? user.fullName.charAt(0).toUpperCase() : "U";

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Profile Avatar Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 p-1.5 rounded-full hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        title={user.fullName}
      >
        {user.profilePhoto ? (
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-300 shadow-sm">
            <Image
              src={user.profilePhoto}
              alt={user.fullName}
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-bold text-sm flex items-center justify-center border border-blue-800/20 shadow-sm">
            {initial}
          </div>
        )}

        <span className="hidden sm:inline-block text-xs font-bold text-slate-800 max-w-[140px] truncate">
          {user.fullName}
        </span>
      </button>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/jpg,image/png,image/webp"
        className="hidden"
      />

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
          
          {/* User Profile Header (Shows ONLY Full Name and Photo) */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            {user.profilePhoto ? (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                <Image
                  src={user.profilePhoto}
                  alt={user.fullName}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shrink-0 border border-blue-800/20 shadow-sm">
                {initial}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-extrabold text-slate-900 truncate">
                {user.fullName}
              </h4>
            </div>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="my-2 p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {/* Action Options */}
          <div className="pt-3 space-y-1">
            {/* Admin Operations Portal Link (Only for ADMIN role) */}
            {user.role === "ADMIN" && (
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-50/80 rounded-xl transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Admin Operations Portal</span>
              </Link>
            )}

            {/* Change Photo Option */}
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 rounded-xl transition-colors disabled:opacity-50"
            >
              {isUploading ? (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              ) : (
                <Camera className="w-4 h-4 text-slate-500" />
              )}
              <span>{isUploading ? "Uploading Photo..." : "Change Photo"}</span>
            </button>

            {/* Remove Photo Option (Only when photo exists) */}
            {user.profilePhoto && (
              <button
                onClick={handleRemovePhoto}
                disabled={isUploading}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50/70 rounded-xl transition-colors disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4 text-rose-500" />
                <span>Remove Photo</span>
              </button>
            )}

            <div className="my-1 border-t border-slate-100" />

            {/* Sign Out Option */}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4 text-slate-400" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
