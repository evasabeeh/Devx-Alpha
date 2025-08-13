"use client";

import { authToasts } from "@/lib/toast";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
    updateUser,
    clearUser,
    setError,
    clearError,
} from "../slices/userSlice";
import { User } from "../slices/userSlice";
import { signOut } from "next-auth/react";

/**
 * Custom hook for easy access to user state and actions
 * Use this hook anywhere in your app to access user data
 */
export const useUser = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.user);
    const isAuthenticated = useAppSelector(
        (state) => state.user.isAuthenticated
    );
    const isLoading = useAppSelector((state) => state.user.isLoading);
    const error = useAppSelector((state) => state.user.error);

    // Helper functions for common user operations
    const updateUserProfile = (userData: Partial<User>) => {
        dispatch(updateUser(userData));
    };

    // Fetch fresh user data from API and update Redux
    const refreshUserData = async () => {
        try {
            const response = await fetch("/api/profile");
            if (response.ok) {
                const data = await response.json();
                if (data.user) {
                    dispatch(updateUser(data.user));
                    return data.user;
                }
            }
            return null;
        } catch (error) {
            console.error("Error fetching fresh user data:", error);
            return null;
        }
    };

    const logout = async (callbackUrl?: string) => {
        // First sign out from NextAuth
        await signOut({ callbackUrl: callbackUrl || "/" });
        // Clear Redux state immediately
        dispatch(clearUser());
        authToasts.signOutSuccess();
    };

    const setUserError = (errorMessage: string) => {
        dispatch(setError(errorMessage));
    };

    const clearUserError = () => {
        dispatch(clearError());
    };

    return {
        // State
        user,
        isAuthenticated,
        isLoading,
        error,

        // Actions
        updateUserProfile,
        logout,
        setUserError,
        clearUserError,
        refreshUserData,

        // Computed values
        userEmail: user?.email,
        userName: user?.name,
        userId: user?.id,
        userImage: user?.image,
        userCompany: user?.company,
        userPhone: user?.phone,
    };
};
