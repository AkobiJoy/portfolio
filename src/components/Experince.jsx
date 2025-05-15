
"use client";
import React from "react";
import { motion } from "motion/react";
import ExperienceCard from "./ExperinceCard";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";

const experienceData = [
  {
    title: "Front-End Developer",
    company: "Flexspacez",
    startDate: "January 29th, 2025",
    skills: [IoLogoHtml5, IoLogoCss3, FaJsSquare,FaPhp, FaBootstrap],
    description: [
      "Built all UI designs",
      "Implemented responsiveness",
      "Designed and developed user interface"
    ],
    image: "/about.png",
  },
  {
    title: "Front-end Developer Intern",
    company: "Egoras Tech",
    startDate: "May 1st, 2023",
    skills: [IoLogoHtml5, FaReact, RiTailwindCssFill, TbBrandVite, TbBrandRedux],
    description: [,
      "Consumed APIs",
      "Integrated Redux",
      "Built Responsive Uis"
    ],
    image: "/about.png",
  },
  {
    title: "Full-Stack Developer",
    company: "WebCorp",
    startDate: "March 15th, 2022",
    skills: [IoLogoHtml5, IoLogoCss3, FaJsSquare, FaReact, RiNextjsFill],
    description: [
      "Developed both front-end and back-end",
      "Worked with cloud services",
      "Built RESTful APIs"
    ],
    image: "/about.png",
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    startDate: "July 5th, 2021",
    skills: [IoLogoHtml5, IoLogoCss3, FaReact],
    description: [
      "Designed user interfaces",
      "Created wireframes and prototypes",
      "Conducted user research"
    ],
    image: "/about.png",
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[10rem] uppercase text-gray-500 text-lg sm:text-2xl md:text-2xl lg:text-4xl text-center tracking-[20px] md:tracking-[25px] font-bold">
        WORK EXPERIENCE
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
         scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a33131]/80 md:scrollbar-thumb-[#F7AB0A]/80"
      >
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;















// "use client";
// import React from "react";
// import { motion } from "motion/react";
// import ExperinceCard from "./ExperinceCard";

// const Experince = () => {
//   return (
//     <motion.div
//       initial={{
//         // x: -200,
//         opacity: 0,
//       }}
//       whileInView={{
//         // x: 0,
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1.5,
//       }}
//       className="h-screen flex relative overflow-hidden flex-col text-left
//     md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scro"
//     >
//       <h3
//         className="absolute top-[4rem]  uppercase md:tracking-[20px]
//          tracking-[25px] text-gray-500 text-lg sm:text-2xl md:text-2xl text-center"
//       >
//         WORK EXPERINCE
//       </h3>

//       {/* className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'> */}
//       {/* <h3  className='absolute top-[2rem]  uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>Experience</h3> */}

//       <div
//         className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x *:snap-mandatory
//         px-5 md:mt-16 snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a33131]/80
//        md:scrollbar-thumb-[#F7AB0A]/80"
//       >
//         <ExperinceCard />
//         {/* <ExperinceCard /> */}
//         {/* <ExperinceCard /> */}
//         {/* <ExperinceCard /> */}
//       </div>
//     </motion.div>
//   );
// };

// export default Experince;



// "use client";
// import React from "react";
// import { motion } from "motion/react";
// import ExperienceCard from "./ExperinceCard";



// const Experience = () => {
//   return (
//     <motion.div
//     initial={{
//               x: -200,
//               opacity: 0,
//             }}
//             whileInView={{
//               x: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 1.5,
//               }}
//       // initial={{ opacity: 0 }}
//       // whileInView={{ opacity: 1 }}
//       // transition={{ duration: 1.5 }}
//       className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-[10rem] uppercase text-gray-500 text-lg sm:text-2xl md:text-2xl lg:text-4xl text-center tracking-[20px] md:tracking-[25px] font-bold">
//         WORK EXPERIENCE
//       </h3>

//       <div
//         className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
//          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a33131]/80 md:scrollbar-thumb-[#F7AB0A]/80"
//       >
//         <ExperienceCard />
//         <ExperienceCard />
//         <ExperienceCard />
//         <ExperienceCard />
//       </div>
//     </motion.div>
//   );
// };

// export default Experience;



