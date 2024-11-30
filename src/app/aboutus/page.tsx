"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Plane } from "lucide-react";

interface PurposeValue {
  title: string;
  icon: string;
  description: string;
  color: string;
}

const purposeValues: PurposeValue[] = [
  {
    title: "Industry Exposure",
    icon: "🏙️",
    description:
      "Industry exposure and interactions lead to the professional development of students and give them a keen idea of what they need to do in the future.",
    color: "bg-red-900",
  },
  {
    title: "Addressing Challenges",
    icon: "✌️",
    description:
      "On-the-job issues and challenges are to be anticipated and prepared for in every job, and we train to do exactly that.",
    color: "bg-red-800",
  },
  {
    title: "Integrity",
    icon: "😊",
    description:
      "The integrity of ideas, actions, and thought is what makes a successful career and life.",
    color: "bg-red-700",
  },
  {
    title: "Adaptability",
    icon: "🕊️",
    description:
      "Calmness and composure in every situation are a must to adapt to the dynamic world today. We hope to instil these values in our students.",
    color: "bg-red-600",
  },
];

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-red-500">
                Welcome to Ignited Minds
              </h1>
              <p className="text-base md:text-lg mb-6 text-white-200">
                We are a Bangalore-based Edu-tech organization that delivers
                online training and certification courses related to technical
                New Age Subjects.
              </p>
              <Link
                href="/registration"
                className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-center w-full sm:w-auto text-base"
              >
                Enquire Now
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/image/aboutus1.jpg"
                width={500}
                height={200}
                className="rounded-lg shadow-md object-cover"
                alt="Ignited Minds Team"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500
            "
            >
              Our Purpose & Values
            </h2>
            <p className="text-center mb-12 text-white-200 max-w-2xl mx-auto text-base">
              At Ignited Minds, we are inspired by our vision, mission, and
              values. They constantly drive us to manage our relationships with
              various stakeholders.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {purposeValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${value.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-4">{value.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-base text-red-100 text-center">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              // { name: "Oracle", image: "/image/aboutus2.jpg" },
              { name: "Java Full Stack", image: "/image/aboutus3.jpg" },
              { name: "ReactJS", image: "/image/aboutus4.jpg" },
              // { name: "Python Full Stack", image: "/image/aboutus5.jpg" },
              { name: "Python Big Data", image: "/image/aboutus6.jpg" },
              { name: "AWS", image: "/image/aboutus7.jpg" },
              // { name: "AWS DevOps", image: "/image/aboutus8.jpg" },
              { name: "Azure Cloud Engineering", image: "/image/aboutus9.jpg" },
              { name: "Web Development", image: "/image/aboutus10.jpg" },
            ].map((course, index) => (
              <div key={index} className="text-center">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={300}
                  height={160}
                  className="mx-auto object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {course.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-8 mb-24"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
              <motion.div
                className="text-red-500 ml-4 sm:ml-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl text-center sm:text-left sm:ml-8">
                Strengthen your career prospects and get placed in renowned
                companies
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/enquire"
                className="px-6 sm:px-8 py-3 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 font-semibold text-base"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
