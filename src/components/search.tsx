/*
 * @Description: 静态搜索对话框组件
 * @Author: 安知鱼
 */
"use client";
import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { create } from "@orama/orama";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

function initOrama(locale?: string) {
  return create({
    schema: { _: "string" },
    components: {
      // 根据locale使用不同的分词器
      tokenizer:
        locale === "cn" || locale === "zh" || locale === "zh-CN"
          ? createTokenizer({
              language: "mandarin",
              stopWords: mandarinStopwords,
            })
          : undefined,
    },
  });
}

export default function StaticSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (可选) 用于国际化
  const { search, setSearch, query } = useDocsSearch({
    type: "static",
    locale,
    initOrama,
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
