import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { jobSchema } from "@/lib/schemas/admin";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;
        const job = await prisma.job.findUnique({
            where: { id },
        });

        if (!job) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            job,
        });
    } catch (error) {
        console.error("Error fetching job:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;
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

        // Check if job exists
        const existingJob = await prisma.job.findUnique({
            where: { id },
        });

        if (!existingJob) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        // Update job
        const job = await prisma.job.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({
            message: "Job updated successfully",
            job,
        });
    } catch (error) {
        console.error("Error updating job:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;

        // Check if job exists
        const existingJob = await prisma.job.findUnique({
            where: { id },
        });

        if (!existingJob) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        // Delete job
        await prisma.job.delete({
            where: { id },
        });

        return NextResponse.json({
            message: "Job deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting job:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
