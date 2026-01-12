import { Variants, Transition } from "framer-motion";

// Consistent timing
export const duration = {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
};

export const ease = {
    default: [0.25, 0.1, 0.25, 1] as const,
    smooth: [0.43, 0.13, 0.23, 0.96] as const,
    out: [0, 0, 0.2, 1] as const,
};

// Page transition
export const pageTransition: Transition = {
    duration: duration.normal,
    ease: ease.smooth,
};

export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: pageTransition,
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: duration.fast },
    },
};

// Text reveal animation
export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.normal,
            ease: ease.smooth,
            delay,
        },
    }),
};

// Stagger children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.normal,
            ease: ease.smooth,
        },
    },
};

// Fade in from below
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        },
    },
};

// Menu overlay
export const menuOverlay: Variants = {
    closed: {
        clipPath: "circle(0% at calc(100% - 40px) 40px)",
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        },
    },
    open: {
        clipPath: "circle(150% at calc(100% - 40px) 40px)",
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        },
    },
};

export const menuItem: Variants = {
    closed: {
        opacity: 0,
        x: -20,
    },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3 + i * 0.1,
            duration: duration.normal,
            ease: ease.smooth,
        },
    }),
};
