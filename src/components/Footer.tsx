'use client';

import { Instagram, MessageCircle, Globe, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 md:py-20 border-t border-white/[0.03] bg-background relative overflow-hidden">
            {/* Subtle Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Brand & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="text-2xl font-heading font-bold tracking-tight">
                            <span className="text-gradient-platinum">FeLix</span>
                        </div>
                        <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
                            © 2025 FeLix Design Studio. <span className="hidden md:inline mx-2">/</span> All rights reserved.
                        </p>
                    </div>

                    {/* Social & Links */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-6">
                            {[
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: MessageCircle, href: "#", label: "LINE" },
                                { icon: Globe, href: "#", label: "Behance" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 stroke-[1.5]" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-600">
                            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>

                {/* Optional: Scroll to top indicator */}
                <div className="mt-16 pt-8 border-t border-white/[0.02] flex justify-center">
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all">
                            <ArrowUp className="w-3 h-3" />
                        </div>
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
