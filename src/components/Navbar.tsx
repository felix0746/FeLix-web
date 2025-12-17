'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 鎖住背景捲動（手機展開選單時）
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "服務項目", href: "#services" },
        { name: "解決方案", href: "#solutions" },
        { name: "方案價格", href: "#pricing" },
        { name: "關於我們", href: "#about" },
        { name: "聯絡我們", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight"
                >
                    FeLix
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    >
                        開始合作
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white shadow-sm hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="切換主選單"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 背景遮罩 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* 浮動導覽卡片 */}
                        <motion.nav
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="fixed inset-x-4 top-20 z-50 md:hidden"
                        >
                            <div className="rounded-2xl bg-background/95 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.6)] p-4">
                                <div className="flex items-center justify-between text-[11px] text-gray-400 px-1 pb-2">
                                    <span>頁面導覽</span>
                                    <span className="text-gray-500">一頁式網站</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="group rounded-xl px-3 py-2 flex items-center justify-between text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span>{link.name}</span>
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-primary" />
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-3 border-t border-white/5 pt-3">
                                    <Link
                                        href="#contact"
                                        className="w-full inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold py-2.5 shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:bg-primary/90 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        立即洽詢
                                    </Link>
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
