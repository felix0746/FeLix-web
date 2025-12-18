'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Texture/Gradient - Subtle & Premium */}
            <div className="absolute inset-0 bg-background" />

            {/* Platinum & Indigo Ambient Glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* Seamless Transition Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-64 md:h-64 bg-gradient-to-t from-background via-background/90 md:via-background/80 to-transparent pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }} // Slower, more elegant
                    className="max-w-5xl mx-auto"
                >
                    {/* Status Badge - Minimalist Platinum */}
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-200"></span>
                        </span>
                        <span className="tracking-widest uppercase text-xs font-bold text-gray-300 font-heading">Available for Projects</span>
                    </div>

                    <h1 className="hero-title-premium mb-8 text-white font-heading font-black text-balance">
                        WEB DESIGN <span className="text-gradient-platinum mx-4 font-black">&</span> STRATEGY
                        <span className="block mt-4 text-gradient-platinum pb-2 tracking-[0.05em] normal-case font-black">
                            打造自動獲客的數位店面
                        </span>
                    </h1>

                    <p className="hero-subtitle-premium mb-14 max-w-2xl mx-auto leading-relaxed text-slate-400 font-light font-sans tracking-wide text-balance">
                        從精緻的企業形象，到全自動的商業系統。<br className="hidden md:block" />
                        我們將流量轉化為實際訂單，提供極致的數位解決方案。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#pricing"
                            className="btn-premium px-10 py-4 rounded-full font-heading font-bold tracking-widest text-xs uppercase min-w-[180px]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                查看方案 <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="btn-outline-premium px-10 py-4 rounded-full font-heading font-bold tracking-widest text-xs uppercase min-w-[180px]"
                        >
                            深入了解
                        </Link>
                    </div>
                </motion.div>

                {/* Features - Platinum Tech Cards */}
                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { icon: Code2, title: "現代化技術", desc: "Next.js & Tailwind 打造", id: "01" },
                        { icon: Rocket, title: "極致效能", desc: "最佳化的載入速度", id: "02" },
                        { icon: TrendingUp, title: "高轉換率佈局", desc: "設計引導訪客採取行動", id: "03" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                            className="glass-panel-premium p-6 md:p-8 rounded-2xl text-left group relative overflow-hidden border border-white/3 md:border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                        >
                            {/* Soft Gradient Blob on Hover */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Background Index Number - Elegant */}
                            <div className="absolute top-4 right-6 text-5xl font-bold font-heading text-white/[0.02] select-none group-hover:text-white/[0.06] transition-colors pointer-events-none tracking-tighter">
                                {item.id}
                            </div>

                            {/* Floating Icon */}
                            <div className="mb-6 relative z-10 p-3 bg-white/5 w-fit rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                                <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-500" />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-lg font-heading font-semibold mb-3 text-white tracking-wide relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-400 font-light leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
