"use client";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "motion/react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    // This will trigger after the component mounts, causing the transition to begin
    setIsVisible(true);
  }, []);

  return (
    <nav
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl
   mx-auto z-20 xl:items-center"
    >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3.5,
        }}
      >
        {/* social icons  */}
        <SocialIcon
          url="https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw=="
          fgColor="gray "
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
        <SocialIcon
          url="https://www.whatsapp.com/wa.me/message/CT6ANVPEXDHGJ1"
          fgColor="gray "
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
        <SocialIcon
          url="https://www.linkedin.com/in/akobi-joy-0b65b923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          fgColor="gray "
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
        <SocialIcon
          url="https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL"
          fgColor="gray "
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
        <SocialIcon
          url="https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
      </motion.div>

      <motion.div
        className="flex items-center gap-3"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3.5,
        }}
      >
        <div
          className="cursor-pointer flex items-center gap-5"
          onClick={() => setLight(!light)}
        >
          {light ? (
            <p className="text-black font-bold text-xl">
              <FaMoon className="text-black" fill="currentColor" />
            </p>
          ) : (
            <p className="text-yellow-400 text-xl">
             <FaRegMoon className="text-yellow-400" fill="currentColor" />
            </p>
          )}
        </div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }} // Adjust size here
        />
        <p
          className="uppercase hidden md:inline-flex text-sm font-serif text-gray-400 
         cursor-pointer"
        >
          Get In Touch
        </p>
      </motion.div>
    </nav>
  );
};

export default Navbar;
