'use client';
import React, { useContext } from 'react'
import { useState } from 'react';
import {links} from "@/lib/data"
import { createContext } from 'react';

type SectionNames=(typeof links)[number]["name"];
type p={
  children:React.ReactNode
}
type ActiveSectionContextType={
    activeSection:SectionNames;
    setActiveSection:React.Dispatch<React.SetStateAction<SectionNames>>;
    timeLastClicked:number;
    setTimeLastClicked:React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveContext=createContext<ActiveSectionContextType|null>(null);

const ActiveSectionProvider = ({children}:p) => {
    
const [activeSection,setActiveSection]=useState<SectionNames>('Home');
const [timeLastClicked,setTimeLastClicked]=useState(0);
  return <ActiveContext.Provider value={{
    activeSection,
    setActiveSection,
    timeLastClicked,
    setTimeLastClicked,
  }}>
    {children}
  </ActiveContext.Provider>
}

export default ActiveSectionProvider

export const useActiveSectionContext=()=>{
  const context=useContext(ActiveContext);
  if(context===null) throw new Error("it must be used within context provider");
  return context;
}