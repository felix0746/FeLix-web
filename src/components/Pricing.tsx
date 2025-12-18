'use client';

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "形象展示官網",
            price: "NT$ 18,800",
            description: "精美的單頁式形象介紹，適合美容室、個人品牌、活動推廣。",
            features: [
                "RWD 響應式主頁設計",
                "品牌形象/服務價目展示",
                "整合 LINE/IG 預約按鈕",
                "基礎 SEO 曝光優化",
                "社群分享連結設定",
                "免費維護 1 個月"
            ],
            highlight: false
        },
        {
            name: "LINE 互動營銷官網",
            price: "NT$ 45,000",
            description: "網站結合 LINE 官方帳號(OA)，自動引導顧客預約/報名。",
            features: [
                "包含『形象展示官網』",
                "LINE 官方帳號 (OA) 建置",
                "自動回覆與圖文選單設計",
                "引導預約/報名/諮詢流程",
                "常見問題 (FAQ) 自動應答",
                "免費維護 3 個月"
            ],
            highlight: true
        },
        {
            name: "全方位運營系統",
            price: "專案報價",
            description: "含專屬後台資料庫，適合需要管理會員、訂單、課程的業者。",
            features: [
                "包含『LINE 互動營銷官網』",
                "專屬後台管理系統 (CRM)",
                "會員名單/訂單狀態管理",
                "LINE 訊息分眾群發功能",
                "資料報表匯出功能",
                "客製化資料庫開發",
                "免費維護 6 個月"
            ],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
            {/* Platinum & Indigo Ambient Glows */}
            <div className="absolute top-1/2 left-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-widest font-heading uppercase">
                        Flexible <span className="text-gradient-platinum">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        我們提供具競爭力的市場報價，讓您的每一分預算都花在刀口上。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`relative flex flex-col transition-all duration-500 overflow-visible ${plan.highlight
                                ? "md:scale-110 z-10"
                                : ""
                                }`}
                        >
                            {plan.highlight && (
                                <>
                                    {/* Protagonist Halo - Pulsing Backglow */}
                                    <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full scale-90 opacity-50 animate-pulse-slow -z-10" />

                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-indigo-500/30 z-20 flex items-center gap-2"
                                    >
                                        <Sparkles className="w-3.5 h-3.5" />
                                        Most Popular
                                    </motion.div>
                                </>
                            )}

                            <div className={`h-full p-6 md:p-10 rounded-3xl border flex flex-col transition-all duration-500 ${plan.highlight
                                ? "glass-panel-premium border-white/20 shadow-[0_20px_50px_rgba(79,70,229,0.2)]"
                                : "bg-white/[0.03] border-white/5 hover:border-white/10 hover:bg-white/[0.05] text-gray-400"
                                }`}
                            >
                                <h3 className={`text-xl font-heading mb-3 uppercase tracking-wider ${plan.highlight ? "text-gradient-platinum font-bold" : "text-gray-300 font-medium"}`}>
                                    {plan.name}
                                </h3>
                                <div className={`text-4xl font-heading mb-6 tracking-tight ${plan.highlight ? "text-white font-bold" : "text-gray-200 font-light"}`}>
                                    {plan.highlight ? (
                                        <span className="text-gradient-platinum">{plan.price}</span>
                                    ) : (
                                        plan.price
                                    )}
                                    <span className="text-sm font-normal text-gray-500 ml-1">起</span>
                                </div>
                                <p className="text-sm text-gray-400 mb-10 font-light leading-relaxed min-h-[3.5rem]">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-sm group">
                                            {plan.highlight ? (
                                                <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                                    <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                                                </div>
                                            ) : (
                                                <Check className="w-5 h-5 shrink-0 text-gray-600" />
                                            )}
                                            <div className="space-y-1">
                                                <span className={`${plan.highlight ? "text-gray-200 font-medium" : "text-gray-400"} tracking-wide`}>{feature}</span>
                                                {plan.name === "形象展示官網" && feature.includes("整合 LINE/IG 預約按鈕") && (
                                                    <span className="block text-xs text-indigo-400/80 mt-1 pl-1 border-l-2 border-indigo-400/20 font-light">
                                                        可升級 LINE 自動化系統
                                                    </span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full py-4 rounded-xl font-bold text-center text-sm tracking-widest uppercase transition-all duration-300 ${plan.highlight
                                        ? "btn-premium shadow-indigo-500/20"
                                        : "btn-outline-premium"
                                        }`}
                                >
                                    詢詢問此方案
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
