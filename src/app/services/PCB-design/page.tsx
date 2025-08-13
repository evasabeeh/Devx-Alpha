import Hero from "@/components/Services/ServicesHero";
import Desc from "@/components/Services/Desc";
import Link from "next/link";

const heroData = {
    title: "PCB Design ",
    description:
        "We deliver high-quality, custom PCB design solutions tailored to meet your product requirements, ensuring optimal performance and reliability.",
    image: "/services/hero/PCB-hero.jpg",
};

const pcbDesignData = {
    sections: [
        {
            layout: "left" as const,
            cards: [
                {
                    title: "Custom PCB Layout Design",
                    icon: "BsMotherboard",
                    description:
                        "We design custom PCB layouts optimized for your specific application, ensuring performance, durability, and cost-effectiveness.",
                },
            ],
            cardsRight: [
                {
                    title: "Multi-layer & High-Density PCB",
                    icon: "PiStack",
                    description:
                        "We create multi-layer and high-density PCBs for complex electronics, ensuring signal integrity and space efficiency.",
                },
                {
                    title: "Schematic Capture & Simulation",
                    icon: "AiOutlineFunction",
                    description:
                        "We provide schematic capture and simulation to verify circuit performance before production, reducing errors and costs.",
                },
            ],
        },
        {
            layout: "right" as const,
            cards: [
                {
                    title: "PCB Prototyping & Testing",
                    icon: "LuTestTube2",
                    description:
                        "We offer rapid PCB prototyping and rigorous testing to validate your designs before mass production.",
                },
                {
                    title: "Design for Manufacturing (DFM)",
                    icon: "IoMdConstruct",
                    description:
                        "We ensure your PCB designs are optimized for manufacturing, reducing production issues and lead times.",
                },
            ],
            cardsRight: [
                {
                    title: "High-Speed & RF PCB Design",
                    icon: "PiWaveSine",
                    description:
                        "We specialize in high-speed and RF PCB designs, ensuring optimal performance for wireless and high-frequency applications.",
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

                <Desc data={pcbDesignData} />

                <div className="font-lato900 mt-10 max-w-full rounded-xl bg-[#fbfbff] px-6 py-4 shadow-md">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs font-bold md:text-sm">
                            Ready to create your perfect PCB design? We are!
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
                        Let us bring your electronics vision to life. Partner
                        with devX Alpha for precision, innovation, and
                        reliability in PCB design and manufacturing.
                    </p>
                </div>
            </div>
        </div>
    );
}
