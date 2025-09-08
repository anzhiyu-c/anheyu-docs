/*
 * @Description:
 * @Author: 安知鱼
 * @Date: 2025-09-08 17:42:53
 * @LastEditTime: 2025-09-08 18:23:55
 * @LastEditors: 安知鱼
 */
import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.anheyu.com"),
  title: {
    template: "%s - Anheyu",
    default: "Anheyu",
  },
  description: "Anheyu Docs",
  openGraph: {
    title: "Anheyu",
    description: "Anheyu Docs",
    url: "https://dev.anheyu.com",
    siteName: "Anheyu",
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
