import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starters",
    template: "%s | Next.js Starters",
  },
  description: "Next.js 16 기반 모던 웹 애플리케이션 스타터",
  openGraph: {
    title: "Next.js Starters",
    description: "Next.js 16 기반 모던 웹 애플리케이션 스타터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(geistSans.variable, geistMono.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
