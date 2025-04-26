"use client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marcellus } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} overflow-hidden ${marcellus.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Theme>{children}</Theme>
          <Toaster position="top-center" />
        </SessionProvider>
      </body>
    </html>
  );
}
