import { z } from "zod";

// Job Schema
export const jobSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100, "Title must be less than 100 characters")
        .trim(),

    department: z
        .string()
        .min(1, "Department is required")
        .max(50, "Department must be less than 50 characters")
        .trim(),

    location: z
        .string()
        .min(1, "Location is required")
        .max(100, "Location must be less than 100 characters")
        .trim(),

    type: z.enum(["full-time", "part-time", "contract", "internship"], {
        message: "Please select a valid job type",
    }),

    description: z
        .string()
        .min(1, "Description is required")
        .max(2000, "Description must be less than 2000 characters")
        .trim(),

    requirements: z
        .string()
        .min(1, "Requirements are required")
        .max(2000, "Requirements must be less than 2000 characters")
        .trim(),

    salary: z
        .string()
        .max(50, "Salary must be less than 50 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    isActive: z.boolean().default(true),
});

// Blog Post Schema
export const blogPostSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(200, "Title must be less than 200 characters")
        .trim(),

    slug: z
        .string()
        .min(1, "Slug is required")
        .max(200, "Slug must be less than 200 characters")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug must be lowercase with hyphens only"
        )
        .trim(),

    content: z.string().min(1, "Content is required").trim(),

    excerpt: z
        .string()
        .max(500, "Excerpt must be less than 500 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    image: z
        .string()
        .url("Invalid image URL")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    authorId: z.string().cuid("Invalid author ID"),

    isPublished: z.boolean().default(false),
});

// Contact Submission Schema (for admin viewing/managing)
export const contactSubmissionSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters")
        .trim(),

    email: z.string().email("Invalid email address").trim(),

    subject: z
        .string()
        .max(200, "Subject must be less than 200 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    message: z
        .string()
        .min(1, "Message is required")
        .max(2000, "Message must be less than 2000 characters")
        .trim(),

    isRead: z.boolean().default(false),
});

// User Management Schema (for admin user management)
export const userManagementSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    email: z.string().email("Invalid email address").trim(),

    company: z
        .string()
        .max(100, "Company must be less than 100 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    phone: z
        .string()
        .max(20, "Phone must be less than 20 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    role: z.enum(["user", "admin"], {
        message: "Please select a valid role",
    }),

    image: z
        .string()
        .url("Invalid image URL")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),
});

// Form schemas for client-side validation
export const jobFormSchema = jobSchema.omit({ isActive: true }).extend({
    isActive: z.boolean(),
});

export const blogPostFormSchema = blogPostSchema
    .omit({ authorId: true })
    .extend({
        authorId: z.string().optional(),
    });

export const userManagementFormSchema = userManagementSchema;

// Update schemas
export const jobUpdateSchema = jobSchema.partial().extend({
    id: z.string().cuid("Invalid job ID"),
});

export const blogPostUpdateSchema = blogPostSchema.partial().extend({
    id: z.string().cuid("Invalid blog post ID"),
});

export const userUpdateSchema = userManagementSchema.partial().extend({
    id: z.string().cuid("Invalid user ID"),
});

// Types
export type JobInput = z.infer<typeof jobSchema>;
export type JobFormInput = z.infer<typeof jobFormSchema>;
export type JobUpdateInput = z.infer<typeof jobUpdateSchema>;

export type BlogPostInput = z.infer<typeof blogPostSchema>;
export type BlogPostFormInput = z.infer<typeof blogPostFormSchema>;
export type BlogPostUpdateInput = z.infer<typeof blogPostUpdateSchema>;

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

export type UserManagementInput = z.infer<typeof userManagementSchema>;
export type UserManagementFormInput = z.infer<typeof userManagementFormSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;

// Job Application Schema
export const jobApplicationSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .max(50, "First name must be less than 50 characters")
        .trim(),

    lastName: z
        .string()
        .min(1, "Last name is required")
        .max(50, "Last name must be less than 50 characters")
        .trim(),

    email: z.string().email("Invalid email address").trim(),

    phone: z
        .string()
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null)
        .refine(
            (val) =>
                !val ||
                (val.length >= 10 &&
                    val.length <= 20 &&
                    /^[\+]?[0-9\s\-\(\)]+$/.test(val)),
            "Phone number must be 10-20 characters and contain only numbers, spaces, hyphens, parentheses, and plus sign"
        ),

    linkedinUrl: z
        .string()
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null)
        .refine(
            (val) => !val || z.string().url().safeParse(val).success,
            "Invalid LinkedIn URL"
        ),

    portfolioUrl: z
        .string()
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null)
        .refine(
            (val) => !val || z.string().url().safeParse(val).success,
            "Invalid portfolio URL"
        ),

    coverLetter: z
        .string()
        .max(2000, "Cover letter must be less than 2000 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),

    resumeUrl: z
        .string()
        .url("Invalid resume URL")
        .min(1, "Resume is required"),
});

// Job Application Status Update Schema (for admin)
export const jobApplicationStatusSchema = z.object({
    status: z.enum(
        ["pending", "reviewing", "shortlisted", "rejected", "hired"],
        {
            message: "Please select a valid status",
        }
    ),
    adminNotes: z
        .string()
        .max(1000, "Admin notes must be less than 1000 characters")
        .optional()
        .nullable()
        .transform((val) => val?.trim() || null),
    reviewedBy: z.string().cuid("Invalid reviewer ID").optional().nullable(),
});

// File Upload Schema for Resume
export const resumeUploadSchema = z.object({
    file: z
        .instanceof(File)
        .refine(
            (file) => file.size <= 10 * 1024 * 1024,
            "File size must be less than 10MB"
        )
        .refine(
            (file) => file.type === "application/pdf",
            "Only PDF files are allowed"
        ),
});

// Types
export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
export type JobApplicationStatusInput = z.infer<
    typeof jobApplicationStatusSchema
>;
export type ResumeUploadInput = z.infer<typeof resumeUploadSchema>;
