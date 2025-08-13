"use client";

import { useState } from "react";
import { FaTimes, FaUpload, FaCheck } from "react-icons/fa";
import { JobApplicationInput } from "@/lib/schemas/admin";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
}

interface JobApplicationModalProps {
    job: Job;
    onClose: () => void;
}

export default function JobApplicationModal({
    job,
    onClose,
}: JobApplicationModalProps) {
    const [formData, setFormData] = useState<Partial<JobApplicationInput>>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedinUrl: "",
        portfolioUrl: "",
        coverLetter: "",
        resumeUrl: "",
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<
        Record<string, string>
    >({});
    const [success, setSuccess] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear validation error when user starts typing
        if (validationErrors[name]) {
            setValidationErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type and size
            if (file.type !== "application/pdf") {
                setUploadError("Only PDF files are allowed");
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                setUploadError("File size must be less than 10MB");
                return;
            }

            setResumeFile(file);
            setUploadError(null);
        }
    };

    const uploadResume = async (): Promise<string | null> => {
        if (!resumeFile) return null;

        setIsUploading(true);
        setUploadError(null);

        try {
            const formData = new FormData();
            formData.append("file", resumeFile);

            const response = await fetch("/api/upload/resume", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to upload resume");
            }

            return result.url;
        } catch (error: unknown) {
            setUploadError(
                error instanceof Error ? error.message : "Upload failed"
            );
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setValidationErrors({});

        try {
            setIsSubmitting(true);

            // Upload resume first
            let resumeUrl = formData.resumeUrl;
            if (resumeFile && !resumeUrl) {
                const uploadedUrl = await uploadResume();
                if (!uploadedUrl) {
                    return; // Upload failed, error already set
                }
                resumeUrl = uploadedUrl;
            }

            if (!resumeUrl) {
                setSubmitError("Please upload your resume");
                return;
            }

            // Submit application
            const applicationData = {
                ...formData,
                resumeUrl,
            };

            const response = await fetch(`/api/jobs/${job.id}/apply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(applicationData),
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.details) {
                    // Validation errors
                    const errors: Record<string, string> = {};
                    result.details.forEach(
                        (detail: { field: string; message: string }) => {
                            errors[detail.field] = detail.message;
                        }
                    );
                    setValidationErrors(errors);
                    return;
                }
                throw new Error(result.error || "Failed to submit application");
            }

            setSuccess(true);
        } catch (error: unknown) {
            setSubmitError(
                error instanceof Error ? error.message : "Submission failed"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
                <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
                    <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <FaCheck className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            Application Submitted!
                        </h3>
                        <p className="mb-6 text-gray-600">
                            Thank you for applying to the {job.title} position.
                            We&apos;ll review your application and get back to
                            you soon.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-green-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="mx-4 h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Apply for {job.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {job.department} • {job.location}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <div
                    className="overflow-y-auto p-6"
                    style={{ maxHeight: "calc(90vh - 80px)" }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {submitError && (
                            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                                <p className="text-sm text-red-600">
                                    {submitError}
                                </p>
                            </div>
                        )}

                        {/* Personal Information */}
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-gray-900">
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.firstName
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.firstName && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.firstName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.lastName
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.lastName && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.lastName}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.email
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone || ""}
                                        onChange={handleInputChange}
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.phone
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.phone && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.phone}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="linkedinUrl"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        LinkedIn Profile
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedinUrl"
                                        name="linkedinUrl"
                                        value={formData.linkedinUrl || ""}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.linkedinUrl
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.linkedinUrl && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.linkedinUrl}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="portfolioUrl"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Portfolio/Website
                                    </label>
                                    <input
                                        type="url"
                                        id="portfolioUrl"
                                        name="portfolioUrl"
                                        value={formData.portfolioUrl || ""}
                                        onChange={handleInputChange}
                                        placeholder="https://yourportfolio.com"
                                        className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                            validationErrors.portfolioUrl
                                                ? "border-red-300"
                                                : "border-gray-300"
                                        }`}
                                    />
                                    {validationErrors.portfolioUrl && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {validationErrors.portfolioUrl}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <h3 className="mb-4 text-lg font-medium text-gray-900">
                                Resume *
                            </h3>
                            <div className="rounded-lg border-2 border-dashed border-gray-300 p-6">
                                <div className="text-center">
                                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="mt-4">
                                        <label
                                            htmlFor="resume"
                                            className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                                        >
                                            {resumeFile
                                                ? "Change Resume"
                                                : "Upload Resume"}
                                        </label>
                                        <input
                                            type="file"
                                            id="resume"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        PDF only (max 10MB)
                                    </p>
                                    {resumeFile && (
                                        <p className="mt-2 text-sm text-green-600">
                                            Selected: {resumeFile.name}
                                        </p>
                                    )}
                                    {uploadError && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {uploadError}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Cover Letter */}
                        <div>
                            <label
                                htmlFor="coverLetter"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Cover Letter (Optional)
                            </label>
                            <textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter || ""}
                                onChange={handleInputChange}
                                rows={6}
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                className={`w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:ring-2 focus:ring-red-500 ${
                                    validationErrors.coverLetter
                                        ? "border-red-300"
                                        : "border-gray-300"
                                }`}
                            />
                            {validationErrors.coverLetter && (
                                <p className="mt-1 text-sm text-red-600">
                                    {validationErrors.coverLetter}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="mb-18 flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg border border-gray-300 px-6 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting || isUploading}
                                className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : isUploading
                                      ? "Uploading..."
                                      : "Submit Application"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
