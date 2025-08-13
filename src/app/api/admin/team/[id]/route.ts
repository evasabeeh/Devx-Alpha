import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { teamMemberSchema } from "@/lib/schemas/team";
import {
    deleteImageFromCloudinary,
    extractPublicIdFromUrl,
} from "@/lib/cloudinary";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check admin access
        await requireAdmin();

        const { id } = await params;
        const teamMember = await prisma.teamMember.findUnique({
            where: { id },
        });

        if (!teamMember) {
            return NextResponse.json(
                { error: "Team member not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            teamMember,
        });
    } catch (error) {
        console.error("Error fetching team member:", error);
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
        const validation = teamMemberSchema.safeParse(body);
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

        // Check if team member exists
        const existingMember = await prisma.teamMember.findUnique({
            where: { id },
        });

        if (!existingMember) {
            return NextResponse.json(
                { error: "Team member not found" },
                { status: 404 }
            );
        }

        // If image is being changed and old image exists, delete old image from Cloudinary
        if (
            existingMember.image &&
            validatedData.image !== existingMember.image
        ) {
            const oldPublicId = extractPublicIdFromUrl(existingMember.image);
            if (oldPublicId) {
                await deleteImageFromCloudinary(oldPublicId);
            }
        }

        // Update team member
        const teamMember = await prisma.teamMember.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({
            message: "Team member updated successfully",
            teamMember,
        });
    } catch (error) {
        console.error("Error updating team member:", error);

        if (error instanceof Error && error.message.includes("redirect")) {
            // This is a redirect from requireAdmin, let it pass through
            throw error;
        }

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

        // Check if team member exists
        const existingMember = await prisma.teamMember.findUnique({
            where: { id },
        });

        if (!existingMember) {
            return NextResponse.json(
                { error: "Team member not found" },
                { status: 404 }
            );
        }

        // Delete image from Cloudinary if exists
        if (existingMember.image) {
            const publicId = extractPublicIdFromUrl(existingMember.image);
            if (publicId) {
                await deleteImageFromCloudinary(publicId);
            }
        }

        // Delete team member
        await prisma.teamMember.delete({
            where: { id },
        });

        return NextResponse.json({
            message: "Team member deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting team member:", error);

        if (error instanceof Error && error.message.includes("redirect")) {
            // This is a redirect from requireAdmin, let it pass through
            throw error;
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
