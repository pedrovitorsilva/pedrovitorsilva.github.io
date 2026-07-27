import { SectionBadge } from "./SectionBadge";
import contactData from "../data/contact.json";

const contactIcons = {
  email: (
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
      className="lucide lucide-mail w-4 h-4 shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),
  linkedin: (
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
      className="lucide lucide-linkedin w-4 h-4 shrink-0"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  github: (
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
      className="lucide lucide-github w-4 h-4 shrink-0"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  ),
};

export function ContactSection() {
  const contacts = contactData;
  return (
    <section id="contato" className="relative px-6 py-20 max-w-4xl mx-auto">
      <SectionBadge
        label="Contato"
        subtitle=""
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
            className="lucide lucide-send w-4 h-4"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
        }
      />

      <div className="section-card section-panel mt-6 rounded-lg p-6 sm:p-10">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/70">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-spark/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-flow/70"></span>
          <span className="ml-2 font-mono text-xs text-dim">
            Fale comigo pelas seguintes plataformas:
          </span>
        </div>

        <div className="space-y-3">
          {contacts.map((contact) => (
            <a
              key={contact.path}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`section-card group flex items-center gap-4 w-full border text-spark bg-void/40 rounded-md px-4 py-3.5 transition-all duration-300 ${contact.color}`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${contact.color}`}
              >
                {contact.label}
              </span>
              <span className="font-mono text-sm text-foreground/90 flex-1 truncate text-left">
                {contact.path}
              </span>
              {
                contactIcons[
                  contact.path.includes("email")
                    ? "email"
                    : contact.path.includes("linkedin")
                      ? "linkedin"
                      : "github"
                ]
              }
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
