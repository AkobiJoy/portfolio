"use client";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("joyeugene3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-4">
          <img
            src="/about.png"
            alt="Logo"
            className="w-12 h-12 shadow shadow-red-700 rounded-full"
          />
          <div>
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Joy Akobi Chinonyerem.
            </p>
            <p className="text-xs text-gray-400">
              Based in Port Harcourt · Open to remote, full-time & hybrid opportunities
            </p>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <a
            href="https://github.com/AkobiJoy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-orange-400 transition-all duration-300 ease-in-out"
          >
            GitHub
          </a>

          {/* <a
            href="https://www.linkedin.com/in/akobi-joy-0b65b923a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-orange-400 transition-all duration-300 ease-in-out"
          >
            LinkedIn
          </a> */}

          <span
            onClick={handleCopy}
            className="cursor-pointer relative hover:text-orange-400 transition-all duration-300 ease-in-out"
            title="Click to copy email"
          >
            Email
            {copied && (
              <span className="absolute top-[-2rem] left-0 text-xs bg-orange-500 text-white px-2 py-1 rounded shadow">
                Copied!
              </span>
            )}
          </span>

          <a
            href="https://wa.me/23489020068522"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-orange-400 transition-all duration-300 ease-in-out"
          >
            WhatsApp
          </a>

          {/* <a
            href="#"
            className="hover:text-orange-400 transition-all duration-300 ease-in-out"
          >
            Back to top ↑
          </a> */}
        </div>
      </div>

      {/* Built with */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Built with ❤️ using Next.js, TailwindCSS, Framer Motion & AOS Animation · Hosted on Netlify
      </div>
    </footer>
  );
}




// "use client";
// import { useState } from "react";
// export default function Footer() {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("joyeugene3@gmail.com");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
//   };

//   return (
//     <footer className="bg-black dark:bg-gray-950 text-white py-2">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm text-center md:text-left flex items-center gap-4">
//         <img
//     src="/about.png"
//     alt="Logo"
//     className="w-12 h-12 shadow shadow-red-700 rounded-full"
//   />
//           &copy; {new Date().getFullYear()} Joy Akobi Chinonyerem. All rights
//           reserved.
//         </p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a
//             href="https://github.com/AkobiJoy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-orange-400 transition"
//           >
//             GitHub
//           </a>

//           <span
//             onClick={handleCopy}
//             className="hover:text-orange-400 transition cursor-pointer relative"
//             title="Click to copy"
//           >
//             Email
//             {copied && (
//               <span className="absolute top-[-5rem] left-0 text-lg text-orange-200 font-bold">
//                 Email Copied!
//               </span>
//             )}
//           </span>

//           {/* <a
//             href="https://instagram.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-orange-400 transition"
//           >
//             Instagram
//           </a> */}

//           <a
//             href="https://wa.me/23489020068522"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-orange-400 transition"
//           >
//             WhatsApp
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-900 text-white py-6">
// //       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
// //         <p className="text-sm text-center md:text-left">
// //           &copy; {new Date().getFullYear()} Joy Akobi Chinonyerem. All rights
// //           reserved.
// //         </p>
// //         <div className="flex space-x-4 mt-4 md:mt-0">
// //           <a
// //             href="https://github.com/yourusername"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="hover:text-orange-400 transition"
// //           >
// //             GitHub
// //           </a>
// //           <a
// //             href="https://linkedin.com/in/yourusername"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="hover:text-orange-400 transition"
// //           >
// //             LinkedIn
// //           </a>
// //           {/* <a
// //             href="joyeugene3@gmail.com"
// //             className="hover:text-orange-400 transition"
// //           >
// //             Email
// //           </a> */}

// //           <span
// //     onClick={() => {
// //       navigator.clipboard.writeText("joyeugene3@email.com");
// //       alert("Email copied to clipboard!");
// //     }}
// //     className="hover:text-orange-400 transition cursor-pointer"
// //     title="Click to copy"
// //   >
// //      Email
// //   </span>

// //           <a
// //             href="https://wa.me/2348012345678"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="hover:text-orange-400 transition"
// //           >
// //             WhatsApp
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
