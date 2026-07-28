import { SectionBadge } from "./SectionBadge";
import contactData from "../data/contact.json";

const contactIcons = {
  email: (
    <img src="/icons/contact-mail.svg" alt="" className="w-4 h-4 shrink-0" />
  ),
  linkedin: (
    <img
      src="/icons/contact-linkedin.svg"
      alt=""
      className="w-4 h-4 shrink-0"
    />
  ),
  github: (
    <img src="/icons/contact-github.svg" alt="" className="w-4 h-4 shrink-0" />
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
          <img src="/icons/section-contact.svg" alt="" className="w-4 h-4" />
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
