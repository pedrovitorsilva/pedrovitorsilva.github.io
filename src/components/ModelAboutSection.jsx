import { SectionBadge } from "./SectionBadge";

export function ModelAboutSection() {
  return (
    <section id="sobre" className="relative px-6 py-20 max-w-5xl mx-auto">
      <SectionBadge
        label="Sobre Mim"
        subtitle=":: Perfil"
        icon={<img src="/icons/section-about.svg" alt="" className="w-4 h-4" />}
      />

      <div className="section-card section-panel mt-6 rounded-lg p-6 sm:p-10 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/70">
          <span className="w-2 h-2 rounded-full bg-spark"></span>
          <span className="font-mono text-xs text-dim uppercase tracking-widest">
            Quem sou eu?
          </span>
        </div>

        <p className="text-foreground/85 text-lg leading-relaxed max-w-3xl">
          Bacharel em Sistemas de Informação com experiência em Engenharia de
          Dados, Desenvolvimento Back-end e Análise de Dados.
          <br /> <br />
          Tenho atuação em migração de Data Warehouses e pipelines para
          AWS/Snowflake, além de projetos de ETL/ELT, automação e integração com
          soluções em nuvem.
          <br /> <br />
          Meu foco está em construir sistemas escaláveis, confiáveis e
          orientados a resultados com forte atuação em dados.
        </p>
      </div>
    </section>
  );
}
