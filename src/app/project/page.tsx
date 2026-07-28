import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectGrid from "@/components/project/ProjectGrid";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          title="All Projects"
          subtitle="Explore all the projects I've built throughout my learning journey."
        />

        <div className="mt-16">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}