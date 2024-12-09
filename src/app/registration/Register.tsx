"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../component/Footer";
import Register_1 from "./Sign";
import Navbar from "../component/Navbar";

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
  hidden: { opacity: 0, x: -30 },
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
  hidden: { opacity: 0, x: 30 },
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-16 py-12 min-h-screen pt-32 sm:pt-26 lg:pt-20"
      >
        {/* Text Section */}
        <motion.div
          variants={fadeInLeft}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <h1 className="font-serif text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent tracking-wide leading-tight">
            Join Ignited Minds Learning – Start Your IT Career Journey Now
          </h1>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg lg:text-2xl text-red-200 font-medium"
          >
            Are you ready to learn?
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-base lg:text-lg text-gray-300 leading-7"
          >
            Join our courses for a wonderful learning experience with a
            technical backset in addition to your professional development.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeInRight}
          className="flex-1 w-full lg:w-auto flex justify-center"
        >
          <div className="relative w-full max-w-md h-[400px]">
            <Image
              src="/image/Courses/register.png"
              alt="Start your IT career journey"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Registration Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Register_1 />
      </motion.div>

      <Footer />
    </div>
  );
}
