import React  from "react";
import { LuGraduationCap } from "react-icons/lu";
import realestate from "@/public/Home_page.png";
import news from "@/public/Business_headlines.png";
import chat from "@/public/front_page.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Masters",
    school:"ICFAI University",
    location: "Agartala,Tripura,India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  {
    title: "Bachelors",
    school:"Assam University",
    location: "Silchar,Assam",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Higher Secondary",
    school:"Golden Valley School",
    location: "Dharmanagar,Tripura",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2010-2018",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: realestate,
    gitLink: 'https://github.com/grownsandip/REAL_ESTATE_FULL_STACK'
  },
  {
    title: "AI chat",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: chat,
    gitLink: 'https://github.com/grownsandip/AI_chat'
  }, 
  {
    title: "News App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: news,
    gitLink:'https://github.com/grownsandip/newsapp'
  },
] as const;

export const skillsData = [
  "C++",
  "c",
  "OOPS",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Docker",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Numpy",
  "Scikit-Learn",
  "Polars",
  "Pandas",
  "Framer Motion",
] as const;