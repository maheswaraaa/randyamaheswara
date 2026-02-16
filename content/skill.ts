// src/content/skills.ts

export interface SkillCategory {
    label: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        label: "LANGUAGES",
        items: [
            "C#",
            "TypeScript",
            "Python",
            "Dart",
            "SQL",
        ],
    },
    {
        label: "FRAMEWORKS & RUNTIME",
        items: [
            ".NET",
            "Flutter",
            "Next.js",
            "React",
            "Tailwind CSS",
        ],
    },
    {
        label: "TOOLS & PLATFORMS",
        items: [
            "MariaDB",
            "Vercel",
            "Git",
            "Framer Motion",
            "Plane",
            "Trello"
        ],
    },
];