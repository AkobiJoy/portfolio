import React from "react";
import { motion } from "motion/react"


const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}

    className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-gray-800 rounded-full 
        h-[200px] w-[200px] mt-[26rem] animate-ping"
      />
      <div
        className="absolute border border-black rounded-full 
        h-[300px] w-[300px] mt-[26rem] animate-ping"
      />
      <div
        className="absolute border border-gray-700 rounded-full 
        h-[500px] w-[500px] mt-[26rem] animate-ping"
      />
      <div className=" absolute border border-stone-700 rounded-full opacity-20  h-[900px] w-[900px] mt-[26rem]
       animate-pulse" />
      <div
        className="absolute border border-gray-800 rounded-full 
        h-[700px] w-[700px] mt-[26rem] animate-ping"
      />
    </motion.div>
  );
};

export default BackgroundCircles;
