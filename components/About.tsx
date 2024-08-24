'use client';
import React from 'react'
import {motion} from "framer-motion"
import SectionHeading from './Section-heading'
import { useSectionView } from '@/lib/hooks';


const About = () => {
   const {ref}=useSectionView("About",0.5);
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
       initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.175}}
       id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>I am a quick learner,I have great curiosity about the nature and also the nature of its existence.</p>
        <p>I am interested in sports and reading,betterment of self is my only goal,I have seen positive changes in my self as i have started seeking answers to questions and also what is the right question to be asked.I believe in elevating consciousness and lighting inner darkness ultimately liberation  </p>
    </motion.section>
  )
}

export default About
