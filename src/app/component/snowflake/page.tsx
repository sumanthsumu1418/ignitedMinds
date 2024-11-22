// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Book, Clock, Users, Briefcase, FileCheck, ChevronDown, ChevronUp, Snowflake, BookOpen, Wrench, Code, FileText } from 'lucide-react'
// import Navbar from '../Navbar'
// import Footer from '../Footer'

// // Carousel Images
// const carouselImages = [
//   { src: "/image/Courses/snowflake.png", alt: "Snowflake Training Image 1" },
// ]

// export default function SnowflakeTraining() {
//   const [activeTab, setActiveTab] = useState('overview')
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null)
//   const [carouselIndex, setCarouselIndex] = useState(0)

//   const courseContent = {
//     overview: (
//       <div className="space-y-4 font-sans">
//         <p className="text-lg leading-relaxed text-gray-700">
//           Ignited Minds IT Technologies offers the best Snowflake online training in Hyderabad. Our course is 100% practical and designed to kickstart your Snowflake career. Training is delivered by industry experts at the top of their field.
//         </p>
//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {[
//             { icon: Clock, text: "60+ hours course duration" },
//             { icon: Users, text: "Industry Expert Trainers" },
//             { icon: Briefcase, text: "100% Job Guaranteed" },
//             { icon: Book, text: "Free Demo Class Available" },
//             { icon: FileCheck, text: "Certification Guidance" },
//           ].map((item, index) => (
//             <motion.li
//               key={index}
//               className="flex items-center space-x-2 text-gray-700"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <item.icon className="w-5 h-5 text-blue-600" />
//               <span className="font-medium">{item.text}</span>
//             </motion.li>
//           ))}
//         </ul>
//       </div>
//     ),
//     curriculum: [
//       "Snowflake Architecture and Overview",
//       "Introduction to Cloud",
//       "Data Warehousing Concepts",
//       "Snowflake Basics",
//       "Cloud Platforms Integration",
//       "Data Loading and Unloading",
//       "SnowPipe",
//       "Partner Connect with Snowflake",
//       "JSON and Semi-structured Data Handling",
//       "Snowflake Scheduling",
//       "Secure Data Sharing",
//       "Cloning in Snowflake",
//       "Time Travel & Failsafe",
//       "Query Optimization and Performance Techniques",
//       "Advanced Snowflake Topics",
//     ],
//   }

//   const Accordion = ({ title, content, isOpen, onToggle }) => (
//     <div className="border-b border-gray-200">
//       <button
//         className="flex justify-between items-center w-full py-4 text-left text-gray-700 font-medium"
//         onClick={onToggle}
//       >
//         <span>{title}</span>
//         {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="pb-4 text-gray-600"
//           >
//             {content}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 font-sans">
//       <Navbar />

//       <div className="container mx-auto px-4 py-8 mt-16">
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center my-8 text-blue-900"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Snowflake/ETL Testing Online Training
//         </motion.h1>

//         {/* Carousel */}
//         <div className="relative mb-12 w-full">
//           {carouselImages.map((image, index) => (
//             <motion.div
//               key={index}
//               className="w-full"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === carouselIndex ? 1 : 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={1479}
//                 height={562}
//                 layout="responsive"
//                 className="rounded-lg"
//               />
//             </motion.div>
//           ))}
//         </div>

//         <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">What is Snowflake?</h2>
//           <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
//             Snowflake is a cloud-based data warehousing platform that enables storage, processing, and analysis of data at scale. It separates compute and storage, allowing for independent scaling and cost optimization. Snowflake supports diverse data workloads including data warehousing, data lakes, data engineering, data science, and data application development.
//           </p>
//         </div>

//         <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             {Object.keys(courseContent).map((tab) => (
//               <button
//                 key={tab}
//                 className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors duration-200 ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 text-blue-600 hover:bg-gray-300'
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="text-gray-700"
//             >
//               {activeTab === 'overview' && courseContent.overview}
//               {activeTab === 'curriculum' && (
//                 <ul className="list-disc pl-5 space-y-2 sm:columns-2">
//                   {courseContent.curriculum.map((topic, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="text-gray-700 text-sm sm:text-base"
//                     >
//                       {topic}
//                     </motion.li>
//                   ))}
//                 </ul>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white"
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8"
//           >
//             Snowflake & ETL Testing Tools Covered
//           </motion.h2>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 mb-8"
//           >
//             {[
//               "/placeholder.svg?height=80&width=80",
//               "/placeholder.svg?height=80&width=80",
//               "/placeholder.svg?height=80&width=80",
//               "/placeholder.svg?height=80&width=80",
//               "/placeholder.svg?height=80&width=80",
//             ].map((src, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg"
//               >
//                 <Image
//                   src={src}
//                   alt={`Snowflake/ETL tool ${index + 1}`}
//                   width={80}
//                   height={80}
//                   className="object-contain"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg"
//           >
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
//               Course Highlights
//             </h3>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 { icon: Clock, text: "60+ hours Classroom coaching" },
//                 { icon: BookOpen, text: "200+ hours Learning" },
//                 { icon: Briefcase, text: "30+ days live projects execution" },
//                 { icon: Wrench, text: "World Class hands-on practicals" },
//                 { icon: Code, text: "500+ sample queries and scripts" },
//                 { icon: Users, text: "24/7 mentor support" },
//                 { icon: FileCheck, text: "Mid-course practical assessments" },
//                 { icon: FileText, text: "Real-world data scenarios" },
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="flex items-center space-x-2"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <item.icon className="w-5 h-5 text-yellow-300" />
//                   <span className="text-xs sm:text-sm md:text-base">{item.text}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </motion.section>

//         <motion.section
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-20"
//         >
//           <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto">
//             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
//               <motion.div
//                 className="text-blue-600 flex-shrink-0"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Snowflake className="w-12 h-12 sm:w-16 sm:h-16" />
//               </motion.div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 max-w-2xl">
//                 Strengthen your career prospects and get placed in renowned
//                 companies with Snowflake expertise
//               </h2>
//             </div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full sm:w-auto"
//             >
//               <Link
//                 href="/component/contact"
//                 className="px-6 sm:px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center"
//               >
//                 ENQUIRE NOW
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.section>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h2>
//           <Accordion
//             title="What is the duration of the Snowflake Online Training Program?"
//             content="The Snowflake Online training program at Ignited Minds IT Technologies is scheduled for a total of 25+ sessions, with each session lasting 60-80 minutes."
//             isOpen={openAccordion === 'duration'}
//             onToggle={() => setOpenAccordion(openAccordion === 'duration' ? null : 'duration')}
//           />
//           <Accordion
//             title="What are the Prerequisites for taking the Snowflake Online Training Program?"
//             content="A basic understanding of SQL, database concepts, and data warehousing is recommended. However, we offer optional sessions to cover these basics for those who need a refresher."
//             isOpen={openAccordion === 'prerequisites'}
//             onToggle={() => setOpenAccordion(openAccordion === 'prerequisites' ? null : 'prerequisites')}
//           />
//           <Accordion
//             title="How Much Does It Cost To Get The Snowflake Online Training?"
//             content="The Snowflake Online training program at Ignited Minds IT Technologies is priced at Rs.16,000. We offer flexible payment options: you can pay in 2 installments of Rs.8,000 each, or get a Rs.1,000 discount by paying the full amount upfront."
//             isOpen={openAccordion === 'cost'}
//             onToggle={() => setOpenAccordion(openAccordion === 'cost' ? null : 'cost')}
//           />
//         </div>

//         <motion.div
//           className="mt-8 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//         >
//           <Link href="/component/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md inline-block font-semibold transition-colors duration-300">
//             Enroll Now
//           </Link>
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Clock,
  Users,
  Briefcase,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Snowflake,
  BookOpen,
  Wrench,
  Code,
  FileText,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Carousel Images
const carouselImages = [
  { src: "/image/Courses/snowflake.png", alt: "Snowflake Training Image 1" },
];

export default function SnowflakeTraining() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const courseContent = {
    overview: (
      <div className="space-y-4 font-sans">
        <p className="text-lg leading-relaxed text-gray-700">
          Ignited Minds IT Technologies offers the best Snowflake online
          training in Hyderabad. Our course is 100% practical and designed to
          kickstart your Snowflake career. Training is delivered by industry
          experts at the top of their field.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Clock, text: "60+ hours course duration" },
            { icon: Users, text: "Industry Expert Trainers" },
            { icon: Briefcase, text: "100% Job Guaranteed" },
            { icon: Book, text: "Free Demo Class Available" },
            { icon: FileCheck, text: "Certification Guidance" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
    curriculum: [
      "Snowflake Architecture and Overview",
      "Introduction to Cloud",
      "Data Warehousing Concepts",
      "Snowflake Basics",
      "Cloud Platforms Integration",
      "Data Loading and Unloading",
      "SnowPipe",
      "Partner Connect with Snowflake",
      "JSON and Semi-structured Data Handling",
      "Snowflake Scheduling",
      "Secure Data Sharing",
      "Cloning in Snowflake",
      "Time Travel & Failsafe",
      "Query Optimization and Performance Techniques",
      "Advanced Snowflake Topics",
    ],
  };

  const Accordion = ({ title, content, isOpen, onToggle }) => (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-gray-700 font-medium"
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-4 text-gray-600"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 font-sans">
      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center my-8 text-blue-900"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Snowflake/ETL Testing Online Training
        </motion.h1>

        {/* Carousel */}
        <div className="relative mb-12 w-full">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === carouselIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1479}
                height={562}
                layout="responsive"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
            What is Snowflake?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Snowflake is a cloud-based data warehousing platform that enables
            storage, processing, and analysis of data at scale. It separates
            compute and storage, allowing for independent scaling and cost
            optimization. Snowflake supports diverse data workloads including
            data warehousing, data lakes, data engineering, data science, and
            data application development.
          </p>
        </div>

        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(courseContent).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-blue-600 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700"
            >
              {activeTab === "overview" && courseContent.overview}
              {activeTab === "curriculum" && (
                <ul className="list-disc pl-5 space-y-2 sm:columns-2">
                  {courseContent.curriculum.map((topic, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-gray-700 text-sm sm:text-base"
                    >
                      {topic}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8"
          >
            Snowflake & ETL Testing Tools Covered
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 mb-8"
          >
            {[
              "/image/Courses/snow1.jpeg",
              "/image/Courses/snow2.jpeg",
              "/image/Courses/snow3.jpeg",
              "/image/Courses/snow4.jpeg",
              "/image/Courses/snow5.jpeg",
            ].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Snowflake/ETL tool ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
              Course Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, text: "60+ hours Classroom coaching" },
                { icon: BookOpen, text: "200+ hours Learning" },
                { icon: Briefcase, text: "30+ days live projects execution" },
                { icon: Wrench, text: "World Class hands-on practicals" },
                { icon: Code, text: "500+ sample queries and scripts" },
                { icon: Users, text: "24/7 mentor support" },
                { icon: FileCheck, text: "Mid-course practical assessments" },
                { icon: FileText, text: "Real-world data scenarios" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-yellow-300" />
                  <span className="text-xs sm:text-sm md:text-base">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-20"
        >
          <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <motion.div
                className="text-blue-600 flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Snowflake className="w-12 h-12 sm:w-16 sm:h-16" />
              </motion.div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 max-w-2xl">
                Strengthen your career prospects and get placed in renowned
                companies with Snowflake expertise
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/component/contact"
                className="px-6 sm:px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900">
            Frequently Asked Questions
          </h2>
          <Accordion
            title="What is the duration of the Snowflake Online Training Program?"
            content="The Snowflake Online training program at Ignited Minds IT Technologies is scheduled for a total of 25+ sessions, with each session lasting 60-80 minutes."
            isOpen={openAccordion === "duration"}
            onToggle={() =>
              setOpenAccordion(openAccordion === "duration" ? null : "duration")
            }
          />
          <Accordion
            title="What are the Prerequisites for taking the Snowflake Online Training Program?"
            content="A basic understanding of SQL, database concepts, and data warehousing is recommended. However, we offer optional sessions to cover these basics for those who need a refresher."
            isOpen={openAccordion === "prerequisites"}
            onToggle={() =>
              setOpenAccordion(
                openAccordion === "prerequisites" ? null : "prerequisites"
              )
            }
          />
          <Accordion
            title="How Much Does It Cost To Get The Snowflake Online Training?"
            content="The Snowflake Online training program at Ignited Minds IT Technologies is priced at Rs.16,000. We offer flexible payment options: you can pay in 2 installments of Rs.8,000 each, or get a Rs.1,000 discount by paying the full amount upfront."
            isOpen={openAccordion === "cost"}
            onToggle={() =>
              setOpenAccordion(openAccordion === "cost" ? null : "cost")
            }
          />
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/component/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md inline-block font-semibold transition-colors duration-300"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
