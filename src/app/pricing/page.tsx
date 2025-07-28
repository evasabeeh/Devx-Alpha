import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
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
        },
    ];
    return (
        <div>
            <div className="text-center">
                <h1 className="my-4 text-5xl font-bold">
                    Transparent Pricing for Every Need
                </h1>
                <h3 className="text-xl">
                    Flexible, scalable, and clear pricing to help you plan your
                    projects with confidence.
                </h3>
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
                        <p className="mb-4 font-bold">
                            &#8377;{pricing.price.start} - &#8377;
                            {pricing.price.end}
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
