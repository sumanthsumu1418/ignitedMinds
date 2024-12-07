"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Plane } from "lucide-react";
import Script from "next/script";

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
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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

  return (
    <>
      <Script id="about-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "EducationalOrganization",
            name: "Ignited Minds Learning",
            description:
              "A Bangalore-based Edu-tech organization delivering online training and certification courses in technical subjects.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            offers: {
              "@type": "Offer",
              category: "IT Training Courses",
            },
          },
        })}
      </Script>

      <div className="bg-black text-white">
        <Navbar />
        <main className="pt-24 sm:pt-28">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="md:w-1/2" variants={fadeInUp}>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-red-500">
                  Get to Know Ignited Minds Learning – Your Partner in Career
                  Growth
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
                  Start Your Journey
                </Link>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                variants={fadeInUp}
              >
                <Image
                  src="/image/aboutus1.jpg"
                  width={500}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                  alt="Ignited Minds Learning Team"
                  priority
                />
              </motion.div>
            </motion.div>
          </section>

          <section className="mb-12 sm:mb-16" ref={ref}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="container mx-auto px-4"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500"
              >
                Our Purpose & Values
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-center mb-12 text-white-200 max-w-2xl mx-auto text-base"
              >
                At Ignited Minds, we are inspired by our vision, mission, and
                values. They constantly drive us to manage our relationships
                with various stakeholders.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {purposeValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${value.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-4xl mb-4" aria-hidden="true">
                        {value.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">
                        {value.title}
                      </h3>
                      <p className="text-base text-red-100 text-center">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="mb-12 sm:mb-16 container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white"
              >
                Our Courses
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  { name: "Java Full Stack", image: "/image/aboutus3.jpg" },
                  { name: "ReactJS", image: "/image/aboutus4.jpg" },
                  { name: "Python Big Data", image: "/image/aboutus6.jpg" },
                  { name: "AWS", image: "/image/aboutus7.jpg" },
                  {
                    name: "Azure Cloud Engineering",
                    image: "/image/aboutus9.jpg",
                  },
                  { name: "Web Development", image: "/image/aboutus10.jpg" },
                ].map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="text-center"
                  >
                    <Image
                      src={course.image}
                      alt={`${course.name} Training Course`}
                      width={300}
                      height={160}
                      className="mx-auto object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
                    />
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {course.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="p-8 mb-24 container mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                <motion.div
                  className="text-red-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl text-center sm:text-left">
                  Strengthen your career prospects and get placed in renowned
                  companies
                </h2>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 sm:mt-0"
              >
                <Link
                  href="/enquire"
                  className="px-6 sm:px-8 py-3 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 font-semibold text-base inline-block"
                >
                  ENQUIRE NOW
                </Link>
              </motion.div>
            </motion.div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
}
