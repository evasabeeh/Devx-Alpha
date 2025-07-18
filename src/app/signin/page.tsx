'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import Link from 'next/link';

export default function Page() {
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="relative w-full overflow-hidden bg-white">
            <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-between items-center w-full md:px-10 lg:mx-20">

                <div className="w-full md:w-1/2 px-6 mt-10 md:mt-0">
                    <div className="mb-6 text-center">
                        <img src="/logo_black.png" alt="DevX Alpha" className="h-20 p-2 mx-auto" />
                        <h2 className="font-lato400">DevX Alpha</h2>
                        <p className="font-montserrat400 text-sm">This is the start of something good</p>
                        <h1 className="font-montserrat400 text-3xl font-bold my-10">
                            {isForgotPassword ? 'Forgot Password' : 'Sign In'}
                        </h1>
                    </div>

                    <form className="font-lato400 space-y-3">
                        {isForgotPassword ? (
                            <>
                            <div className="flex items-center border rounded-2xl px-4 py-2">
                                <span className="mr-3"><FaPhoneAlt className="text-gray-400"/></span>
                                <input
                                    type="tel"
                                    placeholder="Enter registered number"
                                    className="bg-transparent w-full focus:outline-none"
                                    required
                                />
                            </div>
                                <div className="flex items-center border rounded-2xl px-4 py-2">
                                    <span className="mr-3"><FaLock className="text-gray-400" /></span>
                                    <input
                                        type="password"
                                        placeholder="Create New Password"
                                        className="bg-transparent w-full focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border rounded-2xl px-4 py-2">
                                    <span className="mr-3"><FaLock className="text-gray-400" /></span>
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="bg-transparent w-full focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center border rounded-2xl px-4 py-2">
                                        <span className="mr-3"><FaPhoneAlt className="text-gray-400" /></span>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="bg-transparent w-full focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border rounded-2xl px-4 py-2">
                                        <span className="mr-3"><FaLock className="text-gray-400" /></span>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className="bg-transparent w-full focus:outline-none"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {!isForgotPassword && (
                            <p
                                className="cursor-pointer text-sm text-right text-[#cb1919] underline mt-1 mb-6"
                                onClick={() => setIsForgotPassword(true)}
                            >
                                Forgot password?
                            </p>
                        )}

                        <button
                            type="submit"
                            className="font-lato400 cursor-pointer bg-[#cb1919] hover:bg-red-900 text-white w-full py-3 rounded-2xl font-semibold mt-4"
                        >
                            {isForgotPassword ? 'Confirm' : 'Sign in'}
                        </button>

                        {!isForgotPassword && (
                            <>
                                <p className="font-montserrat400 text-center text-sm">
                                    <Link href="/signin" className="text-gray-600 hover:text-gray-800">
                                        Or sign up with
                                    </Link>
                                </p>

                                <div className="flex justify-center space-x-6 mt-10">
                                    <FcGoogle className="text-2xl cursor-pointer" />
                                    <FaFacebookF className="text-blue-500 text-2xl cursor-pointer" />
                                    <FaApple className="text-black text-2xl cursor-pointer" />
                                </div>
                            </>
                        )}
                    </form>
                </div>

                <div className="w-full md:w-1/2 relative flex items-center justify-center md:mx-10 lg:mx-30 mt-20 mb-10 md:mb-20 sm:mb-0">
                    <img
                        src="/signin-hero.jpg"
                        alt="Sign In Visual"
                        className="w-full object-contain z-0"
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute z-20 px-6 md:px-20 text-white">
                        <h2 className="font-lato400 text-5xl font-bold leading-tight mb-4">
                            Start Your Journey with Us
                        </h2>
                        <p className="font-montserrat400 text-sm font-light max-w-md">
                            Join our community and unlock tools, insights, and guidance to grow your business and creative projects with confidence.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
