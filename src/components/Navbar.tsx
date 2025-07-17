"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuLinks = [
        { name: "home", href: "/" },
        { name: "about", href: "/about" },
        { name: "pricing", href: "/pricing" },
        { name: "services", href: "/services" },
        { name: "contact", href: "/contact" },
    ];

    return (
        <nav className="bg-black px-4 text-white md:px-20">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={24} />
                </Link>

                {/* Hamburger button for mobile */}
                <button
                    className="focus:outline-none md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <RxHamburgerMenu size={24} />
                </button>

                {/* Desktop Menu */}
                <ul className="font-lato400 hidden items-center space-x-6 md:flex">
                    {menuLinks.map((link) => (
                        <li
                            key={link.name}
                            className="capitalize hover:text-gray-300"
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/"
                            className="rounded-full border-2 border-white px-6 py-2 transition hover:bg-white hover:text-black"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="px-4 pb-4 md:hidden">
                    <ul className="font-lato400 space-y-4">
                        {menuLinks.map((link) => (
                            <li key={link.name} className="capitalize">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/sign-up"
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
