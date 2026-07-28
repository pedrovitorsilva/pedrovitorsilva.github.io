export function ModelHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg px-6"
    >
      <h1 className="font-heading font-extrabold text-center text-foreground z-10 text-[clamp(2.75rem,10vw,7.5rem)] leading-[1.02]">
        <span className="text-glow-spark">Pedro Silva</span>
      </h1>

      <p className="mt-5 font-mono text-sm sm:text-lg text-dim text-center tracking-wide z-10">
        <span className="text-flow">// role:</span> Desenvolvedor &amp;
        Engenheiro de Dados<span className="animate-blink text-spark">_</span>
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
        <a
          href="#contato"
          className="group inline-flex items-center gap-2 border border-spark bg-spark/10 hover:bg-spark hover:text-void text-spark font-mono text-sm uppercase tracking-[0.15em] px-6 py-3 rounded-md transition-all duration-300 glow-spark"
        >
          <img src="/icons/section-about.svg" alt="" className="w-4 h-4" />
          Fale Comigo
        </a>
        <a
          href="#sobre"
          className="inline-flex items-center gap-2 border border-border/80 bg-surface/60 px-6 py-3 rounded-md font-mono text-sm uppercase tracking-[0.15em] text-foreground/80 hover:text-spark transition-colors"
        >
          Perfil
        </a>
      </div>

      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-spark/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-flow/10 blur-[120px]"></div>
    </section>
  );
}
