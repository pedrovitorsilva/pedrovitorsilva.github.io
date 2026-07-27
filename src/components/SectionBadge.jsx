export function SectionBadge({ label, subtitle, icon }) {
  return (
    <div className="inline-flex items-center gap-3 border border-border bg-surface/80 backdrop-blur px-3 py-1.5 rounded-md">
      <div className="flex items-center gap-2 text-spark">
        {icon}
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-spark">
          {label}
        </span>
      </div>
      {subtitle ? (
        <span className="hidden sm:inline font-mono text-[11px] text-dim tracking-wider">
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}
