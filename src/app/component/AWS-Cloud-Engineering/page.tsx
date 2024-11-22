"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Carousel Images
const carouselImages = [
  {
    src: "/image/Courses/aws.jpg",
    alt: "AWS Cloud Engineering",
  },
];

// Enhanced Card Component
function EnhancedCard({ className = "", children }) {
  return (
    <motion.div
      className={`bg-gradient-to-br from-blue-100 to-blue-300 rounded-3xl shadow-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function Card({ className, children }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ className, children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export default function AWSCloudEngineeringCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [page, setPage] = useState(0);

  // Pagination function
  const paginate = (newDirection: number) => {
    setPage(
      (prevPage) =>
        (prevPage + newDirection + carouselImages.length) %
        carouselImages.length
    );
  };

  const courseContent = {
    overview: (
      <div className="space-y-4">
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
              text: "Designed for Beginners and Experienced Professionals",
            },
            { icon: Briefcase, text: "Industry Expert-Led Training" },
            { icon: Clock, text: "100+ hours of Comprehensive Learning" },
            {
              icon: Users,
              text: "Dedicated Support from AWS Certified Mentors",
            },
            {
              icon: Briefcase,
              text: "Job Placement Assistance with Top Tech Companies",
            },
            { icon: Wrench, text: "Hands-on Labs and Real-world Projects" },
            {
              icon: Code,
              text: "In-depth Coverage of AWS Services and Best Practices",
            },
            {
              icon: FileCheck,
              text: "Preparation for AWS Certification Exams",
            },
            {
              icon: FileText,
              text: "Resume Building and Interview Preparation",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-blue-600" />
              <span>{item.text}</span>
            </motion.li>
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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-4 sm:p-8 font-sans">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <Navbar />
      </div>
      {/* Carousel and Text Section Above Course Card */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative overflow-hidden mb-12 h-48 sm:h-72 md:h-96"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={page}
            custom={page > 0 ? "next" : "prev"}
            variants={{
              initial: (direction) => ({
                opacity: 0,
                x: direction === "next" ? 200 : -200,
              }),
              animate: { opacity: 1, x: 0 },
              exit: (direction) => ({
                opacity: 0,
                x: direction === "next" ? -200 : 200,
              }),
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
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full"
          >
            &lt;
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-2 bg-black bg-opacity-50 text-white rounded-full"
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
          Become an AWS Cloud Engineering expert with our comprehensive course.
          Learn to design, implement, and manage scalable, highly available, and
          fault-tolerant systems on Amazon Web Services.
        </motion.p>
      </motion.section>

      {/* Enhanced AWS Cloud Engineering Course Card */}
      <EnhancedCard className="max-w-5xl mx-auto my-12">
        <CardContent className={undefined} children={undefined}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            AWS Cloud Engineering Course
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
                    ? "bg-blue-600 text-white"
                    : "bg-blue-200 text-blue-800 hover:bg-blue-300"
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
              className="text-blue-900 text-base sm:text-lg leading-relaxed"
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
              <Link href="/component/contact" passHref>
                <Button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-blue-700 transition duration-300 shadow-lg">
                  ENROLL NOW
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </CardContent>
      </EnhancedCard>

      {/* AWS Services & Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto my-12 text-white"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8"
        >
          AWS Services & Tools Covered
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 mb-8"
        >
          {[
            "/image/Courses/aws1.png",
            "/image/Courses/aws2.png",
            "/image/Courses/aws3.png",
            "/image/Courses/aws4.png",
            "/image/Courses/aws5.png",
            "/image/Courses/aws6.png",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-xl p-2 sm:p-4 flex items-center justify-center shadow-lg"
            >
              <Image
                src={src}
                alt={`AWS tool ${index + 1}`}
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
              { icon: Clock, text: "100+ hours of in-depth training" },
              { icon: BookOpen, text: "Comprehensive AWS service coverage" },
              { icon: Briefcase, text: "Real-world projects and case studies" },
              { icon: Wrench, text: "Hands-on labs with AWS Free Tier" },
              { icon: Code, text: "Infrastructure as Code practice" },
              { icon: Users, text: "24/7 expert support" },
              { icon: FileCheck, text: "AWS certification exam preparation" },
              { icon: FileText, text: "Job-ready portfolio development" },
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
              className="text-blue-600 flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Cloud className="w-12 h-12 sm:w-16 sm:h-16" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 max-w-2xl">
              Launch your cloud career with AWS Cloud Engineering
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link href="/component/contact" passHref>
              <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm sm:text-base">
                GET STARTED
              </Button>
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
