"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function GoogleSignUpButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/login/done" })}
      className="flex items-center cursor-pointer px-6 py-3 text-white text-sm font-medium rounded-lg shadow-md bg-[#2D336B] transition-all duration-300 ease-in-out 
      hover:bg-[#2D336B] hover:scale-105 active:scale-100"
    >
      <FaGoogle className="mr-2 text-xl" />
      Sign Up with Google
    </button>
  );
}
