'use client';

import { motion } from "framer-motion";
import { Monitor, MessageSquare, Smartphone, ScanSearch, Server } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "形象展示官網", // Brand Website
        description: "針對個人品牌、美容、活動宣傳設計的 RWD 響應式網站。",
        className: "md:col-span-2",
    },
    {
        icon: MessageSquare,
        title: "LINE 自動化整合", // LINE Integration (Connection)
        description: "整合官方帳號，實現自動預約、客服與導購功能。",
        className: "md:col-span-1",
    },
    {
        icon: Smartphone,
        title: "RWD 手機優先設計", // RWD (Responsive Frame)
        description: "確保您的顧客在手機上能有最流暢的操作體驗。",
        className: "md:col-span-1",
    },
    {
        icon: ScanSearch,
        title: "SEO 搜尋曝光", // SEO (Scanning)
        description: "優化網站架構，讓潛在客戶更容易搜尋到您的服務。",
        className: "md:col-span-2",
    },
    {
        icon: Server,
        title: "商業營運系統", // System (Grid Structure)
        description: "客製化後台、會員管理、業績報表，助您高效營運。",
        className: "md:col-span-3",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden">
            {/* Platinum & Indigo Ambient Glows */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Seamless Transition Masks */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-0" />
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="hero-title-premium text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-widest font-heading uppercase">
                        Our <span className="text-gradient-platinum">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-balance">
                        無論您需要什麼類型的數位產品，我們提供從設計到開發的完整解決方案。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((file, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className={`glass-panel-premium p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 overflow-hidden ${file.className} relative`}
                        >
                            {/* Decorative Background Icon - Blueprint Style */}
                            <div className="absolute -right-12 -bottom-12 opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500 pointer-events-none grayscale">
                                <file.icon className="w-64 h-64 text-white stroke-[0.5] -rotate-12 group-hover:rotate-0 transition-transform duration-700 ease-out" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                                    <file.icon className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <h3 className="text-xl font-normal mb-3 text-gray-100 group-hover:text-white transition-colors tracking-wider uppercase text-sm">
                                    {file.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {file.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
