import { SectionBadge } from "./SectionBadge";
import experienceData from "../data/experience.json";

export function ExperienceSection() {
  const experiences = experienceData;
  return (
    <section
      id="experiencias"
      className="relative px-6 py-20 max-w-5xl mx-auto"
    >
      <SectionBadge
        label="Experiências"
        subtitle=":: Atuações Anteriores"
        icon={
          <img src="/icons/section-experience.svg" alt="" className="w-4 h-4" />
        }
      />

      <div className="mt-6">
        <div className="relative pl-0 sm:pl-6">
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div
                key={item.role}
                className="relative flex justify-center sm:justify-start w-full"
              >
                <div className="absolute left-1/2 -translate-x-1/2 sm:left-6 z-10 top-7 hidden sm:block">
                  <span className="block w-3 h-3 rounded-full border-2 border-flow bg-void"></span>
                </div>
                <div
                  className={`section-card relative sm:ml-16 w-full rounded-lg border border-border bg-surface/70 backdrop-blur-sm p-5 hover:border-flow/60 transition-colors group ${
                    index % 2 === 0 ? "sm:translate-x-0" : ""
                  }`}
                >
                  <p className="absolute right-4 top-4 font-mono text-xs text-dim">
                    {item.period}
                  </p>
                  <h3 className="font-heading font-bold text-lg text-foreground pr-24">
                    {item.role}
                  </h3>
                  <p className="font-mono text-sm text-flow mb-3">
                    {item.company}
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-foreground/75"
                      >
                        <span className="text-spark mt-0.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
