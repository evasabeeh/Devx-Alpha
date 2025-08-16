import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free eBooks on Web Development, React, and UI/UX Design | DevX Alpha",
    description:
        "Download free high-quality eBooks on Next.js, React, and UI/UX design. Learn modern web development, frontend techniques, and design principles from experts.",
    keywords: [
        "free ebooks",
        "next.js ebook",
        "react handbook",
        "ui ux design ebook",
        "frontend development ebooks",
        "web development books",
        "learn react free",
        "learn next.js free",
        "free programming books",
        "DevX Alpha resources",
    ],
    openGraph: {
        title: "Free eBooks for Developers & Designers | DevX Alpha",
        description:
            "Boost your skills with free eBooks on Next.js, React, and UI/UX design. High-quality resources for developers and designers.",
        url: process.env.NEXT_URL + "/free-book",
        siteName: "DevX Alpha",
        images: [
            {
                url: "/Seo/ebook.jpg",
                width: 1200,
                height: 630,
                alt: "Free eBooks for Developers and Designers",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free eBooks on Web Development & Design",
        description:
            "Download free eBooks on Next.js, React, and UI/UX design to level up your skills.",
        images: ["/Seo/ebook.jpg"],
        creator: "@DevXAlpha",
    },
};

type Ebook = {
    id: string;
    title: string;
    description: string;
    cover: string;
    downloadLink: string;
    category: string;
};

const DUMMY_EBOOKS: Ebook[] = [
    {
        id: "1",
        title: "Mastering Next.js",
        description:
            "Build lightning-fast, SEO-optimized applications with cutting-edge techniques using Next.js 14+ and TailwindCSS.",
        cover: "/book/book1.jpg",
        downloadLink: "#",
        category: "Web Development",
    },
    {
        id: "2",
        title: "The Complete React Handbook",
        description:
            "Master React fundamentals, hooks, state management, and component architecture with this detailed handbook.",
        cover: "/book/book2.jpg",
        downloadLink: "#",
        category: "Frontend Development",
    },
    {
        id: "3",
        title: "UI/UX Design Essentials",
        description:
            "Design beautiful, functional interfaces with modern UI/UX principles, trends, and real-world examples.",
        cover: "/book/book3.jpg",
        downloadLink: "#",
        category: "Design",
    },
];

export default function FreeEbooksPage() {
    return (
        <div className="min-h-screen bg-white px-6 py-16 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl space-y-12">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800">
                        📚 Free eBooks
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                        Boost your skills with high-quality resources. Download
                        exclusive handpicked eBooks, completely free for
                        DevXAlpha users.
                    </p>
                </div>

                {/* eBooks Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {DUMMY_EBOOKS.map((ebook) => (
                        <div
                            key={ebook.id}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-md transition hover:shadow-xl"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={ebook.cover}
                                alt={ebook.title}
                                className="h-72 w-full rounded-t-xl object-cover"
                            />
                            <div className="space-y-3 p-6">
                                <span className="inline-block rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 text-xs font-bold text-white uppercase">
                                    {ebook.category}
                                </span>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {ebook.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {ebook.description}
                                </p>
                                <Link
                                    href={ebook.downloadLink}
                                    className="bg-primary hover:bg-red-00 mt-4 inline-block rounded-md px-5 py-2 text-sm font-medium text-white transition"
                                >
                                    📥 Download eBook
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="pt-10 text-center text-sm text-gray-400">
                    All eBooks are provided for educational use only. Replace
                    links with real download URLs as needed.
                </div>
            </div>
        </div>
    );
}
