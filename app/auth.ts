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
                password: { label: "Password", type: "password" },
                userType: { label: "User type", type: "text" }
            },

            async authorize(credentials) {
                if (credentials.userType === 'Librarian'){
                    return await loginLibrarian(credentials);
                } else if (credentials.userType === 'Member') {
                    return await loginMember(credentials);
                } else if (credentials.userType === 'Institution') {
                    return await loginInstitution(credentials);
                } else if (credentials.userType === 'System Admin') {
                    return await loginAdmin(credentials);
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

async function loginLibrarian(credentials) {
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
        return null;
    }
}

async function loginMember(credentials) {
    try {
        const res = await fetch(`${API_URL}/auth/members`, {
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
        return null;
    }
}

async function loginInstitution(credentials) {
    try {
        const res = await fetch(`${API_URL}/auth/director`, {
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
            throw new Error(user?.message || "Email or password is incorrect");
        }

        return {
            ...user as Librarian,
            token
        };

    } catch (err) {
        if (err instanceof AuthError) throw err;
        return null;
    }
}

async function loginAdmin(credentials) {
    try {
        const res = await fetch(`${API_URL}/auth/admin`, {
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
        return null;
    }
}