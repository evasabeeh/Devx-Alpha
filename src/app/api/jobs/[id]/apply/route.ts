import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { jobApplicationSchema } from "@/lib/schemas/admin";
import {
    sendApplicationConfirmationEmail,
    sendNewApplicationNotificationToAdmin,
} from "@/lib/email";

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: jobId } = await params;
        const body = await request.json();

        // Check if job exists and is active
        const job = await prisma.job.findUnique({
            where: { id: jobId },
        });

        if (!job) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        if (!job.isActive) {
            return NextResponse.json(
                {
                    error: "This job posting is no longer accepting applications",
                },
                { status: 400 }
            );
        }

        // Validate input using schema
        const validation = jobApplicationSchema.safeParse(body);
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

        // Check if user has already applied for this job
        const existingApplication = await prisma.jobApplication.findFirst({
            where: {
                jobId,
                email: validatedData.email,
            },
        });

        if (existingApplication) {
            return NextResponse.json(
                { error: "You have already applied for this position" },
                { status: 400 }
            );
        }

        // Create job application
        const application = await prisma.jobApplication.create({
            data: {
                jobId,
                ...validatedData,
            },
            include: {
                job: {
                    select: {
                        title: true,
                        department: true,
                        location: true,
                    },
                },
            },
        });

        // Send confirmation email to applicant
        try {
            await sendApplicationConfirmationEmail({
                firstName: application.firstName,
                lastName: application.lastName,
                email: application.email,
                jobTitle: application.job.title,
                jobDepartment: application.job.department,
                jobLocation: application.job.location,
            });
        } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
            // Don't fail the application if email fails
        }

        // Send notification email to admin
        try {
            await sendNewApplicationNotificationToAdmin({
                firstName: application.firstName,
                lastName: application.lastName,
                email: application.email,
                jobTitle: application.job.title,
                jobDepartment: application.job.department,
                jobLocation: application.job.location,
            });
        } catch (emailError) {
            console.error(
                "Failed to send admin notification email:",
                emailError
            );
            // Don't fail the application if email fails
        }

        return NextResponse.json({
            message: "Application submitted successfully",
            application: {
                id: application.id,
                jobTitle: application.job.title,
                department: application.job.department,
                status: application.status,
                submittedAt: application.createdAt,
            },
        });
    } catch (error) {
        console.error("Error submitting job application:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
