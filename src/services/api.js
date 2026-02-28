// Mock API service for project architecture generation
// Replace with your actual API endpoint

export async function generateProjectArchitecture(projectIdea) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock response based on project idea
  const mockResponse = {
    tools: [
      {
        id: 1,
        name: "Next.js",
        category: "Frontend",
        description: "React framework for production",
        icon: "⚛️",
      },
      {
        id: 2,
        name: "TypeScript",
        category: "Language",
        description: "Type-safe JavaScript",
        icon: "🔷",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        category: "Styling",
        description: "Utility-first CSS framework",
        icon: "🎨",
      },
      {
        id: 4,
        name: "PostgreSQL",
        category: "Database",
        description: "Powerful relational database",
        icon: "🐘",
      },
      {
        id: 5,
        name: "Redis",
        category: "Caching",
        description: "In-memory data store",
        icon: "⚡",
      },
      {
        id: 6,
        name: "Docker",
        category: "DevOps",
        description: "Containerization platform",
        icon: "🐳",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Project Setup & Architecture",
        duration: "Week 1-2",
        tasks: [
          "Initialize Next.js project",
          "Configure TypeScript",
          "Setup development environment",
        ],
      },
      {
        phase: 2,
        title: "Frontend Development",
        duration: "Week 3-4",
        tasks: [
          "Build UI components",
          "Implement routing",
          "Create responsive layouts",
        ],
      },
      {
        phase: 3,
        title: "Backend & Database",
        duration: "Week 5-6",
        tasks: [
          "Design database schema",
          "Build API endpoints",
          "Setup authentication",
        ],
      },
      {
        phase: 4,
        title: "Integration & Testing",
        duration: "Week 7-8",
        tasks: [
          "Connect frontend to backend",
          "Write unit tests",
          "Performance optimization",
        ],
      },
      {
        phase: 5,
        title: "Deployment & Launch",
        duration: "Week 9-10",
        tasks: [
          "Setup CI/CD pipeline",
          "Configure production environment",
          "Deploy to production",
        ],
      },
    ],
  };

  return mockResponse;
}
