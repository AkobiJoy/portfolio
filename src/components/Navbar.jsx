"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FaRegMoon, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-[8rem] py-4 flex items-center justify-between z-50 backdrop-blur-sm bg-transparent">
      {/* LEFT SIDE SOCIALS */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 3.5 }}
      >
        {[
          "https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw==",
          "https://www.whatsapp.com/wa.me/message/CT6ANVPEXDHGJ1",
          "https://www.linkedin.com/in/akobi-joy-0b65b923a",
          "https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL",
          "https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d",
        ].map((url, index) => (
          <SocialIcon
            key={index}
            url={url}
            fgColor="gray"
            bgColor="transparent"
            style={{ width: 40, height: 40 }}
          />
        ))}
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 3.5 }}
      >
        {/* THEME TOGGLE */}
        <div
          className="cursor-pointer flex items-center gap-5"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <FaRegMoon className="text-white text-xl" />
          ) : (
            <FaMoon className="text-neutral-900 text-xl" />
          )}
        </div>

        {/* EMAIL ICON */}
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }}
        /> */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }}
          onClick={() =>
            (window.location.href = "mailto:your.email@example.com")
          }
        />

        {/* CONTACT BUTTON – visible only on md+ screens */}
        <a
          href="#contact"
          className="hidden md:inline-flex uppercase text-sm font-serif text-gray-400 
          cursor-pointer px-6 py-3 font-semibold rounded-full shadow-lg 
          hover:bg-slate-900 hover:bg-[#F7AB0A]/80 transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { SocialIcon } from "react-social-icons";
// import { motion } from "framer-motion";
// import { FaRegMoon, FaMoon } from "react-icons/fa";

// const Navbar = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setIsMounted(true); // prevent hydration mismatch
//   }, []);

//   if (!isMounted) return null;

//   return (
//     // <nav className="fixed top-0 left-0 w-full p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
//     // <nav className="fixed top-0 left-0 w-[78%] p-5 flex items-start justify-between mx-[13rem] z-50 xl:items-center backdrop-blur-md ">
//     <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] px-[16rem] py-5 flex items-center justify-between z-50 backdrop-blur-sm bg-transparent">
//       {/* LEFT SIDE SOCIALS */}
//       <motion.div
//         className="flex flex-row items-center"
//         initial={{ x: -500, opacity: 0, scale: 0.5 }}
//         animate={{ x: 0, opacity: 1, scale: 1 }}
//         transition={{ duration: 3.5 }}
//       >
//         {[
//           "https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw==",
//           "https://www.whatsapp.com/wa.me/message/CT6ANVPEXDHGJ1",
//           "https://www.linkedin.com/in/akobi-joy-0b65b923a",
//           "https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL",
//           "https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d",
//         ].map((url, index) => (
//           <SocialIcon
//             key={index}
//             url={url}
//             fgColor="gray"
//             bgColor="transparent"
//             style={{ width: 40, height: 40 }}
//           />
//         ))}
//       </motion.div>

//       {/* RIGHT SIDE */}
//       <motion.div
//         className="flex items-center gap-3"
//         initial={{ x: 500, opacity: 0, scale: 0.5 }}
//         animate={{ x: 0, opacity: 1, scale: 1 }}
//         transition={{ duration: 3.5 }}
//       >
//         {/* THEME TOGGLE */}
//         <div
//           className="cursor-pointer flex items-center gap-5"
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//           {theme === "dark" ? (
//             <FaRegMoon className="text-white text-xl" />
//           ) : (
//             <FaMoon className="text-neutral-900 text-xl" />
//           )}
//         </div>

//         {/* EMAIL ICON */}
//         <SocialIcon
//           className="cursor-pointer"
//           network="email"
//           fgColor="gray"
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }}
//         />

//         {/* CONTACT BUTTON */}
//         <a
//           href="#contact"
//           className="uppercase hidden md:inline-flex text-sm font-serif text-gray-400
//           cursor-pointer px-6 py-3 font-semibold rounded-full shadow-lg
//           hover:bg-slate-900 hover:bg-[#F7AB0A]/80 transition-all duration-300"
//         >
//           Get in Touch
//         </a>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes"; // ✅ Add this
// import { SocialIcon } from "react-social-icons";
// import { motion } from "motion/react";
// import { FaRegMoon } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const { theme, setTheme } = useTheme(); // ✅ Use theme hook

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <nav className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
//       {/* ... your social icons div remains unchanged ... */}
//       <motion.div
//         className="flex flex-row items-center"
//         initial={{
//           x: -500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{
//           duration: 3.5,
//         }}
//       >
//         {/* social icons  */}
//         <SocialIcon
//           url="https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw=="
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.whatsapp.com/wa.me/message/CT6ANVPEXDHGJ1"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.linkedin.com/in/akobi-joy-0b65b923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d"
//           fgColor="gray"
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//       </motion.div>

//       <motion.div
//         className="flex items-center gap-3"
//         initial={{ x: 500, opacity: 0, scale: 0.5 }}
//         animate={{ x: 0, opacity: 1, scale: 1 }}
//         transition={{ duration: 3.5 }}
//       >
//         <div
//           className="cursor-pointer flex items-center gap-5"
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // ✅ Toggle theme
//         >
//           {theme === "dark" ? (
//             <p className=" text-xl">
//               <FaRegMoon className="text-white" fill="currentColor" />
//             </p>
//           ) : (
//             <p className="font-bold text-xl">
//               <FaMoon className="text-black" fill="currentColor" />
//             </p>
//           )}
//         </div>

//         {/* ... rest of your email icon and "Get in Touch" button ... */}
//         <SocialIcon
//           className="cursor-pointer"
//           network="email"
//           fgColor="gray"
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }}
//         />

//         <a
//           href="#contact"
//           className="ppercase hidden md:inline-flex text-sm font-serif text-gray-400
//          cursor-pointer
//               px-6 py-3 font-semibold rounded-full shadow-lg hover:bg-slate-900 hover:bg-[#F7AB0A]/80 transition-all duration-300"
//         >
//           Get in Touch
//         </a>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useEffect, useState } from "react";
// import { SocialIcon } from "react-social-icons";
// import { motion } from "motion/react";
// import { FaRegMoon } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [light, setLight] = useState(false);

//   useEffect(() => {
//     // This will trigger after the component mounts, causing the transition to begin
//     setIsVisible(true);
//   }, []);

//   return (
//     <nav
//       className="sticky top-0 p-5 flex items-start justify-between max-w-7xl
//    mx-auto z-20 xl:items-center"
//     >
//       <motion.div
//         className="flex flex-row items-center"
//         initial={{
//           x: -500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{
//           duration: 3.5,
//         }}
//       >
//         {/* social icons  */}
//         <SocialIcon
//           url="https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw=="
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.whatsapp.com/wa.me/message/CT6ANVPEXDHGJ1"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.linkedin.com/in/akobi-joy-0b65b923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL"
//           fgColor="gray "
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//         <SocialIcon
//           url="https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d"
//           fgColor="gray"
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }} // Adjust size here
//         />
//       </motion.div>

//       <motion.div
//         className="flex items-center gap-3"
//         initial={{
//           x: 500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{
//           duration: 3.5,
//         }}
//       >
//         <div
//           className="cursor-pointer flex items-center gap-5"
//           onClick={() => setLight(!light)}
//         >
//           {light ? (
//             <p className="text-black font-bold text-xl">
//               <FaMoon className="text-black" fill="currentColor" />
//             </p>
//           ) : (
//             <p className="text-yellow-400 text-xl">
//              <FaRegMoon className="text-yellow-400" fill="currentColor" />
//             </p>
//           )}
//         </div>
//         <SocialIcon
//           className="cursor-pointer"
//           network="email"
//           fgColor="gray"
//           bgColor="transparent"
//           style={{ width: 40, height: 40 }}
//         />

// <a
//               href="#contact"
//               className="ppercase hidden md:inline-flex text-sm font-serif text-gray-400
//          cursor-pointer
//               px-6 py-3 font-semibold rounded-full shadow-lg hover:bg-slate-900 hover:bg-[#F7AB0A]/80 transition-all duration-300"
//             >
//               Get in Touch
//             </a>
//         {/* <p
//           className="uppercase hidden md:inline-flex text-sm font-serif text-gray-400
//          cursor-pointer"
//         >
//           Get In Touch
//         </p> */}
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;
