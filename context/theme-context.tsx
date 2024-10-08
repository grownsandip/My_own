"use client";
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme="light"| "dark";

type ThemeContextProviderProps={
    children:React.ReactNode;
};
type ThemeContextType={
    theme:Theme;
    handleTheme:()=>void;
};
const ThemeContext=createContext<ThemeContextType|null>(null)

export const ThemeContextProvider=({children}:ThemeContextProviderProps)=>{

    const [theme,setTheme]=useState<Theme>("light");

    const handleTheme=()=>{
        if(theme==='light'){
            setTheme("dark");
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }
        else{
            setTheme("light")
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }
    useEffect(()=>{
    const localTheme=window.localStorage.getItem("theme")as Theme | null;
    if(localTheme){
        setTheme(localTheme)
        document.documentElement.classList.add("dark")
        
    }else if(window.matchMedia("(prefers-color-scheme:dark)").matches){
        setTheme("dark")
        document.documentElement.classList.add("dark")
       }
    },[])
    return(
        <ThemeContext.Provider value={{
            theme,
            handleTheme}}
            >{children}</ThemeContext.Provider>
    );
}



export const useThemeContext=()=>{
    const context=useContext(ThemeContext);
    if(context===null){
        throw new Error("Use ThemeContextProvider inside")
    }
    return context
}