import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";
import { randomBytes } from "crypto";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input with Zod
        try {
            forgotPasswordSchema.parse(body);
        } catch (error) {
            if (error instanceof ZodError) {
                return NextResponse.json(
                    { error: error.issues[0]?.message || "Invalid email" },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { error: "Invalid input data" },
                { status: 400 }
            );
        }

        const { email } = body;

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email },
        });

        // Always return success to prevent email enumeration
        // but only send email if user exists
        if (user) {
            // Generate reset token
            const token = randomBytes(32).toString("hex");
            const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

            // Delete any existing reset tokens for this user
            await prisma.verificationToken.deleteMany({
                where: {
                    identifier: email,
                    userId: user.id,
                },
            });

            // Create new reset token
            await prisma.verificationToken.create({
                data: {
                    identifier: email,
                    token,
                    expires,
                    userId: user.id,
                },
            });

            // Send reset email
            await sendPasswordResetEmail(email, token);
        }

        return NextResponse.json({
            message:
                "If an account with that email exists, we have sent a password reset link.",
        });
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
