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
        className="lucide w-4 h-4"
      >
        {theme === "dark" ? (
          <path d="M12 3v2"></path>
        ) : (
          <circle cx="12" cy="12" r="4"></circle>
        )}
        {theme === "dark" ? (
          <path d="M12 19v2"></path>
        ) : (
          <path d="M12 2v2"></path>
        )}
        {theme === "dark" ? (
          <path d="m4.93 4.93 1.41 1.41"></path>
        ) : (
          <path d="M12 20v2"></path>
        )}
        {theme === "dark" ? (
          <path d="m17.66 17.66 1.41 1.41"></path>
        ) : (
          <path d="m4.93 4.93 1.41 1.41"></path>
        )}
        {theme === "dark" ? (
          <path d="M2 12h2"></path>
        ) : (
          <path d="m17.66 17.66 1.41 1.41"></path>
        )}
        {theme === "dark" ? (
          <path d="M20 12h2"></path>
        ) : (
          <path d="M2 12h2"></path>
        )}
        {theme === "dark" ? (
          <path d="m6.34 17.66-1.41 1.41"></path>
        ) : (
          <path d="M20 12h2"></path>
        )}
        {theme === "dark" ? (
          <path d="m19.07 4.93-1.41 1.41"></path>
        ) : (
          <path d="m6.34 17.66-1.41 1.41"></path>
        )}
        {theme === "dark" ? (
          <circle cx="12" cy="12" r="4"></circle>
        ) : (
          <path d="m19.07 4.93-1.41 1.41"></path>
        )}
      </svg>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
