"use client";
import Image from "next/image";
import {
    FaSearch,
    FaProjectDiagram,
    FaPaintBrush,
    FaRocket,
} from "react-icons/fa";

import "./style.css";

const steps = [
    {
        title: "Discover",
        description: "We understand your goals, audience, and vision.",
        icon: <FaSearch className="text-primary mt-1 text-3xl" />,
    },
    {
        title: "Strategy",
        description: "We plan a clear, effective roadmap for your project.",
        icon: <FaProjectDiagram className="text-primary mt-1 text-3xl" />,
    },
    {
        title: "Design",
        description: "We craft engaging, user-focused designs.",
        icon: <FaPaintBrush className="text-primary mt-1 text-3xl" />,
    },
    {
        title: "Deliver",
        description: "We launch your project with quality and care.",
        icon: <FaRocket className="text-primary mt-1 text-3xl" />,
    },
];

const teams = [
    {
        name: "Martin Rivera",
        role: "Co-Founder",
        image: "/teams/1.jpg",
    },
    {
        name: "John Doe",
        role: "Co-Founder",
        image: "/teams/2.jpg",
    },
    {
        name: "Anna Smith",
        role: "UI/UX Designer",
        image: "/teams/3.jpg",
    },
];

function TeamCard({ team }: { team: (typeof teams)[0] }) {
    return (
        <div className="teams-item flex flex-col items-center rounded-b-sm p-0 text-center shadow-sm shadow-slate-400">
            <Image
                width={200}
                height={200}
                src={team.image}
                alt={team.name + " image"}
                className="h-60 w-full object-cover"
            />
            <div className="teams-item-content py-2">
                <h3 className="text-base font-semibold sm:text-lg">
                    {team.name}
                </h3>
                <p className="text-sm text-gray-500 sm:text-base">
                    {team.role}
                </p>
            </div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full bg-white">
            <section className="relative z-10 min-h-screen w-full">
                <Image
                    src="/about/1.jpg"
                    alt="About Hero"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="border-primary border-4 px-4 py-2 text-[24px] leading-[100%] font-semibold tracking-[-0.02em] text-white sm:px-6 sm:text-[32px] md:px-8 md:text-[40px] lg:px-10 lg:text-[48px] xl:text-[55px]">
                        About Us
                    </h1>

                    <p className="mt-4 max-w-[90%] text-[14px] font-medium text-white sm:max-w-[80%] sm:text-[16px] md:max-w-[700px] md:text-[18px] lg:text-[20px]">
                        Crafting Experiences That Inspire, Connect, and Deliver
                        Impact.
                    </p>
                </div>
            </section>

            {/* second section */}
            <section className="relative z-20 -mt-16 flex w-full justify-center px-4 md:-mt-24">
                <div className="relative z-20 mt-0 flex min-h-[80vh] w-[190vh] max-w-5xl flex-col overflow-hidden border border-gray-200 bg-white md:-mt-24 md:h-[75vh] md:flex-row">
                    <div className="flex w-full p-4 md:w-1/2">
                        <div className="px-4 text-center md:px-7">
                            <h1 className="text-primary mt-5 mb-4 text-[32px] leading-[100%] font-bold tracking-[-0.02em] sm:text-[36px] md:text-[40px]">
                                We Are Devx Alpha
                            </h1>
                            <p className="text-bold mb-4 py-5 text-[20px] leading-[100%] tracking-[-0.02em] text-black sm:text-[22px] md:text-[29px]">
                                Our Purpose & Passion
                            </p>

                            <p className="px-7 py-5 text-left text-base leading-relaxed text-black">
                                At Devx Alpha, we don’t just offer products—we
                                craft experiences. Every detail, from design to
                                delivery, reflects our commitment to quality,
                                creativity, and care. We aim to inspire and
                                serve by understanding your needs and
                                transforming ideas into meaningful results.
                            </p>
                            <p className="px-7 py-3 text-left text-base leading-relaxed text-black">
                                Driven by authenticity and innovation, we bring
                                fresh ideas to life while staying true to our
                                core values. From concept to creation, our work
                                is guided by a passion for excellence and a
                                desire to make a positive impact in the lives of
                                our customers. Your trust fuels us, and your
                                satisfaction is our greatest reward.
                            </p>
                        </div>
                    </div>

                    <div className="h-64 w-full md:h-auto md:w-1/2">
                        <Image
                            width={500}
                            height={500}
                            src="/about/2.jpg"
                            alt="Vision"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* third section */}
            <section className="my:3 relative z-10 flex w-full justify-center md:my-0">
                <div className="relative z-20 flex h-auto w-full flex-col overflow-hidden border border-gray-200 bg-white md:h-[85vh] md:flex-row">
                    <div className="relative h-64 w-full md:h-auto md:w-1/2">
                        <Image
                            width={500}
                            height={500}
                            src="/about/3.jpg"
                            alt="Background Vision"
                            className="h-full w-full object-cover"
                        />

                        <Image
                            width={500}
                            height={500}
                            src="/about/4.jpg"
                            alt="Overlay Team Image"
                            className="absolute top-8 left-12 h-auto w-[90%] shadow-lg md:w-[755px]"
                        />
                    </div>

                    <div className="w-full p-4 px-20 md:w-1/2">
                        <div className="text-center">
                            <h1 className="text-primary mt-12 mb-4 text-[32px] leading-[100%] tracking-[-0.02em] sm:text-[36px] md:mt-7 md:text-[40px]">
                                How we work
                            </h1>
                            <p className="px-10 py-2 text-center text-base leading-relaxed text-black md:text-left">
                                At Devx Alpha, we combine creativity and
                                strategy to deliver results that matter. We
                                focus on your goals, crafting quality solutions
                                with care to help your business grow
                                confidently.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col gap-6 px-4 sm:px-10">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div>{step.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-black">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* fourth section */}
            <section className="w-full bg-white px-4 py-10">
                <h2 className="mb-10 text-center text-[28px] font-semibold text-black sm:text-[32px] md:text-[50px]">
                    Milestones That Matter
                </h2>

                <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-0 md:flex-row md:items-start">
                    <div className="max-w-sm px-6 py-4 text-center md:text-left">
                        <p className="text-primary text-center text-[40px] font-bold">
                            86+
                        </p>
                        <h3 className="mt-1 text-center text-lg font-semibold">
                            Happy Clients
                        </h3>
                        <p className="mt-1 text-center text-sm text-gray-600">
                            Proudly serving over 86 satisfied clients with
                            dedication and care.
                        </p>
                    </div>

                    <div className="max-w-sm border-r-2 border-l-2 border-slate-200 px-20 py-4 text-center md:text-left">
                        <p className="text-primary text-center text-[40px] font-bold">
                            3+
                        </p>
                        <h3 className="mt-1 text-center text-lg font-semibold">
                            Years of Experience
                        </h3>
                        <p className="mt-1 text-center text-sm text-gray-600">
                            Bringing over three years of consistent quality to
                            every project.
                        </p>
                    </div>

                    <div className="max-w-sm px-20 py-4 text-center md:text-left">
                        <p className="text-primary text-center text-[40px] font-bold">
                            32+
                        </p>
                        <h3 className="mt-1 text-center text-lg font-semibold">
                            Business Partners
                        </h3>
                        <p className="mt-1 text-center text-sm text-gray-600">
                            Collaborating with 32+ trusted partners to deliver
                            impact.
                        </p>
                    </div>
                </div>
            </section>
            {/* fifth section */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="my-8 flex items-center justify-center gap-4">
                        <h2 className="border-primary mb-2 border-r-2 border-l-2 px-4 pb-1 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Meet Our Team
                        </h2>
                    </div>

                    <p className="mb-10 text-sm font-bold text-black sm:text-base md:text-lg">
                        We are the best team
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {teams.map((team, index) => (
                            <TeamCard key={index} team={team} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
