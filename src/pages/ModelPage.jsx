import { ThemeToggle } from "../components/ThemeToggle";
import { ModelHero } from "../components/ModelHero";
import { ModelAboutSection } from "../components/ModelAboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { PageFooter } from "../components/PageFooter";

export function ModelPage() {
  return (
    <main className="relative bg-void min-h-screen text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40"></div>
      <div className="pointer-events-none fixed inset-0 scanlines opacity-30"></div>
      <div className="relative z-10">
        <ThemeToggle />
        <ModelHero />
        <div className="flex flex-col items-center h-24 relative">
          <div className="relative w-px flex-1 overflow-hidden">
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
                strokeWidth="1.5"
                className="flow-dash"
                opacity="0.55"
              ></line>
            </svg>
          </div>
        </div>
        <ModelAboutSection />
        <div className="flex flex-col items-center h-24 relative">
          <div className="relative w-px flex-1 overflow-hidden">
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
                strokeWidth="1.5"
                className="flow-dash"
                opacity="0.55"
              ></line>
            </svg>
          </div>
        </div>
        <ExperienceSection />
        <div className="flex flex-col items-center h-24 relative">
          <div className="relative w-px flex-1 overflow-hidden">
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
                strokeWidth="1.5"
                className="flow-dash"
                opacity="0.55"
              ></line>
            </svg>
          </div>
        </div>
        <ProjectsSection />
        <div className="flex flex-col items-center h-24 relative">
          <div className="relative w-px flex-1 overflow-hidden">
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
                strokeWidth="1.5"
                className="flow-dash"
                opacity="0.55"
              ></line>
            </svg>
          </div>
        </div>
        <ContactSection />
        <PageFooter />
      </div>
    </main>
  );
}
