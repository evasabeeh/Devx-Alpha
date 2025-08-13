import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
    try {
        // Check admin access
        await requireAdmin();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");
        const jobId = searchParams.get("jobId");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const skip = (page - 1) * limit;

        // Build where clause
        const where: { status?: string; jobId?: string } = {};
        if (status && status !== "all") {
            where.status = status;
        }
        if (jobId) {
            where.jobId = jobId;
        }

        // Get applications with pagination
        const [applications, total] = await Promise.all([
            prisma.jobApplication.findMany({
                where,
                include: {
                    job: {
                        select: {
                            id: true,
                            title: true,
                            department: true,
                            location: true,
                            type: true,
                        },
                    },
                },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.jobApplication.count({ where }),
        ]);

        return NextResponse.json({
            applications,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Error fetching job applications:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
