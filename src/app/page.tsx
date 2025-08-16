// HOME PAGE
import {
    Hero,
    TrustedSection,
    PurposeAndPassion,
    Milestone,
    Services,
    Pricing,
    Testimonials,
} from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevX Alpha – Innovative Tech Solutions for Modern Businesses",
    description:
        "DevXAlpha delivers cutting-edge web, mobile, and AI-powered solutions to help businesses thrive in the digital era. Discover our services and success stories.",
    keywords: [
        "DevX Alpha",
        "web development",
        "AI solutions",
        "app development",
        "CMS Solutions",
        "UI/UX-Design",
        "Graphic Design",
        "PCB-Design",
        "Accounting Professional",
    ],
    alternates: {
        canonical: process.env.NEXT_URL,
    },
    openGraph: {
        type: "website",
        url: process.env.NEXT_URL,
        title: "DevXAlpha – Innovative Tech Solutions for Modern Businesses",
        description:
            "DevXAlpha delivers cutting-edge web, mobile, and AI-powered solutions to help businesses thrive in the digital era.",
        siteName: "DevXAlpha",
        images: [
            {
                url: "/Seo/home.jpg",
                width: 1200,
                height: 630,
                alt: "DevXAlpha Homepage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "DevXAlpha – Innovative Tech Solutions for Modern Businesses",
        description:
            "DevXAlpha delivers cutting-edge web, mobile, and AI-powered solutions to help businesses thrive in the digital era.",
        images: ["/Seo/home.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};
export default function Page() {
    return (
        <div>
            <Hero />
            <TrustedSection />
            <PurposeAndPassion />
            <Milestone />
            <Services />
            <Testimonials />
            <Pricing />
        </div>
    );
}
