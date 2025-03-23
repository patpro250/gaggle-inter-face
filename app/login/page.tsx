"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in with Google</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/login/done" })}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Sign In with Google
      </button>
    </div>
  );
}
