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
      <main className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text">
              安和鱼应用官方文档
            </h1>
            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
              一个简洁、快速、高效的
              <span className="block mt-1 text-4xl font-extrabold text-black dark:text-white sm:text-5xl">
                内容应用
              </span>
            </p>
            <p className="max-w-xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400 md:mx-0">
              生活明朗，万物可爱
            </p>
            <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/docs/getting-started"
                className="w-full px-6 py-3 text-base font-semibold text-white transition-transform duration-200 ease-in-out bg-blue-600 rounded-lg shadow-lg sm:w-auto hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                快速上手
              </Link>
              <Link
                href="/docs"
                className="w-full px-6 py-3 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm sm:w-auto text-slate-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                简介
              </Link>
              <a
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=tYzr4BpaSI74uSRDmiPtzWmmqyibMFdY"
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm sm:w-auto text-slate-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                QQ 群
              </a>
              <a
                href="https://github.com/anzhiyu-c/anheyu-app"
                target="_blank"
                rel="noreferrer"
                className="w-full px-6 py-3 text-base font-semibold transition bg-gray-100 rounded-lg shadow-sm sm:w-auto text-slate-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Image and Glow */}
          <div className="relative flex items-center justify-center flex-1 w-full mt-8 md:mt-0">
            <div
              className="absolute w-[300px] h-[300px] rounded-full blur-3xl md:w-[500px] md:h-[500px]"
              style={{
                background: "radial-gradient(circle, rgba(52, 82, 254, 0.3) 0%, rgba(65, 209, 255, 0.3) 100%)",
              }}
            />
            <img
              src="/icon_512x512.png"
              alt="安知鱼主题"
              className="relative z-10 object-cover w-64 h-64 md:w-80 md:h-80 rounded-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <div
                key={feature.title}
                className="p-6 transition-all duration-300 ease-in-out border border-transparent bg-gray-50/50 rounded-xl dark:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-2 dark:hover:border-slate-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg dark:bg-slate-700">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
