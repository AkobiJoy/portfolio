
"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, side: "left" },
  { name: "CSS3", icon: <FaCss3Alt />, side: "right" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, side: "left" },
  { name: "JavaScript", icon: <FaJs />, side: "right" },
  { name: "React.js", icon: <FaReact />, side: "left" },
  { name: "Next.js", icon: <SiNextdotjs />, side: "right" },
  { name: "Node.js", icon: <FaNodeJs />, side: "left" },
  { name: "MongoDB", icon: <SiMongodb />, side: "right" },
  { name: "GitHub", icon: <FaGithub />, side: "left" },
  { name: "Vercel", icon: <SiVercel />, side: "right" },
  { name: "Netlify", icon: <SiNetlify />, side: "left" },
];

export default function SkillPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 sm:px-12"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-6 text-gray-500 tracking-[8px] uppercase"
      >
        My Expertise
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-sm text-gray-500 tracking-wide mb-14 uppercase"
      >
        Timeline of Skills – Click or Hover to Explore
      </motion.p>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"></div>

        <div className="space-y-14">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: skill.side === "left" ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row items-center ${
                skill.side === "left" ? "sm:justify-start" : "sm:justify-end"
              } relative z-10 group`}
            >
              <div
                className={`w-full sm:w-1/2 px-6 py-4 bg-white/80 backdrop-blur border border-orange-100 rounded-xl shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl ${
                  skill.side === "left" ? "sm:ml-12" : "sm:mr-12"
                } cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-orange-500">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
