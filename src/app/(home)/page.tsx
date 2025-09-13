/* eslint-disable @next/next/no-img-element */
import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const features = [
    {
      icon: "🚀",
      title: "简单",
      details: "免费搭建，简单部署",
    },
    {
      icon: "😃",
      title: "易用",
      details: "功能丰富，兼容性强",
    },
    {
      icon: "🛡️",
      title: "安全",
      details: "隐私安全，内容安全",
    },
    {
      icon: "⌛️",
      title: "快速",
      details: "极致的访问速度，不再等待",
    },
    {
      icon: "🌈",
      title: "个性",
      details: "高度自定义，配置全量",
    },
    {
      icon: "⚙️",
      title: "深色",
      details: "高度适配的深色模式，让人眼前一亮",
    },
  ];

  return (
    <HomeLayout {...baseOptions()}>
      <main className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl" style={{ color: "#5e5ce6" }}>
              安和鱼应用官方文档
            </h1>
            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
              一个简洁、快速、高效
              <strong className="block mt-1 text-5xl font-extrabold text-black dark:text-white">内容应用</strong>
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-400 md:mx-0">
              生活明朗，万物可爱
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:justify-start">
              <Link
                href="/docs/getting-started"
                className="px-5 py-2.5 text-base font-semibold text-white transition bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                快速上手
              </Link>
              <Link
                href="/docs"
                className="px-5 py-2.5 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm text-slate-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                简介
              </Link>
              <a
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=tYzr4BpaSI74uSRDmiPtzWmmqyibMFdY"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm text-slate-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                QQ 群
              </a>
              <a
                href="https://github.com/anzhiyu-c/hexo-theme-anzhiyu"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm text-slate-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Image and Glow */}
          <div className="relative flex items-center justify-center flex-1 w-full h-64">
            <div
              className="absolute z-0 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(52, 82, 254, 0.4) 0%, rgba(65, 209, 255, 0.4) 100%)",
                filter: "blur(100px)",
              }}
            ></div>
            <img
              src="/icon_512x512.png"
              alt="安知鱼主题"
              className="relative z-20 object-cover w-80 h-80 rounded-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-8 sm:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <div
                key={feature.title}
                className="p-6 transition-transform duration-300 transform bg-gray-50 rounded-xl hover:-translate-y-1.5 dark:bg-slate-800/50"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg dark:bg-slate-700">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-1 text-base text-slate-600 dark:text-slate-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
