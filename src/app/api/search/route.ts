/*
 * @Description: 静态搜索API路由
 * @Author: 安知鱼
 * @Date: 2025-09-17 09:44:44
 * @LastEditTime: 2025-09-17 09:49:05
 * @LastEditors: 安知鱼
 */
import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

// 静态缓存
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // 使用中文分词器和停用词支持中文搜索
  // https://docs.orama.com/docs/orama-js/supported-languages/using-chinese-with-orama
  tokenizer: createTokenizer({
    language: "mandarin",
    stopWords: mandarinStopwords,
  }),
});
