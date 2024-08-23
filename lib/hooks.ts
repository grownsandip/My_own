import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active_section';
import type {SectionName} from "./types";

export const useSectionView=(sectionName:SectionName,threshold=0.75)=>{
    const {ref,inView}=useInView({
        threshold,
    });
    const {setActiveSection,timeLastClicked}=useActiveSectionContext();
    
    useEffect(()=>{
      if(inView && Date.now()-timeLastClicked > 1000) setActiveSection(sectionName)
    },[inView,setActiveSection,timeLastClicked,sectionName])
return {
    ref,
}
}