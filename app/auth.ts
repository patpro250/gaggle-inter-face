// @ts-nocheck
import NextAuth from "next-auth";
import { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Librarian } from "./_types/librarian";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: 'Login',
            credentials: {
                email: { label: 'Email', type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                try {
                    const res = await fetch(`${API_URL}/auth/librarians`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    });

                    const token = res.headers.get("x-auth-token");
                    const user = await res.json();

                    if (!res.ok || !token) {
                        throw new AuthError(user?.message || "Email or password is incorrect");
                    }

                    return {
                        ...user as Librarian,
                        token
                    };

                } catch (err) {
                    if (err instanceof AuthError) throw err;
                    throw new AuthError("Something went wrong. Please try again.");
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
                token.user = user;
            }
            return token;
        },

        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        }
    },

    session: {
        strategy: 'jwt'
    },

    secret: process.env.NEXTAUTH_SECRET
});