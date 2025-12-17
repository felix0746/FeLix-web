'use client';

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-32">
            <div className="container mx-auto px-6">
                <div className="rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-white/10 p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] opacity-30" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">
                            準備好開始您的專案了嗎？
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10">
                            無論您有具體的想法，或是還在構思階段，都歡迎與我們聯繫。
                            讓我們一起討論如何實現您的目標。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:contact@felix.com"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                發送 Email
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
                            >
                                <MessageSquare className="w-5 h-5" />
                                線上諮詢
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
