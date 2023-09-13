"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function getFromLocalStorage() {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    return value || "light";
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(getFromLocalStorage());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    );
};
