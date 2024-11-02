import React from "react";
import { ThemeProvider } from "./context/theme.context.js";
import ThemeBtn from "./components/Themebtn.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const[themeMode,setThemeMode]=useState("light")
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <div className="bg-slate-950">
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
             <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
