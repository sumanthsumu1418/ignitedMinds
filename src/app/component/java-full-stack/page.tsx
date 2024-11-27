"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
  { src: "/image/Courses/Java FS.jpg", alt: "Right Placement is here!! (8)" },
];

// Enhanced Card Component
function Card({ className = "", children }) {
  return (
    <div
      className={`bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-auto my-8 sm:my-12 ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={`p-4 sm:p-8 ${className}`}>{children}</div>;
}

export default function JavaFullStackCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);

  const courseContent = {
    overview: (
      <div className="space-y-4 text-white">
        <p>
          A Java full stack web developer is a developer with extensive
          knowledge and expertise in full stack tools and frameworks that work
          with Java. The Java suite of technologies includes working with
          servlets, core Java, REST API, and more tools that make building web
          apps easy. It's a great choice of career and the easiest way to become
          a developer.
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
            <li key={index} className="flex items-center space-x-2">
              <item.icon className="w-5 h-5 text-red-400" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    objectives: [
      "Advanced Java Full Stack 2021 Edition",
      "To learn how to implement object-oriented designs with Java.",
      "To identify Java language components and how they work together in applications.",
      "To design and program stand-alone Java applications.",
      "Practical based techniques and learning for different topics",
    ],
    curriculum: [
      "Algorithms / Data Structure",
      "Introduction to Java",
      "Java Sample Program & Development Environment",
      "Data types in Java",
      "Variables in Java",
      "Classes and Methods in Java",
      "Operators in Java",
      "Blocks of Code in Java",
      "Access Modifiers in Java",
      "Object Oriented Concepts",
      "Multithreaded Programming",
      "Classes",
      "Exceptions",
      "Array – Overview",
      "Generics",
      "Strings",
      "Exploring java.lang",
      "Java 8 Features",
      "Microservices – Concepts",
      "Spring Boot",
      "Backend Integration",
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
      <ul className="list-disc pl-5 space-y-2 text-white">
        {courseContent.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    ),
    curriculum: (
      <ul className="list-disc pl-5 md:columns-2 space-y-2 text-white">
        {courseContent.curriculum.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    ),
    benefits: (
      <ul className="list-disc pl-5 space-y-2 text-white">
        {courseContent.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    ),
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      {/* Hero Section with Auto-changing Background */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Java Full Stack Course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Master the art of full-stack development with Java
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/component/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Enhanced Java Full Stack Course Card */}
      {/* <div className="bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-auto my-8 sm:my-12 max-w-5xl">
        <div className="p-4 sm:p-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
            Course Details
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-200 text-red-800 hover:bg-red-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div
            key={activeTab}
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            {tabContent[activeTab]}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/component/contact"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div> */}
      {/* <Card>
        <CardContent>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
            Course Details
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-200 text-red-800 hover:bg-red-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div
            key={activeTab}
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            {tabContent[activeTab]}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/component/contact"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </CardContent>
      </Card>{" "} */}
      {/* Course Details Section */}
      <Card>
        <CardContent>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
            Course Details
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-200 text-red-800 hover:bg-red-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div
            key={activeTab}
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            {tabContent[activeTab]}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/component/contact"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* New Programming Languages & Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] opacity-10"></div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 relative z-10"
        >
          Programming Languages & Tools Covered
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8 relative z-10"
        >
          {[
            "/image/Courses/jfs2.png",
            "/image/Courses/jfs1.png",
            "/image/Courses/jfs3.png",
            "/image/Courses/jfs4.png",
            "/image/Courses/jf5.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:bg-red-100"
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
          className="bg-gradient-to-r from-red-800 to-red-600 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg relative z-10"
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
                <item.icon className="w-5 h-5 text-red-300" />
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
        className="bg-gradient-to-r from-red-900 via-black to-red-700 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-20 mx-4 sm:mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] opacity-5"></div>
        <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <motion.div
              className="text-white flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-2xl">
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
              className="px-6 sm:px-8 py-3 text-red-900 bg-white rounded-full hover:bg-red-100 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center shadow-lg hover:shadow-xl"
            >
              ENQUIRE NOW
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
