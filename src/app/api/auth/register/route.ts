import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";
import { randomBytes } from "crypto";
import { signUpApiSchema } from "@/lib/validations/auth";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input with Zod
        console.log("📝 Registration request body:", body);
        try {
            const validatedData = signUpApiSchema.parse(body);
            console.log("✅ Validation passed:", validatedData);
        } catch (error) {
            if (error instanceof ZodError) {
                console.log("❌ Validation failed:", error.issues);
                const fieldErrors = error.issues.map((err) => ({
                    field: err.path[0],
                    message: err.message,
                }));
                return NextResponse.json(
                    { error: "Validation failed", fieldErrors },
                    { status: 400 }
                );
            }
            console.log("❌ Unknown validation error:", error);
            return NextResponse.json(
                { error: "Invalid input data" },
                { status: 400 }
            );
        }

        const { email, password, name } = body;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        // Generate verification token
        const token = randomBytes(32).toString("hex");
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

        await prisma.verificationToken.create({
            data: {
                identifier: email,
                token,
                expires,
                userId: user.id,
            },
        });

        // Send verification email
        await sendVerificationEmail(email, token);

        return NextResponse.json({
            message:
                "User created successfully. Please check your email to verify your account.",
            userId: user.id,
        });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
