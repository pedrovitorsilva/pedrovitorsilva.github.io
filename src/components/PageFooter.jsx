export function PageFooter() {
  return (
    <footer className="relative flex flex-row border-t border-border bg-void/80">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-row items-center">
        <p className="font-mono text-xs text-dim text-center">
          © 2026 Pedro Silva — Built with React on{" "}
          <span className="text-flow">Base44</span> infrastructure
        </p>
      </div>
    </footer>
  );
}
