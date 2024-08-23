import Intro  from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/About"
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      {/* <SectionDivider/> */}
      <Education/>
      <Contact/>
    </main>
  );
}
