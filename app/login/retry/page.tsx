// // app/password-reset/page.tsx
// import { Suspense } from "react";

// // 1️⃣ Wrap a client-side inner component in Suspense
// function PasswordResetClient() {
//   "use client";
//   const { redirect, useSearchParams } = require("next/navigation");
//   const { useQuery } = require("@tanstack/react-query");
//   const { fetchTokenDetail } = require("@/app/Hooks/geting");
//   const PasswordResetForm = require("./retry").default;
//   const NotFound = require("@/app/not-found").default;

//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["tokenDetail", token],
//     queryFn: () => fetchTokenDetail(token!),
//     enabled: !!token,
//     retry: 1,
//   });

//   if (isLoading) return <p>Loading token info...</p>;
//   if (isError) return <NotFound />;
//   if (!data?.token) {
//     redirect("/");
//   }

//   return <PasswordResetForm basetoken={token!} />;
// }

import React from "react";

const page = () => {
  return (
    <div>
      <h1>hfj</h1>
    </div>
  );
};

export default page;
