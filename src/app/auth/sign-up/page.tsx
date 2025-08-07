import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
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

                    <form className="font-lato400 mb-6 space-y-3">
                        <div className="flex items-center rounded-2xl border border-white px-4 py-2">
                            <span className="mr-3">
                                <FaUser className="text-white" />
                            </span>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center rounded-2xl border border-white px-4 py-2">
                            <span className="mr-3">
                                <FaEnvelope className="text-white" />
                            </span>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center rounded-2xl border border-white px-4 py-2">
                            <span className="mr-3">
                                <FaLock className="text-white" />
                            </span>
                            <input
                                name="password"
                                type="password"
                                placeholder="Create Password"
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center rounded-2xl border border-white px-4 py-2">
                            <span className="mr-3">
                                <FaLock className="text-white" />
                            </span>
                            <input
                                name="confirmPassword"
                                type="text"
                                placeholder="Confirm Password"
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                required
                            />
                        </div>

                        <p className="font-montserrat400 mt-2 text-xs text-gray-300">
                            Additional profile information can be completed
                            after email verification.
                        </p>

                        <button
                            type="submit"
                            className="font-lato400 bg-primary w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900"
                        >
                            Create Account
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
                            <FcGoogle className="cursor-pointer text-2xl transition-transform hover:scale-110" />
                            <FaGithub className="cursor-pointer text-2xl text-white transition-transform hover:scale-110" />
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
