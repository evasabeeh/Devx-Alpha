"use client";

import { useAuthSync } from "@/lib/redux";
import { ReactNode } from "react";

interface AuthSyncWrapperProps {
    children: ReactNode;
}

/**
 * Component that syncs NextAuth session with Redux state
 * This should be placed high in the component tree
 */
export default function AuthSyncWrapper({ children }: AuthSyncWrapperProps) {
    // This hook will automatically sync the session with Redux
    useAuthSync();

    return <>{children}</>;
}
