// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaReact } from "react-icons/fa";
// import {
//   Code,
//   BookOpen,
//   Users,
//   Briefcase,
//   Wrench,
//   Clock,
//   FileCheck,
//   FileText,
// } from "lucide-react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

// // Carousel Images
// const carouselImages = [
//   { src: "/image/Courses/r1.png", alt: "Right Placement is here!! (8)" },
// ];

// // Enhanced Card Component
// function Card({ className = "", children }) {
//   return (
//     <div
//       className={`bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-auto my-8 sm:my-12 ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// function CardContent({ className = "", children }) {
//   return <div className={`p-4 sm:p-8 ${className}`}>{children}</div>;
// }

// export default function ReactCourse() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [toolPosition, setToolPosition] = useState(0);
//   const [translateX, setTranslateX] = useState(0);

//   useEffect(() => {
//     console.log("Active tab changed to:", activeTab);
//   }, [activeTab]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setToolPosition((prevPosition) => (prevPosition + 1) % 6);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Calculate translateX based on window width in a useEffect
//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 640;
//       setTranslateX(toolPosition * (isMobile ? 50 : 25));
//     };

//     handleResize(); // Initial calculation
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [toolPosition]);

//   const courseContent = {
//     overview: (
//       <div className="space-y-4 text-white">
//         <p>
//           A React.js developer is a front-end developer specializing in building
//           dynamic, responsive, and user-friendly web interfaces using the
//           React.js library, which is maintained by Facebook. React is popular
//           for its component-based architecture, allowing developers to create
//           reusable, modular components that manage their own state and
//           efficiently update the DOM using React's virtual DOM mechanism.
//         </p>
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {[
//             {
//               icon: Users,
//               text: "Designed for Freshers and Working Professionals",
//             },
//             { icon: Briefcase, text: "One-on-One with Industry Mentors" },
//             { icon: Clock, text: "100+ hours of Learning" },
//             { icon: Users, text: "Dedicated Student Success Mentor" },
//             {
//               icon: Briefcase,
//               text: "Job Placement Assistance with Top Firms",
//             },
//             { icon: Wrench, text: "Practical Hands-on Workshops" },
//             { icon: Code, text: "Timely Doubt Resolution" },
//             {
//               icon: FileCheck,
//               text: "Real Time Projects at the end of course",
//             },
//             { icon: FileText, text: "Resume Preparation and mock Interviews" },
//           ].map((item, index) => (
//             <li key={index} className="flex items-center space-x-2">
//               <item.icon className="w-5 h-5 text-red-400" />
//               <span>{item.text}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ),
//     objectives: [
//       "Build Interactive User Interfaces (UIs)",
//       "React Hooks (useState, useEffect, etc.)",
//       "State Management Libraries (e.g., Redux, Context API)",
//       "JavaScript (ES6+) and TypeScript",
//       "APIs (fetching data using REST APIs or GraphQL)",
//       "Next.js (for server-side rendering and static site generation)",
//       "Implement Component-Based Architecture",
//       "State and Data Management",
//       "Seamless API Integration",
//       "Responsive Design Implementation",
//       "Practical based techniques and learning for different topics",
//     ],
//     curriculum: [
//       "Introduction HTML5 / CSS3",
//       "HTML5 Concepts",
//       "CSS3 Concepts",
//       "Introduction to Javascript",
//       "EcmaScript Features",
//       "Data types in Javascript",
//       "Variables in Javascript",
//       "ES6 concepts",
//       "Promises",
//       "Syncronous Operations",
//       "Syncronous Operations",
//       "Hoisting",
//       "Closure",
//       "Classes",
//       "Array – Overview",
//       "Generics",
//       "Strings",
//       "Bootstrap",
//       "Material UI",
//       "Taiwind CSS",
//       "Introduction to React.js",
//       "React Fundamentals",
//       "Advanced React Concepts",
//       "Hooks",
//       "Life Cycle Method",
//       "State Management",
//       "Routing in React",
//       "Working with APIs",
//       "Styling in React",
//       "Performance Optimization",
//       "Testing in React",
//       "Deployment",
//       "Github",
//     ],
//     benefits: [
//       "Life time access to class recordings",
//       "Resume Preparations (0-3 yrs)",
//       "Conduct 5+ Mock Interviews",
//       "Share Daily Class PDF/Word Materials",
//       "Share Daily Class Recorded Videos",
//       "Provide 10+ Live Telephonic Interview Audios",
//       "2 Batch Repetitions are allowed with zero cost",
//     ],
//   };
//   const tabContent = {
//     overview: courseContent.overview,
//     objectives: (
//       <ul className="list-disc pl-5 space-y-2 text-white">
//         {courseContent.objectives.map((objective, index) => (
//           <li key={index}>{objective}</li>
//         ))}
//       </ul>
//     ),
//     curriculum: (
//       <ul className="list-disc pl-5 md:columns-2 space-y-2 text-white">
//         {courseContent.curriculum.map((topic, index) => (
//           <li key={index}>{topic}</li>
//         ))}
//       </ul>
//     ),
//     benefits: (
//       <ul className="list-disc pl-5 space-y-2 text-white">
//         {courseContent.benefits.map((benefit, index) => (
//           <li key={index}>{benefit}</li>
//         ))}
//       </ul>
//     ),
//   };
//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//       <Navbar />
//       {/* Hero Section with Responsive Background */}
//       <section className="relative pt-20 sm:pt-16 md:pt-0 min-h-[calc(100vh-64px)] mb-0">
//         <div className="relative w-full h-full md:h-auto md:pb-[56.25%]">
//           <Image
//             src={carouselImages[0].src}
//             alt={carouselImages[0].alt}
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             priority
//             className="hidden md:block"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
//         </div>
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
//           <div className="md:hidden w-full h-40 sm:h-[50vh] relative mb-4">
//             <Image
//               src={carouselImages[0].src}
//               alt={carouselImages[0].alt}
//               layout="fill"
//               objectFit="cover"
//               quality={100}
//               priority
//             />
//           </div>
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
//             React Course
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
//             Master the art of Frontend development with React & Next.js
//           </p>
//           <Link
//             href="/registration"
//             className="bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
//           >
//             Enroll Now
//           </Link>
//         </div>
//       </section>
//       <Card className="mt-0 sm:mt-8">
//         <CardContent>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
//             Course Details
//           </h2>

//           <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
//             {Object.keys(tabContent).map((tab) => (
//               <button
//                 key={tab}
//                 className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
//                   activeTab === tab
//                     ? "bg-red-600 text-white shadow-lg"
//                     : "bg-red-200 text-red-800 hover:bg-red-300"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           <div
//             key={activeTab}
//             className="text-white text-base sm:text-lg leading-relaxed"
//           >
//             {tabContent[activeTab]}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <Link
//               href="/registration"
//               className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
//             >
//               ENQUIRE NOW
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//       {/* New Programming Languages & Tools Section */}
//       <section className="bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] opacity-10"></div>
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 relative z-10">
//           Programming Languages & Tools Covered
//         </h2>

//         <div className="relative h-40 sm:h-48 md:h-56 mb-6 sm:mb-8 z-10 overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${translateX}%)`,
//             }}
//           >
//             {[
//               "/image/Courses/react1.jpeg",
//               "/image/Courses/react2.jpeg",
//               "/image/Courses/react3.jpeg",
//               "/image/Courses/react4.jpeg",
//               "/image/Courses/react5.jpeg",
//               "/image/Courses/react1.jpeg",
//               "/image/Courses/react2.jpeg",
//               "/image/Courses/react3.jpeg",
//               "/image/Courses/react4.jpeg",
//               "/image/Courses/react5.jpeg",
//             ].map((src, index) => (
//               <div
//                 key={index}
//                 className="w-1/2 sm:w-1/4 h-full flex-shrink-0 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:bg-red-100">
//                   <Image
//                     src={src}
//                     alt={`Programming tool ${(index % 6) + 1}`}
//                     width={80}
//                     height={80}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-red-800 to-red-600 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg relative z-10">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
//             Course Highlights
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               { icon: Clock, text: "100+ hours Classroom coaching" },
//               { icon: BookOpen, text: "400+ hours Learning" },
//               { icon: Briefcase, text: "45+ days live projects execution" },
//               { icon: Wrench, text: "World Class hands-on practicals" },
//               { icon: Code, text: "1000+ sample programs" },
//               { icon: Users, text: "24/7 mentor support" },
//               { icon: FileCheck, text: "Mid-semester practical exams" },
//               { icon: FileText, text: "Mini-projects for hands-on experience" },
//             ].map((item, index) => (
//               <li key={index} className="flex items-center space-x-2">
//                 <item.icon className="w-5 h-5 text-red-300" />
//                 <span className="text-sm sm:text-base">{item.text}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//       <section className="bg-gradient-to-r from-red-900 via-black to-red-700 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-20 mx-4 sm:mx-auto relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] opacity-5"></div>
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto relative z-10">
//           <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
//             <div className="text-white flex-shrink-0 relative">
//               <motion.div
//                 className="text-white flex-shrink-0"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <FaReact className="w-15 h-15 sm:w-16 sm:h-16" />
//               </motion.div>
//             </div>

//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-2xl">
//               Strengthen your career prospects and get placed in renowned
//               companies
//             </h2>
//           </div>
//           <div className="w-full sm:w-auto">
//             <Link
//               href="/registration"
//               className="px-6 sm:px-8 py-3 text-red-900 bg-white rounded-full hover:bg-red-100 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center shadow-lg hover:shadow-xl"
//             >
//               ENQUIRE NOW
//             </Link>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

import { Metadata } from "next";
import ReactCourse from "./ReactCourse";
import Script from "next/script";

export const metadata: Metadata = {
  title: "React.js Training Course – Build Dynamic Frontend Applications",
  description:
    "Master React.js with Ignited Minds! Learn to create responsive, dynamic web interfaces with expert mentors, real-world projects, and job placement support.",
  keywords:
    "React.js training, React frontend development course, learn React with projects, React certification, dynamic web development, React with Next.js, career-focused React training, IT courses with placement, best React.js course Bangalore",
  openGraph: {
    title: "React.js Training Course – Build Dynamic Frontend Applications",
    description:
      "Master React.js with Ignited Minds! Learn to create responsive, dynamic web interfaces with expert mentors, real-world projects, and job placement support.",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-react-course.jpg",
        width: 1200,
        height: 630,
        alt: "React.js Training Course",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "React.js Training Course",
            description:
              "Master React.js and build dynamic frontend applications with expert mentorship and real-world projects",
            provider: {
              "@type": "Organization",
              name: "Ignited Minds Learning",
              sameAs: "https://www.ignitedmindslearning.com",
            },
            courseCode: "REACT-001",
            coursePrerequisites: "Basic JavaScript knowledge",
            educationalCredentialAwarded: "React.js Developer Certification",
            timeRequired: "P8W",
            occupationalCredentialAwarded: "React.js Developer",
          }),
        }}
      />
      <ReactCourse />
    </>
  );
}
