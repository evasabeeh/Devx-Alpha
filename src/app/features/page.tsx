import Image from "next/image";
import "./style.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | DevX Alpha - Scalable, AI-Powered, Secure Development Platform",
    description:
        "Explore DevX Alpha's powerful features: scalable solutions, AI-powered insights, 24/7 support, seamless integration, robust security, and real-time collaboration.",
    keywords: [
        "DevX Alpha features",
        "scalable development platform",
        "AI-powered analytics",
        "real-time collaboration tools",
        "secure development",
        "developer productivity",
        "24/7 tech support",
        "API integration tools",
    ],
    openGraph: {
        title: "Features of DevX Alpha",
        description:
            "Boost your workflow with DevX Alpha's scalable, secure, and AI-powered development features.",
        url: process.env.NEXT_URL + "/features",
        siteName: "DevX Alpha",
        images: [
            {
                url: "/Seo/features.jpg",
                width: 1200,
                height: 630,
                alt: "DevX Alpha Features Overview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DevX Alpha - Powerful Development Features",
        description:
            "Discover DevX Alpha’s core features: scalability, AI insights, real-time collaboration, and enterprise-grade security.",
        images: ["/Seo/features.jpg"],
        creator: "@DevXAlpha",
    },
};

const features = [
    {
        heading: "Scalable Solutions",
        tagline: "Built to grow with your product.",
        image: "/features/1.png",
        content:
            "DevX Alpha is built to scale with your needs—whether you're handling a handful of users or millions. Enjoy consistent performance, no matter how fast your project grows.",
    },
    {
        heading: "AI-Powered Insights",
        tagline: "Smarter decisions, faster.",
        image: "/features/2.png",
        content:
            "Leverage advanced AI analytics to gain actionable insights on your app’s performance, user behavior, and optimization opportunities.",
    },
    {
        heading: "24/7 Support",
        tagline: "Help, anytime you need it.",
        image: "/features/3.png",
        content:
            "Get continuous, around-the-clock support so you can resolve issues quickly and keep your projects moving forward without downtime.",
    },
    {
        heading: "Seamless Integration",
        tagline: "Built to grow with your product.",
        image: "/features/4.png",
        content:
            "Easily connect DevX Alpha with your existing tools, APIs, and workflows, ensuring smooth adoption into your development environment.",
    },
    {
        heading: "Robust Security",
        tagline: "Your data stays protected.",
        image: "/features/5.png",
        content:
            "Your data and applications remain safe with enterprise-grade encryption, regular audits, and best practices for secure development.",
    },
    {
        heading: "Real-Time Collaboration",
        tagline: "Work together, live.",
        image: "/features/6.png",
        content:
            "Collaborate with your team in real-time, allowing for simultaneous editing, code review, and live feedback to accelerate your workflow.",
    },
];

export default function Page() {
    return (
        <div>
            <div className="mt-6 text-center">
                <h1 className="font-lato400 mb-4 text-5xl font-bold">
                    Features
                </h1>

                <h3 className="font-lato400 mb-4 text-xl">
                    Powerful Features to Supercharge Your Development
                </h3>
                <Image
                    src="/features_header.png"
                    alt="Features Header"
                    width={1000}
                    height={1000}
                    className="w-full"
                />
            </div>
            <div className="my-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="font-montserrat400 hover:bg-primary features-item cursor-pointer p-8 shadow transition-colors hover:text-white"
                    >
                        <h2 className="font-lato400 font-bold">
                            {feature.heading}
                        </h2>
                        <h3 className="mb-4">{feature.tagline}</h3>
                        <p>{index + 1}.</p>
                        <Image
                            src={feature.image}
                            alt={feature.heading}
                            width={250}
                            height={250}
                            className="border-primary features-item-image mx-auto rounded-full border-2"
                        />
                        <p className="text-sm">{feature.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
