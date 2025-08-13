import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;

        // Get the application with resume URL
        const application = await prisma.jobApplication.findUnique({
            where: { id },
            select: {
                resumeUrl: true,
                firstName: true,
                lastName: true,
            },
        });

        if (!application) {
            return NextResponse.json(
                { error: "Application not found" },
                { status: 404 }
            );
        }

        // Fetch the file from Cloudinary
        const response = await fetch(application.resumeUrl);

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch resume file" },
                { status: 500 }
            );
        }

        // Get the file content
        const fileBuffer = await response.arrayBuffer();

        // Create filename - all resumes are now PDF only
        const fileName = `${application.firstName}_${application.lastName}_resume.pdf`;

        // Return the file with proper headers for download
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${fileName}"`,
                "Cache-Control": "no-cache",
            },
        });
    } catch (error) {
        console.error("Error downloading resume:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
