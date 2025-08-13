import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name?: string | null;
            image?: string | null;
            company?: string | null;
            phone?: string | null;
            emailVerified?: Date | null;
            phoneVerified?: Date | null;
            createdAt?: Date;
            updatedAt?: Date;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
        email: string;
        name?: string | null;
        company?: string | null;
        phone?: string | null;
        emailVerified?: Date | null;
        phoneVerified?: Date | null;
        createdAt?: Date;
        updatedAt?: Date;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string;
        email: string;
        name?: string | null;
        company?: string | null;
        phone?: string | null;
        emailVerified?: Date | null;
        phoneVerified?: Date | null;
        createdAt?: Date;
        updatedAt?: Date;
    }
}
