import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // Default theme can be "light" if you prefer

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
