import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    // Always default to dark mode
    return "dark";

    // return window.matchMedia('(prefers-color-scheme: dark)').matches
    //   ? 'dark'
    //   : 'light';
  });

  useEffect(() => {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    // Remove attribute for dark (default)
    root.removeAttribute('data-theme'); 
  } else {
    // Add attribute for light
    root.setAttribute('data-theme', 'light'); 
  }
  
  localStorage.setItem('theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
