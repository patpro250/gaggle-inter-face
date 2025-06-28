"use client";

import { fetchTokenDetail } from "@/app/Hooks/geting";
import NotFound from "@/app/not-found";
import { useQuery } from "@tanstack/react-query";
import { Loader2, LockKeyhole } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PasswordResetForm from "../../../components/uix/retry";

function PasswordResetClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tokenDetail", token],
    queryFn: () => fetchTokenDetail(token!),
    enabled: !!token,
    retry: 1,
  });

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="animate-spin">
          <Loader2 className="w-12 h-12 text-blue-500" />
        </div>
        <p className="text-lg font-medium text-gray-600">
          Verifying your token...
        </p>
      </div>
    );

  if (isError) return <NotFound />;
  if (!data?.token) {
    redirect("/");
  }

  return (
    <div className="h-screen w-full overflow-auto bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <LockKeyhole className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Reset Your Password
            </h1>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Create a new secure password for your account
            </p>
          </div>

          {/* <PasswordResetIllustration className="w-full h-38 mb-8" /> */}

          <PasswordResetForm basetoken={token!} />
        </div>
      </div>
    </div>
  );
}

// const PasswordResetIllustration = ({ className }: { className?: string }) => (
//   <svg
//     viewBox="0 0 500 300"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     <rect width="500" height="300" fill="#F8FAFC" />
//     <circle cx="250" cy="150" r="120" fill="#EFF6FF" />
//     <rect x="220" y="100" width="60" height="120" rx="30" fill="#3B82F6" />
//     <circle cx="250" cy="130" r="20" fill="#1D4ED8" />
//     <path
//       d="M220 160H280V190C280 205.464 267.464 218 252 218H248C232.536 218 220 205.464 220 190V160Z"
//       fill="#1D4ED8"
//     />
//     <path
//       d="M250 100V80C250 57.9086 268.909 40 291 40H300"
//       stroke="#3B82F6"
//       strokeWidth="8"
//       strokeLinecap="round"
//     />
//     <path
//       d="M200 40H209C231.091 40 250 57.9086 250 80V100"
//       stroke="#3B82F6"
//       strokeWidth="8"
//       strokeLinecap="round"
//     />
//   </svg>
// );

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <div className="animate-spin">
            <Loader2 className="w-12 h-12 text-blue-500" />
          </div>
          <p className="text-lg font-medium text-gray-600">
            Loading password reset...
          </p>
        </div>
      }
    >
      <PasswordResetClient />
    </Suspense>
  );
}
