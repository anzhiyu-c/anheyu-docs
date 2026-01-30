/*
 * @Description: 应用程序提供者组件
 * @Author: 安知鱼
 */
"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
import StaticSearchDialog from "@/components/search";
import type { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        enabled: true,
        hotKey: [
          {
            display: "⌘K",
            key: "k",
          },
        ],
        SearchDialog: StaticSearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
