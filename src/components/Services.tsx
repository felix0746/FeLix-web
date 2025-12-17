'use client';

import { motion } from "framer-motion";
import { Layout, ShoppingCart, Smartphone, Search, Database, Layers } from "lucide-react";

const services = [
    {
        icon: Layout,
        title: "形象展示官網",
        description: "針對個人品牌、美容、活動宣傳設計的 RWD 響應式網站。",
        className: "md:col-span-2",
    },
    {
        icon: ShoppingCart,
        title: "LINE 自動化整合",
        description: "整合官方帳號，實現自動預約、客服與導購功能。",
        className: "md:col-span-1",
    },
    {
        icon: Smartphone,
        title: "RWD 手機優先設計",
        description: "確保您的顧客在手機上能有最流暢的操作體驗。",
        className: "md:col-span-1",
    },
    {
        icon: Search,
        title: "SEO 搜尋曝光",
        description: "優化網站架構，讓潛在客戶更容易搜尋到您的服務。",
        className: "md:col-span-2",
    },
    {
        icon: Database,
        title: "商業營運系統",
        description: "客製化後台、會員管理、業績報表，助您高效營運。",
        className: "md:col-span-3",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 relative bg-black/40 scroll-mt-24 md:scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">全方位的開發服務</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        無論您需要什麼類型的網站，我們都有經驗與技術為您實現。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
                    {services.map((file, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden ${file.className}`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <file.icon className="w-32 h-32 transform group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 md:mb-6 text-purple-300">
                                    <file.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white group-hover:text-purple-300 transition-colors">
                                    {file.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {file.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
