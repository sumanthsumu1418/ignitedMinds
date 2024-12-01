"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
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

// Carousel Images
const carouselImages = [
  { src: "/image/Courses/a1.jpeg", alt: "Right Placement is here!! (8)" },
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

export default function AWSCloudEngineeringCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [toolPosition, setToolPosition] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToolPosition((prevPosition) => (prevPosition + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate translateX based on window width in a useEffect
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setTranslateX(toolPosition * (isMobile ? 50 : 25));
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toolPosition]);

  const courseContent = {
    overview: (
      <div className="space-y-4 text-white">
        <p>
          AWS Cloud Engineering focuses on designing, implementing, and managing
          cloud infrastructure on Amazon Web Services. This course will equip
          you with the skills to architect scalable, highly available, and
          fault-tolerant systems on AWS.
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
      "Master core AWS services and best practices for designing cloud architectures",
      "Learn to implement scalable, highly available, and fault-tolerant systems on AWS",
      "Understand AWS security best practices and compliance",
      "Gain hands-on experience with AWS management tools and automation",
      "Prepare for AWS Certified Solutions Architect and DevOps Engineer certifications",
    ],
    curriculum: [
      "Introduction to Cloud Computing and AWS",
      "AWS Global Infrastructure",
      "Identity and Access Management (IAM)",
      "Amazon EC2 and EBS",
      "Amazon S3 and Glacier",
      "Amazon VPC and Networking",
      "Databases on AWS (RDS, DynamoDB, Redshift)",
      "Elastic Load Balancing and Auto Scaling",
      "AWS Lambda and Serverless Computing",
      "Amazon CloudFront and Route 53",
      "Monitoring and Logging with CloudWatch",
      "AWS Security and Compliance",
      "DevOps on AWS (CodeCommit, CodeBuild, CodeDeploy, CodePipeline)",
      "Infrastructure as Code with CloudFormation",
      "Containers on AWS (ECS, EKS, Fargate)",
      "AWS Cost Management and Optimization",
    ],
    benefits: [
      "Lifetime access to course materials and updates",
      "AWS Free Tier account for hands-on practice",
      "Real-world project portfolio development",
      "Industry-recognized AWS course completion certificate",
      "Access to AWS user groups and community events",
      "Career guidance and job placement assistance",
      "Mock interviews with industry experts",
      "Flexible learning schedule with self-paced options",
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
      {/* Hero Section with Responsive Background */}
      <section className="relative pt-20 sm:pt-16 md:pt-0 min-h-[calc(100vh-64px)] mb-0">
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            AWS Cloud Engineering Course
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Master the art of AWS Cloud Engineering
          </p>
          <Link
            href="/registration"
            className="bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg inline-block"
          >
            Enroll Now
          </Link>
        </div>
      </section>
      <Card className="mt-0 sm:mt-8">
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
              href="/registration"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* New Programming Languages & Tools Section */}
      <section className="bg-gradient-to-br from-red-900 via-black to-red-700 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] opacity-10"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 relative z-10">
          Programming Languages & Tools Covered
        </h2>

        <div className="relative h-40 sm:h-48 md:h-56 mb-6 sm:mb-8 z-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {[
              "/image/Courses/aws1.png",
              "/image/Courses/aws2.png",
              "/image/Courses/aws3.png",
              "/image/Courses/aws4.png",
              "/image/Courses/aws5.png",
              "/image/Courses/aws6.png",
              "/image/Courses/aws1.png",
              "/image/Courses/aws2.png",
              "/image/Courses/aws3.png",
              "/image/Courses/aws4.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/4 h-full flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:bg-red-100">
                  <Image
                    src={src}
                    alt={`Programming tool ${(index % 6) + 1}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-800 to-red-600 rounded-xl p-4 sm:p-6 backdrop-filter backdrop-blur-lg relative z-10">
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
              <li key={index} className="flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-red-300" />
                <span className="text-sm sm:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-gradient-to-r from-red-900 via-black to-red-700 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-12 sm:mb-20 mx-4 sm:mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] opacity-5"></div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <div className="text-white flex-shrink-0">
              <Cloud className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white max-w-2xl">
              Strengthen your career prospects and get placed in renowned
              companies
            </h2>
          </div>
          <div className="w-full sm:w-auto">
            <Link
              href="/registration"
              className="px-6 sm:px-8 py-3 text-red-900 bg-white rounded-full hover:bg-red-100 transition-colors duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto block text-center shadow-lg hover:shadow-xl"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
