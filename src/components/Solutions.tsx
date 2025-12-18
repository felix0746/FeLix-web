'use client';

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, CalendarHeart, BellRing } from "lucide-react";

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
            icon: BellRing,
            title: "第一印象，優雅專業",
            description: "顧客瀏覽精美官網，感受品牌質感。",
        },
        {
            icon: MessageCircle,
            title: "專屬管家，即時回應",
            description: "系統自動回覆詢問，就像隨身秘書。",
        },
        {
            icon: CalendarHeart,
            title: "預約確認，貼心提醒",
            description: "自動完成預約並發送通知，不需人工介入。",
        },
    ];

    return (
        <section id="solutions" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Decor - Elegant Glows */}
            <div className="absolute top-1/2 left-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white tracking-widest font-heading uppercase">
                            <span className="text-gradient-platinum">Marketing</span>
                            <br />
                            Automation
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light tracking-wide">
                            無論您是<span className="text-gray-200 font-medium">美容師</span>、<span className="text-gray-200 font-medium">音樂老師</span>或<span className="text-gray-200 font-medium">個人創作者</span>。
                            <br /><br />
                            我們為您打造一位 <span className="text-white font-normal underline decoration-white/30 underline-offset-4">24小時待命的數位管家</span>。
                            讓預約自動成交，把寶貴的時間留給您最熱愛的創作與服務。
                        </p>

                        <ul className="space-y-4">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-gray-300/90 group">
                                    <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                                        <Sparkles className="text-gray-200 w-4 h-4 shrink-0" />
                                    </div>
                                    <span className="font-light tracking-wide">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="glass-panel-premium rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl shadow-indigo-500/10">
                        {/* Soft Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5"></div>

                        <div className="relative p-6 md:p-12 space-y-10">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-gray-100 tracking-wide uppercase shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                                    </span>
                                    Assistant Active
                                </div>
                                <Sparkles className="w-5 h-5 text-gray-400 opacity-50" />
                            </div>

                            <div className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug font-heading">
                                從陌生訪客，<br />變成您的 <span className="text-gradient-platinum font-bold">忠實顧客</span>
                            </div>

                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative flex items-center gap-6 group p-4 rounded-xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
                                        <div className="relative flex items-center justify-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                                                <step.icon className="w-5 h-5" />
                                            </div>
                                            {/* Connecting Line */}
                                            {index < steps.length - 1 && (
                                                <div className="absolute -bottom-8 left-1/2 w-px h-6 bg-gradient-to-b from-white/20 to-transparent"></div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-lg text-gray-200 mb-1 font-medium tracking-wide">
                                                {step.title}
                                            </div>
                                            <div className="text-sm text-gray-500 font-light leading-relaxed">
                                                {step.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
