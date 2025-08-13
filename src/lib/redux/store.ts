import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types for date serialization
                ignoredActions: ["user/setUser", "user/updateUser"],
                // Ignore these field paths in all actions
                ignoredActionsPaths: [
                    "payload.createdAt",
                    "payload.updatedAt",
                    "payload.phoneVerified",
                    "payload.emailVerified",
                ],
                // Ignore these paths in the state
                ignoredPaths: [
                    "user.user.createdAt",
                    "user.user.updatedAt",
                    "user.user.phoneVerified",
                    "user.user.emailVerified",
                ],
            },
        }),
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
