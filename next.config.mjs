/*
 * @Description: 服务端部署模式配置
 * @Author: 安知鱼
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** 与 tsconfig `@/.source` 一致：固定为 anheyu-docs 根，避免 monorepo 内多个 lockfile 时 Turbopack 误判 workspace root */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Next 16 默认用 Turbopack 构建；必须指向本包根目录，否则 `.source/server.ts` 解析失败（无 exports）
  turbopack: {
    root: projectRoot,
  },
  output: "export", // 启用静态导出
  trailingSlash: true, // 为静态导出添加尾随斜杠
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload-bbs.miyoushe.com",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default withMDX(config);
