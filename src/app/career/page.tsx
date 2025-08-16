"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

// Note: Metadata export is commented out because this is a client component
// To use metadata, this would need to be converted to a server component
// or the metadata would need to be moved to a layout.tsx file
/*
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at DevX Alpha – Work With Us to Build the Future",
    description:
        "Join DevX Alpha and work on impactful projects in web development, AI solutions, UI/UX design, and more. Explore our latest job openings and apply today.",
    keywords: [
        "DevX Alpha careers",
        "job openings",
        "web development jobs",
        "AI solution jobs",
        "UI/UX design careers",
        "work at DevX Alpha",
    ],
    openGraph: {
        title: "Careers at DevX Alpha – Build the Future With Us",
        description:
            "Discover job openings at DevX Alpha. Join our team of innovators in web, app, AI, design, and more.",
        url: process.env.NEXT_URL + "/career",
        images: [
            {
                url: "/Seo/carrer.jpg",
                width: 1200,
                height: 630,
                alt: "DevX Alpha Careers",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at DevX Alpha – Work With Us",
        description:
            "Join DevX Alpha to create impactful solutions in technology and design.",
        images: ["/Seo/carrer.jpg"],
    },
};
*/

const values = [
    {
        title: "Brighter Minds",
        desc: "Constantly learning and problem-solving.",
        img: "/domains/domains1.jpg",
    },
    {
        title: "Bigger Hearts",
        desc: "Leading with empathy and integrity.",
        img: "/domains/domains2.jpg",
    },
    {
        title: "Bolder Ideas",
        desc: "Challenging assumptions to innovate.",
        img: "/domains/domains3.jpg",
    },
];

const domains = [
    { name: "Web Development", img: "/career/web.jpg" },
    { name: "App Development", img: "/career/app.jpg" },
    { name: "CMS Solutions", img: "/career/CMS.jpg" },
    { name: "UI/UX Design", img: "/career/UI.jpg" },
    { name: "Graphic Design", img: "/career/graphic.jpg" },
    { name: "AI Solution", img: "/career/ai.jpg" },
    { name: "PCB-Design", img: "/career/PCB.jpg" },
    { name: "Professional Accounting", img: "/career/accounting.jpg" },
];

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string;
    salary?: string;
    createdAt: string;
    updatedAt: string;
}

export default function CareerPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const visibleJobs = showAll ? jobs : jobs.slice(0, 3);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/jobs");
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch jobs");
            }

            setJobs(data.jobs);
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatJobType = (type: string) => {
        return type
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("-");
    };

    return (
        <main className="bg-white text-gray-800">
            {/* Hero */}

            <section className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden text-center">
                {/* Background Image */}
                <Image
                    fill={true}
                    src="/career/career1.jpg"
                    alt="Hero"
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="mt-9 text-5xl leading-tight font-extrabold text-white drop-shadow-lg md:text-6xl">
                        Your Skills <span className="text-red-700">Matter</span>{" "}
                        Here
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 drop-shadow-md md:text-xl">
                        Where your talent meets purpose, and innovation drives
                        impact.
                    </p>

                    <Link href="#job-section">
                        <button className="my-3 rounded-full border-2 border-red-700 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-800 hover:shadow-xl">
                            Job Openning
                        </button>
                    </Link>
                </div>
            </section>

            <div className="px-5 xl:px-0">
                {/* Values Section */}
                <section className="mx-auto max-w-6xl py-16 text-center">
                    <h2 className="text-3xl font-bold text-red-700">
                        What Matters to Us
                    </h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            >
                                <Image
                                    src={v.img}
                                    alt={v.title}
                                    width={400}
                                    height={250}
                                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="bg-white p-6">
                                    <h3 className="text-xl font-semibold text-red-700">
                                        {v.title}
                                    </h3>
                                    <p className="mt-2">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Expertise Domains */}
                <section className="bg-red-50 py-16">
                    <div className="mx-auto max-w-6xl text-center">
                        <h2 className="text-3xl font-bold text-red-700">
                            We Create Impactful Solutions
                        </h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {domains.map((d, i) => (
                                <div
                                    key={i}
                                    className="group cursor-pointer overflow-hidden rounded-lg shadow-md"
                                >
                                    <Image
                                        src={d.img}
                                        alt={d.name}
                                        width={400}
                                        height={250}
                                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="bg-white p-4">
                                        <h3 className="font-medium">
                                            {d.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Job Listings with "Show More" */}
                <section id="job-section" className="mx-auto max-w-6xl py-16">
                    <h2 className="text-center text-3xl font-bold text-red-700">
                        Co-create the Future with Us
                    </h2>

                    {loading ? (
                        <div className="mt-8 text-center">
                            <div className="text-gray-600">
                                Loading opportunities...
                            </div>
                        </div>
                    ) : error ? (
                        <div className="mt-8 text-center">
                            <div className="text-red-600">
                                Unable to load job opportunities. Please try
                                again later.
                            </div>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="mt-8 text-center">
                            <div className="text-gray-600">
                                No job opportunities available at the moment.
                                Check back soon!
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mt-6 space-y-4">
                                {visibleJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="rounded-lg border p-4 transition hover:shadow-md"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={`/jobs/${job.id}`}
                                                        className="text-lg font-semibold text-gray-900 transition-colors hover:text-red-700"
                                                    >
                                                        {job.title}
                                                    </Link>
                                                    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                                        {formatJobType(
                                                            job.type
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="mt-1 text-gray-600">
                                                    {job.department} •{" "}
                                                    {job.location}
                                                    {job.salary && (
                                                        <span className="ml-2 font-medium text-green-600">
                                                            {job.salary}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mt-2 line-clamp-2 text-sm text-gray-500">
                                                    {job.description.length >
                                                    150
                                                        ? `${job.description.substring(0, 150)}...`
                                                        : job.description}
                                                </div>
                                            </div>
                                            <div className="ml-4 flex flex-col gap-2">
                                                <Link
                                                    href={`/jobs/${job.id}`}
                                                    className="rounded-lg bg-red-700 px-4 py-2 text-center text-white transition hover:bg-red-800"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {jobs.length > 3 && (
                                <div className="mt-6 text-center">
                                    <button
                                        className="rounded-full bg-red-700 px-6 py-2 text-white transition hover:bg-red-800"
                                        onClick={() => setShowAll(!showAll)}
                                    >
                                        {showAll
                                            ? "Show Less"
                                            : `All Jobs (${jobs.length})`}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}
