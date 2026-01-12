"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    once?: boolean;
}

export function Reveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
    once = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Text reveal by characters/words
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    splitBy?: "word" | "char";
}

export function TextReveal({
    text,
    className = "",
    delay = 0,
    splitBy = "word",
}: TextRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const items = splitBy === "word" ? text.split(" ") : text.split("");
    const separator = splitBy === "word" ? "\u00A0" : "";

    return (
        <span ref={ref} className={className}>
            {items.map((item, index) => (
                <span key={index} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.5,
                            delay: delay + index * 0.03,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                    >
                        {item}
                        {separator}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
