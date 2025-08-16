"use client";

import React, { useState } from "react";
import {
    FaChevronDown,
    FaChevronUp,
    FaBookOpen,
    FaTruck,
    FaUserShield,
    FaComments,
    FaFileDownload,
    FaTools,
} from "react-icons/fa";
import Image from "next/image";

// Note: Metadata export is commented out because this is a client component
// To use metadata, this would need to be converted to a server component
// or the metadata would need to be moved to a layout.tsx file
/*
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support Center – DevX Alpha | Help, FAQ & Contact",
    description:
        "Get help with your DevX Alpha account, delivery tracking, blog writing, troubleshooting, and more. Browse FAQs, contact support, and access useful resources.",
    keywords: [
        "DevX Alpha support",
        "customer service",
        "help center",
        "DevX Alpha help",
        "FAQ",
        "contact DevX Alpha",
        "blog writing help",
        "delivery support",
        "account assistance",
        "technical troubleshooting",
    ],
    openGraph: {
        title: "Support Center – DevX Alpha",
        description:
            "Find expert answers, live chat, account support, delivery tracking help, and resources at DevX Alpha Support Center.",
        url: process.env.NEXT_URL + "/support",
        siteName: "DevX Alpha",
        images: [
            {
                url: "/Seo/support.jpg",
                width: 1200,
                height: 630,
                alt: "DevX Alpha Support Center",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Support Center – DevX Alpha",
        description:
            "Need help? Visit the DevX Alpha Support Center for FAQs, contact options, and useful guides.",
        images: ["/Seo/support.jpg"],
        creator: "@DevXAlpha",
    },
};
*/

// Support features data
const supportItems = [
    {
        title: "Blog Writing",
        icon: <FaBookOpen className="text-primary mb-4 text-3xl" />,
    },
    {
        title: "Delivery Help",
        icon: <FaTruck className="text-primary mb-4 text-3xl" />,
    },
    {
        title: "Account Support",
        icon: <FaUserShield className="text-primary mb-4 text-3xl" />,
    },
    {
        title: "Live Chat",
        icon: <FaComments className="text-primary mb-4 text-3xl" />,
    },
    {
        title: "Free eBook",
        icon: <FaFileDownload className="text-primary mb-4 text-3xl" />,
    },
    {
        title: "Troubleshooting",
        icon: <FaTools className="text-primary mb-4 text-3xl" />,
    },
];

// FAQ questions
const FAQ_ITEMS = [
    {
        q: "How can I get help with my account?",
        a: "You can get help by contacting our support team via email or the live chat option below.",
    },
    {
        q: "Where can I download the free ebook?",
        a: "The free ebook can be downloaded from the Resources section on our homepage.",
    },
    {
        q: "How do I track my delivery?",
        a: "Log into your account and go to the 'My Orders' section to track your delivery.",
    },
    {
        q: "How to write a blog on DevXAlpha?",
        a: "Sign in and navigate to the Blog section, then click on 'Write a Blog' to get started.",
    },
];

export default function SupportPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <div className="relative min-h-[400px] w-full overflow-hidden text-white md:min-h-[550px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/supp.jpg"
                        alt="DevXAlpha Support Center Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 text-center md:px-8">
                <h1 className="text-primary text-4xl font-extrabold md:text-5xl">
                    Support Center
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-black">
                    Find expert answers, get in touch with us, and explore
                    helpful resources to get the most out of DevXAlpha.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button className="border-primary rounded-lg border px-6 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-gray-100">
                        Contact Support
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <section className="mx-4 mt-5 mb-20 grid gap-6 md:grid-cols-3">
                {supportItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="border-primary rounded-2xl border-t-4 bg-gray-100 p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {item.icon}
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                            Get expert assistance and helpful guides on{" "}
                            {item.title.toLowerCase()}.
                        </p>
                    </div>
                ))}
            </section>

            {/* FAQ Section */}
            <section className="mx-auto mb-20 max-w-3xl">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-4 text-left text-lg font-medium hover:bg-gray-50"
                            >
                                {item.q}
                                {openIndex === index ? (
                                    <FaChevronUp className="text-gray-500" />
                                ) : (
                                    <FaChevronDown className="text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4 text-gray-700">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="mx-auto max-w-4xl rounded-3xl border border-red-100 bg-gray-50 p-10 shadow-xl">
                <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
                    Contact Us
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="focus:ring-primary rounded-xl border border-gray-300 p-4 focus:ring-2 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="focus:ring-primary rounded-xl border border-gray-300 p-4 focus:ring-2 focus:outline-none"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="focus:ring-primary w-full rounded-xl border border-gray-300 p-4 focus:ring-2 focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-primary w-full rounded-xl px-6 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}
