// src/components/Skills.tsx

"use client";

import { skills } from "@/content/skill";
import { Reveal } from "../ui/Reveal";

export function Skills() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Section Header - Left side */}
                    <div className="lg:col-span-4">
                        <Reveal delay={0.2}>
                            <p className="text-caption mb-2">SKILLS</p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h2 className="text-heading">
                                Technical Stacks
                            </h2>
                        </Reveal>
                    </div>

                    {/* Skills Grid - Right side */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            {skills.map((category, index) => (
                                <Reveal key={category.label} delay={0.4 + index * 0.15}>
                                    <div className="space-y-4">
                                        {/* Category Label */}
                                        <p className="text-caption">{category.label}</p>

                                        {/* Skill Items */}
                                        <ul className="space-y-2">
                                            {category.items.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="text-body text-muted"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}