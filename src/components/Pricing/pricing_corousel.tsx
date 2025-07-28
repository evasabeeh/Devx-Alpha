"use client"; // Required for Next.js app directory to make this a client component

import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
    return (
        <div className="px-4 md:px-0">
            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                pagination={{ clickable: true }}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 3, // 3 items on desktop & tablets (>=768px)
                    },
                }}
            >
                {pricings.map((pricing, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-2xl border-2 border-slate-200 px-4 py-6">
                            <p className="font-manrope400 mb-2 text-xl font-bold">
                                {pricing.tagline}
                            </p>
                            <p className="font-montserrat400 mb-4 text-sm">
                                {pricing.description}
                            </p>
                            <p className="font-lato400 mb-4 text-2xl font-bold">
                                &#8377;{pricing.price.start.toLocaleString()} -
                                &#8377;{pricing.price.end.toLocaleString()}
                            </p>
                            <Link
                                href={pricing.link || "#"}
                                className="border-primary mb-4 block rounded-xl border-2 py-2 text-center even:bg-white even:text-black"
                            >
                                Get Started Now
                            </Link>
                            <ul className="font-montserrat400 flex-grow">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
