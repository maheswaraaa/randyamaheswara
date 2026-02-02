"use client";

import Image from "next/image";
import { profile } from "@/content/profile";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export default function AboutPage() {
    return (
        <SmoothScroll>
            <Navbar />
            <main>
                <AboutContent />
                <FooterCTA />
            </main>
        </SmoothScroll>
    );
}

function AboutContent() {
    return (
        <section className="min-h-screen pt-32 pb-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left column - Image */}
                    <div className="lg:col-span-5">
                        <div className="h-7"></div> {/* 96px spacer */}
                        <Reveal>
                            <div className="relative aspect-[3/4] bg-muted/10 rounded-lg overflow-hidden">
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Right column - Content */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="text-caption mb-4">About</p>
                        </Reveal>

                        <h1 className="text-display mb-12">
                            <TextReveal text={profile.name} delay={0.1} />
                        </h1>

                        <Reveal delay={0.3}>
                            <p className="text-heading text-muted mb-8">{profile.role}</p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <br />
                            <div className="prose prose-lg max-w-none mb-6">
                                <p className="text-body text-muted leading-relaxed">
                                    I’m a {new Date().getFullYear() - 1998}-year-old software engineer, born and raised in Yogyakarta, Indonesia.
                                    My background in ERP systems taught me that good software starts with understanding—workflows, constraints, and the people behind them—before writing code. I tend to slow down, frame problems carefully, and look for structure before jumping into solutions. This approach helps me build systems that are reliable, maintainable, and genuinely useful.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <br />
                            <div className="mt-16 pt-8 border-t border-border">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-caption mb-2">Location</p>
                                        <p className="text-body">{profile.location}</p>
                                    </div>
                                    <div>
                                        <p className="text-caption mb-2">Contact</p>
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="text-body hover:text-accent transition-colors"
                                        >
                                            Email me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
