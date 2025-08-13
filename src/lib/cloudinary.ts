import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

// Helper function to upload image from buffer
export async function uploadImageToCloudinary(
    buffer: Buffer,
    folder: string = "devx-alpha",
    publicId?: string
): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
        const uploadOptions: {
            folder: string;
            resource_type: "image";
            transformation: Array<Record<string, string | number>>;
            public_id?: string;
            overwrite?: boolean;
        } = {
            folder,
            resource_type: "image" as const,
            transformation: [
                { width: 400, height: 400, crop: "fill", gravity: "face" },
                { quality: "auto", fetch_format: "auto" },
            ],
        };

        if (publicId) {
            uploadOptions.public_id = publicId;
            uploadOptions.overwrite = true;
        }

        cloudinary.uploader
            .upload_stream(uploadOptions, (error, result) => {
                if (error) {
                    reject(error);
                } else if (result) {
                    resolve({
                        url: result.secure_url,
                        publicId: result.public_id,
                    });
                } else {
                    reject(new Error("Upload failed"));
                }
            })
            .end(buffer);
    });
}

// Helper function to upload files (documents, PDFs, etc.) to Cloudinary
export async function uploadToCloudinary(
    file: File,
    folder: string = "devx-alpha"
): Promise<{ secure_url: string; public_id: string }> {
    return new Promise(async (resolve, reject) => {
        try {
            // Convert File to Buffer
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploadOptions = {
                folder,
                resource_type: "raw" as const, // Use raw for documents/PDFs
                use_filename: true,
                unique_filename: true,
            };

            cloudinary.uploader
                .upload_stream(uploadOptions, (error, result) => {
                    if (error) {
                        reject(error);
                    } else if (result) {
                        resolve({
                            secure_url: result.secure_url,
                            public_id: result.public_id,
                        });
                    } else {
                        reject(new Error("Upload failed"));
                    }
                })
                .end(buffer);
        } catch (error) {
            reject(error);
        }
    });
}

// Helper function to delete image from Cloudinary
export async function deleteImageFromCloudinary(
    publicId: string
): Promise<void> {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch {
        console.error("Error deleting image from Cloudinary");
        // Don't throw error as this is not critical
    }
}

// Helper function to extract public ID from Cloudinary URL
export function extractPublicIdFromUrl(url: string): string | null {
    try {
        const urlParts = url.split("/");
        const uploadIndex = urlParts.findIndex((part) => part === "upload");
        if (uploadIndex === -1) return null;

        const pathAfterUpload = urlParts.slice(uploadIndex + 2).join("/");
        const publicIdWithExtension = pathAfterUpload.split(".")[0];
        return publicIdWithExtension;
    } catch {
        return null;
    }
}
