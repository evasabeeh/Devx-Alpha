import { NextRequest, NextResponse } from "next/server";
import { resumeUploadSchema } from "@/lib/schemas/admin";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // Validate file using schema
        const validation = resumeUploadSchema.safeParse({ file });
        if (!validation.success) {
            return NextResponse.json(
                {
                    error: "Invalid file",
                    details: validation.error.issues.map((err) => err.message),
                },
                { status: 400 }
            );
        }

        // Upload to Cloudinary in devx-alpha/resumes folder
        const uploadResult = await uploadToCloudinary(
            file,
            "devx-alpha/resumes"
        );

        return NextResponse.json({
            message: "Resume uploaded successfully",
            url: uploadResult.secure_url,
            publicId: uploadResult.public_id,
        });
    } catch (error) {
        console.error("Error uploading resume:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
