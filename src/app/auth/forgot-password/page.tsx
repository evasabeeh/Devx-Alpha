"use client";

import React, { useState } from "react";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AuthGuard from "@/components/AuthGuard";
import { type ForgotPasswordFormData } from "@/lib/validations/auth";
import { authToasts } from "@/lib/toast";

function ForgotPasswordContent() {
    const [formData, setFormData] = useState<ForgotPasswordFormData>({
        email: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof ForgotPasswordFormData, string>>
    >({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrors({ email: "Please enter a valid email address" });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                authToasts.forgotPasswordError(
                    data.error || "Something went wrong. Please try again."
                );
            }
        } catch {
            authToasts.networkError();
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="relative w-full overflow-hidden bg-white">
                <div className="relative z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:px-10 lg:mx-20">
                    <div className="mt-10 w-full px-6 md:mt-0 md:w-1/2">
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
                                Check Your Email
                            </h1>
                        </div>

                        <div className="text-center">
                            <div className="mb-6 flex justify-center">
                                <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                                    <FaEnvelope className="text-primary text-2xl" />
                                </div>
                            </div>
                            <p className="font-montserrat400 mb-6 text-gray-600">
                                We&apos;ve sent a password reset link to{" "}
                                <span className="font-semibold text-black">
                                    {formData.email}
                                </span>
                            </p>
                            <p className="font-montserrat400 mb-8 text-sm text-gray-500">
                                Didn&apos;t receive the email? Check your spam
                                folder or{" "}
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ email: "" });
                                    }}
                                    className="text-primary hover:underline"
                                >
                                    try again
                                </button>
                            </p>
                            <Link
                                href="/auth/sign-in"
                                className="font-lato400 bg-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white hover:bg-red-900"
                            >
                                <FaArrowLeft className="text-sm" />
                                Back to Sign In
                            </Link>
                        </div>
                    </div>

                    <div className="relative mt-20 mb-10 flex w-full items-center justify-center sm:mb-0 md:mx-10 md:mb-20 md:w-1/2 lg:mx-30">
                        <Image
                            height={400}
                            width={400}
                            src="/signin-hero.jpg"
                            alt="Forgot Password Visual"
                            className="z-0 w-full object-contain"
                        />
                        <div className="absolute inset-0 z-10 bg-black/50" />
                        <div className="absolute z-20 px-6 text-white md:px-20">
                            <h2 className="font-lato400 mb-4 text-5xl leading-tight font-bold">
                                We&apos;ve Got You Covered
                            </h2>
                            <p className="font-montserrat400 max-w-md text-sm font-light">
                                Password reset instructions are on their way.
                                Check your email and follow the link to create a
                                new password.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden bg-white">
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:px-10 lg:mx-20">
                <div className="mt-10 w-full px-6 md:mt-0 md:w-1/2">
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
                            Forgot Password
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="font-lato400 space-y-3"
                    >
                        <p className="font-montserrat400 mb-6 text-center text-sm text-gray-600">
                            Enter your email address and we&apos;ll send you a
                            link to reset your password.
                        </p>

                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaEnvelope className="text-gray-400" />
                            </span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ email: e.target.value })
                                }
                                className="w-full bg-transparent focus:outline-none"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {errors.email && (
                            <p className="text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="font-lato400 bg-primary mt-4 w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? "Sending..." : "Send Reset Link"}
                        </button>

                        <div className="mt-6 text-center">
                            <Link
                                href="/auth/sign-in"
                                className="font-montserrat400 text-primary inline-flex items-center gap-2 text-sm hover:underline"
                            >
                                <FaArrowLeft className="text-xs" />
                                Back to Sign In
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="relative mt-20 mb-10 flex w-full items-center justify-center sm:mb-0 md:mx-10 md:mb-20 md:w-1/2 lg:mx-30">
                    <Image
                        height={400}
                        width={400}
                        src="/signin-hero.jpg"
                        alt="Forgot Password Visual"
                        className="z-0 w-full object-contain"
                    />
                    <div className="absolute inset-0 z-10 bg-black/50" />
                    <div className="absolute z-20 px-6 text-white md:px-20">
                        <h2 className="font-lato400 mb-4 text-5xl leading-tight font-bold">
                            Reset Your Password
                        </h2>
                        <p className="font-montserrat400 max-w-md text-sm font-light">
                            Don&apos;t worry, it happens to the best of us.
                            Enter your email and we&apos;ll help you get back
                            into your account.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ForgotPasswordPage() {
    return (
        <AuthGuard requireAuth={false} redirectTo="/profile">
            <ForgotPasswordContent />
        </AuthGuard>
    );
}
