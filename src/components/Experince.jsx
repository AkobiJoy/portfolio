"use client";
import React from "react";
import { motion } from "motion/react";
import ExperinceCard from "./ExperinceCard";

const Experince = () => {
  return (
    <motion.div
      initial={{
        // x: -200,
        opacity: 0,
      }}
      whileInView={{
        // x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scro"
    >
      <h3
        className="absolute top-[4rem]  uppercase md:tracking-[20px]
         tracking-[25px] text-gray-500 text-lg sm:text-2xl md:text-2xl text-center"
      >
        WORK EXPERINCE
      </h3>



      {/* className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'> */}
      {/* <h3  className='absolute top-[2rem]  uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>Experience</h3> */}


      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x *:snap-mandatory
        px-5 md:mt-16 snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a33131]/80
       md:scrollbar-thumb-[#F7AB0A]/80"
      >
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
        <ExperinceCard />
      </div>
    </motion.div>
  );
};

export default Experince;
