// @/content/experience.ts

export interface Experience {
    id: number;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    location: string;
    summary: string;
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "ERP Developer",
        company: "RUN System",
        companyUrl: "https://runsystem.id/en",
        period: "2021 — 2026",
        location: "Yogyakarta, ID",
        summary: "Developed and maintained ERP software features, built reporting systems with MySQL and C#, and mentored new engineers.",
    },
    {
        id: 2,
        role: "Research Intern",
        company: "PT Nuansa Cerah Informasi",
        companyUrl: "https://nuansa.com/",
        period: "2019 — 2020",
        location: "Bandung, ID",
        summary: "Analyzed customer feedback and supported the research team in data collection and presentation of findings.",
    },
    {
        id: 3,
        role: "Lecturer Assistant",
        company: "Universitas Atma Jaya Yogyakarta",
        companyUrl: "https://uajy.ac.id",
        period: "2019",
        location: "Yogyakarta, ID",
        summary: "Created learning modules for Database Programming course and assisted in teaching and grading.",
    },
];