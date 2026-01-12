"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { Reveal } from "../ui/Reveal";

export function SelectedWork() {
    const hasProjects = projects.length > 0;

    return (
        <section className="section bg-background">
            <div className="container">
                <Reveal>
                    <div className="flex items-baseline justify-between mb-16">
                        <h2 className="text-heading">Selected Work</h2>
                        <Link
                            href="/work"
                            className="text-small text-muted hover:text-foreground transition-colors"
                        >
                            View all
                        </Link>
                    </div>
                </Reveal>

                {hasProjects ? (
                    <div className="space-y-1">
                        {projects.slice(0, 4).map((project, index) => (
                            <ProjectRow key={project.id} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <ComingSoon />
                )}
            </div>
        </section>
    );
}

interface ProjectRowProps {
    project: Project;
    index: number;
}

function ProjectRow({ project, index }: ProjectRowProps) {
    return (
        <Reveal delay={index * 0.1}>
            <motion.div
                className="group py-6 border-t border-border last:border-b cursor-pointer"
                whileHover="hover"
            >
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 text-caption">{String(index + 1).padStart(2, "0")}</div>
                    <div className="col-span-5">
                        <motion.h3
                            className="text-subheading"
                            variants={{
                                hover: { x: 10 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>
                    <div className="col-span-4 text-muted text-body hidden md:block">
                        {project.category}
                    </div>
                    <div className="col-span-2 text-muted text-body text-right">
                        {project.year}
                    </div>
                </div>
            </motion.div>
        </Reveal>
    );
}

function ComingSoon() {
    return (
        <Reveal>
            <motion.div
                className="py-24 border-t border-b border-border text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <p className="text-caption mb-4">Coming Soon</p>
                <p className="text-subheading text-muted max-w-md mx-auto">
                    I&apos;m currently working on some exciting projects. Check back soon to see what
                    I&apos;ve been building.
                </p>
            </motion.div>
        </Reveal>
    );
}
