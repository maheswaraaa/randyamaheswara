export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    year: string;
    image?: string;
    link?: string;
}

// Projects array - currently empty (Coming Soon)
// Add projects in this format:
// {
//   id: "project-1",
//   title: "Project Name",
//   description: "Brief project description",
//   category: "Web Development",
//   year: "2024",
//   image: "/images/projects/project-1.jpg",
//   link: "https://example.com"
// }

export const projects: Project[] = [];
