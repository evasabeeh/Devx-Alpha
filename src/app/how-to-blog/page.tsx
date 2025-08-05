// app/how-to/page.tsx
"use client";

import Image from "next/image";
import { FaClock, FaUser, FaLightbulb } from "react-icons/fa";

const blogPosts = [
  {
    title: "How to Start Freelancing with Zero Experience",
    excerpt: "Get step-by-step guidance to kickstart your freelancing journey in 2025...",
    image: "/blog/blog2.jpg",
    author: "harry",
    date: "August 5, 2025",
  },
  {
    title: "How to Create a Portfolio Website in 1 Day",
    excerpt: "Use simple tools like Next.js & Tailwind to build your personal site fast.",
    image: "/blog/blog3.jpg",
    author: "Martin",
    date: "August 1, 2025",
  },
  {
    title: "How to Earn Online as a Student",
    excerpt: "Explore top side hustles, part-time jobs, and skill-based gigs for students.",
    image: "/blog/blog4.jpg",
    author: "Riya Khan",
    date: "July 28, 2025",
  },
  {
    title: "How to Improve Focus While Studying",
    excerpt: "Simple tips to eliminate distractions and boost your productivity.",
    image: "/blog/blog5.jpg",
    author: "Dolly",
    date: "July 22, 2025",
  },
];

export default function HowToBlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl  text-red-700 leading-tight">
              How-To Guides for Everyday Problems
            </h1>
            <p className="text-lg text-gray-600">
              Learn practical tips & step-by-step tutorials for productivity, freelancing, tech, lifestyle and more.
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
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-16">
        <h2 className="text-2xl font-bold mb-6">Featured How-To Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="w-full object-cover h-56"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-red-700">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-gray-400" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-gray-400" /> {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidance Section */}
      <section className="bg-gray-300 py-12 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <FaLightbulb className="text-yellow-500 text-4xl mx-auto" />
          <h3 className="text-3xl font-bold text-gray-800">Need More Guidance?</h3>
          <p className="text-gray-600 text-lg">
            Whether you're a beginner or an expert, our How-To guides are crafted to help you grow faster.
            Get expert-backed tutorials, real-world tips, and step-by-step processes that work.
          </p>
          <p className="text-gray-700 text-md">
            Bookmark this page and come back often – new guides are added regularly based on your feedback and trending needs!
          </p>
        </div>
      </section>
    </div>
  );
}

