import About from "@/components/About";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from 'next/link'
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

const page = () => {
  return (
    <div
      className="bg-neutral-900 text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0"
    >
      {/* navbar   */}
      <Navbar />

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center py-16 ">
        <About />
      </section>

      {/* experince */}

      <section id="experince" className="snap-center">
        <Experince />
      </section>


     <section id='skills' className='snap-start  h-screen items-center px-[1rem] flex flex-col pt-32 '>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-base md:text-2xl '>Skills</h3>

        <h3 className=' uppercase tracking-[1px] text-gray-500 text-[12px] md:text-lg '>Hover over a skill for proficiency</h3>
        <div className='grid grid-cols-3 md:grid-cols-10 pt-5 gap-3 md:gap-5 md:pl-[6rem]'>
          <SkillCss/>
          <SkillHtml/>
          <SkillGit/>
          <SkillVersel/>
          <SkillNext/>
          <SkillMongo/>
          <SkillJs/>
          <SkillTailwind/>
          <SkillVscode/>
          <SkillReact/>
        </div>
      </section> 


      {/* scroll to the top */}
      <Link href="#hero">
        <div
          className="w-[10px] rounded-full px-4 py-2 bg-[#a33131] ring-4 hover:ring-blue-600 md:px-6 md:py-4 md:bg-[#3177A3]
         items-center justify-center md:ring-8 md:hover:ring-neutral-600 flex fixed
          right-10 md:right-16 bottom-8 md:bottom-12"
        >
          <span className="font-bold ">
            <FaArrowUp />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default page;
