/*
 * @Description:
 * @Author: 安知鱼
 * @Date: 2025-09-08 17:42:53
 * @LastEditTime: 2025-09-13 18:29:36
 * @LastEditors: 安知鱼
 */
import "@/app/global.css";
import { Provider } from "@/components/provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.anheyu.com"),
  title: {
    template: "%s - 安和鱼文档",
    default: "安和鱼文档",
  },
  description: "安和鱼官方文档，提供安和鱼系统的使用指南和相关文档。",
  openGraph: {
    title: "安和鱼文档",
    description: "安和鱼官方文档，提供安和鱼系统的使用指南和相关文档。",
    url: "https://dev.anheyu.com",
    siteName: "安和鱼文档",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anheyu",
    description: "Anheyu Docs",
    creator: "@anheyu",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
