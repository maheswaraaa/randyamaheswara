// @/content/experience.ts

export interface Experience {
    id: number;
    role: string;
    company: string;
    companyUrl?: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";
    period: string;
    location: string;
    workMode: "On-site" | "Remote" | "Hybrid";
    description?: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "ERP Developer",
        company: "RUN System",
        companyUrl: "https://runsystem.id/en",
        type: "Full-time",
        period: "Apr 2021 — Feb 2026",
        location: "Yogyakarta, Indonesia",
        workMode: "Hybrid",
        description: [
            "Develops, supports and maintains RUNSystem ERP software features and workflow documentation",
            "Develop reporting and transaction menu using MySQL and C#",
            "Guide and provide technical provisions for new engineers onboard",
        ],
    },
    {
        id: 2,
        role: "Research Intern",
        company: "PT Nuansa Cerah Informasi",
        companyUrl: "https://nuansa.com/",
        type: "Internship",
        period: "Dec 2019 — Jan 2020",
        location: "Bandung, Indonesia",
        workMode: "On-site",
        description: [
            "Analyzed customer feedback to identify needs and preferences",
            "Supported research team in data collection and analysis",
            "Created presentations to present research findings",
        ],
    },
    {
        id: 3,
        role: "Lecturer Assistant",
        company: "Universitas Atma Jaya Yogyakarta",
        companyUrl: "https://uajy.ac.id",
        type: "Part-time",
        period: "Jul 2019 — Aug 2019",
        location: "Yogyakarta, Indonesia",
        workMode: "On-site",
        description: [
            "Create and develop learning modules for students in Database Programming course",
            "Supported lecturer in teaching and answering student questions",
            "Assist lecturer in grading student assignments",
        ],
    },
];