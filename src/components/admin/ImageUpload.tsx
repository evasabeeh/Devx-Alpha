"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaUpload, FaTimes, FaSpinner } from "react-icons/fa";

interface ImageUploadProps {
    currentImage?: string;
    onImageChange: (imageUrl: string) => void;
    folder?: string;
    className?: string;
}

export default function ImageUpload({
    currentImage,
    onImageChange,
    folder = "devx-alpha",
    className = "",
}: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState("");
    const [previewUrl, setPreviewUrl] = useState(currentImage || "");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setError("");
        setIsUploading(true);

        try {
            // Create preview
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);

            // Upload to Cloudinary
            const formData = new FormData();
            formData.append("file", file);
            formData.append("folder", folder);

            const response = await fetch("/api/admin/upload/image", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setPreviewUrl(data.url);
                onImageChange(data.url);
                // Clean up object URL
                URL.revokeObjectURL(objectUrl);
            } else {
                const errorMessage = data.details
                    ? data.details.join(", ")
                    : data.error || "Failed to upload image";
                setError(errorMessage);
                setPreviewUrl(currentImage || "");
                URL.revokeObjectURL(objectUrl);
            }
        } catch {
            setError("Failed to upload image");
            setPreviewUrl(currentImage || "");
        } finally {
            setIsUploading(false);
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemoveImage = () => {
        setPreviewUrl("");
        onImageChange("");
        setError("");
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`space-y-4 ${className}`}>
            <label className="block text-sm font-medium text-gray-700">
                Profile Image
            </label>

            {/* Image Preview */}
            {previewUrl ? (
                <div className="relative inline-block">
                    <div className="relative h-32 w-32 overflow-hidden rounded-lg border-2 border-gray-200">
                        <Image
                            src={previewUrl}
                            alt="Profile preview"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {!isUploading && (
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
                        >
                            <FaTimes className="h-3 w-3" />
                        </button>
                    )}

                    {isUploading && (
                        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center rounded-lg bg-black">
                            <FaSpinner className="h-6 w-6 animate-spin text-white" />
                        </div>
                    )}
                </div>
            ) : (
                /* Upload Area */
                <div
                    onClick={handleUploadClick}
                    className="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 transition-colors hover:border-blue-400 hover:bg-blue-50"
                >
                    {isUploading ? (
                        <FaSpinner className="h-6 w-6 animate-spin text-blue-500" />
                    ) : (
                        <>
                            <FaUpload className="mb-2 h-6 w-6 text-gray-400" />
                            <span className="text-center text-xs text-gray-500">
                                Click to upload
                            </span>
                        </>
                    )}
                </div>
            )}

            {/* File Input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={isUploading}
            />

            {/* Upload Button */}
            {!previewUrl && (
                <button
                    type="button"
                    onClick={handleUploadClick}
                    disabled={isUploading}
                    className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <FaUpload className="mr-2" />
                    {isUploading ? "Uploading..." : "Upload Image"}
                </button>
            )}

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Help Text */}
            <p className="text-xs text-gray-500">
                Supported formats: JPEG, PNG, WebP, GIF. Max size: 5MB.
                <br />
                Recommended: Square images (400x400px) for best results.
            </p>
        </div>
    );
}
