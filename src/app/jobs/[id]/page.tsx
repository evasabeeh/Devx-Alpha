import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import JobDetailClient from "@/components/jobs/JobDetailClient";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string;
    salary?: string;
    createdAt: string;
    updatedAt: string;
}

async function getJob(id: string): Promise<Job | null> {
    try {
        const job = await prisma.job.findUnique({
            where: {
                id,
                isActive: true, // Only show active jobs
            },
            select: {
                id: true,
                title: true,
                department: true,
                location: true,
                type: true,
                description: true,
                requirements: true,
                salary: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!job) return null;

        return {
            ...job,
            salary: job.salary || undefined,
            createdAt: job.createdAt.toISOString(),
            updatedAt: job.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error("Error fetching job:", error);
        return null;
    }
}

export default async function JobDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const job = await getJob(id);

    if (!job) {
        notFound();
    }

    return <JobDetailClient job={job} />;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const job = await getJob(id);

    if (!job) {
        return {
            title: "Job Not Found",
        };
    }

    return {
        title: `${job.title} - ${job.department} | DevX Alpha`,
        description: `Join our team as a ${job.title} in ${job.department}. Location: ${job.location}. ${job.description.substring(0, 150)}...`,
    };
}
