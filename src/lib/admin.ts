import { auth } from "./auth";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

/**
 * Check if the current user is an admin
 * Always fetches fresh data from database to ensure role changes are reflected
 */
export async function isAdmin(): Promise<boolean> {
    const session = await auth();
    if (!session?.user?.id) {
        return false;
    }

    try {
        // Always fetch fresh user data from database
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { role: true },
        });

        return user?.role === "admin";
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
}

/**
 * Require admin access - redirects to unauthorized if not admin
 */
export async function requireAdmin() {
    const adminAccess = await isAdmin();
    if (!adminAccess) {
        redirect("/unauthorized");
    }
}

/**
 * Get current admin user or null
 * Always fetches fresh data from database to ensure role changes are reflected
 */
export async function getAdminUser() {
    const session = await auth();
    if (!session?.user?.id) {
        return null;
    }

    try {
        // Always fetch fresh user data from database
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                email: true,
                name: true,
                image: true,
                company: true,
                phone: true,
                phoneVerified: true,
                emailVerified: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (user?.role === "admin") {
            return user;
        }
        return null;
    } catch (error) {
        console.error("Error getting admin user:", error);
        return null;
    }
}
