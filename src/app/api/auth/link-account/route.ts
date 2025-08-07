import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
            include: { accounts: true },
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Check if user has any OAuth accounts
        const hasOAuthAccount = user.accounts.some(
            (account) =>
                account.provider === "google" || account.provider === "github"
        );

        return NextResponse.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                hasOAuthAccount,
                accounts: user.accounts.map((acc) => ({
                    provider: acc.provider,
                    type: acc.type,
                })),
            },
        });
    } catch (error) {
        console.error("Account linking check error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
