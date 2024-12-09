"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  Code,
  BookOpen,
  Users,
  Briefcase,
  Wrench,
  Clock,
  FileCheck,
  FileText,
} from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Carousel Images
const carouselImages = [
  { src: "/image/Courses/d1.jpeg", alt: "Data Analytics Training Course" },
];

// Enhanced Card Component with animation
function Card({ className = "", children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={`bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-auto my-8 sm:my-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={`p-4 sm:p-8 ${className}`}>{children}</div>;
}

export default function DataAnalystCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [toolPosition, setToolPosition] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToolPosition((prevPosition) => (prevPosition + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setTranslateX(toolPosition * (isMobile ? 50 : 25));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toolPosition]);

  // Course content remains the same as in your original code
  const courseContent = {
    overview: (
      <div className="space-y-4 text-white">
        <p>
          A Data Analyst is a professional skilled in collecting, organizing,
          and analyzing large sets of data to extract meaningful insights that
          help businesses make data-driven decisions. They use various tools,
          statistical techniques, and data visualization methods to interpret
          data and identify patterns, trends, and opportunities.
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
              variants={fadeInLeft}
              className="flex items-center space-x-2"
            >
              <item.icon className="w-5 h-5 text-red-400" />
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
    objectives: [
      "Data Analysis",
      "Data Collection and Cleaning.",
      "Data Visualization.",
      "Business Insights.",
      "Automate Processes",
    ],
    curriculum: [
      "Introduction to Data Analytics",
      "Understanding Data",
      "Excel for Data Analytics",
      "Introduction to Databases",
      "SQL for Data Analysis",
      "Data Cleaning",
      "Python Basics for Data Analysts",
      "Data Manipulation with Pandas",
      "Data Visualization with Python",
      "Exploratory Data Analysis (EDA)",
      "Introduction to Business Intelligence (BI)",
      "Creating Dashboards in Tableau",
      "Advanced SQL",
      "Statistics for Data Analysis",
      "Probability for Analysts",
      "Regression Analysis",
      "Time Series Analysis",
      "Data Cleaning Automation",
      "Big Data Fundamentals",
      "Introduction to Machine Learning",
      "Data Wrangling",
      "Predictive Analytics",
      "Data Visualization Principles",
      "Power BI for Analysts",
      "Storytelling with Data",
      "Domain-Specific Analytics",
      "Working with APIs",
      "Capstone Projects",
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
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="list-disc pl-5 space-y-2 text-white"
      >
        {courseContent.objectives.map((objective, index) => (
          <motion.li key={index} variants={fadeInLeft}>
            {objective}
          </motion.li>
        ))}
      </motion.ul>
    ),
    curriculum: (
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="list-disc pl-5 md:columns-2 space-y-2 text-white"
      >
        {courseContent.curriculum.map((topic, index) => (
          <motion.li key={index} variants={fadeInRight}>
            {topic}
          </motion.li>
        ))}
      </motion.ul>
    ),
    benefits: (
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="list-disc pl-5 space-y-2 text-white"
      >
        {courseContent.benefits.map((benefit, index) => (
          <motion.li key={index} variants={fadeInUp}>
            {benefit}
          </motion.li>
        ))}
      </motion.ul>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {/* Hero Section with Enhanced Animations */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative pt-20 sm:pt-16 md:pt-0 min-h-[calc(100vh-64px)] mb-0"
      >
        <div className="relative w-full h-full md:h-auto md:pb-[56.25%]">
          <Image
            src={carouselImages[0].src}
            alt={carouselImages[0].alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="hidden md:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
          />
        </div>
        <motion.div
          variants={staggerContainer}
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
        >
          <div className="md:hidden w-full h-64 relative mb-4">
            <Image
              src={carouselImages[0].src}
              alt={carouselImages[0].alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Data Analyst Course – Build Your Career in Data Analytics
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
          >
            Master the art of Data Analytics with hands-on projects
          </motion.p>
          <motion.div variants={scaleIn}>
            <Link
              href="/registration"
              className="bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Rest of the sections with enhanced animations */}
      <Card>
        <CardContent>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center"
          >
            Course Details
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
          >
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                variants={scaleIn}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-200 text-red-800 hover:bg-red-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            {tabContent[activeTab]}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
            <Link
              href="/registration"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </motion.div>
        </CardContent>
      </Card>

      {/* Programming Languages & Tools Section with Enhanced Animations */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] opacity-10"></div>
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 relative z-10"
        >
          Programming Languages & Tools Covered
        </motion.h2>

        <div className="relative h-40 sm:h-48 md:h-56 mb-6 sm:mb-8 z-10 overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {[
              "/image/Courses/dataa1.jpg",
              "/image/Courses/dataa2.png",
              "/image/Courses/dataa3.jpg",
              "/image/Courses/dataa4.png",
              "/image/Courses/dataa6.png",
              "/image/Courses/dataa1.jpg",
              "/image/Courses/dataa2.png",
              "/image/Courses/dataa3.jpg",
              "/image/Courses/dataa4.png",
              "/image/Courses/dataa6.png",
            ].map((src, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="w-1/2 sm:w-1/4 h-full flex-shrink-0 flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:bg-red-100"
                >
                  <Image
                    src={src}
                    alt={`Programming tool ${(index % 6) + 1}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-800 to-red-600 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg relative z-10"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Course Highlights
          </h3>
          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
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
                variants={fadeInLeft}
                className="flex items-center space-x-2"
              >
                <item.icon className="w-5 h-5 text-red-300" />
                <span className="text-sm sm:text-base">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-r from-red-900 via-black to-red-700 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-20 mx-4 sm:mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] opacity-5"></div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <div className="text-white flex-shrink-0 relative">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <BsGraphUpArrow className="w-12 h-12 sm:w-16 sm:h-16" />
              </motion.div>
            </div>

            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-2xl"
            >
              Strengthen your career prospects and get placed in renowned
              companies
            </motion.h2>
          </div>
          <motion.div variants={scaleIn} className="w-full sm:w-auto">
            <Link
              href="/registration"
              className="px-6 sm:px-8 py-3 text-red-900 bg-white rounded-full hover:bg-red-100 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center shadow-lg hover:shadow-xl"
            >
              ENQUIRE NOW
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
