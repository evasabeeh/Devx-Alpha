import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { jobSchema } from "@/lib/schemas/admin";

export async function GET() {
    try {
        // Check admin access
        await requireAdmin();

        const jobs = await prisma.job.findMany({
            orderBy: { createdAt: "desc" },
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

export async function POST(request: NextRequest) {
    try {
        // Check admin access
        await requireAdmin();

        const body = await request.json();

        // Validate input using schema
        const validation = jobSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: validation.error.issues.map((err) => ({
                        field: err.path.join("."),
                        message: err.message,
                    })),
                },
                { status: 400 }
            );
        }

        const validatedData = validation.data;

        // Create job
        const job = await prisma.job.create({
            data: validatedData,
        });

        return NextResponse.json({
            message: "Job created successfully",
            job,
        });
    } catch (error) {
        console.error("Error creating job:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
