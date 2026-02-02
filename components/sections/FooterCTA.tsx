"use client";

import { profile } from "@/content/profile";
import { Reveal, TextReveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Magnetic } from "../ui/Magnetic";

export function FooterCTA() {
    return (
        <footer className="bg-background-dark text-foreground-light">
            <div className="container section">
                <div className="mb-24">
                    <Reveal>
                        <p className="text-caption text-foreground-light/50 mb-4">
                            Let&apos;s work together
                        </p>
                    </Reveal>
                    <h2 className="text-display">
                        <TextReveal text="Get in touch" delay={0.1} />
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-6">
                        <Reveal delay={0.2}>
                            <Magnetic strength={0.1}>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-heading hover:opacity-70 transition-opacity break-all"
                                >
                                    {profile.email}
                                </a>
                            </Magnetic>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-3">
                        <Reveal delay={0.3}>
                            <p className="text-caption text-foreground-light/50 mb-4">Socials</p>
                            <div className="space-y-2">
                                {Object.entries(profile.socials).map(([name, url]) => (
                                    <Magnetic key={name} strength={0.2}>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-body hover:opacity-70 transition-opacity capitalize"
                                        >
                                            {name}
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-3">
                        <Reveal delay={0.4}>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-caption text-foreground-light/50 mb-4">Location</p>
                                    <p className="text-body">{profile.location}</p>
                                </div>

                                {/* Download Resume - NEW */}
                                <div>
                                    <p className="text-caption text-foreground-light/50 mb-4">
                                        <br />
                                        Resume</p>
                                    <Magnetic strength={0.2}>
                                        <a
                                            href={profile.resumeUrl}
                                            download
                                            className="inline-flex items-center gap-2 text-body hover:opacity-70 transition-opacity group"
                                        >
                                            <span>Download Resume</span>
                                            <svg
                                                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </a>
                                    </Magnetic>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <br />
                <div className="mt-24 pt-8 border-t border-foreground-light/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <Reveal delay={0.5}>
                        <p className="text-small text-foreground-light/50">
                            © {new Date().getFullYear()} {profile.name}
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <p className="text-small text-foreground-light/50">
                            {profile.tagline}
                        </p>
                    </Reveal>
                </div>
            </div>
        </footer>
    );
}
