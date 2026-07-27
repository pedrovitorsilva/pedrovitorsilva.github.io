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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-workflow w-4 h-4"
          >
            <rect width="8" height="8" x="3" y="3" rx="2"></rect>
            <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
            <rect width="8" height="8" x="13" y="13" rx="2"></rect>
          </svg>
        }
      />

      <div className="mt-6">
        <div className="relative pl-0 sm:pl-6">
          <div className="absolute left-1/2 -translate-x-1/2 sm:left-6 top-0 bottom-0 w-px overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 2 100"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="hsl(var(--flow))"
                strokeWidth="2"
                className="flow-dash"
                opacity="0.5"
              ></line>
            </svg>
          </div>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div
                key={item.role}
                className="relative flex justify-center sm:justify-start w-full"
              >
                <div className="absolute left-1/2 -translate-x-1/2 sm:left-6 z-10 top-7">
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
