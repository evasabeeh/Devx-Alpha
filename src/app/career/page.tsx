"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

const jobs = [
    { title: "Senior AI Engineer", location: "Multiple · Hybrid" },
    { title: "Java Tech Lead", location: "Krakow · On-site" },
    { title: "Fullstack Engineer", location: "Prague · Hybrid" },
    { title: "Frontend Developer", location: "Remote" },
    { title: "Backend Node.js Engineer", location: "Warsaw · Hybrid" },
    { title: "Cloud DevOps Specialist", location: "Berlin · On-site" },
    { title: "QA Automation Engineer", location: "Remote" },
    { title: "Product Manager", location: "London · Hybrid" },
];

export default function CareerPage() {
    const [showAll, setShowAll] = useState(false);
    const visibleJobs = showAll ? jobs : jobs.slice(0, 3);

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
                    <div className="mt-6 space-y-4">
                        {visibleJobs.map((job, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between rounded-lg border p-4 transition hover:shadow-md"
                            >
                                <span>
                                    <strong>{job.title}</strong> —{" "}
                                    {job.location}
                                </span>
                                <button className="text-red-700 hover:underline">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            className="rounded-full bg-red-700 px-6 py-2 text-white transition hover:bg-red-800"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "All Jobs"}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
