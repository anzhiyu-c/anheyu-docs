/*
 * @Description:
 * @Author: 安知鱼
 * @Date: 2025-09-08 17:42:53
 * @LastEditTime: 2025-09-14 02:06:46
 * @LastEditors: 安知鱼
 */
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    Callout,
    Tab,
    Tabs,
    ...components,
  };
}
