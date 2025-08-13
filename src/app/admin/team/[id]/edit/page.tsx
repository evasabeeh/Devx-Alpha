"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave, FaTimes, FaTrash } from "react-icons/fa";
import {
    teamMemberFormSchema,
    type TeamMemberFormInput,
} from "@/lib/schemas/team";
import ImageUpload from "@/components/admin/ImageUpload";

export default function EditTeamMemberPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    // const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
    const [teamMemberId, setTeamMemberId] = useState<string>("");

    const [formData, setFormData] = useState<TeamMemberFormInput>({
        name: "",
        position: "",
        bio: "",
        image: "",
        linkedIn: "",
        twitter: "",
        email: "",
        order: 0,
        isActive: true,
    });

    // Load existing team member data
    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const { id } = await params;
                setTeamMemberId(id);

                const response = await fetch(`/api/admin/team/${id}`);
                const data = await response.json();

                if (response.ok) {
                    const member = data.teamMember;
                    setFormData({
                        name: member.name || "",
                        position: member.position || "",
                        bio: member.bio || "",
                        image: member.image || "",
                        linkedIn: member.linkedIn || "",
                        twitter: member.twitter || "",
                        email: member.email || "",
                        order: member.order || 0,
                        isActive: member.isActive,
                    });
                } else {
                    setError(data.error || "Failed to load team member");
                }
            } catch {
                setError("Failed to load team member");
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchTeamMember();
    }, [params]);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else if (type === "number") {
            setFormData((prev) => ({
                ...prev,
                [name]: parseInt(value) || 0,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");

        // Client-side validation using schema
        const validation = teamMemberFormSchema.safeParse(formData);
        if (!validation.success) {
            const errorMessages = validation.error.issues
                .map((err) => err.message)
                .join(", ");
            setError(`Validation failed: ${errorMessages}`);
            setIsLoading(false);
            return;
        }

        try {
            // Transform empty strings to null for optional fields
            const submitData = {
                ...validation.data,
                bio: validation.data.bio || null,
                image: validation.data.image || null,
                linkedIn: validation.data.linkedIn || null,
                twitter: validation.data.twitter || null,
                email: validation.data.email || null,
            };

            const response = await fetch(`/api/admin/team/${teamMemberId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Team member updated successfully!");
                setTimeout(() => {
                    router.push("/admin/team");
                }, 1500);
            } else {
                if (data.details) {
                    // Handle validation errors from server
                    const errorMessages = data.details
                        .map(
                            (detail: { field: string; message: string }) =>
                                `${detail.field}: ${detail.message}`
                        )
                        .join(", ");
                    setError(`Validation failed: ${errorMessages}`);
                } else {
                    setError(data.error || "Failed to update team member");
                }
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (
            !confirm(
                "Are you sure you want to delete this team member? This action cannot be undone."
            )
        ) {
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch(`/api/admin/team/${teamMemberId}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (response.ok) {
                router.push("/admin/team");
            } else {
                setError(data.error || "Failed to delete team member");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoadingData) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading team member...</div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        href="/admin/team"
                        className="mr-4 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                        <FaArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Edit Team Member
                        </h1>
                        <p className="text-gray-600">
                            Update team member information
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleDelete}
                    disabled={isLoading}
                    className="flex items-center rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <FaTrash className="mr-2" />
                    Delete
                </button>
            </div>

            <div className="max-w-2xl">
                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg border bg-white p-6 shadow-sm"
                >
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

                    {/* Image Upload */}
                    <ImageUpload
                        currentImage={formData.image}
                        onImageChange={(imageUrl) =>
                            setFormData((prev) => ({
                                ...prev,
                                image: imageUrl,
                            }))
                        }
                        folder="devx-alpha/team-members"
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter full name"
                            />
                        </div>

                        {/* Position */}
                        <div>
                            <label
                                htmlFor="position"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Position *
                            </label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Senior Developer"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="email@example.com"
                            />
                        </div>

                        {/* Order */}
                        <div>
                            <label
                                htmlFor="order"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Display Order
                            </label>
                            <input
                                type="number"
                                id="order"
                                name="order"
                                value={formData.order}
                                onChange={handleInputChange}
                                min="0"
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6">
                        <label
                            htmlFor="bio"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="Brief description about the team member..."
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mt-6">
                        <label
                            htmlFor="image"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="linkedIn"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                LinkedIn URL
                            </label>
                            <input
                                type="url"
                                id="linkedIn"
                                name="linkedIn"
                                value={formData.linkedIn}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="https://linkedin.com/in/username"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="twitter"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Twitter URL
                            </label>
                            <input
                                type="url"
                                id="twitter"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="https://twitter.com/username"
                            />
                        </div>
                    </div>

                    {/* Active Status */}
                    <div className="mt-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleInputChange}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700">
                                Active (visible on website)
                            </span>
                        </label>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-8 flex gap-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <FaSave className="mr-2" />
                            {isLoading ? "Saving..." : "Update Team Member"}
                        </button>

                        <Link
                            href="/admin/team"
                            className="flex items-center rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-300"
                        >
                            <FaTimes className="mr-2" />
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
