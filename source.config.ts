/*
 * @Description:
 * @Author: 安知鱼
 * @Date: 2025-09-08 17:42:53
 * @LastEditTime: 2025-09-08 18:35:25
 * @LastEditors: 安知鱼
 */
import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { z } from "zod";

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string().date().or(z.date()).optional(),
      lastModified: z.string().date().or(z.date()).optional(),
      index: z.number().optional(),
    }),
  },
});

export default defineConfig({
  plugins: [lastModified()], // 启用 Git 最后修改时间
  mdxOptions: {
    // MDX options
  },
});
