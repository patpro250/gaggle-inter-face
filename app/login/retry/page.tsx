// app/password-reset/page.tsx
"use client";
import { redirect, useSearchParams } from "next/navigation";
import PasswordResetForm from "./retry";
import { useQuery } from "@tanstack/react-query";
import { fetchTokenDetail } from "@/app/Hooks/geting";
import NotFound from "@/app/not-found";

export default function PasswordResetPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tokenDetail", token],
    queryFn: () => fetchTokenDetail(token!),
    enabled: !!token,
    retry: 1,
  });

  if (isLoading) return <p>Loading token info...</p>;
  if (isError) return <NotFound />;

  if (!data?.token) {
    redirect("/");
  }

  return (
    <main className="min-h-screen dark:bg-gray-800 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <PasswordResetForm basetoken={token} />
    </main>
  );
}
