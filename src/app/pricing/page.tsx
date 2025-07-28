import Image from "next/image";
import {
    Rating,
    PricingCarousel,
    // PricingCarousel2,
} from "@/components/Pricing/";

export default function Page() {
    const pricings = [
        {
            tagline: "Web Development Services",
            description:
                "Ideal for individuals who need quick access to service features.",
            price: {
                start: 20000,
                end: 500000,
            },
            features: [
                {
                    isHave: true,
                    content: "Custom website design & development",
                },
                {
                    isHave: true,
                    content: "Up to 10-30 pages",
                },
                {
                    isHave: true,
                    content: "CMS integration (WordPress/Custom)",
                },
                {
                    isHave: true,
                    content: "Basic SEO setup",
                },
                {
                    isHave: true,
                    content: "Hosting & deployment support",
                },
                {
                    isHave: true,
                    content: "3–6 months maintenance",
                },
            ],
            link: "#",
        },
        {
            tagline: "App Development Services",
            description:
                "Ideal for individuals who need quick access to service features.",
            price: {
                start: 50000,
                end: 1500000,
            },
            features: [
                {
                    isHave: true,
                    content: "Android/iOS/Hybrid app",
                },
                {
                    isHave: true,
                    content: "UI/UX design for app",
                },
                {
                    isHave: true,
                    content: "API integration & backend development",
                },
                {
                    isHave: true,
                    content: "Push notifications & analytics",
                },
                {
                    isHave: true,
                    content: "Testing & publishing on Play Store/App Store",
                },
                {
                    isHave: true,
                    content: "3–6 months post-launch support",
                },
            ],
            link: "#",
        },
        {
            tagline: "Graphic Design",
            description:
                "Ideal for individuals who need quick access to service features.",
            price: {
                start: 5000,
                end: 50000,
            },
            features: [
                {
                    isHave: true,
                    content: "Logo & brand identity",
                },
                {
                    isHave: true,
                    content: "Social media creatives",
                },
                {
                    isHave: true,
                    content:
                        "Marketing collaterals (brochures, flyers, pitch decks)",
                },
                {
                    isHave: true,
                    content: "Ad creatives",
                },
                {
                    isHave: true,
                    content: "Revisions as per scope",
                },
            ],
            link: "#",
        },
        {
            tagline: "Web Development Services",
            description:
                "Ideal for individuals who need quick access to service features.",
            price: {
                start: 20000,
                end: 500000,
            },
            features: [
                {
                    isHave: true,
                    content: "Custom website design & development",
                },
                {
                    isHave: true,
                    content: "Up to 10-30 pages",
                },
                {
                    isHave: true,
                    content: "CMS integration (WordPress/Custom)",
                },
                {
                    isHave: true,
                    content: "Basic SEO setup",
                },
                {
                    isHave: true,
                    content: "Hosting & deployment support",
                },
                {
                    isHave: true,
                    content: "3–6 months maintenance",
                },
            ],
            link: "#",
        },
        {
            tagline: "Web Development Services",
            description:
                "Ideal for individuals who need quick access to service features.",
            price: {
                start: 20000,
                end: 500000,
            },
            features: [
                {
                    isHave: true,
                    content: "Custom website design & development",
                },
                {
                    isHave: true,
                    content: "Up to 10-30 pages",
                },
                {
                    isHave: true,
                    content: "CMS integration (WordPress/Custom)",
                },
                {
                    isHave: true,
                    content: "Basic SEO setup",
                },
                {
                    isHave: true,
                    content: "Hosting & deployment support",
                },
                {
                    isHave: true,
                    content: "3–6 months maintenance",
                },
            ],
            link: "#",
        },
    ];
    const customers = [
        {
            image: "/customers/1.png",
            altImage: "",
            name: "Ankit Mehta",
            tagline: "TastyLeaf, Founder",
            star: 5,
            content:
                "The team’s ability to translate our vague ideas into a clean design was incredible. They really listen and deliver.",
        },
        {
            image: "/customers/2.png",
            altImage: "",
            name: "Priyak Sharma",
            tagline: "EduNova, CEO",
            star: 5,
            content:
                "Our website now feels fast, modern, and professional, and we’ve seen a noticeable increase in leads since launch.",
        },
        {
            image: "/customers/3.png",
            altImage: "",
            name: "Arjun Patel",
            tagline: "FitGear, Developer",
            star: 5,
            content:
                "We appreciated the transparent pricing and clear process. No surprises, and we felt supported every step of the way.",
        },
    ];
    return (
        <div className="mb-10 px-4 md:px-20">
            <div className="mb-8 text-center">
                <h1 className="font-lato400 my-6 text-5xl font-bold md:text-6xl">
                    Transparent Pricing for Every Need
                </h1>
                <h3 className="font-lato400 my-4 text-xl">
                    Flexible, scalable, and clear pricing to help you plan your
                    projects with confidence.
                </h3>
            </div>
            <PricingCarousel pricings={pricings} />
            {/* <PricingCarousel2 pricings={pricings} /> */}
            <div>
                <h1 className="font-lato400 my-6 mb-10 text-center text-5xl font-bold">
                    From Our Customers
                </h1>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            className="font-montserrat400 rounded-xl border-2 border-slate-200 p-4"
                        >
                            <div className="mb-4 flex flex-wrap items-center gap-5">
                                <div>
                                    <Image
                                        src={customer.image}
                                        width={100}
                                        height={100}
                                        alt={customer.altImage}
                                    />
                                </div>
                                <div>
                                    <p className="font-lato400 font-bold">
                                        {customer.name}
                                    </p>
                                    <p className="text-sm">
                                        {customer.tagline}
                                    </p>
                                    <Rating value={customer.star} />
                                </div>
                            </div>
                            <p>{customer.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
