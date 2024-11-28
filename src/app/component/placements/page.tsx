// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import Placement from "../placement/page";
// import SmallCards from "../course/SmallCards";
// import TestimonialCarousel from "../TestimonialCarousel";
// import { Plane } from "lucide-react";
// import { motion } from "framer-motion";

// const staggerChildren = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Placements() {
//   const smallCard_Data = [
//     {
//       icon: "/image/CareerGuidance_Images/business 1.png",
//       title: "1-on-1 with Mentors",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/practice 1.png",
//       title: "Learn Practically",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/certificate 1.png",
//       title: "Get Certified",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/job-offer 1.png",
//       title: "Get Placed",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <Navbar />
//       <div className="h-16 mb-6"></div> {/* Gap below navbar */}
//       <main className="flex-grow">
//         <HeroSection />
//         <div className="container mx-auto px-4 py-8">
//           <FiveStepsSection />
//           <Placement />
//           <ExpertTrainingSection smallCard_Data={smallCard_Data} />
//           <TestimonialCarousel />
//         </div>
//         <PlaneIconSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         <div className="space-y-6 text-center md:text-left">
//           <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
//             <span className="block text-red-500">
//               Career Growth Begins With
//             </span>
//             <span className="block text-white">The Right Placement</span>
//           </h1>
//           <p className="mt-4 text-lg sm:mt-6 sm:text-xl text-white-400">
//             Gain the upper hand through our extensive network of world-renowned
//             industry and placement partners.
//           </p>
//           <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
//             <Link
//               href="/enquire"
//               className="px-8 py-3 text-base font-medium rounded-lg text-black bg-red-500 hover:bg-red-600 transition duration-300 md:text-lg"
//             >
//               Enquire Now
//             </Link>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto md:max-w-lg">
//           <Image
//             src="/image/Courses/place.jpg"
//             alt="Career Growth"
//             width={500}
//             height={600}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function FiveStepsSection() {
//   return (
//     <section className="py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold sm:text-4xl">
//             Five Steps Towards 100% Job Guarantee
//           </h2>
//           <p className="mt-4 text-lg text-white-400">
//             Explore placement opportunities and find the right one for you with
//             our complete support.
//           </p>
//         </div>
//         <div className="mt-10">
//           <Image
//             src="/image/placement1.jpg"
//             alt="Five Steps Towards 100% Job Guarantee"
//             width={1000}
//             height={200}
//             layout="responsive"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ExpertTrainingSection({ smallCard_Data }) {
//   return (
//     <div className="py-12">
//       <div className="text-center mb-8">
//         <h4 className="text-2xl md:text-3xl font-bold">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <div className="flex flex-wrap justify-center gap-6 px-4">
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// }

// function PlaneIconSection() {
//   return (
//     <motion.section
//       variants={staggerChildren}
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true }}
//       className="p-8 mb-24"
//     >
//       <motion.div
//         variants={fadeInUp}
//         className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto"
//       >
//         <div className="flex items-center gap-6 sm:gap-8 mb-4 sm:mb-0">
//           <motion.div
//             className="text-red-500"
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
//           </motion.div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
//             Strengthen Your Career Prospects and Get Placed in Renowned
//             Companies
//           </h2>
//         </div>

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             href="/enquire"
//             className="px-6 sm:px-8 py-3 text-black bg-red-500 rounded-full hover:bg-red-600 transition duration-300 font-semibold text-sm sm:text-base"
//           >
//             ENQUIRE NOW
//           </Link>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Placement from "../placement/page";
import SmallCards from "../course/SmallCards";
import TestimonialCarousel from "../TestimonialCarousel";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";

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
  const smallCard_Data = [
    {
      icon: "/image/CareerGuidance_Images/business 1.png",
      title: "1-on-1 with Mentors",
    },
    {
      icon: "/image/CareerGuidance_Images/practice 1.png",
      title: "Learn Practically",
    },
    {
      icon: "/image/CareerGuidance_Images/certificate 1.png",
      title: "Get Certified",
    },
    {
      icon: "/image/CareerGuidance_Images/job-offer 1.png",
      title: "Get Placed",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="h-16 mb-6"></div> {/* Gap below navbar */}
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <FiveStepsSection />
          <Placement />
          <ExpertTrainingSection smallCard_Data={smallCard_Data} />
          <TestimonialCarousel />
        </div>
        <PlaneIconSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block text-red-500">
              Career Growth Begins With
            </span>
            <span className="block text-white">The Right Placement</span>
          </h1>
          <p className="mt-4 text-lg sm:mt-6 sm:text-xl text-white-400">
            Gain the upper hand through our extensive network of world-renowned
            industry and placement partners.
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
            <Link
              href="/enquire"
              className="px-8 py-3 text-base font-medium rounded-lg text-black bg-red-500 hover:bg-red-600 transition duration-300 md:text-lg"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto md:max-w-lg">
          <Image
            src="/image/Courses/place.jpg"
            alt="Career Growth"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function FiveStepsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Five Steps Towards 100% Job Guarantee
          </h2>
          <p className="mt-4 text-lg text-white-400">
            Explore placement opportunities and find the right one for you with
            our complete support.
          </p>
        </div>
        <div className="mt-10">
          <Image
            src="/image/placement1.jpg"
            alt="Five Steps Towards 100% Job Guarantee"
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

function ExpertTrainingSection({ smallCard_Data }) {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h4 className="text-2xl md:text-3xl font-bold">
          Expert Training and Placement Institute
        </h4>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <SmallCards data={smallCard_Data} />
      </div>
    </div>
  );
}

function PlaneIconSection() {
  return (
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
  );
}
