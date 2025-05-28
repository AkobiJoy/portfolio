import About from "@/components/About";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import Skills from "@/components/Skills";
import Skill from "@/components/SkillHtml";
import Skillg from "@/components/SkillGit";
import SkillCss from "@/components/SkillCss";
import SkillHtml from "@/components/SkillHtml";
import SkillGit from "@/components/SkillGit";
import SkillVersel from "@/components/SkillVersel";
import SkillNext from "@/components/SkillNext";
import SkillMongo from "@/components/SkillMongo";
import SkillJs from "@/components/SkillJs";
import SkillTailwind from "@/components/SkillTailwind";
import SkillVscode from "@/components/SkillVcode";
import SkillReact from "@/components/SkillReact";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";
import SkillPage from "@/components/Check";

const page = () => {
  return (
    <div
      // commented out h-screen
      className="dark:bg-black, dark:text-white text-white  snap-y snap-mandatory
    overflow-scroll z-0"
    >
      {/* navbar   */}
      <Navbar />

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center py-16 lg:py-0 ">
        <About />
      </section>

      {/* experince */}

      <section id="experince" className="snap-center">
        <Experince />
      </section>

      {/* <section id='skills' className='snap-start  h-screen items-center px-[1rem] flex flex-col pt-32'> */}
      <section
        id="skills"
        className="snap-center py-16 lg:py-0 px-[1rem] items-center flex flex-col h-[80vh] mt-[12rem] lg:mt-0 lg:mb-7"
      >
        {/* <h3 className='uppercase tracking-[20px] text-gray-500 text-base md:text-2xl '>Skills</h3> */}
        <h1 className="bottom-28 uppercase tracking-[20px] text-gray-500 text-4xl text-center mb-[7rem] font-bold">
          Skills
        </h1>

        <h3 className=" uppercase tracking-[1px] text-gray-500 text-[12px] md:text-2xl mb-4">
          Hover over a skill for proficiency
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-10 lg:grid-cols-7 pt-5 gap-3 md:gap-5 md:pl-[6rem]">
          <SkillCss />
          <SkillHtml />
          <SkillGit />
          <SkillVersel />
          <SkillNext />
          <SkillMongo />
          <SkillJs />
          <SkillTailwind />
          <SkillVscode />
          <SkillReact />
          <SkillReact />
          <SkillReact />
          <SkillReact />
          <SkillReact />

        </div>
      </section>

      <section id="" className="snap-center">
        <SkillPage />
      </section>

      <section id="project" className="snap-center">
        <Projects />
      </section>

      {/* 
      <section id="team" className="snap-center">
        <TeamSection />
      </section> */}

      <section id="contact" className="snap-center">
        <Contact />{" "}
      </section>

      {/* scroll to the top */}
      <Link href="#hero">
        <div
          className="w-[10px] rounded-full px-4 py-2 bg-[#a33131] ring-4 hover:ring-blue-600 md:px-6 md:py-4 md:bg-[#3177A3] 
         items-center justify-center md:ring-8 md:hover:ring-neutral-600 lg:bg-black dark:lg:bg-white 
         flex fixed
          right-10 md:right-16 bottom-8 md:bottom-12"
        >
          <span className="font-bold ">
            <FaArrowUp className="dark:lg:text-black" />
          </span>
        </div>
      </Link>

      {/* footer   */}
      <Footer />
    </div>
  );
};

export default page;
