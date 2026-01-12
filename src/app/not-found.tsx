"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-caption mb-4">404</p>
                    <h1 className="text-display mb-8">Page not found</h1>
                    <p className="text-subheading text-muted mb-12 max-w-md mx-auto">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-body hover:opacity-70 transition-opacity group"
                    >
                        <span className="inline-block transition-transform group-hover:-translate-x-1">
                            ←
                        </span>
                        Back to home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
