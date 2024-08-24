'use client';
import React from 'react'
import { motion } from "framer-motion"
import SectionHeading from "./Section-heading";
import { skillsData } from "@/lib/data";
import { useSectionView } from '@/lib/hooks';
const animationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 1,
        transition: {
            delay: 0.05 * index,
        },
    })
}
const Skills = () => {
    const { ref } = useSectionView("Skills");
    return (
        <section ref={ref} id="skills" className='mb-28 scroll-mt-28 max-w-[53rem] text-center '>
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>{
                skillsData.map((skill, index) => (
                    <motion.li key={index} className='bg-green-200 text-gray-900 font-semibold border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' variants={animationVariants} initial="initial"
                        whileInView="animate" custom={index}
                    >{skill}</motion.li>
                ))
            }
            </ul>
        </section>
    )
}

export default Skills
