export const runtime = "nodejs";

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    trustHost: true,
    session: {
        strategy: "jwt",
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string,
                    },
                });

                if (!user || !user.password) {
                    return null;
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!isPasswordValid) {
                    return null;
                }
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    company: user.company,
                    phone: user.phone,
                    phoneVerified: user.phoneVerified,
                    emailVerified: user.emailVerified,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/sign-in",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            // Initial sign in - store basic user data
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.image = user.image;
                token.company = user.company;
                token.phone = user.phone;
                token.phoneVerified = user.phoneVerified;
                token.emailVerified = user.emailVerified;
                token.createdAt = user.createdAt;
                token.updatedAt = user.updatedAt;
            }

            // Handle session updates (when updateSession is called)
            if (trigger === "update" && session?.user) {
                token.name = session.user.name;
                token.company = session.user.company;
                token.phone = session.user.phone;
                token.image = session.user.image;
                token.phoneVerified = session.user.phoneVerified;
                token.emailVerified = session.user.emailVerified;
                token.updatedAt = session.user.updatedAt;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.company = token.company as string;
                session.user.phone = token.phone as string;
                session.user.phoneVerified = token.phoneVerified as Date;
                session.user.image = token.image as string;
                session.user.emailVerified = token.emailVerified as Date;
                session.user.createdAt = token.createdAt as Date;
                session.user.updatedAt = token.updatedAt as Date;
            }
            return session;
        },
        async signIn({ account }) {
            // For OAuth providers, temporarily allow all to debug
            if (
                account?.provider === "google" ||
                account?.provider === "github"
            )
                return true;

            return true;
        },
    },
});
