"use client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marcellus } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 5 * 60 * 1000,
            retry: 2,
          },
        },
      })
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-hidden antialiased`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" />
            <Theme>{children}</Theme>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </SessionProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
