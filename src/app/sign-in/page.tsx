"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="relative w-full overflow-hidden bg-white">
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:px-10 lg:mx-20">
                <div className="mt-10 w-full px-6 md:mt-0 md:w-1/2">
                    <div className="mb-6 text-center">
                        <Image
                            width={100}
                            height={100}
                            src="/logo_black.png"
                            alt="DevX Alpha"
                            className="mx-auto h-20 p-2"
                        />
                        <h2 className="font-lato400">DevX Alpha</h2>
                        <p className="font-montserrat400 text-sm">
                            This is the start of something good
                        </p>
                        <h1 className="font-montserrat400 my-10 text-3xl font-bold">
                            {isForgotPassword ? "Forgot Password" : "Sign In"}
                        </h1>
                    </div>

                    <form className="font-lato400 space-y-3">
                        {isForgotPassword ? (
                            <>
                                <div className="flex items-center rounded-2xl border px-4 py-2">
                                    <span className="mr-3">
                                        <FaPhoneAlt className="text-gray-400" />
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Enter registered number"
                                        className="w-full bg-transparent focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center rounded-2xl border px-4 py-2">
                                    <span className="mr-3">
                                        <FaLock className="text-gray-400" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="Create New Password"
                                        className="w-full bg-transparent focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center rounded-2xl border px-4 py-2">
                                    <span className="mr-3">
                                        <FaLock className="text-gray-400" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="w-full bg-transparent focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center rounded-2xl border px-4 py-2">
                                    <span className="mr-3">
                                        <FaPhoneAlt className="text-gray-400" />
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-transparent focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center rounded-2xl border px-4 py-2">
                                    <span className="mr-3">
                                        <FaLock className="text-gray-400" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className="w-full bg-transparent focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {!isForgotPassword && (
                            <p
                                className="mt-1 mb-6 cursor-pointer text-right text-sm text-[#cb1919] underline"
                                onClick={() => setIsForgotPassword(true)}
                            >
                                Forgot password?
                            </p>
                        )}

                        <button
                            type="submit"
                            className="font-lato400 mt-4 w-full cursor-pointer rounded-2xl bg-[#cb1919] py-3 font-semibold text-white hover:bg-red-900"
                        >
                            {isForgotPassword ? "Confirm" : "Sign in"}
                        </button>

                        {!isForgotPassword && (
                            <>
                                <p className="font-montserrat400 text-center text-sm">
                                    <Link
                                        href="/signin"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Or sign up with
                                    </Link>
                                </p>

                                <div className="mt-10 flex justify-center space-x-6">
                                    <FcGoogle className="cursor-pointer text-2xl" />
                                    <FaFacebookF className="cursor-pointer text-2xl text-blue-500" />
                                    <FaApple className="cursor-pointer text-2xl text-black" />
                                </div>
                            </>
                        )}
                    </form>
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
