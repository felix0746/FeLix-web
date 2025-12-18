import type { Metadata } from "next";
import { Outfit, Exo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "FeLix | 專業網站開發與解決方案",
  description: "FeLix 提供高品質的客製化網站開發服務，包含企業官網、電商平台及各式網頁解決方案，助您拓展線上版圖。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <body className={cn(outfit.variable, exo2.variable, "font-sans bg-background text-foreground antialiased min-h-screen bg-noise")}>
        {children}
      </body>
    </html>
  );
}
