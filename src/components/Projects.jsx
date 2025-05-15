// "use client";
// import React from "react";
// import { motion } from "motion/react";

// const projects = [
//   {
//     name: "Egoras",
//     image: "/Egoras.png",
//     link: "https://dhive.com/",
//     description: "A blockchain-based marketplace platform for microloans and decentralized finance.",
//   },
//   {
//     name: "Flexspacez",
//     image: "/flexspacez.png",
//     link: "https://flexspacez.com",
//     description: "A platform for booking rentable spaces like kitchens, offices, and event venues.",
//   },
//   {
//     name: "Loctech Project",
//     image: "/loctech.png",
//     link: "https://loctech.ng",
//     description: "Tech academy offering training in software, cybersecurity, and networking.",
//   },
//   {
//     name: "Dhive",
//     image: "/Dhive.png",
//     link: "https://dhive.com/portfolio",
//     description: "Stay tuned for upcoming projects and exciting innovations!",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
//         Projects
//       </h2>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//               <p className="text-sm text-gray-300">{project.description}</p>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




"use client";
import React from "react";
import { motion } from "framer-motion"; // Corrected import path

const projects = [
  {
    name: "Egoras",
    image: "/Egoras.png",
    link: "https://dhive.com/",
    description:
      "A blockchain-based marketplace platform for microloans and decentralized finance.",
  },
  {
    name: "Flexspacez",
    image: "/flexspacez.png",
    link: "https://flexspacez.com",
    description:
      "A platform for booking rentable spaces like kitchens, offices, and event venues.",
  },
  {
    name: "Loctech Project",
    image: "/loctech.png",
    link: "https://loctech.ng",
    description:
      "Tech academy offering training in software, cybersecurity, and networking.",
  },
  {
    name: "Dhive",
    image: "/Dhive.png",
    link: "https://dhive.com/portfolio",
    description: "Stay tuned for upcoming projects and exciting innovations!",
  },
];

const Projects = () => {
  return (
    <section className=" text-white py-20 px-6 md:px-16 lg:px-[18rem]">
      {/* <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide uppercase text-white
       text-transparent bg-clip-text">
        Featured Projects
      </h2> */}

      <h1 className=" buttom-20 uppercase tracking-[20px] text-gray-500 text-4xl text-center mb-16 font-bold">
      Featured Projects
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl transition-all duration-300 overflow-hidden hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 rounded"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

