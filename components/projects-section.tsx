import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-content";

export function ProjectsSection() {
  return (
    <div className="grid gap-5">
      {projects.map((project, index) => (
        <AnimatedSection key={project.title} delay={index * 0.08}>
          <ProjectCard {...project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
