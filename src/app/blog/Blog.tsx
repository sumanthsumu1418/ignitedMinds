// "use client";

// import type React from "react";
// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import CourseCard from "./CourseCard";
// import WhyChooseUs from "./WhyChooseUs";
// import LatestInsights from "./LatestInsights";

// gsap.registerPlugin(ScrollTrigger);

// const BlogContent: React.FC = () => {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     if (hero) {
//       gsap.fromTo(
//         hero.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, []);

//   const courses = [
//     {
//       title: "Data Analysis Course",
//       description: "Master data analysis with Python, SQL, and Tableau",
//       image: "/image/Courses/d1.jpeg",
//       highlights: [
//         "Fundamentals of Data Analysis",
//         "Data visualization and storytelling",
//         "Advanced analytics techniques",
//         "Real-world projects",
//       ],
//     },
//     {
//       title: "React.js Development",
//       description: "Build modern web applications with React.js",
//       image: "/image/Courses/r1.png",
//       highlights: [
//         "JavaScript and ES6 fundamentals",
//         "Component-based architecture",
//         "State management with Redux",
//         "Performance optimization",
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       description: "Become a complete web developer",
//       image: "/image/Courses/j1.jpeg",
//       highlights: [
//         "Frontend and Backend development",
//         "Database management",
//         "API development",
//         "Deployment strategies",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-black">
//       <Navbar />

//       {/* Hero Section */}
//       <div
//         ref={heroRef}
//         className="w-full px-8 py-48 sm:py-16 md:py-48 lg:py-56  bg-gradient-to-br from-red-500 via-red-600 to-red-700"
//       >
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Empowering the Future: Learn, Grow, and Succeed
//           </h1>
//           <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
//             Your gateway to excellence in technology and professional
//             development
//           </p>
//         </div>
//       </div>

//       <WhyChooseUs />

//       {/* Courses Section */}
//       <section className="py-16 px-4 bg-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Our Courses
//             </h2>
//             <Link
//               href="../Courses"
//               className="hidden md:flex items-center text-white hover:text-red-400 transition-colors"
//             >
//               View all courses <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course, index) => (
//               <CourseCard key={index} {...course} index={index} />
//             ))}
//           </div>
//           <div className="mt-8 text-center md:hidden">
//             <Link
//               href="../Courses"
//               className="inline-flex items-center text-white hover:text-red-400 transition-colors"
//             >
//               View all courses <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Latest Insights Section */}
//       <LatestInsights />

//       {/* Success Stories Section */}
//       <section className="bg-gray-900 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
//             Success Stories
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <blockquote className="bg-black p-6 rounded-lg border-l-4 border-red-500">
//               <p className="text-gray-300 italic mb-4">
//                 "Ignited Minds Learning transformed my career. The React.js
//                 course helped me land a role as a front-end developer in a top
//                 tech company. The placement support was phenomenal!"
//               </p>
//               <footer className="text-red-400">
//                 – Rajesh K., Front-End Developer
//               </footer>
//             </blockquote>
//             <blockquote className="bg-black p-6 rounded-lg border-l-4 border-red-500">
//               <p className="text-gray-300 italic mb-4">
//                 "The Data Analysis course gave me the confidence and skills to
//                 transition into analytics. Today, I'm working as a data analyst
//                 in a multinational corporation."
//               </p>
//               <footer className="text-red-400">– Priya S., Data Analyst</footer>
//             </blockquote>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-br from-red-600 to-red-700 py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="text-xl text-red-100 mb-8">
//             Join Ignited Minds Learning today and transform your career with
//             industry-leading courses and expert guidance.
//           </p>

//           <p className="mb-6 text-lg leading-relaxed">
//             The tech industry is evolving rapidly, and the time to act is now.
//             Whether you aspire to become a data analyst or a React.js developer,
//             Ignited Minds Learning provides you with the tools, training, and
//             support you need to succeed.
//           </p>

//           <a
//             href="http://www.ignitedmindslearning.com"
//             className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default BlogContent;

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import WhyChooseUs from "./WhyChooseUs";
import LatestInsights from "./LatestInsights";

gsap.registerPlugin(ScrollTrigger);

const BlogContent: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  // const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

    // sectionRefs.current.forEach((section) => {
    //   if (section) {
    //     gsap.fromTo(
    //       section,
    //       { opacity: 0, y: 50 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //           trigger: section,
    //           start: "top 80%",
    //           end: "bottom 20%",
    //           toggleActions: "play none none reverse",
    //         },
    //       }
    //     );
    //   }
    // });
  }, []);

  // const courses = [
  //   {
  //     title: "Snowflake Fundamentals",
  //     description: "Master the basics of Snowflake cloud data warehousing",
  //     image: "/image/Courses/snowflake.jpg",
  //     highlights: [
  //       "Introduction to cloud data warehousing",
  //       "Snowflake architecture",
  //       "Data loading and querying",
  //       "Hands-on projects",
  //     ],
  //   },
  //   {
  //     title: "Advanced Snowflake",
  //     description: "Take your Snowflake skills to the next level",
  //     image: "/image/Courses/advanced-snowflake.jpg",
  //     highlights: [
  //       "Performance optimization",
  //       "Data sharing and security",
  //       "Integration with BI tools",
  //       "Real-world case studies",
  //     ],
  //   },
  //   {
  //     title: "Snowflake for Data Engineers",
  //     description: "Build robust data pipelines with Snowflake",
  //     image: "/image/Courses/snowflake-data-engineering.jpg",
  //     highlights: [
  //       "ETL/ELT processes in Snowflake",
  //       "Data modeling best practices",
  //       "Snowpipe for continuous data loading",
  //       "Integrating with data lakes",
  //     ],
  //   },
  // ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="w-full px-8 py-48 sm:py-16 md:py-48 lg:py-56  bg-gradient-to-br from-red-500 via-red-600 to-red-700"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Unlock Your Career with Snowflake
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Master the future of cloud data warehousing and transform your
            career prospects
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section
        // ref={(el) => (sectionRefs.current[0] = el)}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            What is Snowflake?
          </h2>
          <p className="text-lg text-red-700 mb-4">
            Snowflake is a cloud-based data platform that enables businesses to
            store, manage, and analyze massive amounts of data efficiently.
            Unlike traditional databases, Snowflake provides scalability,
            flexibility, and cost-effectiveness because it operates on cloud
            infrastructure like AWS, Azure, and Google Cloud.
          </p>
          <h3 className="text-2xl font-semibold text-red-900 mt-8 mb-4">
            Why Should Students Learn Snowflake?
          </h3>
          <ul className="list-disc list-inside text-lg text-red-700 space-y-2">
            <li>High Demand in the Job Market</li>
            <li>Lucrative Career Opportunities</li>
            <li>Easy to Learn & Implement</li>
            <li>Industry Adoption</li>
          </ul>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section
        // ref={(el) => (sectionRefs.current[1] = el)}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Real-World Use Cases: How Leading Companies Use Snowflake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Netflix",
                description:
                  "Enhances data-driven recommendations by storing and processing billions of rows of user data.",
                icon: "🎬",
              },
              {
                company: "Adobe",
                description:
                  "Drives real-time customer insights by integrating Snowflake with AI-powered analytics.",
                icon: "🎨",
              },
              {
                company: "Square (Block)",
                description:
                  "Optimizes financial data processing for real-time fraud detection and automated reporting.",
                icon: "💳",
              },
              {
                company: "DoorDash",
                description:
                  "Scales food delivery operations by managing supply chain logistics and analyzing customer preferences.",
                icon: "🍔",
              },
              {
                company: "LendingClub",
                description:
                  "Transforms financial data management for efficient loan processing and risk assessment.",
                icon: "💼",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.company}</h3>
                <p className="text-blue-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {/* <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Snowflake Courses
            </h2>
            <Link
              href="../Courses"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-800 transition-colors"
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
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              View all courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section> */}

      <WhyChooseUs />

      <LatestInsights />

      {/* Success Stories Section */}
      <section
        // ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-black py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="text-white-700 italic mb-4">
                "Ignited Minds Learning's Snowflake course transformed my
                career. I landed a role as a data engineer in a top tech
                company. The hands-on projects and expert mentorship were
                invaluable!"
              </p>
              <footer className="text-blue-300">
                – Priya S., Data Engineer
              </footer>
            </blockquote>
            <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="text-white-700 italic mb-4">
                "The Advanced Snowflake course gave me the confidence and skills
                to lead data warehousing projects. Today, I'm working as a cloud
                architect, all thanks to Ignited Minds Learning."
              </p>
              <footer className="text-blue-300">
                – Rahul K., Cloud Architect
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        // ref={(el) => (sectionRefs.current[4] = el)}
        className="bg-black py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
            Ready to Start Your Snowflake Journey?
          </h2>
          <p className="text-xl text-red-700 mb-8">
            Join Ignited Minds Learning today and transform your career with
            industry-leading Snowflake courses and expert guidance.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-red-700">
            The demand for Snowflake professionals is skyrocketing. Whether
            you're a beginner or looking to advance your skills, our
            comprehensive courses provide you with the knowledge and hands-on
            experience you need to succeed in the world of cloud data
            warehousing.
          </p>

          <a
            href="https://www.ignitedmindslearning.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Enroll Now
          </a>
          <p className="mt-4 text-blue-200">📞 Call/WhatsApp: +91 8296068323</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogContent;
