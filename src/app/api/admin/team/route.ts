import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { teamMemberSchema } from "@/lib/schemas/team";

export async function GET() {
    try {
        // Check admin access
        await requireAdmin();

        const teamMembers = await prisma.teamMember.findMany({
            orderBy: { order: "asc" },
        });

        return NextResponse.json({
            teamMembers,
        });
    } catch (error) {
        console.error("Error fetching team members:", error);
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

        // Create team member
        const teamMember = await prisma.teamMember.create({
            data: validatedData,
        });

        return NextResponse.json({
            message: "Team member created successfully",
            teamMember,
        });
    } catch (error) {
        console.error("Error creating team member:", error);

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
