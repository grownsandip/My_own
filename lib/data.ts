import React  from "react";
import { LuGraduationCap } from "react-icons/lu";
import realestate from "@/public/Home_page.png";
import news from "@/public/Business_headlines.png";
import chat from "@/public/front_page.png";
import Vid from "@/public/Video.png";
import Ch from "@/public/Chat_2.png";
import ui from "@/public/Ui.png";
import dash from "@/public/dashboard.png";
import flow from "@/public/FlowByte.png"

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
      "I am currently pursuing my Masters in Computer Application which gives me more insights about the fundamentals and enhances my knowledge about the subject more.Wth the Grade of 9.7 out of 10",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  {
    title: "Bachelors",
    school:"Assam University",
    location: "Silchar,Assam",
    description:
      "I have completed my Bachelors in Computer Science,i have learnt about the basic working principles of computer.Operating system,Digital logic gates and digital circuit working and secured CGPA of 7.2 out of 10",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Higher Secondary",
    school:"Golden Valley School",
    location: "Dharmanagar,Tripura",
    description:
      "I completed my Higher Secondary with PCM background Physics ,Chemistry and Mathematics,from TBSE board and had a percentage of 71%",
    icon: React.createElement(LuGraduationCap),
    date: "2010-2018",
  },
] as const;

export const projectsData = [
  {
    title: "Flow App",
    description:
      "A drag and drop workflow creation website for web scrapping",
    tags: ["TypeScript","Reactflow", "Nextjs","Prisma","sqlite","Clerk"],
    imageUrl: flow,
    gitLink:'https://github.com/grownsandip/Flow_app'
  },
  {
    title: "Institute Dashboard",
    description:
      "A Modern Institute management app using nextjs with intuitive UI/UX ",
    tags: ["TypeScript","React", "Nextjs","Prisma","Docker","Postgres","Clerk"],
    imageUrl: dash,
    gitLink:'https://github.com/grownsandip/dashboard_app'
  },
  {
    title: "Resume Builder",
    description:
      "An LLM based resume tailoring interface where resume gets tailored as per job description ",
    tags: ["React", "groqAPI","Tailwind","HTML","javaScript","LLama 3.2"],
    imageUrl: ui,
    gitLink:'https://github.com/grownsandip/LLM_resume'
  },
  {
    title: "Video Calling App",
    description:
      "This app was developed using latest Nextjs14 and for learning and creating custom video calling app to understand the basic principles.",
    tags: ["React", "NextJs", "TypeScript", "Tailwind","Stream.io","Clerk"],
    imageUrl: Vid,
    gitLink: 'https://github.com/grownsandip/next_app'
  },
  {
    title: "Real Estate",
    description:
      "This project was developed with motive to elevate and make easy for realestate events.",
    tags: ["React", "NodeJs", "MongoDB", "scss", "Prisma","Axios","Clerk"],
    imageUrl: realestate,
    gitLink: 'https://github.com/grownsandip/REAL_ESTATE_FULL_STACK'
  },
  {
    title: "AI chat",
    description:
      "This app is developed for learning purpose,To learn using LLM for creating product.",
    tags: ["React", "TypeScript", "Nodejs", "Tailwind", "GoogleAI","Gemini","MongoDB"],
    imageUrl: chat,
    gitLink: 'https://github.com/grownsandip/AI_chat'
  },
  {
    title: "Chat App",
    description:
      "A simple  chat app that enables real time chat along with other features.",
    tags: ["React", "Nodejs","css","HTML","javaScript","Socketio","firebase"],
    imageUrl: Ch,
    gitLink:'https://github.com/grownsandip/Chat_App'
  },
  {
    title: "News App",
    description:
      "A simple news app serves daily headlines on various topics and events worldwide ",
    tags: ["React", "NewsAPI","Tailwind","HTML","javaScript","Docker"],
    imageUrl: news,
    gitLink:'https://github.com/grownsandip/newsapp'
  },
] as const;

export const skillsData = [
  "C++",
  "C",
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