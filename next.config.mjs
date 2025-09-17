/*
 * @Description: 服务端部署模式配置
 * @Author: 安知鱼
 */
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload-bbs.miyoushe.com",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

export default withMDX(config);
