"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
    FaArrowLeft,
    FaDownload,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGlobe,
} from "react-icons/fa";

interface JobApplication {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    linkedinUrl?: string;
    portfolioUrl?: string;
    coverLetter?: string;
    resumeUrl: string;
    status: string;
    adminNotes?: string;
    reviewedBy?: string;
    reviewedAt?: string;
    createdAt: string;
    job: {
        id: string;
        title: string;
        department: string;
        location: string;
        type: string;
        description: string;
        requirements: string;
        salary?: string;
    };
}

export default function ApplicationDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const [applicationId, setApplicationId] = useState<string | null>(null);
    const [application, setApplication] = useState<JobApplication | null>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState("");
    const [adminNotes, setAdminNotes] = useState("");

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setApplicationId(resolvedParams.id);
        };
        getParams();
    }, [params]);

    const fetchApplication = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `/api/admin/applications/${applicationId}`
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch application");
            }

            setApplication(data.application);
            setStatus(data.application.status);
            setAdminNotes(data.application.adminNotes || "");
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setLoading(false);
        }
    }, [applicationId]);

    useEffect(() => {
        if (applicationId) {
            fetchApplication();
        }
    }, [applicationId, fetchApplication]);

    const handleStatusUpdate = async () => {
        if (!application) return;

        try {
            setUpdating(true);
            const response = await fetch(
                `/api/admin/applications/${application.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        status,
                        adminNotes: adminNotes || null,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to update application");
            }

            // Refresh application data
            await fetchApplication();
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setUpdating(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "reviewing":
                return "bg-blue-100 text-blue-800";
            case "shortlisted":
                return "bg-green-100 text-green-800";
            case "rejected":
                return "bg-red-100 text-red-800";
            case "hired":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatStatus = (status: string) => {
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const handleDownload = async (applicationId: string) => {
        try {
            // Use our server-side download endpoint
            const downloadUrl = `/api/admin/applications/${applicationId}/download-resume`;

            // Create a temporary link and click it to trigger download
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Download failed:", error);
            // Fallback: open the original resume URL in new tab
            if (application) {
                window.open(application.resumeUrl, "_blank");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading application...</div>
            </div>
        );
    }

    if (error && !application) {
        return (
            <div>
                <Link
                    href="/admin/applications"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Applications
                </Link>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    if (!application) {
        return (
            <div>
                <Link
                    href="/admin/applications"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Applications
                </Link>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-gray-600">Application not found</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <Link
                    href="/admin/applications"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Applications
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {application.firstName} {application.lastName}
                        </h1>
                        <p className="text-gray-600">
                            Application for {application.job.title}
                        </p>
                    </div>
                    <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(
                            application.status
                        )}`}
                    >
                        {formatStatus(application.status)}
                    </span>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Content */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Candidate Information */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Candidate Information
                        </h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex items-center">
                                <FaUser className="mr-3 h-5 w-5 text-gray-400" />
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {application.firstName}{" "}
                                        {application.lastName}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Full Name
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 h-5 w-5 text-gray-400" />
                                <div>
                                    <div className="font-medium text-gray-900">
                                        <a
                                            href={`mailto:${application.email}`}
                                            className="text-blue-600 hover:text-blue-700"
                                        >
                                            {application.email}
                                        </a>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Email
                                    </div>
                                </div>
                            </div>
                            {application.phone && (
                                <div className="flex items-center">
                                    <FaPhone className="mr-3 h-5 w-5 text-gray-400" />
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            <a
                                                href={`tel:${application.phone}`}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                {application.phone}
                                            </a>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Phone
                                        </div>
                                    </div>
                                </div>
                            )}
                            {application.linkedinUrl && (
                                <div className="flex items-center">
                                    <FaLinkedin className="mr-3 h-5 w-5 text-gray-400" />
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            <a
                                                href={application.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            LinkedIn
                                        </div>
                                    </div>
                                </div>
                            )}
                            {application.portfolioUrl && (
                                <div className="flex items-center">
                                    <FaGlobe className="mr-3 h-5 w-5 text-gray-400" />
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            <a
                                                href={application.portfolioUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                Portfolio/Website
                                            </a>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Portfolio
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Resume */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Resume
                        </h2>
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center">
                                <FaDownload className="mr-3 h-5 w-5 text-gray-400" />
                                <div>
                                    <div className="font-medium text-gray-900">
                                        Resume.pdf
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Uploaded on{" "}
                                        {formatDate(application.createdAt)}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDownload(application.id)}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                            >
                                Download
                            </button>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    {application.coverLetter && (
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-semibold text-gray-900">
                                Cover Letter
                            </h2>
                            <div className="prose max-w-none">
                                <p className="whitespace-pre-wrap text-gray-700">
                                    {application.coverLetter}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
                        {/* Job Information */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                Job Information
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {application.job.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Position
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {application.job.department}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Department
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {application.job.location}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Location
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {application.job.type}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Type
                                    </div>
                                </div>
                                {application.job.salary && (
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            {application.job.salary}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Salary
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Application Status */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                Update Status
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="status"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="reviewing">
                                            Reviewing
                                        </option>
                                        <option value="shortlisted">
                                            Shortlisted
                                        </option>
                                        <option value="rejected">
                                            Rejected
                                        </option>
                                        <option value="hired">Hired</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="adminNotes"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Admin Notes
                                    </label>
                                    <textarea
                                        id="adminNotes"
                                        value={adminNotes}
                                        onChange={(e) =>
                                            setAdminNotes(e.target.value)
                                        }
                                        rows={4}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        placeholder="Add notes about this application..."
                                    />
                                </div>
                                <button
                                    onClick={handleStatusUpdate}
                                    disabled={updating}
                                    className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {updating
                                        ? "Updating..."
                                        : "Update Application"}
                                </button>
                            </div>
                        </div>

                        {/* Application Timeline */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                Application Timeline
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="font-medium text-gray-900">
                                        Applied
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {formatDate(application.createdAt)}
                                    </div>
                                </div>
                                {application.reviewedAt && (
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            Last Reviewed
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {formatDate(application.reviewedAt)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
