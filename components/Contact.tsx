"use client";
import React from 'react'
import SectionHeading from "./Section-heading"
import {motion} from "framer-motion";
import { useSectionView } from '@/lib/hooks';
import {sendEmail} from  "@/actions/sendEmail";
import SubButton from  "./SubButton";
import toast from "react-hot-toast";

const Contact = () => {
    const {ref}=useSectionView("Contact");
  return (
    <motion.section ref={ref} id='contact' className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 text-center dark:text-white/80'>Contact me directly at <a href='mailto:roysandip33290@gmail.com' className='underline'>Mail</a>{" "}or through this form</p>
        <form className='mt-10 flex flex-col dark:text-black'action={async (formData)=>{
                  const{res,error} = await sendEmail(formData);
                  if(error){
                    toast.error(error)
                    return;
                  }
                  toast.success("Message sent Successfully")
            }}>
            <input type='email' name="senderEmail" className='h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'placeholder='Your email' required maxLength={500}/>
            <textarea name="senderMsg" className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'placeholder='your message'required maxLength={5000}/>
           <SubButton/>
        </form>
    </motion.section>
  )
}

export default Contact