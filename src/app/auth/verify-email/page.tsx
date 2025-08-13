"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function VerifyEmailContent() {
    const [status, setStatus] = useState<"loading" | "success" | "error">(
        "loading"
    );
    const [message, setMessage] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setMessage("Invalid verification link");
            return;
        }

        const verifyEmail = async () => {
            try {
                const response = await fetch("/api/auth/verify-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus("success");
                    setMessage(data.message);
                    // Redirect to profile completion after 3 seconds
                    setTimeout(() => {
                        router.push("/profile/complete");
                    }, 3000);
                } else {
                    setStatus("error");
                    setMessage(data.error || "Verification failed");
                }
            } catch {
                setStatus("error");
                setMessage("Something went wrong. Please try again.");
            }
        };

        verifyEmail();
    }, [token, router]);

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
                            Email Verification
                        </h1>
                    </div>

                    <div className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full">
                                {status === "loading" && (
                                    <FaSpinner className="text-primary animate-spin text-3xl" />
                                )}
                                {status === "success" && (
                                    <FaCheckCircle className="text-3xl text-green-500" />
                                )}
                                {status === "error" && (
                                    <FaTimesCircle className="text-3xl text-red-500" />
                                )}
                            </div>
                        </div>

                        {status === "loading" && (
                            <div>
                                <h3 className="font-montserrat400 mb-4 text-xl font-semibold">
                                    Verifying your email...
                                </h3>
                                <p className="font-montserrat400 text-gray-600">
                                    Please wait while we verify your email
                                    address.
                                </p>
                            </div>
                        )}

                        {status === "success" && (
                            <div>
                                <h3 className="font-montserrat400 mb-4 text-xl font-semibold text-green-600">
                                    Email Verified Successfully!
                                </h3>
                                <p className="font-montserrat400 mb-6 text-gray-600">
                                    {message}
                                </p>
                                <p className="font-montserrat400 mb-8 text-sm text-gray-500">
                                    You will be redirected to complete your
                                    profile in a few seconds...
                                </p>
                                <Link
                                    href="/profile/complete"
                                    className="font-lato400 bg-primary inline-block rounded-2xl px-6 py-3 font-semibold text-white hover:bg-red-900"
                                >
                                    Complete Profile
                                </Link>
                            </div>
                        )}

                        {status === "error" && (
                            <div>
                                <h3 className="font-montserrat400 mb-4 text-xl font-semibold text-red-600">
                                    Verification Failed
                                </h3>
                                <p className="font-montserrat400 mb-6 text-gray-600">
                                    {message}
                                </p>
                                <div className="space-y-4">
                                    <Link
                                        href="/auth/sign-up"
                                        className="font-lato400 bg-primary inline-block rounded-2xl px-6 py-3 font-semibold text-white hover:bg-red-900"
                                    >
                                        Try Again
                                    </Link>
                                    <div>
                                        <Link
                                            href="/auth/sign-in"
                                            className="font-montserrat400 text-primary text-sm hover:underline"
                                        >
                                            Back to Sign In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function VerifyEmailPage() {
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
            <VerifyEmailContent />
        </Suspense>
    );
}
