import React from "react";
import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const ExperienceCard = ({ experience }) => {
  const { title, company, startDate, skills, description, image } = experience;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-[#292929] 
      py-12 mt-32 md:mt-[1rem] lg:mt-0 dark:hover:opacity-100 dark:opacity-40 cursor-pointer transition-opacity  duration-500 ease-in-out overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={image}
        alt="image"
      />

      <div className="px-6 md:px-10">
        <h4 className="text-sm md:text-base font-light text-gray-300">
          {title}
        </h4>
        <p className="font-bold text-sm md:text-base mt-1 text-gray-100">
          {company}
        </p>

        <div className="flex space-x-2 my-2">
          {skills.map((Skill, index) => (
            <Skill key={index} className="text-2xl" />
          ))}
        </div>

        <p className="uppercase text-sm py-2 text-gray-400">
          Started: {startDate}
        </p>

        <ul className="list-disc space-y-1 ml-4 text-sm text-left text-gray-300">
          {description.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

// import React from "react";
// import { motion } from "framer-motion";
// import { IoLogoHtml5 } from "react-icons/io";
// import { IoLogoCss3 } from "react-icons/io";
// import { FaJsSquare } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";

// const ExperienceCard = () => {
//   return (
//     <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-[#292929]
//     py-12 mt-32 md:mt-[1rem] hover:opacity-100 opacity-40 cursor-pointer transition-opacity  duration-500 ease-in-out overflow-hidden">

// {/* <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-[#292929]
//  py-12 mt-32 md:mt-[1rem] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"> hover:scale-105 transform*/}

//       <motion.img
//         initial={{
//           y: -100,
//           opacity: 0,
//         }}
//         transition={{ duration: 1.2 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
//         src="/about.png"
//         alt="image"
//       />

//       <div className="px-6 md:px-10">
//         <h4 className="text-sm md:text-base font-light text-gray-300">FRONT-END DEVELOPER</h4>
//         <p className="font-bold text-sm md:text-base mt-1 text-gray-100">FLEXSPACEZ</p>

//         <div className="flex space-x-2 my-2">
//           <IoLogoHtml5 className="text-2xl text-orange-500" />
//           <IoLogoCss3 className="text-2xl text-blue-500" />
//           <FaJsSquare className="text-2xl text-yellow-500" />
//           <FaReact className="text-2xl text-cyan-500" />
//           <RiNextjsFill className="text-2xl text-black" />
//           <SiMongodb className="text-2xl text-green-600" />
//         </div>

//         <p className="uppercase text-sm py-2 text-gray-400">
//           Started: January 29th 2025
//         </p>

//         <ul className="list-disc space-y-1 ml-4 text-sm text-left text-gray-300">
//           <li>Built all UI designs</li>
//           <li>Implemented responsiveness</li>
//           <li>Designed and developed user interface</li>
//         </ul>
//       </div>
//     </article>
//   );
// };

// export default ExperienceCard;
