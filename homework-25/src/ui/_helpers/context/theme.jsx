import { createContext, useState } from "react";

export const color = {
    light: "light",
    dark: "dark",
}

export const ThemeContext = createContext(color.light);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(color.light);

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}