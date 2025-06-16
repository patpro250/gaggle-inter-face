// app/password-reset/page.tsx

"use client";
import NotFound from "@/app/not-found";
import PasswordResetForm from "../../../components/uix/retry";
import { redirect, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchTokenDetail } from "@/app/Hooks/geting";

// 1️⃣ Wrap a client-side inner component in Suspense
function PasswordResetClient() {
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

  return <PasswordResetForm basetoken={token!} />;
}

export default PasswordResetClient;
