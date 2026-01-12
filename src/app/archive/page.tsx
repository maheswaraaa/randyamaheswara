"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export default function ArchivePage() {
    return (
        <SmoothScroll>
            <Navbar />
            <main>
                <ArchiveContent />
                <FooterCTA />
            </main>
        </SmoothScroll>
    );
}

function ArchiveContent() {
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <div className="container">
                <Reveal>
                    <p className="text-caption mb-4">Archive</p>
                </Reveal>

                <h1 className="text-display mb-16">
                    <TextReveal text="All Projects" delay={0.1} />
                </h1>

                <Reveal delay={0.3}>
                    <div className="py-32 border-t border-b border-border text-center">
                        <p className="text-caption mb-6">Coming Soon</p>
                        <p className="text-subheading text-muted max-w-lg mx-auto">
                            A comprehensive archive of all my work will be available here
                            soon.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
