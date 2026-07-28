import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Alternar tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group fixed top-5 right-5 z-50 flex items-center gap-2 border border-border bg-surface/80 backdrop-blur px-3 py-2 rounded-md text-foreground/80 hover:border-spark hover:text-spark transition-colors font-mono text-xs uppercase tracking-widest"
    >
      <img src="/icons/theme-toggle.svg" alt="" className="w-4 h-4" />
      <span className="hidden sm:inline">Mudar Tema</span>
    </button>
  );
}
