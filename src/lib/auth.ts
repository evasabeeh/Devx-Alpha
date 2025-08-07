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
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/sign-in",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            console.log("🔍 JWT callback:", {
                hasUser: !!user,
                hasAccount: !!account,
                provider: account?.provider,
                tokenSub: token.sub,
            });

            if (user) {
                token.id = user.id;
                console.log(`✅ JWT: Added user ID ${user.id} to token`);
            }
            return token;
        },
        async session({ session, token }) {
            console.log("🔍 Session callback:", {
                tokenId: token.id,
                sessionEmail: session.user?.email,
            });

            if (token) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async signIn({ user, account }) {
            console.log("🔍 SignIn callback triggered:", {
                provider: account?.provider,
                email: user.email,
                name: user.name,
            });

            // For OAuth providers, temporarily allow all to debug
            if (
                account?.provider === "google" ||
                account?.provider === "github"
            ) {
                console.log(
                    `✅ OAuth sign-in allowed for ${account.provider}: ${user.email}`
                );
                return true;
            }

            // For credentials provider, always allow
            console.log("✅ Credentials sign-in allowed");
            return true;
        },
    },
});
