"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    salary?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/admin/jobs");
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch jobs");
            }

            setJobs(data.jobs);
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            setDeleteLoading(id);
            const response = await fetch(`/api/admin/jobs/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to delete job");
            }

            // Remove job from state
            setJobs((prev) => prev.filter((job) => job.id !== id));
        } catch (error: unknown) {
            alert(
                `Error deleting job: ${error instanceof Error ? error.message : "An error occurred"}`
            );
        } finally {
            setDeleteLoading(null);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const formatJobType = (type: string) => {
        return type
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("-");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading jobs...</div>
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
                    <h1 className="text-3xl font-bold text-gray-900">Jobs</h1>
                    <p className="text-gray-600">Manage job postings</p>
                </div>
                <Link
                    href="/admin/jobs/new"
                    className="flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                    <FaPlus className="mr-2" />
                    Add Job
                </Link>
            </div>

            {jobs.length > 0 ? (
                <div className="rounded-lg border bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Job Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Department
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Location
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Created
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {jobs.map((job) => (
                                    <tr
                                        key={job.id}
                                        className="transition-colors hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-medium text-gray-900">
                                                    {job.title}
                                                </div>
                                                {job.salary && (
                                                    <div className="text-sm text-gray-500">
                                                        {job.salary}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {job.department}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {job.location}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {formatJobType(job.type)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    job.isActive
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-gray-100 text-gray-800"
                                                }`}
                                            >
                                                {job.isActive ? (
                                                    <>
                                                        <FaEye className="mr-1 h-3 w-3" />
                                                        Active
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaEyeSlash className="mr-1 h-3 w-3" />
                                                        Inactive
                                                    </>
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {formatDate(job.createdAt)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Link
                                                    href={`/admin/jobs/${job.id}/edit`}
                                                    className="rounded p-1 text-blue-600 transition-colors hover:bg-blue-100"
                                                    title="Edit job"
                                                >
                                                    <FaEdit className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            job.id,
                                                            job.title
                                                        )
                                                    }
                                                    disabled={
                                                        deleteLoading === job.id
                                                    }
                                                    className="rounded p-1 text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                                                    title="Delete job"
                                                >
                                                    <FaTrash className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                        <FaPlus className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        No Jobs Posted
                    </h3>
                    <p className="mb-6 text-gray-600">
                        Get started by creating your first job posting.
                    </p>
                    <Link
                        href="/admin/jobs/new"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        <FaPlus className="mr-2" />
                        Add Job
                    </Link>
                </div>
            )}
        </div>
    );
}
