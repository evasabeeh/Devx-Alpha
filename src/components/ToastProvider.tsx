"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background: "#fff",
                    color: "#333",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                },
                success: {
                    duration: 3000,
                    style: {
                        background: "#f0fdf4",
                        color: "#166534",
                        border: "1px solid #bbf7d0",
                    },
                    iconTheme: {
                        primary: "#16a34a",
                        secondary: "#f0fdf4",
                    },
                },
                error: {
                    duration: 5000,
                    style: {
                        background: "#fef2f2",
                        color: "#991b1b",
                        border: "1px solid #fecaca",
                    },
                    iconTheme: {
                        primary: "#cb1919", // DevX Alpha primary color
                        secondary: "#fef2f2",
                    },
                },
                loading: {
                    style: {
                        background: "#fef3c7",
                        color: "#92400e",
                        border: "1px solid #fde68a",
                    },
                    iconTheme: {
                        primary: "#d97706",
                        secondary: "#fef3c7",
                    },
                },
            }}
        />
    );
}
