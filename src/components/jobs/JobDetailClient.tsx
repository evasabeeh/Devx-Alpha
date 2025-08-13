"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaBuilding,
    FaClock,
    FaDollarSign,
} from "react-icons/fa";
import JobApplicationModal from "./JobApplicationModal";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string;
    salary?: string;
    createdAt: string;
    updatedAt: string;
}

interface JobDetailClientProps {
    job: Job;
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
    const [showApplicationModal, setShowApplicationModal] = useState(false);

    const formatJobType = (type: string) => {
        return type
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("-");
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8">
                {/* Back Button */}
                <Link
                    href="/career"
                    className="mb-6 inline-flex items-center text-red-600 transition-colors hover:text-red-700"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Careers
                </Link>

                {/* Job Header */}
                <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {job.title}
                        </h1>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-gray-600">
                            <div className="flex items-center">
                                <FaBuilding className="mr-2 h-4 w-4" />
                                {job.department}
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-2 h-4 w-4" />
                                {job.location}
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-2 h-4 w-4" />
                                {formatJobType(job.type)}
                            </div>
                            {job.salary && (
                                <div className="flex items-center">
                                    <FaDollarSign className="mr-2 h-4 w-4" />
                                    {job.salary}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            Posted on {formatDate(job.createdAt)}
                        </div>
                        <button
                            onClick={() => setShowApplicationModal(true)}
                            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                {/* Job Content */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Job Description */}
                        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-semibold text-gray-900">
                                Job Description
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ children }) => (
                                            <h1 className="mb-4 text-2xl font-bold text-gray-900">
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 className="mt-6 mb-3 text-xl font-semibold text-gray-900">
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="mt-4 mb-2 text-lg font-medium text-gray-900">
                                                {children}
                                            </h3>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="list-inside list-disc space-y-1 text-gray-700">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="list-inside list-decimal space-y-1 text-gray-700">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-gray-700">
                                                {children}
                                            </li>
                                        ),
                                        p: ({ children }) => (
                                            <p className="mb-4 leading-relaxed text-gray-700">
                                                {children}
                                            </p>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-semibold text-gray-900">
                                                {children}
                                            </strong>
                                        ),
                                        code: ({ children }) => (
                                            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                                                {children}
                                            </code>
                                        ),
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-red-200 pl-4 text-gray-600 italic">
                                                {children}
                                            </blockquote>
                                        ),
                                    }}
                                >
                                    {job.description}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h2 className="mb-4 text-xl font-semibold text-gray-900">
                                Requirements
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ children }) => (
                                            <h1 className="mb-4 text-2xl font-bold text-gray-900">
                                                {children}
                                            </h1>
                                        ),
                                        h2: ({ children }) => (
                                            <h2 className="mt-6 mb-3 text-xl font-semibold text-gray-900">
                                                {children}
                                            </h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="mt-4 mb-2 text-lg font-medium text-gray-900">
                                                {children}
                                            </h3>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="list-inside list-disc space-y-1 text-gray-700">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="list-inside list-decimal space-y-1 text-gray-700">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="text-gray-700">
                                                {children}
                                            </li>
                                        ),
                                        p: ({ children }) => (
                                            <p className="mb-4 leading-relaxed text-gray-700">
                                                {children}
                                            </p>
                                        ),
                                        strong: ({ children }) => (
                                            <strong className="font-semibold text-gray-900">
                                                {children}
                                            </strong>
                                        ),
                                        code: ({ children }) => (
                                            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                                                {children}
                                            </code>
                                        ),
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-red-200 pl-4 text-gray-600 italic">
                                                {children}
                                            </blockquote>
                                        ),
                                    }}
                                >
                                    {job.requirements}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            {/* Apply Card */}
                            <div className="rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                    Ready to Apply?
                                </h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Join our team and help us build the future
                                    of technology.
                                </p>
                                <button
                                    onClick={() =>
                                        setShowApplicationModal(true)
                                    }
                                    className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                                >
                                    Apply for this Position
                                </button>
                            </div>

                            {/* Job Info */}
                            <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                                    Job Information
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Department:
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {job.department}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Location:
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {job.location}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Type:
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {formatJobType(job.type)}
                                        </span>
                                    </div>
                                    {job.salary && (
                                        <div>
                                            <span className="font-medium text-gray-900">
                                                Salary:
                                            </span>
                                            <span className="ml-2 text-gray-600">
                                                {job.salary}
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <span className="font-medium text-gray-900">
                                            Posted:
                                        </span>
                                        <span className="ml-2 text-gray-600">
                                            {formatDate(job.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showApplicationModal && (
                <JobApplicationModal
                    job={job}
                    onClose={() => setShowApplicationModal(false)}
                />
            )}
        </div>
    );
}
