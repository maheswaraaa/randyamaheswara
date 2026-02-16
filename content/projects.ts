export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;  // New field
    category: string;
    year: string;
    image?: string;
    link?: string;
}

export const projects: Project[] = [
    // {
    //     id: "nadi-analytics",
    //     title: "NADI",
    //     description: "A public-facing National Analytics for Discovery & Insights application that helps users understand what topics are rising, why they matter, and where they are likely heading next, based on aggregated signals from trusted public data sources.",
    //     shortDescription: "National analytics platform for discovering trending topics and insights from trusted data sources.",
    //     category: "Data Analytics",
    //     year: "2025",
    //     image: "/images/projects/nadi-analytics.jpg",
    //     link: "https://nadianalytics.vercel.app/"
    // },
    {
        id: "replay",
        title: "Replay",
        description: "A personal movie companion that helps you discover new films, track what you've watched, and remember the stories that moved you. Keep your cinematic journey organized in one beautiful place.",
        shortDescription: "Personal movie companion for discovering, tracking, and remembering films.",
        category: "Personal Tools",
        year: "2026",
        image: "/images/projects/replay-latest.jpg",
        link: "https://project-replay.vercel.app"
    },
    {
        id: "quick-invoice",
        title: "Quick Invoice",
        description: "Create professional invoices in seconds. A streamlined invoice generator designed for freelancers and small businesses who need clean, polished billing without the complexity.",
        shortDescription: "Streamlined invoice generator for freelancers and small businesses.",
        category: "Productivity",
        year: "2026",
        image: "/images/projects/quick-invoice.jpg",
        link: "https://project-quickinvoice.vercel.app/"
    },
    {
        id: "nananini",
        title: "Nananini Wedding",
        description: "A landing page for Nananini Wedding local business from Yogyakarta, Indonesia.",
        shortDescription: "Landing page for local business Nananini Wedding",
        category: "Landing Page",
        year: "2025",
        image: "/images/projects/nananini.jpg",
        link: "https://nananini.vercel.app/"
    },
];