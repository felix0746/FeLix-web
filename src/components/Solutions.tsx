'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Solutions() {
    const features = [
        "顧客一鍵加入 LINE 好友",
        "自動回覆服務項目與價格",
        "引導完成預約或報名",
        "後台即時查看預約名單",
        "一鍵群發優惠/提醒通知",
        "24小時自動接單不漏接",
    ];

    const steps = [
        {
            title: "瀏覽官網，了解品牌與服務",
            description: "用案例與清楚版面，留下第一個好印象。",
        },
        {
            title: "一鍵加入 LINE 官方帳號",
            description: "系統自動回覆常見問題與服務資訊，不漏接詢問。",
        },
        {
            title: "自動完成預約或報名",
            description: "顧客資料與需求直接進入後台名單，方便後續追蹤。",
        },
    ];

    return (
        <section id="solutions" className="py-16 md:py-24 relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient">自動化互動營銷</span>
                            <br />
                            把流量變名單
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                            無論您是美容師、音樂老師或餐廳業者，顧客來訪網站後，
                            最重要的就是「留下聯絡方式」。
                            <br /><br />
                            我們透過 LINE 自動化機器人，讓顧客自然而然加入好友、諮詢、預約。
                            您不需要一直盯著手機回訊息，系統會自動幫您引導顧客完成下一步。
                        </p>

                        <ul className="space-y-3 md:space-y-4">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-base md:text-lg text-gray-300">
                                    <CheckCircle2 className="text-primary w-5 h-5 md:w-6 md:h-6 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="relative w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden">
                        {/* Abstract visualization or placeholder for code/interface */}
                        <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom_right,white,transparent_70%)]" />

                        {/* Accent glows */}
                        <div className="pointer-events-none absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-primary/25 blur-3xl opacity-70" />
                        <div className="pointer-events-none absolute -left-10 -top-10 w-28 h-28 rounded-full bg-blue-500/20 blur-3xl opacity-60" />

                        <div className="relative p-6 md:p-8 lg:p-10 max-w-xl space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary-foreground/80">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                </span>
                                顧客體驗流程
                            </div>

                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                                從看到網站，到變成你的 LINE 名單
                            </div>

                            <div className="mt-2 space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative flex items-start gap-4 group">
                                        <div className="relative flex flex-col items-center">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/20 text-xs font-semibold text-white/80 group-hover:bg-primary/40 group-hover:text-white transition-colors">
                                                {index + 1}
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="mt-1 h-8 w-px bg-white/10" />
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-sm md:text-base text-white leading-relaxed">
                                                {step.title}
                                            </div>
                                            <div className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                                {step.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 text-xs text-gray-500">
                                你專心服務顧客，其餘讓系統幫你自動化處理。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
