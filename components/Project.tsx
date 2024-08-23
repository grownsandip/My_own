'use client';
import {useScroll,motion, useTransform} from "framer-motion";
import React from 'react';
import {useRef} from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type data = (typeof projectsData)[number]
const Project = ({ title, description, tags, imageUrl, gitLink }: data) => {
    const ref=useRef<HTMLElement>(null);
    const {scrollYProgress} = useScroll({
      target: ref,
      offset:["0 1","1.33 1"]
    });
    const scaleProgress=useTransform(scrollYProgress,[0,1],[0.8,1]);
    const opacityProgress=useTransform(scrollYProgress,[0,1],[0.6,1]);
    return (
      <motion.section ref={ref} style={{opacity:opacityProgress,scale:scaleProgress}}className='group relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full gap-5 sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {
              tags.map((tag, index) => (
                <li key={index} className='bg-black/[0.7] gap-5 px-3 py-1 text-[0.7rem] tracking-wider uppercase text-white rounded-full dark:text-white/70'>{tag}</li>
              ))
            }
            <a href={gitLink} target="_blank" className='px-3 py-1 text-[0.7rem] font-bold text-white bg-blue-600 rounded-full outline-none hover:scale-110 hover:bg-blue-900 transition ' >See here</a>
          </ul>
        </div>
        <Image src={imageUrl} alt="My Project" quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-2 transition group-hover:scale-[1.04] group-hover:translate-y-3 group-hover:-rotate-2 group-even:rigth-[initial] group-even:-left-40
        group-even:group-hover:translate-x-2
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        ' />
      </motion.section>
    )
  }
  export default Project