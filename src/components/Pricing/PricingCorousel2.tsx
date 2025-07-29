"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

type Pricing = {
    tagline: string;
    description: string;
    price: {
        start: number;
        end: number;
    };
    features: {
        isHave: boolean;
        content: string;
    }[];
    link?: string;
};

export default function PricingCarousel({ pricings }: { pricings: Pricing[] }) {
    const [currentPage, setCurrentPage] = useState(0);
    const getItemsPerPage = () =>
        typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.ceil(pricings.length / itemsPerPage);

    const handleDotClick = (index: number) => setCurrentPage(index);

    // Calculate the start index for the current page
    const startIdx = currentPage * itemsPerPage;
    const visibleItems = pricings.slice(startIdx, startIdx + itemsPerPage);

    return (
        <div className="w-full">
            {/* Carousel Sliding Section */}
            <div className="flex transition-transform duration-500 ease-in-out">
                {visibleItems.map((pricing, i) => (
                    <div key={i} className="w-full px-2 md:w-1/3">
                        <div className="rounded-2xl border-2 border-slate-200 px-4 py-6">
                            <p className="font-manrope400 mb-2 text-xl font-bold">
                                {pricing.tagline}
                            </p>
                            <p className="font-montserrat400 mb-4 text-sm">
                                {pricing.description}
                            </p>
                            <p className="font-lato400 mb-4 text-2xl font-bold">
                                ₹{pricing.price.start.toLocaleString()} - ₹
                                {pricing.price.end.toLocaleString()}
                            </p>
                            <Link
                                href={pricing.link || "#"}
                                className="border-primary mb-4 block rounded-xl border-2 py-2 text-center even:bg-white even:text-black"
                            >
                                Get Started Now
                            </Link>
                            <ul className="font-montserrat400">
                                {pricing.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center py-1"
                                    >
                                        <div className="rounded-full bg-slate-100 p-2">
                                            {feature.isHave ? (
                                                <FaCheck
                                                    size={12}
                                                    color="green"
                                                />
                                            ) : (
                                                <RxCross2
                                                    size={12}
                                                    color="red"
                                                />
                                            )}
                                        </div>
                                        <div className="ml-1">
                                            {feature.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="mt-4 flex justify-center">
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx}
                        className={`mx-1 h-3 w-3 rounded-full ${currentPage === idx ? "bg-primary" : "bg-gray-300"}`}
                        onClick={() => handleDotClick(idx)}
                        aria-label={`Go to page ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
