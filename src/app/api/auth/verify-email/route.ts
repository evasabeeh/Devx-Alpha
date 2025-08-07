import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { token } = await request.json();

        if (!token) {
            return NextResponse.json(
                { error: "Token is required" },
                { status: 400 }
            );
        }

        // Find the verification token
        const verificationToken = await prisma.verificationToken.findUnique({
            where: { token },
            include: { user: true },
        });

        if (!verificationToken) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 400 }
            );
        }

        // Check if token is expired
        if (verificationToken.expires < new Date()) {
            // Delete expired token
            await prisma.verificationToken.delete({
                where: { token },
            });

            return NextResponse.json(
                { error: "Token has expired" },
                { status: 400 }
            );
        }

        // Update user as verified
        await prisma.user.update({
            where: { id: verificationToken.userId! },
            data: { emailVerified: new Date() },
        });

        // Delete the verification token
        await prisma.verificationToken.delete({
            where: { token },
        });

        return NextResponse.json({
            message: "Email verified successfully",
        });
    } catch (error) {
        console.error("Email verification error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
