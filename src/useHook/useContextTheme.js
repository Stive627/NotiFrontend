import { createContext, useContext, useState, } from "react";

export const ThemeContexte = createContext(undefined)

export const ProviderTheme = ({children})=>{
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContexte.Provider value={{
            theme,
            onchange: ()=>setTheme(theme === 'light' ? 'dark' : 'light')
            }}>
            {children}
        </ThemeContexte.Provider>
    )
}

export const UseTheme = () =>useContext(ThemeContexte)
