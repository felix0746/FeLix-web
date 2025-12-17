'use client';

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">透明合理的方案價格</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        我們提供具競爭力的市場報價，讓您的每一分預算都花在刀口上。
                        <br />
                        <span className="text-sm opacity-60">*實際報價依需求複雜度可能有所調整</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-3xl border flex flex-col ${plan.highlight
                                ? "bg-white/10 border-primary/50 shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                                : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                                } transition-all duration-300`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-purple-600 rounded-full text-xs font-bold text-white shadow-lg">
                                    最熱門選擇
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-3xl font-bold text-primary mb-2">
                                {plan.price} <span className="text-sm text-muted-foreground font-normal">起</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-8 h-12">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-3 rounded-full font-bold text-center transition-all ${plan.highlight
                                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg"
                                    : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                詢問此方案
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
