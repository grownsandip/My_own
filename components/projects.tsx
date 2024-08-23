'use client';
import React from 'react'
import SectionHeading from './Section-heading'
import Project from "@/components/Project";
import { projectsData } from "@/lib/data";
import { useSectionView } from '@/lib/hooks';


const Projects = () => {
  const {ref}=useSectionView("Projects",0.5)
  return (
    <section ref={ref}className='scroll-mt-28' id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>{
        projectsData.map((items, index) => (
          <React.Fragment key={index}>
            <Project {...items} />
          </React.Fragment>
        ))
      }</div>
    </section>
  )
}

export default Projects
