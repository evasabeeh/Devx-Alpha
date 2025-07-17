import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export default function Pricing() {
    const pricings = [
        {
            tagline: "Freebie",
            description:
                "Ideal for individuals who need quick access to basic features.",
            price: 0,
            features: [
                {
                    isHave: true,
                    content: "20,000+ of PNG & SVG graphics",
                },
                {
                    isHave: true,
                    content: "Access to 100 million stock images",
                },
                {
                    isHave: false,
                    content: "Upload custom icons and fonts",
                },
                {
                    isHave: false,
                    content: "Unlimited Sharing",
                },
                {
                    isHave: false,
                    content: "Upload graphics & video in up to 4k",
                },
                {
                    isHave: false,
                    content: "Unlimited Projects",
                },
                {
                    isHave: false,
                    content: "Instant Access to our design system",
                },
                {
                    isHave: false,
                    content: "Create teams to collaborate on designs",
                },
            ],
        },
        {
            tagline: "Professional",
            description:
                "Ideal for individuals who who need advanced features and tools for client work.",
            price: 25,
            features: [
                {
                    isHave: true,
                    content: "20,000+ of PNG & SVG graphics",
                },
                {
                    isHave: true,
                    content: "Access to 100 million stock images",
                },
                {
                    isHave: true,
                    content: "Upload custom icons and fonts",
                },
                {
                    isHave: true,
                    content: "Unlimited Sharing",
                },
                {
                    isHave: true,
                    content: "Upload graphics & video in up to 4k",
                },
                {
                    isHave: true,
                    content: "Unlimited Projects",
                },
                {
                    isHave: false,
                    content: "Instant Access to our design system",
                },
                {
                    isHave: false,
                    content: "Create teams to collaborate on designs",
                },
            ],
        },
        {
            tagline: "Enterprise",
            description:
                "Ideal for businesses who need personalized services and security for large teams.",
            price: 100,
            features: [
                {
                    isHave: true,
                    content: "20,000+ of PNG & SVG graphics",
                },
                {
                    isHave: true,
                    content: "Access to 100 million stock images",
                },
                {
                    isHave: true,
                    content: "Upload custom icons and fonts",
                },
                {
                    isHave: true,
                    content: "Unlimited Sharing",
                },
                {
                    isHave: true,
                    content: "Upload graphics & video in up to 4k",
                },
                {
                    isHave: true,
                    content: "Unlimited Projects",
                },
                {
                    isHave: true,
                    content: "Instant Access to our design system",
                },
                {
                    isHave: true,
                    content: "Create teams to collaborate on designs",
                },
            ],
        },
    ];
    return (
        <div className="mb-10 px-4 md:px-20">
            <div className="mb-10 text-center">
                <p className="tag mb-2">pricing</p>
                <h2 className="mb-4">Flexible Packages for Every Need</h2>
            </div>
            <div className="even:bg-red grid grid-cols-1 gap-4 md:grid-cols-3">
                {pricings.map((pricing, index) => (
                    <div
                        key={index}
                        className="even:bg-primary font-montserrat400 rounded-2xl border-2 border-slate-200 px-4 py-6 even:text-white"
                    >
                        <p className="font-manrope400 mb-2 text-xl font-bold">
                            {pricing.tagline}
                        </p>
                        <p className="mb-4">{pricing.description}</p>
                        <p className="mb-4">
                            <span className="text-5xl font-bold">
                                ${pricing.price}
                            </span>
                            <span> /Month</span>
                        </p>
                        <Link
                            href=""
                            className="border-primary mb-4 block rounded-xl border-2 py-2 text-center even:bg-white even:text-black"
                        >
                            Get Started Now
                        </Link>
                        <ul>
                            {pricing.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center py-1"
                                >
                                    <div className="rounded-full bg-slate-100 p-2">
                                        {feature.isHave ? (
                                            <FaCheck size={12} color="green" />
                                        ) : (
                                            <RxCross2 size={12} color="red" />
                                        )}{" "}
                                    </div>
                                    <div className="ml-1">
                                        {feature.content}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
