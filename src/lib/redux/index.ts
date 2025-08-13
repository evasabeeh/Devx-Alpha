// Export store and types
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

// Export hooks
export { useAppDispatch, useAppSelector } from "./hooks";
export { useAuthSync } from "./hooks/useAuthSync";
export { useUser } from "./hooks/useUser";

// Export user slice actions and selectors
export {
    setLoading,
    setUser,
    updateUser,
    clearUser,
    setError,
    clearError,
    selectUser,
    selectIsAuthenticated,
    selectIsLoading,
    selectError,
} from "./slices/userSlice";

export type { User } from "./slices/userSlice";
