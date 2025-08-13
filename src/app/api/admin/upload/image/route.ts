import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { imageUploadSchema } from "@/lib/schemas/team";

export async function POST(request: NextRequest) {
    try {
        // Check admin access
        await requireAdmin();

        const formData = await request.formData();
        const file = formData.get("file") as File;
        const folder = (formData.get("folder") as string) || "devx-alpha";

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // Validate file using schema
        const validation = imageUploadSchema.safeParse({ file });
        if (!validation.success) {
            return NextResponse.json(
                {
                    error: "Invalid file",
                    details: validation.error.issues.map((err) => err.message),
                },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Cloudinary
        const result = await uploadImageToCloudinary(buffer, folder);

        return NextResponse.json({
            message: "Image uploaded successfully",
            url: result.url,
            publicId: result.publicId,
        });
    } catch (error) {
        console.error("Error uploading image:", error);

        if (error instanceof Error && error.message.includes("redirect")) {
            // This is a redirect from requireAdmin, let it pass through
            throw error;
        }

        return NextResponse.json(
            { error: "Failed to upload image" },
            { status: 500 }
        );
    }
}
