"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Magnetic } from "./Magnetic";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    magnetic?: boolean;
    className?: string;
    external?: boolean;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    magnetic = true,
    className = "",
    external = false,
}: ButtonProps) {
    const baseStyles = clsx(
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer",
        {
            // Variants
            "bg-foreground text-background hover:bg-foreground/90": variant === "primary",
            "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background":
                variant === "outline",
            "text-foreground hover:text-accent": variant === "ghost",
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
        },
        className
    );

    const ButtonContent = (
        <motion.span
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.span>
    );

    const content = magnetic ? (
        <Magnetic strength={0.2}>{ButtonContent}</Magnetic>
    ) : (
        ButtonContent
    );

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            );
        }
        return <Link href={href}>{content}</Link>;
    }

    return <button onClick={onClick}>{content}</button>;
}

// Circular button variant (like menu button)
interface CircleButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    size?: number;
}

export function CircleButton({
    children,
    onClick,
    className = "",
    size = 80,
}: CircleButtonProps) {
    return (
        <Magnetic strength={0.3}>
            <motion.button
                onClick={onClick}
                className={clsx(
                    "relative flex items-center justify-center rounded-full bg-foreground text-background font-medium cursor-pointer",
                    className
                )}
                style={{ width: size, height: size }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.button>
        </Magnetic>
    );
}
