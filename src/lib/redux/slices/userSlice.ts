import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user interface based on your Prisma schema
export interface User {
    id: string;
    email: string;
    name?: string | null;
    company?: string | null;
    phone?: string | null;
    phoneVerified?: Date | null;
    image?: string | null;
    emailVerified?: Date | null;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the user state interface
interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

// Define the initial state
const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

// Create the user slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Set loading state
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        // Set user data after successful login
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = null;
        },

        // Update user data (for profile updates)
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },

        // Clear user data on logout
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
        },

        // Set error state
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        // Clear error
        clearError: (state) => {
            state.error = null;
        },
    },
});

// Export actions
export const {
    setLoading,
    setUser,
    updateUser,
    clearUser,
    setError,
    clearError,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;

// Selectors for easy access to state
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectIsAuthenticated = (state: { user: UserState }) =>
    state.user.isAuthenticated;
export const selectIsLoading = (state: { user: UserState }) =>
    state.user.isLoading;
export const selectError = (state: { user: UserState }) => state.user.error;
