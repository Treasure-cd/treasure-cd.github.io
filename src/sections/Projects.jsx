import React from "react";
import { PROJECTS } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard.jsx";

export default function ProjectsSection({
  projects = PROJECTS,
  detailPath = "/projects",
  heading = "Projects",
}) {
  return (
    <section
      id="projects"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
           {heading}
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} detailPath={detailPath} />
          ))}
        </div>
      </div>
    </section>
  );
}