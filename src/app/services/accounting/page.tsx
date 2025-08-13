import Hero from "@/components/Services/ServicesHero";
import Desc from "@/components/Services/Desc";
import Link from "next/link";
const heroData = {
    title: "Accounting Professional ",
    description:
        "We provide expert accounting services to help businesses maintain financial accuracy, comply with regulations, and make informed decisions.",
    image: "/services/hero/accounting-hero.jpg",
};

const accountingData = {
    sections: [
        {
            layout: "left" as const,
            cards: [
                {
                    title: "Bookkeeping & Records Management",
                    icon: "BsFileBarGraph",
                    description:
                        "Maintain accurate and up-to-date financial records, ensuring compliance with accounting standards.",
                },
            ],
            cardsRight: [
                {
                    title: "Tax Planning & Filing",
                    icon: "BiCheckShield",
                    description:
                        "Optimize your tax strategy and ensure timely, accurate filing for businesses and individuals.",
                },
                {
                    title: "Payroll Processing",
                    icon: "PiSquaresFour",
                    description:
                        "Seamless payroll management, ensuring employees are paid accurately and on time.",
                },
            ],
        },
        {
            layout: "right" as const,
            cards: [
                {
                    title: "Financial Reporting & Analysis",
                    icon: "BsLayoutSidebarReverse",
                    description:
                        "Detailed reports and insights to help you make informed business decisions.",
                },
                {
                    title: "Budgeting & Forecasting",
                    icon: "HiMiniArrowTrendingUp",
                    description:
                        "Plan your finances effectively with data-driven budgeting and forecasting.",
                },
            ],
            cardsRight: [
                {
                    title: "Audit Support Services",
                    icon: "IoMdCheckmarkCircleOutline",
                    description:
                        "Comprehensive assistance during audits to ensure smooth compliance.",
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
                    We can help you with
                </h1>

                <Desc data={accountingData} />

                <div className="font-lato900 mt-10 max-w-full rounded-xl bg-[#fbfbff] px-6 py-4 shadow-md">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs font-bold md:text-sm">
                            Ready to streamline your accounting processes? We
                            are!
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
                        Partner with our accounting experts to ensure financial
                        clarity, accuracy, and growth for your business.
                    </p>
                </div>
            </div>
        </div>
    );
}
