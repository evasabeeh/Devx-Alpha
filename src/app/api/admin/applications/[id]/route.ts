import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { jobApplicationStatusSchema } from "@/lib/schemas/admin";
import { auth } from "@/lib/auth";
import { sendApplicationStatusEmail } from "@/lib/email";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;
        const application = await prisma.jobApplication.findUnique({
            where: { id },
            include: {
                job: {
                    select: {
                        id: true,
                        title: true,
                        department: true,
                        location: true,
                        type: true,
                        description: true,
                        requirements: true,
                        salary: true,
                    },
                },
            },
        });

        if (!application) {
            return NextResponse.json(
                { error: "Application not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            application,
        });
    } catch (error) {
        console.error("Error fetching job application:", error);
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

        // Get current user session for reviewedBy field
        const session = await auth();
        const userId = session?.user?.id;

        // Validate input using schema
        const validation = jobApplicationStatusSchema.safeParse(body);
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

        // Check if application exists and get current status
        const existingApplication = await prisma.jobApplication.findUnique({
            where: { id },
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

        if (!existingApplication) {
            return NextResponse.json(
                { error: "Application not found" },
                { status: 404 }
            );
        }

        // Check if status is actually changing
        const statusChanged =
            existingApplication.status !== validatedData.status;

        // Update application
        const application = await prisma.jobApplication.update({
            where: { id },
            data: {
                ...validatedData,
                reviewedBy: userId,
                reviewedAt: new Date(),
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

        // Send status change email if status actually changed
        if (statusChanged) {
            try {
                await sendApplicationStatusEmail({
                    firstName: application.firstName,
                    lastName: application.lastName,
                    email: application.email,
                    jobTitle: application.job.title,
                    jobDepartment: application.job.department,
                    jobLocation: application.job.location,
                    status: application.status,
                    adminNotes: application.adminNotes || undefined,
                });
            } catch (emailError) {
                console.error(
                    "Failed to send status change email:",
                    emailError
                );
                // Don't fail the update if email fails
            }
        }

        return NextResponse.json({
            message: "Application updated successfully",
            application,
        });
    } catch (error) {
        console.error("Error updating job application:", error);
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

        // Check if application exists
        const existingApplication = await prisma.jobApplication.findUnique({
            where: { id },
        });

        if (!existingApplication) {
            return NextResponse.json(
                { error: "Application not found" },
                { status: 404 }
            );
        }

        // Delete application
        await prisma.jobApplication.delete({
            where: { id },
        });

        return NextResponse.json({
            message: "Application deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting job application:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
