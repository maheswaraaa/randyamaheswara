"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { Reveal } from "../ui/Reveal";

export function AboutPreview() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4">
                        <Reveal>
                            <p className="text-caption">About</p>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8">
                        <Reveal delay={0.1}>
                            <p className="text-heading mb-8">
                                {profile.bio}
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-body text-muted hover:text-foreground transition-colors group"
                            >
                                Learn more about me
                                <span className="inline-block transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
