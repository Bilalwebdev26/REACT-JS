import React from "react";
import { useContext } from "react";
export const themeContext = React.createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeProvider = themeContext.Provider
//create usetheme hook
export function useTheme(){
    return useContext(themeContext)
}