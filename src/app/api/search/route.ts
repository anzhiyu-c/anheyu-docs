import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

export const { GET } = createFromSource(source, {
  // 使用中文分词器和停用词支持中文搜索
  // https://docs.orama.com/docs/orama-js/supported-languages/using-chinese-with-orama
  tokenizer: createTokenizer({
    language: "mandarin",
    stopWords: mandarinStopwords,
  }),
});
