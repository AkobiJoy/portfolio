// "use client";
// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(formData),
//     });

//     if (res.ok) {
//       setStatus("Message sent successfully ✅");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus("Failed to send message ❌");
//     }
//   };

//   return (
//     <section className=" text-white py-20 px-6 md:px-16" id="contact">
//       <h2 className="text-4xl font-bold mb-10 text-center uppercase">Contact Me</h2>

//       <div className="grid md:grid-cols-2 gap-12">
//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             className="w-full p-4 rounded-xl bg-white/10 placeholder:text-gray-400 focus:outline-none"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//             className="w-full p-4 rounded-xl bg-white/10 placeholder:text-gray-400 focus:outline-none"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             required
//             className="w-full p-4 h-40 rounded-xl bg-white/10 placeholder:text-gray-400 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
//           >
//             Send Message
//           </button>
//           <p className="text-sm text-center">{status}</p>
//         </form>

//         {/* Contact Info */}
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-xl font-bold mb-2">Phone & WhatsApp</h3>
//             <p>📞 +234 905 655 6827</p>
//             <a
//               href="https://wa.me/2349020068522"
//               className="text-orange-400 hover:underline block mt-1"
//               target="_blank"
//             >
//               Message on WhatsApp
//             </a>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-2">Social Media</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="https://twitter.com/yourhandle" className="hover:underline text-gray-300" target="_blank">Twitter</a>
//               </li>
//               <li>
//                 <a href="https://instagram.com/yourhandle" className="hover:underline text-gray-300" target="_blank">Instagram</a>
//               </li>
//               <li>
//                 <a href="https://linkedin.com/in/yourhandle" className="hover:underline text-gray-300" target="_blank">LinkedIn</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-2">Email</h3>
//             <p>📧 joyeugene3@gmail.com</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(formData),
//     });

//     if (res.ok) {
//       setStatus("Message sent successfully ✅");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus("Failed to send message ❌");
//     }
//   };

//   return (
//     <section className="text-white py-20 px-6 md:px-16" id="contact">
//       <h2 className="text-4xl font-bold mb-10 text-center uppercase">Contact Me</h2>

//       <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">

//       <div className="hidden lg:block">
//   <Image
//     src="/joy1.jpeg"
//     alt="Joy's portrait"
//     width={400}
//     height={400}
//     className="rounded-xl object-cover"
//   />
// </div>

//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/10 p-8 rounded-xl shadow-lg space-y-6 w-full max-w-lg"
//         >
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             className="w-full p-4 rounded-xl bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//             className="w-full p-4 rounded-xl bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             required
//             className="w-full p-4 h-40 rounded-xl bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold text-white"
//           >
//             Send Message
//           </button>
//           <p className="text-sm text-center mt-4">{status}</p>
//         </form>

//         {/* Contact Info */}
//         <div className="bg-white/10 p-8 rounded-xl shadow-lg space-y-6 w-full max-w-lg">
//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-orange-400">Phone & WhatsApp</h3>
//             <p>📞 +234 905 655 6827</p>
//             <a
//               href="https://wa.me/2349020068522"
//               className="text-orange-400 hover:underline block mt-1"
//               target="_blank"
//             >
//               Message on WhatsApp
//             </a>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-orange-400">Social Media</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="https://twitter.com/yourhandle"
//                   className="hover:underline text-gray-300"
//                   target="_blank"
//                 >
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://instagram.com/yourhandle"
//                   className="hover:underline text-gray-300"
//                   target="_blank"
//                 >
//                   Instagram
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://linkedin.com/in/yourhandle"
//                   className="hover:underline text-gray-300"
//                   target="_blank"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-orange-400">Email</h3>
//             <p>📧 joyeugene3@gmail.com</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message ❌");
    }
  };

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw==",
      color: "text-pink-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nonyesfashion",
      color: "text-blue-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nonyesfashion",
      color: "text-blue-600",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/nonyesfashion",
      color: "text-blue-700",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@nonyesfashion",
      color: "text-red-600",
    },
  ];

  return (
    <section
      className="py-[13rem] text-gray-900 pt-20 px-6 md:px-20"
      id="contact"
    >
      <h1 className=" buttom-20 uppercase tracking-[20px] text-gray-500 text-4xl text-center mb-16 font-bold">
        CONTACT ME
      </h1>
      {/* <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide uppercase text-white
       text-transparent bg-clip-text"
      >
        CONTACT ME
      </h2> */}
      {/* <h1 className="text-white text-center font-bold text-4xl py-20">contact me</h1> */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Form Section */}
        <div className="bg-[#f7f9fc] p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium block mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-lg border dark:bg-white  border-gray-300 focus:outline-none "
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg border dark:bg-white  border-gray-300 focus:outline-none "
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                required
                className="w-full p-3 h-36 rounded-lg border dark:bg-white  border-gray-300 focus:outline-none "
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition duration-300 outline-none"
            >
              Send Message
            </button>
            <p className="text-sm text-center mt-2">{status}</p>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white dark:bg-neutral-900 text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Phone & WhatsApp</h3>
            <p className="mb-2 text-black dark:text-white">📞 +234 905 655 6827</p>
            <a
              href="https://wa.me/2349020068522"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* <div className="mt-10">
            <h3 className="text-xl font-bold mb-3">Social Media</h3>
            <ul className="space-y-2">
            <div className="flex items-center ">
                <SocialIcon
                     url="https://www.facebook.com/share/1Dev9MqamV/?mibextid=LQQJ4d"
                   fgColor="gray "
                   bgColor="transparent"
                   style={{ width: 40, height: 40 }} // Adjust size here
                />
                <span className="text-sm text-blue-600">Facebook</span>
              </div>
              <div className="flex items-center ">
                <SocialIcon
                   url="https://youtube.com/@mhizjae1184?si=g0EIKR46ceaqh0bL"
                   fgColor="gray "
                   bgColor="transparent"
                   style={{ width: 40, height: 40 }} // Adjust size here
                />
                <span className="text-sm text-red-600">Youtube</span>
              </div>

              <div className="flex items-center ">
                <SocialIcon
                  url="https://www.instagram.com/nonyesfashion/profilecard/?igsh=MWZpNWtlc3h4N224Nw=="
                  fgColor="gray"
                  bgColor="transparent"
                  style={{ width: 40, height: 40 }}
                />
                <span className="text-sm text-pink-600">Instagram</span>
              </div>

              <div className="flex items-center ">
                <SocialIcon
                   url="https://www.linkedin.com/in/akobi-joy-0b65b923a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                   fgColor="gray "
                   bgColor="transparent"
                   style={{ width: 40, height: 40 }} // Adjust size here
                />
                <span className="text-sm text-sky-600">LinkedIn</span>
              </div>
            </ul>
          </div> */}
          <div className="space-y-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                // className={`flex items-center gap-2 text-sm ${social.color} border-b border-transparent hover:border-current w-max`}
              >
                <SocialIcon
                  url={social.url}
                  fgColor="gray"
                  bgColor="transparent"
                  style={{ width: 40, height: 40 }}
                />
                <span className={`text-sm ${social.color}`}>{social.name}</span>
                {/* <span>{social.name}</span> */}
              </a>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              Email
            </h3>
            <p className="text-black dark:text-white">
              📧 joyeugene3@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
