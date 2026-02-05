// @/components/ui/Preloader.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "Hallo",      // Dutch
    "Bonjour",    // French
    "नमस्ते",      // Hindi
    "Ciao",       // Italian
    "Olá",        // Portuguese
    "Hola",       // Spanish
    "안녕",        // Korean
    "Hallå",      // Swedish
    "Hello",       // English
];

export function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            const timeout = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timeout);
        }
        const timeout = setTimeout(
            () => setIndex(index + 1),
            index === 0 ? 1000 : 150
        );
        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        document.body.style.overflow = isLoading ? "hidden" : "";
        document.body.style.cursor = isLoading ? "wait" : "";
        return () => {
            document.body.style.overflow = "";
            document.body.style.cursor = "";
        };
    }, [isLoading]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
        } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height
        } L0 0`;

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
        } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100vh" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.2,
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141516]"
                >
                    {dimension.width > 0 && (
                        <>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 0.75, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute z-10 flex items-center text-white text-heading"
                            >
                                <span className="block w-[10px] h-[10px] bg-white rounded-full mr-4" />
                                {words[index]}
                            </motion.p>
                            <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                                <motion.path
                                    initial={{ d: initialPath }}
                                    exit={{ d: targetPath }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: 0.2,
                                    }}
                                    fill="#141516"
                                />
                            </svg>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}