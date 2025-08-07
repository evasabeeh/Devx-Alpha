import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    // Check if user is trying to access protected routes
    const { pathname } = req.nextUrl;

    // Protected routes that require authentication
    const protectedRoutes = ["/profile", "/dashboard"];

    // Check if the current path is protected
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // If it's a protected route and user is not authenticated, redirect to sign-in
    if (isProtectedRoute && !req.auth) {
        const signInUrl = new URL("/auth/sign-in", req.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
    }

    // Allow access to all other routes
    return NextResponse.next();
});

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
    ],
};
