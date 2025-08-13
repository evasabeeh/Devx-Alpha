import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const jobs = await prisma.job.findMany({
            where: {
                isActive: true,
            },
            orderBy: { createdAt: "desc" },
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

        return NextResponse.json({
            jobs,
        });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
