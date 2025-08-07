import React from "react";
import { FaUser, FaPhoneAlt, FaBuilding, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
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
                            src="/logo.png"
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

                    <form className="font-lato400 space-y-3">
                        {[
                            {
                                icon: <FaUser />,
                                placeholder: "Full Name*",
                                type: "text",
                            },
                            {
                                icon: <FaPhoneAlt />,
                                placeholder: "Phone Number*",
                                type: "tel",
                            },
                            {
                                icon: <FaBuilding />,
                                placeholder: "Company Name*",
                                type: "text",
                            },
                            {
                                icon: <FaLock />,
                                placeholder: "Enter Password",
                                type: "password",
                            },
                            {
                                icon: <FaLock />,
                                placeholder: "Confirm Password",
                                type: "password",
                            },
                        ].map((field, index) => (
                            <div
                                key={index}
                                className="flex items-center rounded-2xl border border-white px-4 py-2"
                            >
                                <span className="mr-3">{field.icon}</span>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                                    required
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="font-lato400 bg-primary mt-4 w-full cursor-pointer rounded-2xl py-3 font-semibold text-white hover:bg-red-900"
                        >
                            Get Started
                        </button>

                        <p className="font-montserrat400 text-center text-sm">
                            <Link
                                href="/sign-in"
                                className="text-white hover:text-gray-300"
                            >
                                Or sign in with
                            </Link>
                        </p>

                        <div className="mt-3 flex justify-center space-x-6">
                            <FcGoogle className="cursor-pointer text-2xl" />
                            <FaFacebookF className="cursor-pointer text-2xl text-blue-500" />
                            <FaApple className="cursor-pointer text-2xl text-white" />
                        </div>
                    </form>
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
