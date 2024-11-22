"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Code,
  BookOpen,
  Users,
  Briefcase,
  Wrench,
  Clock,
  FileCheck,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Carousel Images
const carouselImages = [
  { src: "/image/Courses/react.jpg", alt: "Right Placement is here!! (8)" },
];

// Enhanced Card Component
function Card({ className = "", children }) {
  return (
    <motion.div
      className={`bg-gradient-to-br from-purple-100 to-purple-300 rounded-3xl shadow-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function CardContent({ className = "", children }) {
  return (
    <motion.div
      className={`p-4 sm:p-8 ${className}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function JavaFullStackCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [page, setPage] = useState(0);
  const direction = page > 0 ? "next" : "prev";

  // Pagination function
  const paginate = (direction) => {
    setPage(
      (prevPage) =>
        (prevPage + direction + carouselImages.length) % carouselImages.length
    );
  };

  const courseContent = {
    overview: (
      <div className="space-y-4">
        <p>
          A React.js developer is a front-end developer specializing in building
          dynamic, responsive, and user-friendly web interfaces using the
          React.js library, which is maintained by Facebook. React is popular
          for its component-based architecture, allowing developers to create
          reusable, modular components that manage their own state and
          efficiently update the DOM using React's virtual DOM mechanism.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Users,
              text: "Designed for Freshers and Working Professionals",
            },
            { icon: Briefcase, text: "One-on-One with Industry Mentors" },
            { icon: Clock, text: "100+ hours of Learning" },
            { icon: Users, text: "Dedicated Student Success Mentor" },
            {
              icon: Briefcase,
              text: "Job Placement Assistance with Top Firms",
            },
            { icon: Wrench, text: "Practical Hands-on Workshops" },
            { icon: Code, text: "Timely Doubt Resolution" },
            {
              icon: FileCheck,
              text: "Real Time Projects at the end of course",
            },
            { icon: FileText, text: "Resume Preparation and mock Interviews" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-purple-600" />
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
    objectives: [
      "Build Interactive User Interfaces (UIs)",
      "React Hooks (useState, useEffect, etc.)",
      "State Management Libraries (e.g., Redux, Context API)",
      "JavaScript (ES6+) and TypeScript",
      "APIs (fetching data using REST APIs or GraphQL)",
      "Next.js (for server-side rendering and static site generation)",
      "Implement Component-Based Architecture",
      "State and Data Management",
      "Seamless API Integration",
      "Responsive Design Implementation",
      "Practical based techniques and learning for different topics",
    ],
    curriculum: [
      "Introduction HTML5 / CSS3",
      "HTML5 Concepts",
      "CSS3 Concepts",
      "Introduction to Javascript",
      "EcmaScript Features",
      "Data types in Javascript",
      "Variables in Javascript",
      "ES6 concepts",
      "Promises",
      "Syncronous Operations",
      "Syncronous Operations",
      "Hoisting",
      "Closure",
      "Classes",
      "Array – Overview",
      "Generics",
      "Strings",
      "Bootstrap",
      "Material UI",
      "Taiwind CSS",
      "Introduction to React.js",
      "React Fundamentals",
      "Advanced React Concepts",
      "Hooks",
      "Life Cycle Method",
      "State Management",
      "Routing in React",
      "Working with APIs",
      "Styling in React",
      "Performance Optimization",
      "Testing in React",
      "Deployment",
      "Github",
    ],
    benefits: [
      "Life time access to class recordings",
      "Resume Preparations (0-3 yrs)",
      "Conduct 5+ Mock Interviews",
      "Share Daily Class PDF/Word Materials",
      "Share Daily Class Recorded Videos",
      "Provide 10+ Live Telephonic Interview Audios",
      "2 Batch Repetitions are allowed with zero cost",
    ],
  };

  const tabContent = {
    overview: courseContent.overview,
    objectives: (
      <ul className="list-disc pl-5 space-y-2">
        {courseContent.objectives.map((objective, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {objective}
          </motion.li>
        ))}
      </ul>
    ),
    curriculum: (
      <ul className="list-disc pl-5 md:columns-2 space-y-2">
        {courseContent.curriculum.map((topic, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {topic}
          </motion.li>
        ))}
      </ul>
    ),
    benefits: (
      <ul className="list-disc pl-5 space-y-2">
        {courseContent.benefits.map((benefit, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {benefit}
          </motion.li>
        ))}
      </ul>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-4 sm:p-8 font-sans">
      {/* Remove or comment out these lines */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <Navbar />
      </div>

      {/* Carousel and Text Section Above Course Card */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative overflow-hidden mb-12 h-48 sm:h-72 md:h-96 mt-16"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={{
              initial: { opacity: 0, x: direction === "next" ? 200 : -200 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: direction === "next" ? -200 : 200 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={carouselImages[page].src}
              alt={carouselImages[page].alt}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full"
            aria-label="Previous slide"
          >
            &lt;
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full"
            aria-label="Next slide"
          >
            &gt;
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.p
          variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
          className="text-base sm:text-lg mb-6 text-gray-800 leading-relaxed max-w-3xl mx-auto"
        >
          A React.js developer is a front-end developer specializing in building
          dynamic, responsive, and user-friendly web interfaces using the
          React.js library, which is maintained by Facebook. React is popular
          for its component-based architecture, allowing developers to create
          reusable, modular components that manage their own state and
          efficiently update the DOM using React's virtual DOM mechanism.
        </motion.p>
      </motion.section>

      {/* Enhanced Java Full Stack Course Card */}
      <Card className="max-w-5xl mx-auto my-12">
        <CardContent>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-8 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            React Course
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-purple-600 text-white"
                    : "bg-purple-200 text-purple-800 hover:bg-purple-300"
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-purple-900 text-base sm:text-lg leading-relaxed"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/component/contact"
                className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>

      {/* New Programming Languages & Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8"
        >
          Programming Languages & Tools Covered
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 mb-8"
        >
          {[
            "/image/Courses/react1.jpeg",
            "/image/Courses/react2.jpeg",
            "/image/Courses/react3.jpeg",
            "/image/Courses/react4.jpeg",
            "/image/Courses/react5.jpeg",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg"
            >
              <Image
                src={src}
                alt={`Programming tool ${index + 1}`}
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Course Highlights
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Clock, text: "100+ hours Classroom coaching" },
              { icon: BookOpen, text: "400+ hours Learning" },
              { icon: Briefcase, text: "45+ days live projects execution" },
              { icon: Wrench, text: "World Class hands-on practicals" },
              { icon: Code, text: "1000+ sample programs" },
              { icon: Users, text: "24/7 mentor support" },
              { icon: FileCheck, text: "Mid-semester practical exams" },
              { icon: FileText, text: "Mini-projects for hands-on experience" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-yellow-300" />
                <span className="text-sm sm:text-base">{item.text}</span>
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
              className="text-purple-600 flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 max-w-2xl">
              Strengthen your career prospects and get placed in renowned
              companies
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/component/contact"
              className="px-6 sm:px-8 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center"
            >
              ENQUIRE NOW
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
