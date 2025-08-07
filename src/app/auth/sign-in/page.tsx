"use client";

import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
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

                    <form className="font-lato400 mb-6 space-y-3">
                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaEnvelope className="text-gray-400" />
                            </span>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent focus:outline-none"
                                required
                            />
                        </div>
                        <div className="flex items-center rounded-2xl border px-4 py-2">
                            <span className="mr-3">
                                <FaLock className="text-gray-400" />
                            </span>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                className="w-full bg-transparent focus:outline-none"
                                required
                            />
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
                            className="font-lato400 bg-primary w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900"
                        >
                            Sign in
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
                            <FcGoogle className="cursor-pointer text-2xl transition-transform hover:scale-110" />
                            <FaGithub className="cursor-pointer text-2xl text-black transition-transform hover:scale-110" />
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
