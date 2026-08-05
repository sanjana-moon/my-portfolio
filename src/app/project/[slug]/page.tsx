import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project/ProjectDetails";
import projects from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate pages for all projects during build
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetails project={project} />
  );
}