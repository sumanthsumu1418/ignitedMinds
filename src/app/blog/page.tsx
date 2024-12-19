// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Head from "next/head";
// import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import TestimonialCarousel from "../component/TestimonialCard";
// import Navbar from "../component/Navbar";
// import Footer from "app/component/Footer";

// gsap.registerPlugin(ScrollTrigger);

// const WhyChooseUs: React.FC = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const svgRef = useRef(null);
//   const paragraphRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const heading = headingRef.current;
//     const svg = svgRef.current;
//     const paragraph = paragraphRef.current;

//     gsap.fromTo(
//       section,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 80%",
//         },
//       }
//     );

//     gsap.fromTo(
//       heading,
//       { opacity: 0, y: -50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
//     );

//     gsap.fromTo(
//       svg,
//       { opacity: 0, scaleX: 0 },
//       { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
//     );

//     gsap.fromTo(
//       paragraph,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="text-center mb-16 relative bg-black px-4 py-8 sm:py-12"
//     >
//       <h2
//         ref={headingRef}
//         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
//         style={{
//           fontFamily: "Lexend, sans-serif",
//         }}
//       >
//         Why Choose Us?
//       </h2>

//       <svg
//         ref={svgRef}
//         width="100%"
//         height="15"
//         viewBox="0 0 547 17"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="mx-auto mb-6"
//         style={{ maxWidth: "547px" }}
//       >
//         <g clipPath="url(#clip0_83_159)">
//           <path
//             d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
//             stroke="url(#paint0_linear_83_159)"
//             strokeWidth="2.64342"
//           />
//           <path
//             d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
//             stroke="url(#paint1_linear_83_159)"
//             strokeWidth="2.64342"
//           />
//         </g>
//         <defs>
//           <linearGradient
//             id="paint0_linear_83_159"
//             x1="42.3283"
//             y1="10.3379"
//             x2="49.6943"
//             y2="44.6203"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FF0000" />
//             <stop offset="1" stopColor="#FF6666" />
//           </linearGradient>
//           <linearGradient
//             id="paint1_linear_83_159"
//             x1="1.32172"
//             y1="6.40797"
//             x2="9.48162"
//             y2="48.5804"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FF0000" />
//             <stop offset="1" stopColor="#FF6666" />
//           </linearGradient>
//           <clipPath id="clip0_83_159">
//             <rect
//               width="546.67"
//               height="15.8605"
//               fill="white"
//               transform="translate(0 0.399902)"
//             />
//           </clipPath>
//         </defs>
//       </svg>

//       <p
//         ref={paragraphRef}
//         className="text-red-200 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto"
//         style={{
//           fontFamily: "Lexend, sans-serif",
//           lineHeight: "1.6",
//         }}
//       >
//         A choice that makes a big difference in your career. Ignited Minds is
//         here to help its students reach their goals and their training
//         experiences.
//       </p>
//     </div>
//   );
// };

// interface FeatureCardProps {
//   title: string;
//   description: string;
//   image: string;
//   index: number;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   title,
//   description,
//   image,
//   index,
// }) => {
//   const [liked, setLiked] = useState(false);
//   const cardRef = useRef(null);

//   const toggleLike = () => {
//     setLiked((prev) => !prev);
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: "top 80%",
//         },
//         delay: index * 0.2,
//       }
//     );
//   }, [index]);

//   return (
//     <div
//       ref={cardRef}
//       className="w-full max-w-[400px] bg-gray-900 shadow-lg transition-all ease-in-out transform hover:scale-105 rounded-lg overflow-hidden flex flex-col"
//     >
//       <div className="relative h-48 sm:h-56">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//         <button
//           onClick={toggleLike}
//           className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors flex items-center justify-center shadow-md"
//           aria-label="Like"
//         >
//           <Heart
//             className={`w-6 h-6 ${liked ? "text-red-500" : "text-white"}`}
//           />
//         </button>
//       </div>
//       <div className="p-6 bg-gray-900 flex-1 flex flex-col justify-between">
//         <h3
//           className="text-xl sm:text-2xl font-bold mb-3 text-white"
//           style={{
//             fontFamily: "Lexend, sans-serif",
//           }}
//         >
//           {title}
//         </h3>
//         <p
//           className="text-sm sm:text-base text-gray-300"
//           style={{
//             fontFamily: "Lexend, sans-serif",
//             lineHeight: "1.6",
//           }}
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const Blog: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-black">
//       <Navbar />
//       <div className="flex-grow w-full px-4 py-8 sm:py-16 mt-20">
//         <div className="max-w-[1440px] mx-auto">
//           <Head>
//             <title>Ignited Minds Learning - Empowering the Future</title>
//             <meta
//               name="description"
//               content="Ignited Minds Learning offers expert-led training in cutting-edge technologies. Join us to learn, grow, and succeed in your career."
//             />
//             <meta
//               name="keywords"
//               content="Ignited Minds Learning, IT training, Data Science, Artificial Intelligence, Cybersecurity, Web Development"
//             />
//             <link rel="icon" href="/favicon.ico" />
//           </Head>

//           <WhyChooseUs />

//           <BlogContent />

//           {/* <TestimonialCarousel />  */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const BlogContent: React.FC = () => {
//   const contentRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const features = [
//     {
//       title: "IT Experts as Trainers",
//       description:
//         "Learning a technology with a professional who is well expertise in that solves 60% of your needs.",
//       image: "/image/blog1.png",
//     },
//     {
//       title: "Fully Hands-on Training",
//       description:
//         "We support any training with more practical classes. So, we always prefer to give hands-on training.",
//       image: "/image/blog2.png",
//     },
//     {
//       title: "Affordable Fees",
//       description:
//         "We are dead cheap in fees. Quality training with less price is only at Ignited Minds.",
//       image: "/image/blog3.png",
//     },
//     {
//       title: "Flexible Timings",
//       description:
//         "We give the students flexibility timings, as we have many trainers and the number is still increasing.",
//       image: "/image/blog4.png",
//     },
//     {
//       title: "Lab Support",
//       description:
//         "If you need software assistance, we are here to back you up. Bring your laptop and load the required softwares.",
//       image: "/image/blog5.png",
//     },
//     {
//       title: "Interview Preparation",
//       description:
//         "Every course is covered with interview point questions and real-time scenarios.",
//       image: "/image/blog6.png",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === features.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? features.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const content = contentRef.current;
//     const headings = content.querySelectorAll("h1, h2");
//     const paragraphs = content.querySelectorAll("p, ul");

//     gsap.fromTo(
//       headings,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: content,
//           start: "top 80%",
//         },
//       }
//     );

//     gsap.fromTo(
//       paragraphs,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: content,
//           start: "top 80%",
//         },
//       }
//     );

//     const slider = sliderRef.current;
//     gsap.to(slider, {
//       x: `-${currentIndex * 100}%`,
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   }, [currentIndex]);

//   return (
//     <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-8 text-white">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
//         Empowering the Future: Learn, Grow, and Succeed with Ignited Minds
//         Learning
//       </h1>
//       <p className="mb-6 text-lg leading-relaxed">
//         In today's fast-paced world, staying ahead of the curve means mastering
//         new-age skills and technologies. Ignited Minds Learning, a leading
//         Edu-tech organization based in Bangalore, is here to equip students and
//         professionals with the tools they need to excel. Whether you are looking
//         to jumpstart your career, upgrade your skills, or explore innovative
//         fields, our comprehensive training programs are designed to meet your
//         needs.
//       </p>

//       <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
//         Why Choose Ignited Minds Learning?
//       </h2>
//       <ul className="list-none mb-6 space-y-3">
//         {[
//           "Expert-Led Training: Learn from industry experts with years of experience in cutting-edge technologies and practical knowledge.",
//           "Comprehensive Courses: From Data Science to Artificial Intelligence, Cybersecurity to IT, we offer a wide array of courses tailored to meet diverse learning goals.",
//           "Flexible Learning Options: Access our courses online from the comfort of your home, at your pace, and on your schedule.",
//           "Certification and Credibility: Gain industry-recognized certifications that enhance your resume and give you an edge in the job market.",
//           "Job Assistance: Connect with top recruiters and unlock exciting career opportunities with our placement assistance programs.",
//           "Dedicated Team for Mock Interviews and Resume Preparation: Benefit from personalized interview coaching and professional resume building to stand out.",
//           "Vast Network of Startups and Corporates: Leverage our connections to explore opportunities in leading companies and innovative startups.",
//           "Proven Placement Record: Over 500 successful placements in the last two years.",
//         ].map((item, index) => (
//           <li key={index} className="flex items-start">
//             <span className="text-red-500 mr-3 text-xl">•</span>
//             <span className="text-gray-300">{item}</span>
//           </li>
//         ))}
//       </ul>

//       <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
//         Courses Designed for the Modern Learner
//       </h2>
//       <p className="mb-6 text-lg leading-relaxed">
//         At Ignited Minds Learning, we pride ourselves on offering courses that
//         are relevant, engaging, and future-focused. Here are some of our most
//         sought-after programs:
//       </p>
//       <ul className="list-none mb-6 space-y-3">
//         {[
//           "Artificial Intelligence and Machine Learning: Explore the world of intelligent algorithms and predictive analytics.",
//           "Data Science: Dive deep into data visualization, big data analytics, and business intelligence tools.",
//           "Cybersecurity: Learn how tosafeguard digital infrastructures and prevent cyber threats.",
//           "Web Development: Master front-end, back-end, and full-stack web development technologies.",
//           "IT: Build expertise in computer networks, system administration, and cloud computing.",
//           "Big Data Engineering: Develop skills in managing and analyzing massive datasets with cutting-edge tools and technologies.",
//         ].map((item, index) => (
//           <li key={index} className="flex items-start">
//             <span className="text-red-500 mr-3 text-xl">•</span>
//             <span className="text-gray-300">{item}</span>
//           </li>
//         ))}
//       </ul>

//       <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
//         How Ignited Minds Learning Stands Out
//       </h2>
//       <p className="mb-6 text-lg leading-relaxed">
//         Our teaching philosophy is simple: practical, hands-on learning coupled
//         with real-world applications. We provide:
//       </p>
//       <ul className="list-none mb-6 space-y-3">
//         {[
//           "Help in Every Phase: From the latest curriculum and regular assignments to project work, mock interviews, question dumps, resume building, and connecting with recruiters, we support you at every step of your journey.",
//           "Live Projects: Gain experience working on live industry projects to build a robust portfolio.",
//           "Interactive Sessions: Participate in live webinars, Q&A sessions, and group discussions.",
//           "Mentorship: Benefit from personalized guidance and career mentorship.",
//           "Community Support: Join a growing network of learners and professionals.",
//         ].map((item, index) => (
//           <li key={index} className="flex items-start">
//             <span className="text-red-500 mr-3 text-xl">•</span>
//             <span className="text-gray-300">{item}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Slider for Mobile */}
//       <div className="sm:hidden relative mt-8 sm:mt-16">
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
//           aria-label="Previous Slide"
//         >
//           <ChevronLeft className="text-white w-6 h-6" />
//         </button>
//         <div className="overflow-hidden w-full">
//           <div
//             ref={sliderRef}
//             className="flex transition-transform duration-500"
//           >
//             {features.map((feature, index) => (
//               <div className="min-w-full flex justify-center" key={index}>
//                 <FeatureCard
//                   title={feature.title}
//                   description={feature.description}
//                   image={feature.image}
//                   index={index}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
//           aria-label="Next Slide"
//         >
//           <ChevronRight className="text-white w-6 h-6" />
//         </button>
//       </div>

//       {/* Grid for Desktop */}
//       <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-8 sm:mt-16">
//         {features.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             title={feature.title}
//             description={feature.description}
//             image={feature.image}
//             index={index}
//           />
//         ))}
//       </div>

//       <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
//         Join the Ignited Minds Learning Revolution
//       </h2>
//       <p className="mb-6 text-lg leading-relaxed">
//         The time to act is now. Upskilling isn't just a choice; it's a necessity
//         in today's competitive environment. Whether you're a student eager to
//         learn or a professional seeking career growth, Ignited Minds Learning is
//         your partner in success.
//       </p>
//       <p className="mb-6 text-lg leading-relaxed">
//         Visit us at{" "}
//         <a
//           href="http://www.ignitedmindslearning.com"
//           className="text-red-400 hover:underline transition-colors duration-300"
//         >
//           www.ignitedmindslearning.com
//         </a>{" "}
//         to explore our courses and enroll today. Together, let's ignite your
//         potential and shape your future.
//       </p>
//     </div>
//   );
// };

// export default Blog;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const svg = svgRef.current;
    const paragraph = paragraphRef.current;

    if (section && heading && svg && paragraph) {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        heading,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        svg,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center mb-16 relative bg-black px-4 py-8 sm:py-12"
    >
      <h2
        ref={headingRef}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
        style={{
          fontFamily: "Lexend, sans-serif",
        }}
      >
        Why Choose Us?
      </h2>

      <svg
        ref={svgRef}
        width="100%"
        height="15"
        viewBox="0 0 547 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-6"
        style={{ maxWidth: "547px" }}
      >
        <g clipPath="url(#clip0_83_159)">
          <path
            d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
            stroke="url(#paint0_linear_83_159)"
            strokeWidth="2.64342"
          />
          <path
            d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
            stroke="url(#paint1_linear_83_159)"
            strokeWidth="2.64342"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_83_159"
            x1="42.3283"
            y1="10.3379"
            x2="49.6943"
            y2="44.6203"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6666" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_83_159"
            x1="1.32172"
            y1="6.40797"
            x2="9.48162"
            y2="48.5804"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6666" />
          </linearGradient>
          <clipPath id="clip0_83_159">
            <rect
              width="546.67"
              height="15.8605"
              fill="white"
              transform="translate(0 0.399902)"
            />
          </clipPath>
        </defs>
      </svg>

      <p
        ref={paragraphRef}
        className="text-red-200 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto"
        style={{
          fontFamily: "Lexend, sans-serif",
          lineHeight: "1.6",
        }}
      >
        A choice that makes a big difference in your career. Ignited Minds is
        here to help its students reach their goals and their training
        experiences.
      </p>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  index,
}) => {
  const [liked, setLiked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
          delay: index * 0.2,
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-[400px] bg-gray-900 shadow-lg transition-all ease-in-out transform hover:scale-105 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 sm:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors flex items-center justify-center shadow-md"
          aria-label="Like"
        >
          <Heart
            className={`w-6 h-6 ${liked ? "text-red-500" : "text-white"}`}
          />
        </button>
      </div>
      <div className="p-6 bg-gray-900 flex-1 flex flex-col justify-between">
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 text-white"
          style={{
            fontFamily: "Lexend, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-300"
          style={{
            fontFamily: "Lexend, sans-serif",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-grow w-full px-4 py-8 sm:py-16 mt-20">
        <div className="max-w-[1440px] mx-auto">
          <Head>
            <title>Ignited Minds Learning - Empowering the Future</title>
            <meta
              name="description"
              content="Ignited Minds Learning offers expert-led training in cutting-edge technologies. Join us to learn, grow, and succeed in your career."
            />
            <meta
              name="keywords"
              content="Ignited Minds Learning, IT training, Data Science, Artificial Intelligence, Cybersecurity, Web Development"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <WhyChooseUs />

          <BlogContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BlogContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "IT Experts as Trainers",
      description:
        "Learning a technology with a professional who is well expertise in that solves 60% of your needs.",
      image: "/image/blog1.png",
    },
    {
      title: "Fully Hands-on Training",
      description:
        "We support any training with more practical classes. So, we always prefer to give hands-on training.",
      image: "/image/blog2.png",
    },
    {
      title: "Affordable Fees",
      description:
        "We are dead cheap in fees. Quality training with less price is only at Ignited Minds.",
      image: "/image/blog3.png",
    },
    {
      title: "Flexible Timings",
      description:
        "We give the students flexibility timings, as we have many trainers and the number is still increasing.",
      image: "/image/blog4.png",
    },
    {
      title: "Lab Support",
      description:
        "If you need software assistance, we are here to back you up. Bring your laptop and load the required softwares.",
      image: "/image/blog5.png",
    },
    {
      title: "Interview Preparation",
      description:
        "Every course is covered with interview point questions and real-time scenarios.",
      image: "/image/blog6.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const headings = content.querySelectorAll("h1, h2");
      const paragraphs = content.querySelectorAll("p, ul");

      gsap.fromTo(
        headings,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        }
      );
    }

    const slider = sliderRef.current;
    if (slider) {
      gsap.to(slider, {
        x: `-${currentIndex * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentIndex]);

  return (
    <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
        Empowering the Future: Learn, Grow, and Succeed with Ignited Minds
        Learning
      </h1>
      <p className="mb-6 text-lg leading-relaxed">
        In today's fast-paced world, staying ahead of the curve means mastering
        new-age skills and technologies. Ignited Minds Learning, a leading
        Edu-tech organization based in Bangalore, is here to equip students and
        professionals with the tools they need to excel. Whether you are looking
        to jumpstart your career, upgrade your skills, or explore innovative
        fields, our comprehensive training programs are designed to meet your
        needs.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Why Choose Ignited Minds Learning?
      </h2>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Expert-Led Training: Learn from industry experts with years of experience in cutting-edge technologies and practical knowledge.",
          "Comprehensive Courses: From Data Science to Artificial Intelligence, Cybersecurity to IT, we offer a wide array of courses tailored to meet diverse learning goals.",
          "Flexible Learning Options: Access our courses online from the comfort of your home, at your pace, and on your schedule.",
          "Certification and Credibility: Gain industry-recognized certifications that enhance your resume and give you an edge in the job market.",
          "Job Assistance: Connect with top recruiters and unlock exciting career opportunities with our placement assistance programs.",
          "Dedicated Team for Mock Interviews and Resume Preparation: Benefit from personalized interview coaching and professional resume building to stand out.",
          "Vast Network of Startups and Corporates: Leverage our connections to explore opportunities in leading companies and innovative startups.",
          "Proven Placement Record: Over 500 successful placements in the last two years.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Courses Designed for the Modern Learner
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        At Ignited Minds Learning, we pride ourselves on offering courses that
        are relevant, engaging, and future-focused. Here are some of our most
        sought-after programs:
      </p>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Artificial Intelligence and Machine Learning: Explore the world of intelligent algorithms and predictive analytics.",
          "Data Science: Dive deep into data visualization, big data analytics, and business intelligence tools.",
          "Cybersecurity: Learn how to safeguard digital infrastructures and prevent cyber threats.",
          "Web Development: Master front-end, back-end, and full-stack web development technologies.",
          "IT: Build expertise in computer networks, system administration, and cloud computing.",
          "Big Data Engineering: Develop skills in managing and analyzing massive datasets with cutting-edge tools and technologies.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        How Ignited Minds Learning Stands Out
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Our teaching philosophy is simple: practical, hands-on learning coupled
        with real-world applications. We provide:
      </p>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Help in Every Phase: From the latest curriculum and regular assignments to project work, mock interviews, question dumps, resume building, and connecting with recruiters, we support you at every step of your journey.",
          "Live Projects: Gain experience working on live industry projects to build a robust portfolio.",
          "Interactive Sessions: Participate in live webinars, Q&A sessions, and group discussions.",
          "Mentorship: Benefit from personalized guidance and career mentorship.",
          "Community Support: Join a growing network of learners and professionals.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      {/* Slider for Mobile */}
      <div className="sm:hidden relative mt-8 sm:mt-16">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
          >
            {features.map((feature, index) => (
              <div className="min-w-full flex justify-center" key={index}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Next Slide"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Grid for Desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-8 sm:mt-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            index={index}
          />
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Join the Ignited Minds Learning Revolution
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        The time to act is now. Upskilling isn't just a choice; it's a necessity
        in today's competitive environment. Whether you're a student eager to
        learn or a professional seeking career growth, Ignited Minds Learning is
        your partner in success.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        Visit us at{" "}
        <a
          href="http://www.ignitedmindslearning.com"
          className="text-red-400 hover:underline transition-colors duration-300"
        >
          www.ignitedmindslearning.com
        </a>{" "}
        to explore our courses and enroll today. Together, let's ignite your
        potential and shape your future.
      </p>
    </div>
  );
};

export default Blog;
