"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthGuardProps {
    children: React.ReactNode;
    redirectTo?: string;
    requireAuth?: boolean; // true = require authentication, false = require no authentication
}

export default function AuthGuard({
    children,
    redirectTo = "/",
    requireAuth = false,
}: AuthGuardProps) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Still loading

        if (requireAuth && !session) {
            // User needs to be authenticated but isn't
            router.push("/auth/sign-in");
            return;
        }

        if (!requireAuth && session) {
            // User needs to be unauthenticated but is authenticated
            router.push(redirectTo);
            return;
        }
    }, [session, status, router, redirectTo, requireAuth]);

    // Show loading while checking authentication
    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    // Show loading while redirecting
    if (requireAuth && !session) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                    <p className="mt-4 text-gray-600">
                        Redirecting to sign in...
                    </p>
                </div>
            </div>
        );
    }

    if (!requireAuth && session) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="border-primary mx-auto h-12 w-12 animate-spin rounded-full border-b-2"></div>
                    <p className="mt-4 text-gray-600">Redirecting...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
