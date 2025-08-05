"use client";

import React from "react";
import Link from "next/link";

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
    <div className="min-h-screen bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">📚 Free eBooks</h1>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Boost your skills with high-quality resources. Download exclusive handpicked eBooks, completely free for DevXAlpha users.
          </p>
        </div>

        {/* eBooks Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_EBOOKS.map((ebook) => (
            <div
              key={ebook.id}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200"
            >
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <div className="p-6 space-y-3">
                <span className="inline-block text-xs font-bold uppercase text-white bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 rounded-full">
                  {ebook.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-800">
                  {ebook.title}
                </h2>
                <p className="text-sm text-gray-600">{ebook.description}</p>
                <Link
                  href={ebook.downloadLink}
                  className="inline-block text-sm font-medium mt-4 bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-500 transition"
                >
                  📥 Download eBook
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-sm text-gray-400 text-center pt-10">
          All eBooks are provided for educational use only. Replace links with real download URLs as needed.
        </div>
      </div>
    </div>
  );
}

