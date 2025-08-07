"use client";

import React, { useState, useEffect } from "react";
import {
    FaUser,
    FaEnvelope,
    FaBuilding,
    FaPhone,
    FaImage,
    FaEdit,
    FaSave,
    FaTimes,
    FaSignOutAlt,
} from "react-icons/fa";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserProfile {
    id: string;
    email: string;
    name: string | null;
    company: string | null;
    phone: string | null;
    image: string | null;
    emailVerified: Date | null;
}

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [editData, setEditData] = useState({
        name: "",
        company: "",
        phone: "",
        image: "",
    });

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.push("/auth/sign-in");
            return;
        }

        fetchProfile();
    }, [session, status, router]);

    const fetchProfile = async () => {
        try {
            const response = await fetch("/api/profile");
            if (response.ok) {
                const data = await response.json();
                setProfile(data.user);
                setEditData({
                    name: data.user.name || "",
                    company: data.user.company || "",
                    phone: data.user.phone || "",
                    image: data.user.image || "",
                });
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
        setError("");
        setSuccess("");
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditData({
            name: profile?.name || "",
            company: profile?.company || "",
            phone: profile?.phone || "",
            image: profile?.image || "",
        });
        setError("");
        setSuccess("");
    };

    const handleSave = async () => {
        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editData),
            });

            const data = await response.json();

            if (response.ok) {
                setProfile(data.user);
                setIsEditing(false);
                setSuccess("Profile updated successfully!");
                setTimeout(() => setSuccess(""), 3000);
            } else {
                setError(data.error || "Failed to update profile");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!session || !profile) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-4xl px-6">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                    {/* Header */}
                    <div className="bg-primary px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                    {profile.image ? (
                                        <Image
                                            src={profile.image}
                                            alt="Profile"
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                    ) : (
                                        <FaUser className="text-2xl text-white" />
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">
                                        {profile.name || "User"}
                                    </h1>
                                    <p className="text-white/80">
                                        {profile.email}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center space-x-2 rounded-lg bg-white/20 px-4 py-2 text-white transition-colors hover:bg-white/30"
                            >
                                <FaSignOutAlt />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {error && (
                            <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-600">
                                {success}
                            </div>
                        )}

                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Profile Information
                            </h2>
                            {!isEditing ? (
                                <button
                                    onClick={handleEdit}
                                    className="bg-primary flex items-center space-x-2 rounded-lg px-4 py-2 text-white transition-colors hover:bg-red-900"
                                >
                                    <FaEdit />
                                    <span>Edit Profile</span>
                                </button>
                            ) : (
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handleSave}
                                        disabled={isLoading}
                                        className="flex items-center space-x-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                                    >
                                        <FaSave />
                                        <span>
                                            {isLoading ? "Saving..." : "Save"}
                                        </span>
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        disabled={isLoading}
                                        className="flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700 disabled:opacity-50"
                                    >
                                        <FaTimes />
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                {isEditing ? (
                                    <div className="flex items-center rounded-lg border px-4 py-3">
                                        <FaUser className="mr-3 text-gray-400" />
                                        <input
                                            name="name"
                                            type="text"
                                            value={editData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent focus:outline-none"
                                            disabled={isLoading}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center rounded-lg bg-gray-50 px-4 py-3">
                                        <FaUser className="mr-3 text-gray-400" />
                                        <span className="text-gray-900">
                                            {profile.name || "Not provided"}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="flex items-center rounded-lg bg-gray-50 px-4 py-3">
                                    <FaEnvelope className="mr-3 text-gray-400" />
                                    <span className="text-gray-900">
                                        {profile.email}
                                    </span>
                                    {profile.emailVerified && (
                                        <span className="ml-2 rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                                            Verified
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Company */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                {isEditing ? (
                                    <div className="flex items-center rounded-lg border px-4 py-3">
                                        <FaBuilding className="mr-3 text-gray-400" />
                                        <input
                                            name="company"
                                            type="text"
                                            value={editData.company}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent focus:outline-none"
                                            placeholder="Company name"
                                            disabled={isLoading}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center rounded-lg bg-gray-50 px-4 py-3">
                                        <FaBuilding className="mr-3 text-gray-400" />
                                        <span className="text-gray-900">
                                            {profile.company || "Not provided"}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                {isEditing ? (
                                    <div className="flex items-center rounded-lg border px-4 py-3">
                                        <FaPhone className="mr-3 text-gray-400" />
                                        <input
                                            name="phone"
                                            type="tel"
                                            value={editData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent focus:outline-none"
                                            placeholder="Phone number"
                                            disabled={isLoading}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center rounded-lg bg-gray-50 px-4 py-3">
                                        <FaPhone className="mr-3 text-gray-400" />
                                        <span className="text-gray-900">
                                            {profile.phone || "Not provided"}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Profile Image */}
                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Profile Image URL
                                </label>
                                {isEditing ? (
                                    <div className="flex items-center rounded-lg border px-4 py-3">
                                        <FaImage className="mr-3 text-gray-400" />
                                        <input
                                            name="image"
                                            type="url"
                                            value={editData.image}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent focus:outline-none"
                                            placeholder="https://example.com/image.jpg"
                                            disabled={isLoading}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center rounded-lg bg-gray-50 px-4 py-3">
                                        <FaImage className="mr-3 text-gray-400" />
                                        <span className="text-gray-900">
                                            {profile.image || "Not provided"}
                                        </span>
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
