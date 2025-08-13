"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import JobForm from "@/components/admin/JobForm";
import { JobFormInput } from "@/lib/schemas/admin";

export default function NewJobPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (data: JobFormInput) => {
        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            const response = await fetch("/api/admin/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.details) {
                    // Validation errors
                    throw { details: result.details };
                }
                throw new Error(result.error || "Failed to create job");
            }

            setSuccess("Job created successfully!");

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
                <h1 className="text-3xl font-bold text-gray-900">
                    Create New Job
                </h1>
                <p className="text-gray-600">Add a new job posting</p>
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
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        submitButtonText="Create Job"
                    />
                </div>
            </div>
        </div>
    );
}
