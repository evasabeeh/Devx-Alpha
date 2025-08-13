export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { resetPasswordSchema } from "@/lib/validations/auth";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input with Zod
        try {
            resetPasswordSchema.parse(body);
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.issues.map((err) => ({
                    field: err.path[0],
                    message: err.message,
                }));
                return NextResponse.json(
                    { error: "Validation failed", fieldErrors },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { error: "Invalid input data" },
                { status: 400 }
            );
        }

        const { token, password } = body;

        // Find the verification token
        const verificationToken = await prisma.verificationToken.findFirst({
            where: {
                token,
                expires: {
                    gt: new Date(),
                },
            },
        });

        if (!verificationToken) {
            return NextResponse.json(
                { error: "Invalid or expired reset token" },
                { status: 400 }
            );
        }

        // Find the user by email (identifier in verification token)
        const user = await prisma.user.findUnique({
            where: { email: verificationToken.identifier },
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user password
        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });

        // Delete the used verification token
        await prisma.verificationToken.delete({
            where: { id: verificationToken.id },
        });

        return NextResponse.json({
            message: "Password reset successfully",
        });
    } catch (error) {
        console.error("Password reset error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
