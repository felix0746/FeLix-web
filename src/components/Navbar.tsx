'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 鎖住背景捲動
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "服務項目", href: "#services" },
        { name: "解決方案", href: "#solutions" },
        { name: "方案價格", href: "#pricing" },
        { name: "關於我們", href: "#about" },
        { name: "聯絡我們", href: "#contact" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none">
                <nav
                    className={cn(
                        "flex items-center justify-between transition-all duration-700 ease-in-out pointer-events-auto",
                        scrolled
                            ? "w-[95%] md:w-[85%] max-w-5xl bg-[#0b0d13]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                            : "w-full container px-6 py-4 bg-transparent border-transparent"
                    )}
                >
                    {/* Logo Area */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-xl md:text-2xl font-heading font-black tracking-tighter hover:opacity-80 transition-opacity"
                        >
                            <span className={scrolled ? "text-white" : "text-gradient-platinum"}>
                                FeLix
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold font-heading text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Area */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="#contact"
                            className={cn(
                                "group transition-all duration-500 flex items-center gap-2 px-6 py-2.5 rounded-full font-bold tracking-widest uppercase text-[10px]",
                                scrolled
                                    ? "btn-premium shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                            )}
                        >
                            開始合作
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="fixed inset-y-0 right-0 z-[70] w-[80%] max-w-sm bg-[#0b0d13] border-l border-white/5 p-10 flex flex-col md:hidden shadow-2xl"
                        >
                            <div className="mb-12">
                                <span className="text-2xl font-black text-gradient-platinum font-heading tracking-tighter">FeLix</span>
                            </div>
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-bold text-gray-400 hover:text-white tracking-widest uppercase flex items-center justify-between group"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <Link
                                    href="#contact"
                                    className="btn-premium w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs"
                                    onClick={() => setIsOpen(false)}
                                >
                                    立即開始 <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
