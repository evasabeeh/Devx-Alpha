"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import JobForm from "@/components/admin/JobForm";
import { JobFormInput } from "@/lib/schemas/admin";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "full-time" | "part-time" | "contract" | "internship";
    description: string;
    requirements: string;
    salary?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export default function EditJobPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const router = useRouter();
    const [jobId, setJobId] = useState<string | null>(null);
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setJobId(resolvedParams.id);
        };
        getParams();
    }, [params]);

    const fetchJob = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/admin/jobs/${jobId}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch job");
            }

            setJob(data.job);
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setLoading(false);
        }
    }, [jobId]);

    useEffect(() => {
        if (jobId) {
            fetchJob();
        }
    }, [jobId, fetchJob]);

    const handleSubmit = async (data: JobFormInput) => {
        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            const response = await fetch(`/api/admin/jobs/${jobId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.details) {
                    // Validation errors from Zod schema
                    throw { details: result.details };
                }
                throw new Error(result.error || "Failed to update job");
            }

            setSuccess("Job updated successfully!");

            // Redirect to jobs list after a short delay
            setTimeout(() => {
                router.push("/admin/jobs");
            }, 1500);
        } catch (error: unknown) {
            if (error && typeof error === "object" && "details" in error) {
                // Re-throw validation errors for the form to handle
                throw error;
            }
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setIsLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading job...</div>
            </div>
        );
    }

    if (error && !job) {
        return (
            <div>
                <Link
                    href="/admin/jobs"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Jobs
                </Link>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    if (!job) {
        return (
            <div>
                <Link
                    href="/admin/jobs"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Jobs
                </Link>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-gray-600">Job not found</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <Link
                    href="/admin/jobs"
                    className="mb-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Jobs
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Edit Job</h1>
                <p className="text-gray-600">Update job posting: {job.title}</p>
            </div>

            <div className="max-w-4xl">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    {error && (
                        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}

                    {success && (
                        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                            <p className="text-sm text-green-600">{success}</p>
                        </div>
                    )}

                    <JobForm
                        initialData={{
                            title: job.title,
                            department: job.department,
                            location: job.location,
                            type: job.type,
                            description: job.description,
                            requirements: job.requirements,
                            salary: job.salary || "",
                            isActive: job.isActive,
                        }}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        submitButtonText="Update Job"
                    />
                </div>
            </div>
        </div>
    );
}
