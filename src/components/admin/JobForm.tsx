"use client";

import { useState } from "react";
import { JobFormInput } from "@/lib/schemas/admin";

interface JobFormProps {
    initialData?: Partial<JobFormInput>;
    onSubmit: (data: JobFormInput) => Promise<void>;
    isLoading?: boolean;
    submitButtonText?: string;
}

export default function JobForm({
    initialData,
    onSubmit,
    isLoading = false,
    submitButtonText = "Create Job",
}: JobFormProps) {
    const [formData, setFormData] = useState<JobFormInput>({
        title: initialData?.title || "",
        department: initialData?.department || "",
        location: initialData?.location || "",
        type: initialData?.type || "full-time",
        description: initialData?.description || "",
        requirements: initialData?.requirements || "",
        salary: initialData?.salary || "",
        isActive: initialData?.isActive ?? true,
    });

    const [validationErrors, setValidationErrors] = useState<
        Record<string, string>
    >({});

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));

        // Clear validation error when user starts typing
        if (validationErrors[name]) {
            setValidationErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationErrors({});

        try {
            await onSubmit(formData);
        } catch (error: unknown) {
            if (error && typeof error === "object" && "details" in error) {
                const errorWithDetails = error as {
                    details: { field: string; message: string }[];
                };
                if (Array.isArray(errorWithDetails.details)) {
                    const errors: Record<string, string> = {};
                    errorWithDetails.details.forEach(
                        (detail: { field: string; message: string }) => {
                            errors[detail.field] = detail.message;
                        }
                    );
                    setValidationErrors(errors);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Job Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                            validationErrors.title
                                ? "border-red-300"
                                : "border-gray-300"
                        }`}
                        placeholder="e.g., Senior Software Engineer"
                    />
                    {validationErrors.title && (
                        <p className="mt-1 text-sm text-red-600">
                            {validationErrors.title}
                        </p>
                    )}
                </div>

                {/* Department */}
                <div>
                    <label
                        htmlFor="department"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Department *
                    </label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                            validationErrors.department
                                ? "border-red-300"
                                : "border-gray-300"
                        }`}
                        placeholder="e.g., Engineering"
                    />
                    {validationErrors.department && (
                        <p className="mt-1 text-sm text-red-600">
                            {validationErrors.department}
                        </p>
                    )}
                </div>

                {/* Location */}
                <div>
                    <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Location *
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                            validationErrors.location
                                ? "border-red-300"
                                : "border-gray-300"
                        }`}
                        placeholder="e.g., Remote, New York, Hybrid"
                    />
                    {validationErrors.location && (
                        <p className="mt-1 text-sm text-red-600">
                            {validationErrors.location}
                        </p>
                    )}
                </div>

                {/* Type */}
                <div>
                    <label
                        htmlFor="type"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Job Type *
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                            validationErrors.type
                                ? "border-red-300"
                                : "border-gray-300"
                        }`}
                    >
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                    {validationErrors.type && (
                        <p className="mt-1 text-sm text-red-600">
                            {validationErrors.type}
                        </p>
                    )}
                </div>

                {/* Salary */}
                <div className="md:col-span-2">
                    <label
                        htmlFor="salary"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Salary (Optional)
                    </label>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={formData.salary || ""}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                            validationErrors.salary
                                ? "border-red-300"
                                : "border-gray-300"
                        }`}
                        placeholder="e.g., $80,000 - $120,000, Competitive, DOE"
                    />
                    {validationErrors.salary && (
                        <p className="mt-1 text-sm text-red-600">
                            {validationErrors.salary}
                        </p>
                    )}
                </div>
            </div>

            {/* Description */}
            <div>
                <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    Job Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                        validationErrors.description
                            ? "border-red-300"
                            : "border-gray-300"
                    }`}
                    placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
                />
                {validationErrors.description && (
                    <p className="mt-1 text-sm text-red-600">
                        {validationErrors.description}
                    </p>
                )}
            </div>

            {/* Requirements */}
            <div>
                <label
                    htmlFor="requirements"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    Requirements *
                </label>
                <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                        validationErrors.requirements
                            ? "border-red-300"
                            : "border-gray-300"
                    }`}
                    placeholder="List the required skills, experience, education, and qualifications..."
                />
                {validationErrors.requirements && (
                    <p className="mt-1 text-sm text-red-600">
                        {validationErrors.requirements}
                    </p>
                )}
            </div>

            {/* Active Status */}
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                    htmlFor="isActive"
                    className="ml-2 text-sm font-medium text-gray-700"
                >
                    Active (visible on career page)
                </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? "Saving..." : submitButtonText}
                </button>
            </div>
        </form>
    );
}
