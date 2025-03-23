"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OAuthError() {
  const router = useRouter();
  const { error } = router.query;

  let errorMessage = "An unknown error occurred. Please try again.";
  if (error === "OAuthCallback") {
    errorMessage =
      "There was an issue with the callback. Please try logging in again.";
  } else if (error === "AccessDenied") {
    errorMessage =
      "Access was denied. Please ensure you have the correct permissions.";
  }

  useEffect(() => {
    if (error) {
      console.log("OAuth Error:", error);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-red-600">
        Authentication Error
      </h1>
      <p className="mt-4 text-lg">{errorMessage}</p>
      <div className="mt-8">
        <a
          href="/auth/signin"
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Back to Sign In
        </a>
      </div>
    </div>
  );
}
