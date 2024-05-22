"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import themes from "./themes";

const ThemeContext = createContext({
  theme: "pink",
  changeTheme: (newTheme) => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("pink");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme((prevTheme) => {
      document.body.classList.remove(prevTheme);
      document.body.classList.add(theme);
      return theme;
    });
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProviderMUI theme={themes[theme]}>{children}</ThemeProviderMUI>
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
