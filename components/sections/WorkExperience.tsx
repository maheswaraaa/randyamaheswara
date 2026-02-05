// @/components/sections/WorkExperience.tsx
"use client";

import { Reveal, TextReveal } from "../ui/Reveal";
import { experiences } from "@/content/experience";

export function WorkExperience() {
    return (
        <section className="section relative">
            <div className="container">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <p className="text-caption mb-4">Experience</p>
                        </Reveal>
                        <h2 className="text-heading">
                            <TextReveal text="Where I've Worked" delay={0.1} />
                        </h2>
                    </div>
                </div>

                {/* Experience List */}
                <div className="mt-16">
                    {experiences.map((exp, index) => (
                        <Reveal key={exp.id} delay={0.2 + index * 0.1}>
                            <br />
                            <div className="grid grid-cols-12 gap-4 lg:gap-6 py-6 border-t border-foreground/10 last:border-b">
                                {/* Index */}
                                <div className="col-span-1">
                                    <span className="text-caption text-muted">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Role & Company */}
                                <div className="col-span-11 lg:col-span-3">
                                    <h3 className="text-body font-medium">
                                        {exp.role}
                                    </h3>
                                    {exp.companyUrl ? (
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-caption text-muted hover:text-foreground transition-colors"
                                        >
                                            {exp.company} ↗
                                        </a>
                                    ) : (
                                        <p className="text-caption text-muted">
                                            {exp.company}
                                        </p>
                                    )}
                                </div>

                                {/* Summary */}
                                <div className="col-span-11 col-start-2 lg:col-span-6 lg:col-start-auto">
                                    <p className="text-body text-muted">
                                        {exp.summary}
                                    </p>
                                </div>

                                {/* Period */}
                                <div className="col-span-11 col-start-2 lg:col-span-2 lg:col-start-auto lg:text-right">
                                    <p className="text-caption text-muted">
                                        {exp.period}
                                    </p>
                                </div>
                            </div>
                            <br />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}