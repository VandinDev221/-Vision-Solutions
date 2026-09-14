export interface TechLayer {
  label: string;
  title: string;
  technologies: string[];
}

export const techLayers: TechLayer[] = [
  {
    label: "01",
    title: "Frontend & Application",
    technologies: ["Next.js 15", "React 19", "TypeScript"],
  },
  {
    label: "02",
    title: "API & Business Rules",
    technologies: ["NestJS", "Fastify", "Node.js"],
  },
  {
    label: "03",
    title: "Relational DB",
    technologies: ["PostgreSQL 16", "Prisma ORM"],
  },
  {
    label: "04",
    title: "Queues & Async Processing",
    technologies: ["Redis", "BullMQ"],
  },
  {
    label: "05",
    title: "Infrastructure & Cloud",
    technologies: ["Docker", "Cloud CI/CD", "Linux"],
  },
];
