import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
                    const res = await fetch(`http://localhost:4000/auth/librarians`, {
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

                    if (!res.ok || !token) return null;

                    return {
                        ...user,
                        token
                    };

                } catch (err) {
                    console.error("Auth error:", err);
                    return null;
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