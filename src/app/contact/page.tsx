"use client";

import { profile } from "@/content/profile";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export default function ContactPage() {
    return (
        <SmoothScroll>
            <Navbar />
            <main>
                <ContactContent />
            </main>
        </SmoothScroll>
    );
}

function ContactContent() {
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <div className="container">
                <Reveal>
                    <p className="text-caption mb-4">Contact</p>
                </Reveal>

                <h1 className="text-display mb-16">
                    <TextReveal text="Let's talk" delay={0.1} />
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <Reveal delay={0.3}>
                            <p className="text-subheading text-muted mb-12">
                                Have a project in mind or just want to say hello? I&apos;d love to
                                hear from you. Drop me a message and I&apos;ll get back to you as
                                soon as possible.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <Magnetic strength={0.1}>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-heading hover:opacity-70 transition-opacity inline-block break-all"
                                >
                                    {profile.email}
                                </a>
                            </Magnetic>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="mt-12">
                                <Button href={`mailto:${profile.email}`} size="lg">
                                    Send an email
                                </Button>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-4">
                        <Reveal delay={0.5}>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-caption mb-2">Location</p>
                                    <p className="text-body">{profile.location}</p>
                                </div>

                                <div>
                                    <p className="text-caption mb-4">Socials</p>
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
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
