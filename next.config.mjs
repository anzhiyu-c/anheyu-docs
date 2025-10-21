/*
 * @Description: 服务端部署模式配置
 * @Author: 安知鱼
 */
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
