'use client';

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 relative scroll-mt-24 md:scroll-mt-32 overflow-hidden">
            {/* Top Transition Mask */}
            <div className="absolute top-0 left-0 w-full h-64 md:h-64 bg-gradient-to-b from-background via-background/90 md:via-background/60 to-transparent pointer-events-none z-0" />
            <div className="container mx-auto px-6">
                <div className="rounded-[2.5rem] relative overflow-hidden text-center glass-panel-premium p-6 md:p-24 border-white/10 md:border-white/20 shadow-[0_0_80px_rgba(79,70,229,0.15)]">

                    {/* Platinum & Indigo Ambient Glows - Intensified */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50" />
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* Floating Particles/Sparks */}
                    <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-20 right-[20%] text-white/20"
                    >
                        <Sparkles className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-20 left-[15%] text-indigo-400/20"
                    >
                        <Sparkles className="w-8 h-8" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 tracking-widest font-heading uppercase leading-tight">
                            <span className="text-gradient-platinum">START YOUR</span>
                            <br />
                            <span className="text-gradient-platinum">PROJECT</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 mb-14 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                            無論您有具體的想法，或是還在構思階段，都歡迎與我們聯繫。<br className="hidden md:block" />
                            讓 FeLix 協助您，將創意轉化為帶動業務的數位精品。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            {/* Primary CTA - The Brightest Point */}
                            <div className="relative group">
                                {/* Button Halo */}
                                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="mailto:contact@felix.com"
                                    className="relative z-10 btn-premium px-8 md:px-12 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-500"
                                >
                                    <Mail className="w-5 h-5" />
                                    立即發送 Email
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                            </div>

                            {/* Secondary CTA - Matching Platinum/Indigo theme */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href="#"
                                className="group px-8 md:px-10 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-500/5 transition-all duration-500 text-gray-400 hover:text-white"
                            >
                                <MessageSquare className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                                線上諮詢
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
