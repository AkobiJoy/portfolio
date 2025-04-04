"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SkillHtml from "./SkillHtml";
import SkillCss from "./SkillCss";
import SkillGit from "./SkillGit";
import SkillVersel from "./SkillVersel";
import SkillNext from "./SkillNext";
import SkillMongo from "./SkillMongo";
import SkillJs from "./SkillJs";
import SkillTailwind from "./SkillTailwind";

const About = () => {
  return (
    <section id="about" className="snap-center">
      <div className=" flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[1rem] md:top-[4rem] uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl "
        >
          About
        </motion.h3>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mt-[7rem] items-center justify-center flex my-auto  "
        >
          <Image
            src="/BONE5876.JPG"
            height={500}
            width={500}
            alt="about"
            className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] 
                md:h-[400px] xl:w-[400px] xl:h-[400px] "
          />
        </motion.div>

        <div className="mt-4 lg:mt-16 pb-10 px-0 md:px-10  text-left w-full  flex-1">
          <h4 className="text-base lg:text-lg mb- font-semibold lg:pt-[3rem]">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>

          <p className="text-xs lg:text-base ">
            Hello, my name is Joy Akobi Chinonyerem, result driven and a goal
            getter with over 4 years of experinece and enthusiasm in business
            and enterprenureship with outstanding slient-relationship with a
            proven ability to manage multiple tasks efficiently and contribute
            to team success. and I’m thrilled to have the opportunity to
            introduce myself to you! I am a certified web developer with a
            passion for creating seamless, visually stunning, and user-friendly
            digital experiences.
          </p>

          <p className="text-xs lg:text-base pt-2">
            Recently upskilled in modern digital tools and web technologies,
            combining strong administrative expertise with problem-solving
            abilities to drive organizational growth.
          </p>

          <p className="text-xs lg:text-base pt-2">
            Possesses solid frontend development knowledge, including
            proficiency in HTML 5, CSS, Tailwind CSS, JavaScript, React, and
            Next.js ,as well as basic backend skills in user authentication and
            database integration. Competent at creating responsive,
            user-friendly web interfaces and leveraging technical expertise to
            streamline processes and improve efficiency. Seeking a challenging
            position that allows me to utilize my administrative background,
            technical skills, and continuous learning mindset to deliver
            innovative solutions and achieve organizational goals.
          </p>
        </div>
      </div>


      {/* <motion.div 
      
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
         min-h-screen justify-center
         xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a 
            skill for proficiency</h3>

        <div className='grid grid-cols-3 gap-5 mt-[6rem] md:mt-[1rem] '>
           <SkillHtml/>
           <SkillCss/>
          <SkillGit/>
          <SkillVersel/>
          <SkillNext/>
          <SkillMongo/>
          <SkillJs/>
          <SkillTailwind/>
          <SkillVscode/>
          <SkillReact/>
        </div>
      
    </motion.div> */}
    </section>

  );
};

export default About;
