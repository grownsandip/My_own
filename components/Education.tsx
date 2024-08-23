'use client';
import React from 'react'
import SectionHeading from './Section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {educationData} from "@/lib/data";
import { useSectionView } from '@/lib/hooks';
import  {useThemeContext} from '@/context/theme-context';


const Education = () => {
   const {ref}=useSectionView("Education");
   const {theme}=useThemeContext();
  return (
    <section  ref={ref} id="education" className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>My Education</SectionHeading>
        <VerticalTimeline lineColor='#f3f4f5'>
            { educationData.map((item,index)=>(
                <React.Fragment key={index}>
                 <VerticalTimelineElement
                 contentStyle={{
                    background:theme==="light"?"#f3f4f6":"rgba(255,255,255,0.5)",
                    boxShadow:"none",
                    border:"1px solid rgba(0,0,0,0.5)",
                    textAlign:"left",
                    padding:"1.3rem 3rem",
                 }}
                 contentArrowStyle={{
                    borderRight:theme==='light'? "0.4rem solid #9ca3af":"0.4rem solid white",
                 }}
                 date={item.date}
                 icon={item.icon}
                 iconStyle={{
                  background:theme==='light'?"white":"rgba(255,255,255,0.15)",
                  fontSize:"1.5rem",
                 }}
                 visible={true}

                 >
                    <h3 className='font-semibold capitalize dark:text-white/75'>{item.title}</h3>
                    <p className='font-normal !mt-0 dark:text-white/75'>{item.description}</p>
                    <span className='mt-5 !font-extrabold text-gray-700 mb-2'>{item.school}</span>
                    <p>{item.location}</p>
                 </VerticalTimelineElement>
                 </React.Fragment>)
            )}
        </VerticalTimeline>
    </section>
  )
}

export default Education