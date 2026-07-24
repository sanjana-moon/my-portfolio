export interface Project {
  id: number;

  slug: string;

  title: string;

  featured: boolean;

  description: string;

  image: string;

  technologies: string[];

  live: string;

  frontend: string;

  backend: string;

  category: string;

  challenges: {
    problem: string;
    solution: string;
  }[];
}