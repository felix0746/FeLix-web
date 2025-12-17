'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-background to-background" />
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-200 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        現已開放接案
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        網頁設計 X LINE 互動營銷
                        <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-5xl text-gradient leading-tight whitespace-nowrap">
                            打造會自動獲客的數位店面
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        從精緻的企業形象官網，到全自動的預約報名系統。
                        我們將流量轉化為實際訂單，適合美容、教學、服務業的最佳數位解決方案。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#pricing"
                            className="group relative px-8 py-4 bg-primary rounded-full text-white font-semibold shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                查看方案價格 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium"
                        >
                            查看服務項目
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Icons/Cards for visual interest */}
                <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {[
                        { icon: Code2, title: "現代化技術", desc: "使用 Next.js & Tailwind 打造" },
                        { icon: Rocket, title: "極致效能", desc: "最佳化的載入速度與 SEO" },
                        { icon: Globe, title: "RWD 設計", desc: "完美適配所有裝置尺寸" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.08 }}
                            className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group text-left"
                        >
                            <div className="flex items-center md:items-start gap-4 md:flex-col">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-0 md:mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-200" />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
