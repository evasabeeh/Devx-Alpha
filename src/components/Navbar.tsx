"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { authToasts } from "@/lib/toast";

const Navbar = () => {
    const { data: session, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleServicesMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setIsServicesHovered(true);
    };

    const handleServicesMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsServicesHovered(false);
        }, 150); // 150ms delay before hiding
    };

    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });
            authToasts.signOutSuccess();
        } catch {
            authToasts.signOutError();
        }
    };

    const menuLinks = [
        { name: "home", href: "/" },
        { name: "services", href: "/services" },
        { name: "about", href: "/about" },
        { name: "our team", href: "/our-team" },
        { name: "features", href: "/features" },
        { name: "pricing", href: "/pricing" },
        { name: "contact", href: "/contact" },
    ];

    const serviceLinks = [
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "UI/UX Design", href: "/services/uiux-design" },
        { name: "AI Solutions", href: "/services/ai-solutions" },
        { name: "CMS Development", href: "/services/cms-development" },
        { name: "PCB Design", href: "/services/PCB-design" },
        { name: "Accounting Professional", href: "/services/accounting" },
    ];

    return (
        <nav className="bg-black px-4 py-4 text-white md:px-20">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                </Link>

                <button
                    className="focus:outline-none md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <RxHamburgerMenu size={24} />
                </button>

                <ul className="font-lato400 hidden items-center space-x-6 md:flex">
                    {menuLinks.map((link) => (
                        <li key={link.name} className="relative">
                            {link.name === "services" ? (
                                <div
                                    className="relative"
                                    onMouseEnter={handleServicesMouseEnter}
                                    onMouseLeave={handleServicesMouseLeave}
                                >
                                    <div className="flex cursor-pointer items-center gap-1 capitalize transition-colors duration-200 hover:text-gray-300">
                                        Services
                                        <IoIosArrowDown
                                            className={`transition-transform duration-200 ${isServicesHovered ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {isServicesHovered && (
                                        <div className="fixed top-[64px] left-0 z-50 w-screen translate-y-0 transform border-t-4 border-red-500 bg-gradient-to-br from-white to-gray-50 opacity-100 shadow-2xl transition-all duration-300 ease-out">
                                            <div className="mx-auto max-w-7xl px-8 py-10">
                                                <div className="mb-6">
                                                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                                                        Our Services
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        Comprehensive solutions
                                                        for your business needs
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                                    {serviceLinks.map(
                                                        (sublink, index) => (
                                                            <Link
                                                                key={
                                                                    sublink.name
                                                                }
                                                                href={
                                                                    sublink.href
                                                                }
                                                                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                                                onClick={() =>
                                                                    setIsServicesHovered(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                                                                <div className="relative z-10">
                                                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                                                                        <span className="text-xl font-bold">
                                                                            {index +
                                                                                1}
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-gray-800 capitalize transition-colors duration-300 group-hover:text-red-600">
                                                                        {
                                                                            sublink.name
                                                                        }
                                                                    </h4>
                                                                    <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700">
                                                                        Professional{" "}
                                                                        {sublink.name.toLowerCase()}{" "}
                                                                        services
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="capitalize hover:text-gray-300"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}

                    {/* Authentication Buttons */}
                    {status === "loading" ? (
                        <li>
                            <div className="animate-pulse rounded-full border-2 border-white px-6 py-2">
                                Loading...
                            </div>
                        </li>
                    ) : session ? (
                        <li className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center space-x-2 rounded-full border-2 border-white px-6 py-2 transition hover:bg-white hover:text-black"
                            >
                                <FaUser />
                                <span>Profile</span>
                                <IoIosArrowDown
                                    className={`transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                                    <Link
                                        href="/profile"
                                        className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        <FaUser />
                                        <span>View Profile</span>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIsProfileOpen(false);
                                            handleSignOut();
                                        }}
                                        className="flex w-full items-center space-x-2 px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                                    >
                                        <FaSignOutAlt />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link
                                    href="/auth/sign-in"
                                    className="bg-primary border-primary rounded-sm border-2 px-4 py-2 transition hover:bg-transparent"
                                >
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/auth/sign-up"
                                    className="rounded-sm border-2 border-white px-4 py-2 transition hover:bg-white hover:text-black"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {isOpen && (
                <div className="px-4 pb-4 md:hidden">
                    <ul className="font-lato400 space-y-4">
                        {menuLinks.map((link) => (
                            <li key={link.name} className="capitalize">
                                {link.name === "services" ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setIsServicesOpen(
                                                    !isServicesOpen
                                                )
                                            }
                                            className="flex w-full items-center justify-between rounded-md px-1 py-2 text-left capitalize transition-colors duration-200 hover:bg-gray-800"
                                        >
                                            Services{" "}
                                            <IoIosArrowDown
                                                className={`transition-transform ${
                                                    isServicesOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {isServicesOpen && (
                                            <div className="mt-4 scale-100 transform overflow-hidden rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 opacity-100 shadow-xl transition-all duration-300 ease-out">
                                                <div className="p-4">
                                                    <div className="mb-3">
                                                        <h4 className="text-sm font-semibold tracking-wide text-gray-300 uppercase">
                                                            Our Services
                                                        </h4>
                                                    </div>
                                                    <div className="space-y-2">
                                                        {serviceLinks.map(
                                                            (
                                                                sublink,
                                                                index
                                                            ) => (
                                                                <Link
                                                                    key={
                                                                        sublink.name
                                                                    }
                                                                    href={
                                                                        sublink.href
                                                                    }
                                                                    className="group flex items-center justify-between rounded-lg bg-gray-800 p-3 transition-all duration-200 hover:bg-red-500 hover:shadow-lg"
                                                                    onClick={() => {
                                                                        setIsServicesOpen(
                                                                            false
                                                                        );
                                                                        setIsOpen(
                                                                            false
                                                                        );
                                                                    }}
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white transition-colors duration-200 group-hover:bg-white group-hover:text-red-500">
                                                                            {index +
                                                                                1}
                                                                        </div>
                                                                        <span className="text-sm font-medium text-white capitalize group-hover:text-white">
                                                                            {
                                                                                sublink.name
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <svg
                                                                        className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-white"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            d="M9 5l7 7-7 7"
                                                                        />
                                                                    </svg>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Mobile Authentication Buttons */}
                        {status === "loading" ? (
                            <li>
                                <div className="block animate-pulse rounded-full border-2 border-white px-6 py-2 text-center">
                                    Loading...
                                </div>
                            </li>
                        ) : session ? (
                            <>
                                <li>
                                    <Link
                                        href="/profile"
                                        className="flex items-center space-x-2 rounded-full border-2 border-white px-6 py-2 text-center transition hover:bg-white hover:text-black"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FaUser />
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            handleSignOut();
                                        }}
                                        className="flex w-full items-center justify-center space-x-2 rounded-full px-6 py-2 text-center transition hover:bg-red-600"
                                    >
                                        <FaSignOutAlt />
                                        <span>Sign Out</span>
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href="/auth/sign-in"
                                        className="bg-primary border-primary block rounded-sm border-2 px-6 py-2 text-center transition hover:bg-transparent"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/auth/sign-up"
                                        className="block rounded-sm border-2 border-white px-6 py-2 text-center transition hover:bg-white hover:text-black"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
