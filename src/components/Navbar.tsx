"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
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

                    <li>
                        <Link
                            href="/sign-up"
                            className="rounded-full border-2 border-white px-6 py-2 transition hover:bg-white hover:text-black"
                        >
                            Sign Up
                        </Link>
                    </li>
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

                        <li>
                            <Link
                                href="/signup"
                                className="block rounded-full border-2 border-white px-6 py-2 text-center transition hover:bg-white hover:text-black"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
