"use client";

import React, { useState, useEffect, Suspense } from "react";
import { FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
    resetPasswordSchema,
    type ResetPasswordFormData,
} from "@/lib/validations/auth";
import { authToasts } from "@/lib/toast";
import { ZodError } from "zod";

function ResetPasswordContent() {
    const [formData, setFormData] = useState<ResetPasswordFormData>({
        token: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof ResetPasswordFormData, string>>
    >({});
    const [tokenValid, setTokenValid] = useState<boolean | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            setFormData((prev) => ({ ...prev, token }));
            validateToken(token);
        } else {
            setTokenValid(false);
            authToasts.resetPasswordError("No reset token provided");
        }
    }, [searchParams]);

    const validateToken = async (token: string) => {
        try {
            // You could add a token validation endpoint here
            // For now, we'll validate it when the form is submitted
            setTokenValid(true);
        } catch (error) {
            setTokenValid(false);
            authToasts.resetPasswordError("Invalid reset token");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error for this field when user starts typing
        if (errors[name as keyof ResetPasswordFormData]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const validateForm = () => {
        try {
            resetPasswordSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors: Partial<
                    Record<keyof ResetPasswordFormData, string>
                > = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[
                            err.path[0] as keyof ResetPasswordFormData
                        ] = err.message;
                    }
                });
                setErrors(fieldErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            authToasts.resetPasswordError("Please fix the errors below");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                authToasts.resetPasswordSuccess();
                // Redirect to sign-in page after success
                setTimeout(() => {
                    router.push("/auth/sign-in");
                }, 2000);
            } else {
                authToasts.resetPasswordError(data.error);
            }
        } catch (error) {
            console.error("Password reset error:", error);
            authToasts.networkError();
        } finally {
            setIsLoading(false);
        }
    };

    if (tokenValid === false) {
        return (
            <div className="relative min-h-screen w-full overflow-hidden bg-white">
                <div className="flex min-h-screen items-center justify-center px-6">
                    <div className="w-full max-w-md text-center">
                        <Image
                            width={100}
                            height={100}
                            src="/logo_black.svg"
                            alt="DevX Alpha"
                            className="mx-auto h-20 p-2"
                        />
                        <h2 className="font-lato400 mb-4">DevX Alpha</h2>
                        <h1 className="font-montserrat400 mb-6 text-3xl font-bold text-red-600">
                            Invalid Reset Link
                        </h1>
                        <p className="font-montserrat400 mb-6 text-gray-600">
                            This password reset link is invalid or has expired.
                            Please request a new one.
                        </p>
                        <Link
                            href="/auth/forgot-password"
                            className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-6 py-3 text-white transition-colors"
                        >
                            Request New Reset Link
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (tokenValid === null) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                    <p className="mt-4 text-gray-600">
                        Validating reset token...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            <div className="flex min-h-screen items-center justify-center px-6">
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
                            Reset Your Password
                        </h1>
                        <p className="font-montserrat400 mb-6 text-sm text-gray-600">
                            Enter your new password below
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <div
                                className={`flex items-center rounded-lg border px-4 py-3 ${errors.password ? "border-red-400" : "border-gray-300"}`}
                            >
                                <FaLock className="mr-3 text-gray-400" />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="New Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <div
                                className={`flex items-center rounded-lg border px-4 py-3 ${errors.confirmPassword ? "border-red-400" : "border-gray-300"}`}
                            >
                                <FaLock className="mr-3 text-gray-400" />
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-primary hover:bg-primary/90 w-full rounded-lg py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading
                                ? "Resetting Password..."
                                : "Reset Password"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            href="/auth/sign-in"
                            className="text-primary text-sm hover:underline"
                        >
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    <div className="text-center">
                        <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                        <p className="mt-4 text-gray-600">Loading...</p>
                    </div>
                </div>
            }
        >
            <ResetPasswordContent />
        </Suspense>
    );
}
