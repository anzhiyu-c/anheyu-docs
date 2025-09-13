/*
 * @Description:
 * @Author: 安知鱼
 * @Date: 2025-09-08 17:42:53
 * @LastEditTime: 2025-09-13 18:57:48
 * @LastEditors: 安知鱼
 */
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo-192x192.png"
            alt="Anheyu Logo"
            width={24}
            height={24}
            style={{ height: "24px", width: "auto" }}
          />
          Anheyu
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "博客",
        url: "https://blog.anheyu.com/",
        external: true,
      },
    ],
  };
}
