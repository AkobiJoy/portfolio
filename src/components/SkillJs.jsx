'use client';
import Image from "next/image";
import React from "react";
import {motion} from 'motion/react'

const SkillJs =({directionLeft})=>{
    return(
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                     x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}>
                <Image src='/javascript.svg' width={100} height={100} alt="logo" className="rounded-full border-gray-500 object-cover w-16 h-16 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"/>
            </motion.div>

            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-full z-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-xl font-bold text-black opacity-100">70%</p>
                    <p className="text-xs font-meduim md:text-sm md:font-bold text-neutral-800 opacity-100">Java Script</p>
                </div>
            </div>

               

        </div>
    );
};

export default SkillJs;



