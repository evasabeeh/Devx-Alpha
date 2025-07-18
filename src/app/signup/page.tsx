import React from 'react';
import { FaUser, FaPhoneAlt, FaBuilding, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            <img
                src="/signup-hero.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover sm:object-fill transition-all duration-500"
            />

            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full px-4 py-10">
                <div className="w-full md:w-1/2 px-6 md:px-10 lg:px-20 text-white">
                    <div className="mb-6 text-center">
                        <img src="/logo.png" alt="DevX Alpha" className="h-20 p-2 mx-auto" />
                        <h2 className="font-lato400">DevX Alpha</h2>
                        <p className="font-montserrat400 text-sm">This is the start of something good</p>
                        <h1 className="font-montserrat400 text-3xl font-bold mt-2">Sign Up</h1>
                    </div>

                    <form className="font-lato400 space-y-3">
                        {[
                            { icon: <FaUser />, placeholder: "Full Name*", type: "text" },
                            { icon: <FaPhoneAlt />, placeholder: "Phone Number*", type: "tel" },
                            { icon: <FaBuilding />, placeholder: "Company Name*", type: "text" },
                            { icon: <FaLock />, placeholder: "Enter Password", type: "password" },
                            { icon: <FaLock />, placeholder: "Confirm Password", type: "password" }
                        ].map((field, index) => (
                            <div key={index} className="flex items-center border border-white rounded-2xl px-4 py-2">
                                <span className="mr-3">{field.icon}</span>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="bg-transparent w-full focus:outline-none text-white placeholder-white"
                                    required
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="font-lato400 cursor-pointer bg-[#cb1919] hover:bg-red-900 text-white w-full py-3 rounded-2xl font-semibold mt-4"
                        >
                            Get Started
                        </button>

                        <p className="font-montserrat400 text-center text-sm">
                            <Link href="/signin" className="text-white hover:text-gray-300">
                                Or sign in with
                            </Link>
                        </p>

                        <div className="flex justify-center space-x-6 mt-3">
                            <FcGoogle className="text-2xl cursor-pointer" />
                            <FaFacebookF className="text-blue-500 text-2xl cursor-pointer" />
                            <FaApple className="text-white text-2xl cursor-pointer" />
                        </div>
                    </form>
                </div>

                <div className="w-full md:w-1/2 px-20 py-10 text-left flex flex-col justify-center text-white relative">
                    <h2 className="font-lato400 text-4xl font-bold leading-tight mb-4">Start Your Journey with Us</h2>
                    <p className="font-montserrat400 text-sm font-light max-w-md">
                        Join our community and unlock tools, insights, and guidance to grow your business and creative projects with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
}