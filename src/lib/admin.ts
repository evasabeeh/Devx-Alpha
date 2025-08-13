import { auth } from "./auth";
import { redirect } from "next/navigation";

/**
 * Check if the current user is an admin
 */
export async function isAdmin(): Promise<boolean> {
    const session = await auth();
    return session?.user?.role === "admin";
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
 */
export async function getAdminUser() {
    const session = await auth();
    if (session?.user?.role === "admin") {
        return session.user;
    }
    return null;
}
