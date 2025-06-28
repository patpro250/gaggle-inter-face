import { APP_NAME } from "@/app/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `${APP_NAME} signup`,
  description: "Signup to explore more.",
  openGraph: {
    title: "Signup",
    description: "signup to explore more.",
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
