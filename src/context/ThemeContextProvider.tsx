import React, { createContext, useContext } from "react";
import light from "../styles/theme/light";

interface ThemeContextInterface {
  colors: ColorsPalleteInterface;
}

export const ThemeContext = createContext({} as ThemeContextInterface);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ colors: light }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContextProvider;
