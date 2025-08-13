import { z } from "zod";

// Team Member Schema for API validation
export const teamMemberSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters")
        .trim(),

    position: z
        .string()
        .min(1, "Position is required")
        .max(100, "Position must be less than 100 characters")
        .trim(),

    bio: z
        .string()
        .max(500, "Bio must be less than 500 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    image: z
        .string()
        .url("Invalid image URL")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    linkedIn: z
        .string()
        .url("Invalid LinkedIn URL")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    twitter: z
        .string()
        .url("Invalid Twitter URL")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    email: z
        .string()
        .email("Invalid email address")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    order: z
        .number()
        .int("Order must be an integer")
        .min(0, "Order must be 0 or greater")
        .default(0),

    isActive: z.boolean().default(true),
});

// Team Member Update Schema (for PUT requests)
export const teamMemberUpdateSchema = teamMemberSchema.partial().extend({
    id: z.string().cuid("Invalid team member ID"),
});

// Team Member Form Schema (for client-side validation)
export const teamMemberFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters")
        .trim(),

    position: z
        .string()
        .min(1, "Position is required")
        .max(100, "Position must be less than 100 characters")
        .trim(),

    bio: z
        .string()
        .max(500, "Bio must be less than 500 characters")
        .optional()
        .or(z.literal("")),

    image: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => {
            if (!val || val === "") return true;
            try {
                new URL(val);
                return true;
            } catch {
                return false;
            }
        }, "Invalid image URL"),

    linkedIn: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => {
            if (!val || val === "") return true;
            try {
                new URL(val);
                return true;
            } catch {
                return false;
            }
        }, "Invalid LinkedIn URL"),

    twitter: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => {
            if (!val || val === "") return true;
            try {
                new URL(val);
                return true;
            } catch {
                return false;
            }
        }, "Invalid Twitter URL"),

    email: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => {
            if (!val || val === "") return true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(val);
        }, "Invalid email address"),

    order: z
        .number()
        .int("Order must be an integer")
        .min(0, "Order must be 0 or greater"),

    isActive: z.boolean(),
});

// File upload schema
export const imageUploadSchema = z.object({
    file: z
        .instanceof(File)
        .refine(
            (file) => file.size <= 5 * 1024 * 1024,
            "File size must be less than 5MB"
        )
        .refine(
            (file) =>
                ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
                    file.type
                ),
            "File must be a valid image (JPEG, PNG, WebP, or GIF)"
        ),
});

// Types derived from schemas
export type TeamMemberInput = z.infer<typeof teamMemberSchema>;
export type TeamMemberFormInput = z.infer<typeof teamMemberFormSchema>;
export type TeamMemberUpdateInput = z.infer<typeof teamMemberUpdateSchema>;
export type ImageUploadInput = z.infer<typeof imageUploadSchema>;
