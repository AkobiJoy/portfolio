// "use client";

// const team = [
//   {
//     name: "Joy Akobichino",
//     role: "Lead Frontend Developer",
//     image: "https://i.pravatar.cc/150?img=1",
//     description:
//       "Designing thoughtful user experiences and clean interfaces. Founder of Nonye's Fashion.",
//   },
//   {
//     name: "Daniel Bumms",
//     role: "Technical Mentor",
//     image: "https://i.pravatar.cc/150?img=2",
//     description:
//       "Providing guidance and mentorship with experience and heart.",
//   },
//   {
//     name: "Emmy Joe",
//     role: "Creative Engineer",
//     image: "https://i.pravatar.cc/150?img=3",
//     description:
//       "Translating imagination into functionality with style and precision.",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-20 px-6 md:px-24 lg:px-[10rem]">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
//           Meet the Team
//         </h2>
//         <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
//           The passionate minds behind every pixel, idea, and solution.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {team.map((member, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-t-4 border-orange-500 group"
//           >
//             <div className="relative w-24 h-24 mx-auto mb-4">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="rounded-full w-full h-full object-cover border-4 border-white shadow-md"
//               />
//               <div className="absolute inset-0 rounded-full ring-2 ring-orange-500 group-hover:ring-orange-600 transition-all duration-300"></div>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900">
//               {member.name}
//             </h3>
//             <p className="text-sm text-orange-600 font-medium mb-2">
//               {member.role}
//             </p>
//             <p className="text-gray-600 text-sm">{member.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
