import { SectionBadge } from "./SectionBadge";
import projectsData from "../data/projects.json";

export function ProjectsSection() {
  const projects = projectsData;
  return (
    <section id="projetos" className="relative px-6 py-20 max-w-6xl mx-auto">
      <SectionBadge
        label="Projetos"
        subtitle=":: Hospedados no Github"
        icon={
          <img src="/icons/section-projects.svg" alt="" className="w-4 h-4" />
        }
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="section-card group relative flex flex-col rounded-lg border border-border bg-surface/70 backdrop-blur-sm overflow-hidden hover:border-spark transition-all duration-300 hover:glow-spark"
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-void/60 font-mono text-[10px] uppercase tracking-wider text-dim">
              <span className="flex items-center gap-1.5">
                <img
                  src="/icons/section-projects.svg"
                  alt=""
                  className="w-3 h-3 text-spark"
                />
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-mono font-semibold text-foreground group-hover:text-spark transition-colors text-base break-all">
                  {project.title}
                </h3>
                <img
                  src="/icons/section-projects-card.svg"
                  alt=""
                  className="w-5 h-5 text-dim group-hover:text-spark transition-colors shrink-0"
                />
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-void text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
