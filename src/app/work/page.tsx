"use client";

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
        <section className="min-h-screen flex flex-col justify-center pt-24">
            <div className="container">
                <Reveal>
                    <p className="text-caption mb-4">Portfolio</p>
                </Reveal>
                <h1 className="text-display mb-16">
                    <TextReveal text="Selected Work" delay={0.1} />
                </h1>

                <Reveal delay={0.2}>
                    <div className="py-32 border-t border-b border-border text-center">
                        <p className="text-caption mb-6">Coming Soon</p>
                        <p className="text-heading text-muted max-w-lg mx-auto mb-8">
                            I&apos;m currently working on some exciting projects.
                        </p>
                        <p className="text-body text-muted max-w-md mx-auto">
                            Check back soon to see what I&apos;ve been building. In the
                            meantime, feel free to reach out if you&apos;d like to collaborate.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
