import React ,{useContext} from "react";
//jab context bane to us me kio value ho
export const ThemeContext = React.createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}