"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { Reveal, TextReveal } from "../ui/Reveal";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    {/* Main content */}
                    <div className="lg:col-span-8">
                        <Reveal delay={0.2}>
                            <p className="text-caption mb-4">{profile.role}</p>
                        </Reveal>

                        <h1 className="text-display mb-8">
                            <TextReveal text={profile.name} delay={0.3} />
                        </h1>

                        <Reveal delay={0.6}>
                            <p className="text-subheading text-muted max-w-xl">
                                {profile.tagline}
                            </p>
                        </Reveal>
                    </div>

                    {/* Side info */}
                    <div className="lg:col-span-4 lg:text-right">
                        <Reveal delay={0.8}>
                            <p className="text-caption mb-2">Based in</p>
                            <p className="text-body">{profile.location}</p>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="w-1 h-2 bg-foreground/50 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
