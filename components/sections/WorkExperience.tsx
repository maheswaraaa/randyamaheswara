// @/components/sections/WorkExperience.tsx
"use client";

import { Reveal, TextReveal } from "../ui/Reveal";
import { experiences } from "@/content/experience";

export function WorkExperience() {
    return (
        <section className="section relative">
            <div className="container">
                {/* Header */}
                <div className="mb-16">
                    <Reveal>
                        <p className="text-caption mb-4">Experience</p>
                    </Reveal>
                    <h2 className="text-heading">
                        <TextReveal text="Where I've Worked" delay={0.1} />
                    </h2>
                </div>

                {/* Experience List */}
                <div className="flex flex-col gap-4">
                    {experiences.map((exp, index) => (
                        <Reveal key={exp.id} delay={0.2 + index * 0.1}>
                            <div className="pb-12 border-b border-foreground/10 last:border-b-0">
                                {/* Main Row */}
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    {/* Left: Role & Company */}
                                    <div className="space-y-1">
                                        <h3 className="text-body font-medium">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {exp.companyUrl ? (
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-body text-muted hover:text-foreground transition-colors"
                                                >
                                                    {exp.company} ↗
                                                </a>
                                            ) : (
                                                <span className="text-body text-muted">
                                                    {exp.company}
                                                </span>
                                            )}
                                            <span className="text-caption text-muted">
                                                · {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Period & Location */}
                                    <div className="lg:text-right space-y-1">
                                        <p className="text-caption text-muted">
                                            {exp.period}
                                        </p>
                                        <p className="text-caption text-muted">
                                            {exp.location} · {exp.workMode}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                {exp.description && (
                                    <ul className="space-y-3 mt-6">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-body text-muted flex gap-3"
                                            >
                                                <span className="text-foreground/30 select-none">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}