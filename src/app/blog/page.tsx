"use client";

import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import CourseCard from "./CourseCard";
import WhyChooseUs from "./WhyChooseUs";
import LatestInsights from "./LatestInsights";
// import BlogsPage from "./WhyChooseUs";

gsap.registerPlugin(ScrollTrigger);

const KnowledgeCenter: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const courses = [
    {
      title: "Data Analysis Course",
      description: "Master data analysis with Python, SQL, and Tableau",
      image: "/image/Courses/d1.jpeg",
      highlights: [
        "Fundamentals of Data Analysis",
        "Data visualization and storytelling",
        "Advanced analytics techniques",
        "Real-world projects",
      ],
    },
    {
      title: "React.js Development",
      description: "Build modern web applications with React.js",
      image: "/image/Courses/r1.png",
      highlights: [
        "JavaScript and ES6 fundamentals",
        "Component-based architecture",
        "State management with Redux",
        "Performance optimization",
      ],
    },
    {
      title: "Full Stack Development",
      description: "Become a complete web developer",
      image: "/image/Courses/j1.jpeg",
      highlights: [
        "Frontend and Backend development",
        "Database management",
        "API development",
        "Deployment strategies",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="w-full px-8 py-48 sm:py-16 md:py-48 lg:py-56  bg-gradient-to-br from-red-500 via-red-600 to-red-700"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering the Future: Learn, Grow, and Succeed
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Your gateway to excellence in technology and professional
            development
          </p>
        </div>
      </div>

      <WhyChooseUs />
      {/* <BlogsPage /> */}

      {/* Courses Section */}
      {/* <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Courses
            </h2>
            <button className="hidden md:flex items-center text-white hover:text-red-400 transition-colors">
              View all courses <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Courses
            </h2>
            <Link
              href="../Courses"
              className="hidden md:flex items-center text-white hover:text-red-400 transition-colors"
            >
              View all courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="../Courses"
              className="inline-flex items-center text-white hover:text-red-400 transition-colors"
            >
              View all courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Latest Insights Section */}
      <LatestInsights />

      {/* Success Stories Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="bg-black p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-300 italic mb-4">
                "Ignited Minds Learning transformed my career. The React.js
                course helped me land a role as a front-end developer in a top
                tech company. The placement support was phenomenal!"
              </p>
              <footer className="text-red-400">
                – Rajesh K., Front-End Developer
              </footer>
            </blockquote>
            <blockquote className="bg-black p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-300 italic mb-4">
                "The Data Analysis course gave me the confidence and skills to
                transition into analytics. Today, I'm working as a data analyst
                in a multinational corporation."
              </p>
              <footer className="text-red-400">– Priya S., Data Analyst</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join Ignited Minds Learning today and transform your career with
            industry-leading courses and expert guidance.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            The tech industry is evolving rapidly, and the time to act is now.
            Whether you aspire to become a data analyst or a React.js developer,
            Ignited Minds Learning provides you with the tools, training, and
            support you need to succeed.
          </p>

          <a
            href="http://www.ignitedmindslearning.com"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeCenter;
