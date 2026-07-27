import { SectionBadge } from "./SectionBadge";

export function ModelAboutSection() {
  return (
    <section id="sobre" className="relative px-6 py-20 max-w-5xl mx-auto">
      <SectionBadge
        label="Sobre Mim"
        subtitle=":: Perfil"
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
            className="lucide lucide-cpu w-4 h-4"
          >
            <rect width="16" height="16" x="4" y="4" rx="2"></rect>
            <rect width="6" height="6" x="9" y="9" rx="1"></rect>
            <path d="M15 2v2"></path>
            <path d="M15 20v2"></path>
            <path d="M2 15h2"></path>
            <path d="M2 9h2"></path>
            <path d="M20 15h2"></path>
            <path d="M20 9h2"></path>
            <path d="M9 2v2"></path>
            <path d="M9 20v2"></path>
          </svg>
        }
      />

      <div className="section-card section-panel mt-6 rounded-lg p-6 sm:p-10 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/70">
          <span className="w-2 h-2 rounded-full bg-spark"></span>
          <span className="font-mono text-xs text-dim uppercase tracking-widest">
            Quem sou eu ?
          </span>
        </div>

        <p className="text-foreground/85 text-lg leading-relaxed max-w-3xl">
          Bacharel em Sistemas de Informação com experiência em Engenharia de
          Dados, desenvolvimento backend e Análise de Dados. 
          <br /> <br />
          Tenho atuação em
          migração de Data Warehouses e pipelines para AWS/Snowflake, além de
          projetos de ETL/ELT, automação e integração com soluções em nuvem.
          <br /> <br />
          Meu foco está em construir sistemas escaláveis, confiáveis e orientados a
          resultados com forte atuação em dados.
        </p>
      </div>
    </section>
  );
}
