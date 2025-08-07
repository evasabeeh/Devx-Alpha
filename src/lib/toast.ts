import toast from "react-hot-toast";

// Authentication success messages
export const authToasts = {
    // Sign up messages
    signUpSuccess: () =>
        toast.success(
            "Account created successfully! Please check your email to verify your account."
        ),
    signUpError: (message: string) =>
        toast.error(message || "Failed to create account. Please try again."),

    // Sign in messages
    signInSuccess: () =>
        toast.success("Welcome back! You have been signed in successfully."),
    signInError: (message: string) =>
        toast.error(
            message ||
                "Invalid credentials. Please check your email and password."
        ),

    // Email verification messages
    emailVerificationSuccess: () =>
        toast.success(
            "Email verified successfully! You can now complete your profile."
        ),
    emailVerificationError: (message: string) =>
        toast.error(message || "Email verification failed. Please try again."),
    emailVerificationSent: () =>
        toast.success("Verification email sent! Please check your inbox."),

    // Password reset messages
    forgotPasswordSuccess: () =>
        toast.success(
            "Password reset email sent! Please check your inbox for instructions."
        ),
    forgotPasswordError: (message: string) =>
        toast.error(
            message || "Failed to send password reset email. Please try again."
        ),

    // Password reset messages
    resetPasswordSuccess: () =>
        toast.success(
            "Password reset successfully! You can now sign in with your new password."
        ),
    resetPasswordError: (message: string) =>
        toast.error(message || "Failed to reset password. Please try again."),

    // Profile messages
    profileUpdateSuccess: () => toast.success("Profile updated successfully!"),
    profileUpdateError: (message: string) =>
        toast.error(message || "Failed to update profile. Please try again."),

    // Profile completion messages
    profileCompleteSuccess: () =>
        toast.success("Profile completed successfully!"),
    profileCompleteError: (message: string) =>
        toast.error(message || "Failed to complete profile. Please try again."),

    // OAuth messages
    oauthSuccess: () =>
        toast.success("Successfully signed in with your account!"),
    oauthError: (message: string) =>
        toast.error(message || "OAuth sign-in failed. Please try again."),
    oauthAccountNotLinked: () =>
        toast.error(
            "Account already exists. Please login with your credentials or use other email."
        ),

    // Sign out messages
    signOutSuccess: () =>
        toast.success("You have been signed out successfully."),
    signOutError: () => toast.error("Failed to sign out. Please try again."),

    // General messages
    networkError: () =>
        toast.error(
            "Network error. Please check your connection and try again."
        ),
    unexpectedError: () =>
        toast.error("An unexpected error occurred. Please try again."),

    // Loading messages
    signingIn: () => toast.loading("Signing you in..."),
    signingUp: () => toast.loading("Creating your account..."),
    updatingProfile: () => toast.loading("Updating your profile..."),
    sendingEmail: () => toast.loading("Sending email..."),
    verifyingEmail: () => toast.loading("Verifying your email..."),
    resettingPassword: () => toast.loading("Resetting your password..."),
};

// General utility functions
export const dismissToast = (toastId: string) => toast.dismiss(toastId);
export const dismissAllToasts = () => toast.dismiss();

// Custom toast with DevX Alpha styling
export const customToast = {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    loading: (message: string) => toast.loading(message),
    custom: (message: string) =>
        toast(message, {
            style: {
                background: "#cb1919",
                color: "#fff",
                border: "1px solid #cb1919",
            },
            iconTheme: {
                primary: "#fff",
                secondary: "#cb1919",
            },
        }),
};
