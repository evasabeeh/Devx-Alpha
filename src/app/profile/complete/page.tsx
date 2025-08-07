"use client";

import React, { useState, useEffect } from "react";
import { FaBuilding, FaPhone, FaImage } from "react-icons/fa";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfileCompletePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [formData, setFormData] = useState({
        company: "",
        phone: "",
        image: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.push("/auth/sign-in");
            return;
        }

        // Check if user's email is verified
        // This would need to be implemented based on your user data structure
    }, [session, status, router]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("/api/profile/complete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Profile completed successfully!");
                setTimeout(() => {
                    router.push("/profile");
                }, 2000);
            } else {
                setError(data.error || "Failed to update profile");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSkip = () => {
        router.push("/profile");
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

    if (!session) {
        return null;
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <Image
                            width={100}
                            height={100}
                            src="/logo_black.svg"
                            alt="DevX Alpha"
                            className="mx-auto h-20 p-2"
                        />
                        <h2 className="font-lato400">DevX Alpha</h2>
                        <p className="font-montserrat400 text-sm">
                            This is the start of something good
                        </p>
                        <h1 className="font-montserrat400 my-10 text-3xl font-bold">
                            Complete Your Profile
                        </h1>
                        <p className="font-montserrat400 mb-6 text-sm text-gray-600">
                            Welcome, {session.user?.name}! Let&apos;s add some
                            additional information to your profile.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="font-lato400 space-y-4"
                    >
                        {error && (
                            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-600">
                                {success}
                            </div>
                        )}

                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaBuilding className="text-gray-400" />
                            </span>
                            <input
                                name="company"
                                type="text"
                                placeholder="Company Name (Optional)"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full bg-transparent focus:outline-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaPhone className="text-gray-400" />
                            </span>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number (Optional)"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full bg-transparent focus:outline-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaImage className="text-gray-400" />
                            </span>
                            <input
                                name="image"
                                type="url"
                                placeholder="Profile Image URL (Optional)"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full bg-transparent focus:outline-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="font-lato400 bg-primary flex-1 rounded-2xl py-3 font-semibold text-white hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isLoading ? "Saving..." : "Complete Profile"}
                            </button>

                            <button
                                type="button"
                                onClick={handleSkip}
                                disabled={isLoading}
                                className="font-lato400 flex-1 rounded-2xl border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Skip for Now
                            </button>
                        </div>

                        <p className="font-montserrat400 mt-4 text-center text-xs text-gray-500">
                            You can always update this information later in your
                            profile settings.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
