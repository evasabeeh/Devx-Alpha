import { z } from "zod";

// Password validation schema with comprehensive requirements
const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
    );

// Email validation schema
const emailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address");

// Name validation schema
const nameSchema = z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces");

// Sign-up form validation schema (client-side with confirmPassword)
export const signUpSchema = z
    .object({
        name: nameSchema,
        email: emailSchema,
        password: passwordSchema,
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

// Sign-up API validation schema (server-side without confirmPassword)
export const signUpApiSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
});

// Sign-in form validation schema
export const signInSchema = z.object({
    email: emailSchema,
    password: z.string().min(1, "Password is required"),
});

// Forgot password form validation schema
export const forgotPasswordSchema = z.object({
    email: emailSchema,
});

// Reset password form validation schema
export const resetPasswordSchema = z
    .object({
        token: z.string().min(1, "Reset token is required"),
        password: passwordSchema,
        confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

// Profile update schema
export const profileUpdateSchema = z.object({
    name: nameSchema.optional().or(z.literal("")),
    company: z
        .string()
        .max(100, "Company name must be less than 100 characters")
        .optional()
        .or(z.literal("")),
    phone: z
        .string()
        .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
        .optional()
        .or(z.literal("")),
    image: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),
});

// Profile completion schema (for after email verification)
export const profileCompleteSchema = z.object({
    company: z
        .string()
        .max(100, "Company name must be less than 100 characters")
        .optional()
        .or(z.literal("")),
    phone: z
        .string()
        .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
        .optional()
        .or(z.literal("")),
    image: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),
});

// Email verification schema
export const emailVerificationSchema = z.object({
    token: z.string().min(1, "Verification token is required"),
});

// Type exports for TypeScript
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignUpApiData = z.infer<typeof signUpApiSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;
export type ProfileCompleteFormData = z.infer<typeof profileCompleteSchema>;
export type EmailVerificationFormData = z.infer<typeof emailVerificationSchema>;
