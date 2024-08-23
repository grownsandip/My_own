"use client";
import React from 'react'
import {BsSun} from "react-icons/bs"
import { BsMoon } from 'react-icons/bs';
import  {useThemeContext} from '@/context/theme-context';

const ThemeSwitch = () => {
    const {theme,handleTheme}=useThemeContext();
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop:blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950' onClick={handleTheme}>
        { theme==='light'?(<BsSun/>):(<BsMoon/>)
        }
    </button>
  )
}

export default ThemeSwitch