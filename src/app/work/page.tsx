"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export default function WorkPage() {
    return (
        <SmoothScroll>
            <Navbar />
            <main>
                <WorkContent />
                <FooterCTA />
            </main>
        </SmoothScroll>
    );
}

function WorkContent() {
    return (
        <section className="min-h-screen pt-32 pb-24">
            <div className="container">
                <div className="h-12"></div> {/* Spacer */}
                <Reveal>
                    <p className="text-caption mb-4">Portfolio</p>
                </Reveal>
                <h1 className="text-display mb-16">
                    <TextReveal text="Selected Work" delay={0.1} />
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={0.2 + index * 0.1}>
                            <Link
                                href={project.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div
                                    className="group cursor-pointer"
                                    whileHover="hover"
                                >
                                    {/* Project Image */}
                                    <div className="relative aspect-[4/3] bg-muted/10 rounded-lg overflow-hidden mb-4">
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-caption text-muted">
                                                {project.category}
                                            </p>
                                            <p className="text-caption text-muted">
                                                {project.year}
                                            </p>
                                        </div>
                                        <motion.h3
                                            className="text-subheading"
                                            variants={{
                                                hover: { x: 4 },
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <p className="text-body text-muted line-clamp-2">
                                            {project.shortDescription}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}