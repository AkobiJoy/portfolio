'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SkillHtml from './SkillHtml'


const Skills = () => {
  return (
    <motion.div 
      
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
         min-h-screen justify-center
         xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a 
            skill for proficiency</h3>

        <div className='grid grid-cols-3 gap-5 mt-[6rem] md:mt-[1rem] '>
           <SkillHtml/>
        </div>
      
    </motion.div>
  )
}

export default Skills
