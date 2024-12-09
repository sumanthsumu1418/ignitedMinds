// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import Placement from "../component/placement/page";
// import SmallCards from "../component/course/SmallCards";
// import TestimonialCarousel from "../component/TestimonialCarousel";
// import { Plane } from "lucide-react";
// import {
//   User,
//   SlidersHorizontal,
//   BookOpen,
//   Briefcase,
//   Send,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const staggerChildren = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Placements() {
//   const smallCard_Data = [
//     {
//       icon: "/image/CareerGuidance_Images/business 1.png",
//       title: "1-on-1 with Mentors",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/practice 1.png",
//       title: "Learn Practically",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/certificate 1.png",
//       title: "Get Certified",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/job-offer 1.png",
//       title: "Get Placed",
//     },
//   ];

//   const steps = [
//     {
//       icon: User,
//       title: "Complete the training",
//       bgColor: "bg-sky-100",
//       iconColor: "text-sky-500",
//     },
//     {
//       icon: SlidersHorizontal,
//       title: "Bio data preparation",
//       bgColor: "bg-yellow-100",
//       iconColor: "text-yellow-500",
//     },
//     {
//       icon: BookOpen,
//       title: "Mock Interviews",
//       bgColor: "bg-green-100",
//       iconColor: "text-green-500",
//     },
//     {
//       icon: Briefcase,
//       title: "Student Interviews",
//       bgColor: "bg-red-100",
//       iconColor: "text-red-500",
//     },
//     {
//       icon: Send,
//       title: "Appointment Letter",
//       bgColor: "bg-blue-100",
//       iconColor: "text-blue-500",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <Navbar />
//       <div className="h-16 mb-6"></div> {/* Gap below navbar */}
//       <main className="flex-grow">
//         <HeroSection />
//         <div className="container mx-auto px-4 py-8">
//           <FiveStepsSection steps={steps} />
//           <Placement />
//           <ExpertTrainingSection smallCard_Data={smallCard_Data} />
//           <TestimonialCarousel />
//         </div>
//         <PlaneIconSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         <div className="space-y-6 text-center md:text-left">
//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
//             <span className="block text-red-500">
//               Career Growth Begins With
//             </span>
//             <span className="block text-white">The Right Placement</span>
//           </h1>
//           <p className="mt-4 text-lg sm:mt-6 sm:text-xl text-white-400">
//             Gain the upper hand through our extensive network of world-renowned
//             industry and placement partners.
//           </p>
//           <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
//             <Link
//               href="/registration"
//               className="px-8 py-3 text-base font-medium rounded-lg text-black bg-red-500 hover:bg-red-600 transition duration-300 md:text-lg"
//             >
//               Enquire Now
//             </Link>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto md:max-w-lg">
//           <Image
//             src="/image/Courses/place.jpg"
//             alt="Career Growth"
//             width={500}
//             height={600}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function FiveStepsSection({ steps }) {
//   return (
//     <section className="py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold sm:text-4xl">
//             Five Steps Towards 100% Job Guarantee
//           </h2>
//           <p className="mt-4 text-lg text-white-400">
//             Explore placement opportunities and find the right one for you with
//             our complete support.
//           </p>
//         </div>
//         <div className="mt-16">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center"
//               >
//                 <div
//                   className={`${step.bgColor} w-24 h-24 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}
//                 >
//                   <step.icon className={`w-12 h-12 ${step.iconColor}`} />
//                 </div>
//                 <h3 className="text-lg font-medium mt-2 max-w-[120px]">
//                   {step.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ExpertTrainingSection({ smallCard_Data }) {
//   return (
//     <div className="py-12">
//       <div className="text-center mb-8">
//         <h4 className="text-2xl md:text-3xl font-bold">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <div className="flex flex-wrap justify-center gap-6 px-4">
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// }

// function PlaneIconSection() {
//   return (
//     <motion.section
//       variants={staggerChildren}
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true }}
//       className="p-8 mb-24"
//     >
//       <motion.div
//         variants={fadeInUp}
//         className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto"
//       >
//         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
//           <motion.div
//             className="text-red-500 ml-4 sm:ml-12"
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
//           </motion.div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl text-center sm:text-left sm:ml-8">
//             Strengthen your career prospects and get placed in renowned
//             companies
//           </h2>
//         </div>
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/registration"
//             className="px-6 sm:px-8 py-3 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 font-semibold text-base"
//           >
//             ENQUIRE NOW
//           </Link>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }

import { Metadata } from "next";
import Placements from "./Placements";

export const metadata: Metadata = {
  title: "Ignited Minds Placements – Launch Your IT Career with Top Companies",
  description:
    "Explore Ignited Minds' successful placement records. Join our career-focused IT courses and secure your future with placement assistance in top tech companies.",
  keywords:
    "Ignited Minds placements, IT job placements, placement-focused IT courses, successful career transitions, IT training with placement, top tech company placements, Ignited Minds success stories, job-ready IT training, IT career assistance",
  openGraph: {
    title:
      "Ignited Minds Placements – Launch Your IT Career with Top Companies",
    description:
      "Join our career-focused IT courses and secure your future with placement assistance in top tech companies.",
    url: "https://www.ignitedmindslearning.com/placements",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-placements.jpg",
        width: 1200,
        height: 630,
        alt: "Ignited Minds Placement Success",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Placements />
    </>
  );
}
