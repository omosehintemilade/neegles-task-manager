import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";
import { Theme, ThemeContextType } from "./types";
import StoreService from "../../utils/store-helper";
import { StoreKeys } from "../../constants";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const store = new StoreService();

  const [theme, setTheme] = useState<Theme>(
    store.get(StoreKeys.THEME, "light")
  );

  useEffect(() => {
    store.save(StoreKeys.THEME, theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
