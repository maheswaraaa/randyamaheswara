"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { profile } from "@/content/profile";
import { CircleButton } from "../ui/Button";
import { Magnetic } from "../ui/Magnetic";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
                <nav className="container flex items-center justify-between py-6">
                    <Magnetic strength={0.2}>
                        <Link
                            href="/"
                            className="text-foreground-light text-sm font-medium tracking-wide"
                        >
                            {profile.name.split(" ")[0]}
                            <span className="opacity-50">©</span>
                        </Link>
                    </Magnetic>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.slice(1).map((link) => (
                            <Magnetic key={link.href} strength={0.2}>
                                <Link
                                    href={link.href}
                                    className="text-foreground-light text-sm font-medium hover:opacity-70 transition-opacity"
                                >
                                    {link.label}
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <CircleButton
                            onClick={() => setIsOpen(true)}
                            size={48}
                            className="bg-foreground-light text-foreground text-xs"
                        >
                            Menu
                        </CircleButton>
                    </div>
                </nav>
            </header>

            <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-foreground text-background"
                    initial={{ clipPath: "circle(0% at calc(100% - 44px) 54px)" }}
                    animate={{ clipPath: "circle(150% at calc(100% - 44px) 54px)" }}
                    exit={{ clipPath: "circle(0% at calc(100% - 44px) 54px)" }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="container h-full flex flex-col">
                        <div className="flex items-center justify-between py-6">
                            <span className="text-sm font-medium tracking-wide opacity-50">
                                Navigation
                            </span>
                            <CircleButton
                                onClick={onClose}
                                size={48}
                                className="bg-background text-foreground text-xs"
                            >
                                Close
                            </CircleButton>
                        </div>

                        <nav className="flex-1 flex flex-col justify-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.23, 0.96],
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="block text-display py-2 hover:opacity-70 transition-opacity"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="py-8 border-t border-background/20">
                            <motion.p
                                className="text-sm opacity-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: 0.6 }}
                            >
                                {profile.email}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
