"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"; // Importing react-slick for the carousel
import Navbar from "../Navbar";
import Footer from "../Footer";
import Placement from "../placement/page";
import Course from "../course/Page";
import TestimonialCarousel from "../TestimonialCarousel";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
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

export default function Placements() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 flex flex-col">
      <Head>
        <title>Placements - Ignited Minds IT</title>
        <meta name="description" content="Career Advancement and Professional Growth at Ignited Minds IT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section directly below the Navbar */}
      <HeroSection />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <FiveStepsSection />
          <Placement />
          <Course />
          <TestimonialCarousel />
        </div>
        {/* Plane Icon Section */}
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
            {/* Plane Icon and Text */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
              <motion.div
                className="text-purple-600 ml-4 sm:ml-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black max-w-2xl text-center sm:text-left sm:ml-8">
                Strengthen your career prospects and get placed in renowned companies
              </h2>
            </div>

            {/* Enquire Now Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/enquire"
                className="px-6 sm:px-8 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 font-semibold text-sm sm:text-base"
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

function HeroSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000, // Faster transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: "linear", // Smooth continuous sliding
    arrows: false, // Hide navigation arrows
  };

  return (
    <section className="py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            <span className="block">Career Advancement and</span>
            <span className="block text-black-600">Professional Growth Begins With The</span>
            <span className="block text-black-600">Right Placement</span>
          </h1>
          <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Gain the upper hand through our extensive network of world-renowned industry and placement partners.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center md:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/enquire"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section with Image Carousel */}
        <div className="w-full max-w-md mx-auto md:max-w-lg">
          <Slider {...sliderSettings}>
            <div>
              <Image
                src="/image/placement2.jpg"
                alt="Placement Opportunity"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <Image
                src="/image/placement3.jpg"
                alt="Placement Training"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <Image
                src="/image/placement4.jpg"
                alt="Career Growth"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

function FiveStepsSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Five steps towards 100% job guarantee
          </h2>
          <p className="mt-4 text-xl text-black">
            Explore placement opportunities and find the right one for you with our complete support.
          </p>
        </div>
        <div className="mt-10">
          <Image
            src="/image/placement1.jpg"
            alt="Five steps towards 100% job guarantee"
            width={1000}
            height={200}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
