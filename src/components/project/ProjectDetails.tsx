import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  GitBranch,
} from "lucide-react";

import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";

import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text transition hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-10">
          <h1 className="font-heading text-4xl font-extrabold text-heading md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-text">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                <Globe
                  size={18}
                  className="mr-2"
                />
                Live Website
              </Link>
            )}

            <Link
              href={project.frontend}
              target="_blank"
              className="inline-flex items-center rounded-xl border border-border px-5 py-3 font-medium text-heading transition hover:border-primary hover:text-primary"
            >
              <GitBranch
                size={18}
                className="mr-2"
              />
              Frontend
            </Link>

            <Link
              href={project.backend}
              target="_blank"
              className="inline-flex items-center rounded-xl border border-border px-5 py-3 font-medium text-heading transition hover:border-primary hover:text-primary"
            >
              <GitBranch
                size={18}
                className="mr-2"
              />
              Backend
            </Link>
          </div>
        </div>

        {/* Challenges */}
        {project.challenges.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-3xl font-bold text-heading">
              Challenges & Solutions
            </h2>

            <div className="mt-8 grid gap-6">
              {project.challenges.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="text-lg font-semibold text-heading">
                    Challenge {index + 1}
                  </h3>

                  <p className="mt-4 leading-7 text-text">
                    <span className="font-semibold text-heading">
                      Problem:
                    </span>{" "}
                    {item.problem}
                  </p>

                  <p className="mt-3 leading-7 text-text">
                    <span className="font-semibold text-primary">
                      Solution:
                    </span>{" "}
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Preview */}
        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold text-heading">
            Live Preview
          </h2>

          <p className="mt-3 text-text">
            Explore the live version of the project directly below.
          </p>

          {project.live ? (
            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
              <iframe
                src={project.live}
                title={project.title}
                className="h-[800px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-border bg-surface px-8 py-16 text-center">
              <h3 className="text-2xl font-bold text-heading">
                🚧 Live Demo Coming Soon
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-text">
                This project is currently under development or has not been
                deployed yet. You can still explore the complete source code
                using the Frontend and Backend GitHub repositories above.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}