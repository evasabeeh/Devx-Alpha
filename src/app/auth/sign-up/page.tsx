"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signUpSchema, type SignUpFormData } from "@/lib/validations/auth";
import { authToasts } from "@/lib/toast";
import { ZodError } from "zod";
import AuthGuard from "@/components/AuthGuard";

function SignUpContent() {
    const [formData, setFormData] = useState<SignUpFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof SignUpFormData, string>>
    >({});
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error for this field when user starts typing
        if (errors[name as keyof SignUpFormData]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const validateForm = () => {
        try {
            signUpSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors: Partial<
                    Record<keyof SignUpFormData, string>
                > = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0] as keyof SignUpFormData] =
                            err.message;
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
            authToasts.signUpError("Please fix the errors below");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                authToasts.signUpSuccess();
                // Redirect to sign-in page after success
                setTimeout(() => {
                    router.push("/auth/sign-in?message=check-email");
                }, 2000);
            } else {
                authToasts.signUpError(data.error);
            }
        } catch (error) {
            console.error("Registration error:", error);
            authToasts.networkError();
        } finally {
            setIsLoading(false);
        }
    };

    const handleOAuthSignIn = async (provider: string) => {
        setIsLoading(true);
        console.log(`🔄 Starting OAuth sign-up with ${provider}`);

        try {
            // Temporarily use default redirect behavior to debug
            await signIn(provider, {
                callbackUrl: "/profile/complete",
            });

            // This won't execute if redirect happens
            console.log(`✅ OAuth sign-up initiated`);
        } catch (error) {
            console.error(`❌ OAuth exception:`, error);
            authToasts.oauthError("OAuth sign-up failed. Please try again.");
            setIsLoading(false);
        }
    };
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <Image
                height={500}
                width={500}
                src="/signup-hero.jpg"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-500 sm:object-fill"
            />

            <div className="absolute inset-0 z-0 bg-black/60"></div>

            <div className="relative z-10 flex w-full flex-col items-center justify-between px-4 py-10 md:flex-row">
                <div className="w-full px-6 text-white md:w-1/2 md:px-10 lg:px-20">
                    <div className="mb-6 text-center">
                        <Image
                            width={100}
                            height={100}
                            src="/logo.svg"
                            alt="DevX Alpha"
                            className="mx-auto h-20 p-2"
                        />
                        <h2 className="font-lato400">DevX Alpha</h2>
                        <p className="font-montserrat400 text-sm">
                            This is the start of something good
                        </p>
                        <h1 className="font-montserrat400 mt-2 text-3xl font-bold">
                            Sign Up
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="font-lato400 mb-6 space-y-4"
                    >
                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.name ? "border-red-400" : "border-white"}`}
                            >
                                <span className="mr-3">
                                    <FaUser className="text-white" />
                                </span>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-300">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.email ? "border-red-400" : "border-white"}`}
                            >
                                <span className="mr-3">
                                    <FaEnvelope className="text-white" />
                                </span>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-300">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.password ? "border-red-400" : "border-white"}`}
                            >
                                <span className="mr-3">
                                    <FaLock className="text-white" />
                                </span>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Create Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-300">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.confirmPassword ? "border-red-400" : "border-white"}`}
                            >
                                <span className="mr-3">
                                    <FaLock className="text-white" />
                                </span>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-300">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        <p className="font-montserrat400 mt-2 text-xs text-gray-300">
                            Additional profile information can be completed
                            after email verification.
                        </p>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="font-lato400 bg-primary w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading
                                ? "Creating Account..."
                                : "Create Account"}
                        </button>
                    </form>
                    <p className="font-montserrat400 text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/auth/sign-in"
                            className="bg-primary ml-2 rounded-2xl px-4 py-1 text-white underline hover:text-gray-300"
                        >
                            Sign In
                        </Link>
                    </p>
                    <br />
                    <div>
                        <p className="font-montserrat400 mb-4 text-center text-sm text-gray-300">
                            Or continue with
                        </p>
                        <div className="flex justify-center space-x-6">
                            <button
                                type="button"
                                onClick={() => handleOAuthSignIn("google")}
                                disabled={isLoading}
                                className="disabled:opacity-50"
                            >
                                <FcGoogle className="cursor-pointer text-2xl transition-transform hover:scale-110" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOAuthSignIn("github")}
                                disabled={isLoading}
                                className="disabled:opacity-50"
                            >
                                <FaGithub className="cursor-pointer text-2xl text-white transition-transform hover:scale-110" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex w-full flex-col justify-center px-20 py-10 text-left text-white md:w-1/2">
                    <h2 className="font-lato400 mb-4 text-4xl leading-tight font-bold">
                        Start Your Journey with Us
                    </h2>
                    <p className="font-montserrat400 max-w-md text-sm font-light">
                        Join our community and unlock tools, insights, and
                        guidance to grow your business and creative projects
                        with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <AuthGuard requireAuth={false} redirectTo="/profile">
            <SignUpContent />
        </AuthGuard>
    );
}
