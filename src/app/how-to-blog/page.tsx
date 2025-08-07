"use client";

import Image from "next/image";
import { FaClock, FaUser, FaLightbulb } from "react-icons/fa";

const blogPosts = [
    {
        title: "How to Start Freelancing with Zero Experience",
        excerpt:
            "Get step-by-step guidance to kickstart your freelancing journey in 2025...",
        image: "/blog/blog2.jpg",
        author: "harry",
        date: "August 5, 2025",
    },
    {
        title: "How to Create a Portfolio Website in 1 Day",
        excerpt:
            "Use simple tools like Next.js & Tailwind to build your personal site fast.",
        image: "/blog/blog3.jpg",
        author: "Martin",
        date: "August 1, 2025",
    },
    {
        title: "How to Earn Online as a Student",
        excerpt:
            "Explore top side hustles, part-time jobs, and skill-based gigs for students.",
        image: "/blog/blog4.jpg",
        author: "Riya Khan",
        date: "July 28, 2025",
    },
    {
        title: "How to Improve Focus While Studying",
        excerpt:
            "Simple tips to eliminate distractions and boost your productivity.",
        image: "/blog/blog5.jpg",
        author: "Dolly",
        date: "July 22, 2025",
    },
];

export default function HowToBlogPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gray-100 px-4 py-12 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
                    <div className="space-y-4 text-center md:w-1/2 md:text-left">
                        <h1 className="text-primary text-4xl leading-tight">
                            How-To Guides for Everyday Problems
                        </h1>
                        <p className="text-lg text-gray-600">
                            Learn practical tips & step-by-step tutorials for
                            productivity, freelancing, tech, lifestyle and more.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/blog/blog1.jpg"
                            alt="How to Blog Hero"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="mx-auto max-w-6xl px-4 py-16 md:px-12">
                <h2 className="mb-6 text-2xl font-bold">
                    Featured How-To Articles
                </h2>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {blogPosts.map((post, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={300}
                                className="h-56 w-full object-cover"
                            />
                            <div className="space-y-2 p-6">
                                <h3 className="text-primary text-xl font-semibold">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {post.excerpt}
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <FaUser className="text-gray-400" />{" "}
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaClock className="text-gray-400" />{" "}
                                        {post.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Guidance Section */}
            <section className="bg-gray-300 px-4 py-12 md:px-12">
                <div className="mx-auto max-w-4xl space-y-4 text-center">
                    <FaLightbulb className="mx-auto text-4xl text-yellow-500" />
                    <h3 className="text-3xl font-bold text-gray-800">
                        Need More Guidance?
                    </h3>
                    <p className="text-lg text-gray-600">
                        Whether you&apos;re a beginner or an expert, our How-To
                        guides are crafted to help you grow faster. Get
                        expert-backed tutorials, real-world tips, and
                        step-by-step processes that work.
                    </p>
                    <p className="text-md text-gray-700">
                        Bookmark this page and come back often – new guides are
                        added regularly based on your feedback and trending
                        needs!
                    </p>
                </div>
            </section>
        </div>
    );
}
