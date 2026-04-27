import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-12">
      <SectionHeader
        eyebrow="Projects"
        title="Banking integrations and product experiments."
        description="Select projects that show how I combine API architecture, DevOps automation, and full-stack development into working solutions."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
