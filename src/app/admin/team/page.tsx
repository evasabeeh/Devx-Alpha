"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

interface TeamMember {
    id: string;
    name: string;
    position: string;
    bio: string | null;
    image: string | null;
    linkedIn: string | null;
    twitter: string | null;
    email: string | null;
    order: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export default function AdminTeamPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch team members
    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch("/api/admin/team");
                const data = await response.json();

                if (response.ok) {
                    setTeamMembers(data.teamMembers);
                } else {
                    setError(data.error || "Failed to load team members");
                }
            } catch {
                setError("Failed to load team members");
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    const handleDelete = async (id: string, name: string) => {
        if (
            !confirm(
                `Are you sure you want to delete ${name}? This action cannot be undone.`
            )
        ) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/team/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Remove from local state
                setTeamMembers((prev) =>
                    prev.filter((member) => member.id !== id)
                );
            } else {
                const data = await response.json();
                alert(data.error || "Failed to delete team member");
            }
        } catch {
            alert("Failed to delete team member");
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-gray-600">Loading team members...</div>
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
                        Team Members
                    </h1>
                    <p className="text-gray-600">Manage your team members</p>
                </div>
                <Link
                    href="/admin/team/new"
                    className="flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                    <FaPlus className="mr-2" />
                    Add Team Member
                </Link>
            </div>

            {teamMembers.length > 0 ? (
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                                        Position
                                    </th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                                        Order
                                    </th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamMembers.map((member) => (
                                    <tr
                                        key={member.id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center">
                                                {member.image ? (
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        width={40}
                                                        height={40}
                                                        className="mr-3 h-10 w-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                        <span className="font-semibold text-blue-600">
                                                            {member.name.charAt(
                                                                0
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-medium text-gray-900">
                                                        {member.name}
                                                    </div>
                                                    {member.email && (
                                                        <div className="text-sm text-gray-500">
                                                            {member.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-900">
                                            {member.position}
                                        </td>
                                        <td className="px-4 py-3 text-gray-900">
                                            {member.order}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                                    member.isActive
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {member.isActive ? (
                                                    <>
                                                        <FaEye className="mr-1" />
                                                        Active
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaEyeSlash className="mr-1" />
                                                        Inactive
                                                    </>
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex space-x-2">
                                                <Link
                                                    href={`/admin/team/${member.id}/edit`}
                                                    className="p-1 text-blue-600 hover:text-blue-800"
                                                    title="Edit"
                                                >
                                                    <FaEdit className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            member.id,
                                                            member.name
                                                        )
                                                    }
                                                    className="p-1 text-red-600 hover:text-red-800"
                                                    title="Delete"
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
                        No Team Members
                    </h3>
                    <p className="mb-6 text-gray-600">
                        Get started by adding your first team member.
                    </p>
                    <Link
                        href="/admin/team/new"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        <FaPlus className="mr-2" />
                        Add Team Member
                    </Link>
                </div>
            )}
        </div>
    );
}
