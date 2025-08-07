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
        } catch (error) {
            authToasts.signOutError();
        }
    };

    const menuLinks = [
        { name: "home", href: "/" },
        { name: "services", href: "/services" },
        { name: "about", href: "/about" },
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
                                    <div className="flex cursor-pointer items-center gap-1 capitalize hover:text-gray-300">
                                        Services <IoIosArrowDown />
                                    </div>
                                    {isServicesHovered && (
                                        <ul className="absolute top-full left-0 z-20 w-50 rounded-md bg-white py-2 text-black shadow-lg">
                                            {serviceLinks.map((sublink) => (
                                                <li key={sublink.name}>
                                                    <Link
                                                        href={sublink.href}
                                                        className="block px-4 py-2 capitalize hover:bg-gray-200"
                                                        onClick={() =>
                                                            setIsServicesHovered(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
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
                                            className="flex w-full items-center justify-between text-left capitalize"
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
                                            <ul className="mt-5 space-y-5 text-center text-sm text-white">
                                                {serviceLinks.map((sublink) => (
                                                    <li key={sublink.name}>
                                                        <Link
                                                            href={sublink.href}
                                                            onClick={() => {
                                                                setIsOpen(
                                                                    false
                                                                );
                                                                setIsServicesOpen(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            {sublink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
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
