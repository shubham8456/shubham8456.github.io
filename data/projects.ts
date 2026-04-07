export interface Projects {
  title: string;
  description: string;
  link: string;
}

export const projects: Projects[] = [
  {
    title: "Scalable API Platform",
    description: "Built backend services with Ruby on Rails, PostgreSQL, Redis, and Docker.",
    link: "https://github.com/yourusername/project-1",
  },
  {
    title: "Auth Service",
    description: "Implemented JWT, session auth, and secure role-based access control.",
    link: "https://github.com/yourusername/project-2",
  },
  {
    title: "AI Proof of Concept",
    description: "Integrated LLM workflows using Python, LangChain, and local model tooling.",
    link: "https://github.com/yourusername/project-3",
  },
];
