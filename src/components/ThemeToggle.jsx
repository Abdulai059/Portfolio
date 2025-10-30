import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:scale-110 transition-transform"
      style={{
        backgroundColor: "var(--color-navy)",
      }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" style={{ color: "var(--color-lavender)" }} />
      ) : (
        <Sun className="w-5 h-5" style={{ color: "var(--color-aqua)" }} />
      )}
    </button>
  );
};
