"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setUser, clearUser, setLoading } from "../slices/userSlice";
import { User } from "../slices/userSlice";

/**
 * Custom hook to sync NextAuth session with Redux user state
 * This should be used in the root layout or a high-level component
 */
export const useAuthSync = () => {
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();
    const { user, isAuthenticated } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (status === "loading") {
            dispatch(setLoading(true));
            return;
        }

        // Always set loading to false when status is not loading
        dispatch(setLoading(false));

        if (status === "authenticated" && session?.user) {
            // Convert NextAuth user to our User type
            const userData: User = {
                id: session.user.id,
                email: session.user.email,
                name: session.user.name || null,
                image: session.user.image || null,
                company: session.user.company || null,
                phone: session.user.phone || null,
                phoneVerified: session.user.phoneVerified || null,
                emailVerified: session.user.emailVerified || null,
                role: session.user.role || "user",
                createdAt: session.user.createdAt,
                updatedAt: session.user.updatedAt,
            };

            // Only update Redux if the user data has changed
            if (!isAuthenticated || user?.id !== userData.id) {
                dispatch(setUser(userData));
            }
        } else if (status === "unauthenticated") {
            // Clear user data if not authenticated
            dispatch(clearUser());
        }
    }, [session, status, dispatch, isAuthenticated, user?.id]);

    return {
        session,
        status,
        user,
        isAuthenticated,
    };
};
