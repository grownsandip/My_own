"use client";
import React from 'react'
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active_section';

const Intro = () => {
      const {ref}=useSectionView("Home",0);
      const {setTimeLastClicked,setActiveSection}=useActiveSectionContext();
  return (
    <section ref={ref} className='mb-28 mt-[5.9rem] md:-mt-[3rem] lg:mt-0 text-center max-w-[50rem]  scroll-mt-[100rem] sm:scroll-mt-[100rem]'id="home">
      <div className='flex items-center justify-center '>
        <div className='relative'>
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:'tween',
                duration:0.2
            }}
            >
            <Image src="/My_Pic.png" alt="my pic" width={150} height={150} quality={95} priority={true}
            className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
        </div>
      </div>
      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      >
        <span className='font-bold'>Hell I am Sandip</span>I am a{" "}
        <span className='bold'>A full stack developer</span>with {" "}
        <span className='font-bold'>experience</span>I enjoy building
        <span className='italic'>sites and apps</span>My focus is {" "}
        <span className='underline'>info about tech stack</span>
      </motion.p>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center px-4 gap-2 text-lg font-medium'
       initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.1}}
      >
        <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        onClick={()=>{
          setActiveSection("Contact")
          setTimeLastClicked(Date.now())
        }}
        >
        Contact Me Here<BsArrowRight/>
        </Link>

        <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10 dark:bg-white/10' href='/MY_RESUME.pdf' download={true}>DownLoad Resume<HiDownload/></a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/sandip-roy-b3813524a' target='_blank'><BsLinkedin/></a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.5rem] rounded-full cursor-pointer outline-none focus:scale-[1.15] hover:scale-110  active:scale-[1.15] hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/grownsandip' target='_blank'
        ><FaGithubSquare/></a>
      </motion.div>
    </section>
  )
}

export default Intro
