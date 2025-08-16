import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { FaXTwitter, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team - Meet the Experts Behind Our Success",
    description:
        "Meet our talented and passionate team of professionals who drive innovation and deliver exceptional results. Get to know the people behind our success.",
    keywords: [
        "Our Team",
        "Team Members",
        "Company Team",
        "Experts",
        "Developers",
        "Designers",
        "Company Staff",
    ],
    openGraph: {
        title: "Our Team - Meet the Experts Behind Our Success",
        description:
            "Discover our dedicated team of professionals who work tirelessly to bring you the best in web development, app development, and design.",
        url: process.env.NEXT_URL + "/about",
        type: "website",
        images: [
            {
                url: "/Seo/team.jpg",
                width: 1200,
                height: 630,
                alt: "Our Team",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team - Meet the Experts Behind Our Success",
        description:
            "Meet our amazing team of experts who make everything possible.",
        images: ["/Seo/team.jpg"],
    },
};
async function getTeamMembers() {
    try {
        const teamMembers = await prisma.teamMember.findMany({
            where: { isActive: true },
            orderBy: { order: "asc" },
        });
        return teamMembers;
    } catch (error) {
        console.error("Error fetching team members:", error);
        return [];
    }
}

export default async function OurTeamPage() {
    const teamMembers = await getTeamMembers();

    return (
        <div className="relative min-h-screen w-full bg-white">
            {/* Hero Section */}
            <section className="relative z-10 min-h-screen w-full">
                <Image
                    src="/about/1.jpg"
                    alt="Our Team Hero"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="border-primary border-4 px-4 py-2 text-[24px] leading-[100%] font-semibold tracking-[-0.02em] text-white sm:px-6 sm:text-[32px] md:px-8 md:text-[40px] lg:px-10 lg:text-[48px] xl:text-[55px]">
                        Our Team
                    </h1>

                    <p className="mt-4 max-w-[90%] text-[14px] font-medium text-white sm:max-w-[80%] sm:text-[16px] md:max-w-[700px] md:text-[18px] lg:text-[20px]">
                        Meet the passionate individuals behind our success
                    </p>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="my-8 flex items-center justify-center gap-4">
                        <h2 className="border-primary mb-2 border-r-2 border-l-2 px-4 pb-1 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Meet Our Team
                        </h2>
                    </div>

                    <p className="mb-10 text-sm font-bold text-black sm:text-base md:text-lg">
                        We are the best team
                    </p>

                    {teamMembers.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                            {teamMembers.map((member) => (
                                <TeamMemberCard
                                    key={member.id}
                                    member={member}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center">
                            <div className="mx-auto max-w-md">
                                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                                    <FaEnvelope className="h-10 w-10 text-gray-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    Team Coming Soon
                                </h3>
                                <p className="text-gray-600">
                                    We&apos;re building an amazing team. Check
                                    back soon to meet the people behind our
                                    mission.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="w-full bg-white px-4 py-10">
                <h2 className="mb-10 text-center text-[28px] font-semibold text-black sm:text-[32px] md:text-[50px]">
                    Want to Join Our Team?
                </h2>

                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-8 text-base leading-relaxed text-black md:text-lg">
                        We&apos;re always looking for talented individuals who
                        share our passion for innovation and excellence. Explore
                        our open positions and become part of our journey.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="/career"
                            className="bg-primary rounded px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            View Open Positions
                        </a>
                        <a
                            href="/contact"
                            className="border-primary text-primary hover:bg-primary rounded border-2 bg-white px-8 py-3 font-semibold transition-colors hover:text-white"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

interface TeamMemberCardProps {
    member: {
        id: string;
        name: string;
        position: string;
        bio: string | null;
        image: string | null;
        linkedIn: string | null;
        twitter: string | null;
        email: string | null;
    };
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <div className="teams-item flex flex-col items-center rounded-b-sm p-0 text-center shadow-sm shadow-slate-400">
            {member.image ? (
                <Image
                    width={200}
                    height={200}
                    src={member.image}
                    alt={member.name + " image"}
                    className="h-60 w-full object-cover"
                />
            ) : (
                <div className="flex h-60 w-full items-center justify-center bg-gray-200">
                    <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full">
                        <span className="text-2xl font-bold text-white">
                            {member.name.charAt(0)}
                        </span>
                    </div>
                </div>
            )}

            <div className="teams-item-content w-full px-2 py-4">
                <h3 className="mb-1 text-base font-semibold sm:text-lg">
                    {member.name}
                </h3>
                <p className="text-primary mb-3 text-sm sm:text-base">
                    {member.position}
                </p>

                {member.bio && (
                    <p className="mb-4 px-2 text-xs leading-relaxed text-gray-600">
                        {member.bio.length > 100 ? `${member.bio}` : member.bio}
                    </p>
                )}

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                    {member.linkedIn && (
                        <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                    )}
                    {member.twitter && (
                        <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity"
                        >
                            <FaXTwitter className="h-6 w-6" />
                        </a>
                    )}
                    {member.email && (
                        <a
                            href={`mailto:${member.email}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity"
                        >
                            <FaEnvelope className="h-6 w-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
