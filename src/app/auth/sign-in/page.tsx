"use client";

import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import { signInSchema, type SignInFormData } from "@/lib/validations/auth";
import { authToasts } from "@/lib/toast";
import { ZodError } from "zod";

function SignInContent() {
    const [formData, setFormData] = useState<SignInFormData>({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<
        Partial<Record<keyof SignInFormData, string>>
    >({});
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error for this field when user starts typing
        if (errors[name as keyof SignInFormData]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const validateForm = () => {
        try {
            signInSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors: Partial<
                    Record<keyof SignInFormData, string>
                > = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0] as keyof SignInFormData] =
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
            authToasts.signInError("Please fix the errors below");
            return;
        }

        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                authToasts.signInError("Invalid email or password");
            } else {
                authToasts.signInSuccess();
                router.push("/profile");
            }
        } catch (error) {
            console.error("Sign-in error:", error);
            authToasts.networkError();
        } finally {
            setIsLoading(false);
        }
    };

    const handleOAuthSignIn = async (provider: string) => {
        setIsLoading(true);

        try {
            // Temporarily use default redirect behavior to debug
            await signIn(provider, {
                callbackUrl: "/profile",
            });
        } catch (error) {
            console.error(`❌ OAuth exception:`, error);
            authToasts.oauthError("OAuth sign-in failed. Please try again.");
            setIsLoading(false);
        }
    };

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
                            Sign In
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="font-lato400 mb-6 space-y-4"
                    >
                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.email ? "border-red-400" : "border-gray-300"}`}
                            >
                                <span className="mr-3">
                                    <FaEnvelope className="text-gray-400" />
                                </span>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent focus:outline-none"
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <div
                                className={`flex items-center rounded-2xl border px-4 py-2 ${errors.password ? "border-red-400" : "border-gray-300"}`}
                            >
                                <span className="mr-3">
                                    <FaLock className="text-gray-400" />
                                </span>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
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

                        <div className="mt-1 mb-6 flex items-center justify-between">
                            <Link
                                href="/auth/forgot-password"
                                className="text-primary text-sm underline hover:text-red-900"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="font-lato400 bg-primary w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>
                    <p className="font-montserrat400 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/sign-up"
                            className="text-primary underline hover:text-red-900"
                        >
                            Sign Up
                        </Link>
                    </p>
                    <br />
                    <div>
                        <p className="font-montserrat400 mb-4 text-center text-sm text-gray-600">
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
                                <FaGithub className="cursor-pointer text-2xl text-black transition-transform hover:scale-110" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative mt-20 mb-10 flex w-full items-center justify-center sm:mb-0 md:mx-10 md:mb-20 md:w-1/2 lg:mx-30">
                    <Image
                        height={400}
                        width={400}
                        src="/signin-hero.jpg"
                        alt="Sign In Visual"
                        className="z-0 w-full object-contain"
                    />
                    <div className="absolute inset-0 z-10 bg-black/50" />
                    <div className="absolute z-20 px-6 text-white md:px-20">
                        <h2 className="font-lato400 mb-4 text-5xl leading-tight font-bold">
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
        </div>
    );
}

export default function Page() {
    return (
        <AuthGuard requireAuth={false} redirectTo="/profile">
            <SignInContent />
        </AuthGuard>
    );
}
