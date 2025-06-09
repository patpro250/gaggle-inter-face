"use client";

import { useQuery } from "@tanstack/react-query";
import { redirect, useSearchParams } from "next/navigation";
import { fetchTokenDetail } from "../Hooks/geting";
import NotFound from "../Hooks/noterror";
import ResetPasswordForm from "../_components/resetForm";

export default function ResetPassword() {
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
    <div>
      <ResetPasswordForm basetoken={token} />
      <h1>Reset Password</h1>
      <p>Token: {data?.token}</p>
      <p>Role: {data?.role}</p>
      <p>User ID: {data?.userid}</p>
      <p>Expires: {new Date(data?.expired || "").toLocaleString()}</p>
    </div>
  );
}
