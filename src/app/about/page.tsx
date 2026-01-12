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

                        <Reveal delay={0.4}>
                            <p className="text-subheading mb-8">{profile.tagline}</p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-body text-muted leading-relaxed mb-6">
                                    {profile.bio}
                                </p>
                                <p className="text-body text-muted leading-relaxed">
                                    I believe in approaching problems with curiosity and depth,
                                    taking time to understand the full picture before diving into
                                    solutions. This methodical approach helps me create software
                                    that not only works but truly serves its purpose.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.6}>
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
