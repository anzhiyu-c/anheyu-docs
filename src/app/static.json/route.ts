/*
 * @Description: 静态搜索索引导出路由
 * @Author: 安知鱼
 */
import { source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
  // 导出搜索索引为静态 JSON
  const pages = source.getPages();

  const searchIndexes = pages.map(page => ({
    id: page.url,
    structured: page.data.structuredData,
    url: page.url,
    title: page.data.title,
    description: page.data.description,
  }));

  return Response.json(searchIndexes);
}
