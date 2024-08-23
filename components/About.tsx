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
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim illum sequi suscipit id maxime eligendi harum inventore, saepe ipsa. Aliquid ad iste nam doloremque cumque iure beatae, ipsum ducimus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sed facilis veritatis dolores, et minus fugit. Vitae fuga exercitationem ab eos aut maiores pariatur distinctio minus sunt ex, sit placeat</p>
    </motion.section>
  )
}

export default About
