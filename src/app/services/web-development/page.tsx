import Hero from "@/components/Services/ServicesHero";
import Desc from "@/components/Services/Desc";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development Services – DevX Alpha | Custom, SEO & Responsive Sites",
    description:
        "DevX Alpha builds custom, responsive, and SEO-friendly websites. We provide frontend & backend integration, e-commerce, landing pages, and ongoing maintenance to boost your business online.",
    keywords: [
        "web development services",
        "custom website design",
        "responsive websites",
        "SEO friendly websites",
        "frontend backend integration",
        "e-commerce development",
        "landing page design",
        "website maintenance",
        "mobile friendly websites",
        "DevX Alpha web development",
    ],
    openGraph: {
        title: "Web Development Services – DevX Alpha",
        description:
            "From custom website development to SEO optimization, e-commerce, and responsive design — DevX Alpha delivers high-performing websites for businesses of all sizes.",
        url: process.env.NEXT_URL + "/services/web-development",
        siteName: "DevX Alpha",
        images: [
            {
                url: "/Seo/services.jpg",
                width: 1200,
                height: 630,
                alt: "Web Development Services – DevX Alpha",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services – DevX Alpha",
        description:
            "Custom, responsive, and SEO-friendly websites built by DevX Alpha to help your business grow online.",
        images: ["/Seo/services.jpg"],
        creator: "@DevXAlpha",
    },
};

const heroData = {
    title: "Web Development",
    description:
        "We build responsive, secure, and fast-loading websites that reflect your brand and deliver seamless user experiences.",
    image: "/Seo/services.jpg",
};

const webDevData = {
    sections: [
        {
            layout: "left" as const,
            cards: [
                {
                    title: "Custom Website Development",
                    icon: "RiComputerLine",
                    description:
                        "We create unique, scalable websites tailored to your business needs with clean, maintainable code. From custom layouts to advanced features, we ensure your site aligns with your goals while delivering a professional digital presence.",
                },
            ],
            cardsRight: [
                {
                    title: "Responsive & Mobile-First Design",
                    icon: "MdOutlineTabletAndroid",
                    description:
                        "We design websites that adapt seamlessly across all devices, ensuring fast loading and smooth navigation on smartphones, tablets, and desktops. This helps you reach and engage your audience effectively everywhere.",
                },
                {
                    title: "Frontend and Backend Integration",
                    icon: "IoCodeSlash",
                    description:
                        "We handle both the user-facing interface and server-side functionality, ensuring your website runs smoothly. From dynamic forms to secure user dashboards, we integrate frontend and backend for seamless performance.",
                },
            ],
        },
        {
            layout: "right" as const,
            cards: [
                {
                    title: "SEO-Friendly Structure",
                    icon: "IoSearch",
                    description:
                        "We build websites with clean code, fast loading speeds, and optimized structure to help your site rank higher on search engines. This ensures better visibility and organic traffic for your business.",
                },
                {
                    title: "E-commerce & Landing Page Development",
                    icon: "FiShoppingCart",
                    description:
                        "We develop high-converting online stores and landing pages with secure payment gateways and clear calls to action. Our pages are designed to drive sales and generate leads efficiently across devices.",
                },
            ],
            cardsRight: [
                {
                    title: "Website Maintenance & Support",
                    icon: "IoMdCheckmarkCircleOutline",
                    description:
                        "We provide ongoing website maintenance to ensure your site remains secure, updated, and functioning smoothly. From fixing bugs to updating content, we handle all technical upkeep so you can focus on your business.",
                },
            ],
        },
    ],
};

export default function Page() {
    return (
        <div>
            <Hero
                title={heroData.title}
                description={heroData.description}
                image={heroData.image}
            />

            <div className="mx-5 mt-20 md:mx-20">
                <h1 className="font-lato900 mb-6 text-3xl font-black md:text-5xl">
                    {" "}
                    We can help you with
                </h1>

                <Desc data={webDevData} />

                <div className="font-lato900 mt-10 max-w-full rounded-xl bg-[#fbfbff] px-6 py-4 shadow-md">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs font-bold md:text-sm">
                            Ready to create your perfect software? We are!
                        </p>
                        <Link
                            href="/contact"
                            className="bg-primary rounded-full px-6 py-1 text-xs text-white transition md:text-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="font-lato900 my-20 w-full px-6 text-center md:px-20">
                    <h1 className="mb-6 text-3xl font-black md:text-5xl">
                        Join us on the journey?
                    </h1>

                    <p className="mx-auto max-w-full text-xs font-semibold md:text-sm">
                        We believe that every brand has a unique story to tell.
                        Let us help you share yours with the world. Partner with
                        devX Alpha, and together, we’ll create a digital
                        presence that leaves a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}
