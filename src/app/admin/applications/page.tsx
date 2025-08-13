"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaEye, FaFilter, FaFileAlt } from "react-icons/fa";

interface JobApplication {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    status: string;
    createdAt: string;
    job: {
        id: string;
        title: string;
        department: string;
        location: string;
        type: string;
    };
}

interface Pagination {
    page: number;
    limit: number;
    total: number;
    pages: number;
}

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<JobApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState("all");
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        limit: 20,
        total: 0,
        pages: 0,
    });

    const fetchApplications = useCallback(async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams({
                status: statusFilter,
                page: pagination.page.toString(),
                limit: pagination.limit.toString(),
            });

            const response = await fetch(`/api/admin/applications?${params}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch applications");
            }

            setApplications(data.applications);
            setPagination(data.pagination);
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setLoading(false);
        }
    }, [statusFilter, pagination.page, pagination.limit]);

    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

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
            month: "short",
            day: "numeric",
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading applications...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Job Applications
                    </h1>
                    <p className="text-gray-600">
                        Manage candidate applications
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    {/* Status Filter */}
                    <div className="flex items-center space-x-2">
                        <FaFilter className="h-4 w-4 text-gray-500" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="shortlisted">Shortlisted</option>
                            <option value="rejected">Rejected</option>
                            <option value="hired">Hired</option>
                        </select>
                    </div>
                </div>
            </div>

            {applications.length > 0 ? (
                <>
                    <div className="rounded-lg border bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Candidate
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Position
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Department
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Applied
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {applications.map((application) => (
                                        <tr
                                            key={application.id}
                                            className="transition-colors hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="font-medium text-gray-900">
                                                        {application.firstName}{" "}
                                                        {application.lastName}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {application.email}
                                                    </div>
                                                    {application.phone && (
                                                        <div className="text-sm text-gray-500">
                                                            {application.phone}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">
                                                    {application.job.title}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {application.job.location} •{" "}
                                                    {application.job.type}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                {application.job.department}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                                                        application.status
                                                    )}`}
                                                >
                                                    {formatStatus(
                                                        application.status
                                                    )}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {formatDate(
                                                    application.createdAt
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <Link
                                                        href={`/admin/applications/${application.id}`}
                                                        className="rounded p-1 text-blue-600 transition-colors hover:bg-blue-100"
                                                        title="View application"
                                                    >
                                                        <FaEye className="h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    {pagination.pages > 1 && (
                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-700">
                                Showing{" "}
                                {(pagination.page - 1) * pagination.limit + 1}{" "}
                                to{" "}
                                {Math.min(
                                    pagination.page * pagination.limit,
                                    pagination.total
                                )}{" "}
                                of {pagination.total} applications
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() =>
                                        setPagination((prev) => ({
                                            ...prev,
                                            page: Math.max(1, prev.page - 1),
                                        }))
                                    }
                                    disabled={pagination.page === 1}
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() =>
                                        setPagination((prev) => ({
                                            ...prev,
                                            page: Math.min(
                                                prev.pages,
                                                prev.page + 1
                                            ),
                                        }))
                                    }
                                    disabled={
                                        pagination.page === pagination.pages
                                    }
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                        <FaFileAlt className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        No Applications Yet
                    </h3>
                    <p className="text-gray-600">
                        Applications will appear here once candidates start
                        applying for your job postings.
                    </p>
                </div>
            )}
        </div>
    );
}
