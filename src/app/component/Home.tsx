// "use client";

// import { FC } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Home: FC = () => {
//   return (
//     <div className="w-full bg-black text-white">
//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-64px)] flex items-center">
//         {/* Text Section - Left side */}
//         <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
//           <h2 className="text-5xl md:text-6xl font-bold text-red-500">
//             Attention Job Seekers!
//           </h2>
//           <div className="text-4xl md:text-5xl font-semibold leading-tight">
//             <span className="text-red-400">Learn</span> by Experts <br />
//             Get hired in <br />
//             corporates
//             <div className="relative mt-4">
//               <Image
//                 src="/image/line1.png"
//                 alt="line"
//                 width={250}
//                 height={15}
//                 className="relative z-10"
//               />
//               <Image
//                 src="/image/line2.png"
//                 alt="line"
//                 width={175}
//                 height={15}
//                 className="relative z-10 mt-2 ml-10"
//               />
//             </div>
//           </div>
//           <p className="text-xl text-gray-300 max-w-xl">
//             We will provide industry-based job training with 100% placement.
//           </p>

//           {/* Explore Now Button */}
//           <Link href="/registration">
//             <button className="relative w-64 h-16 overflow-hidden border-2 border-red-500 text-red-500 rounded-md font-semibold shadow-lg flex items-center group mt-8">
//               <span className="relative z-10 text-white text-2xl bg-red-500 px-6 py-4">
//                 →
//               </span>
//               <span className="relative text-xl z-10 pl-4 pr-4 transition-all duration-500 group-hover:text-white">
//                 Explore Now
//               </span>
//               <span className="absolute inset-0 bg-red-500 transition-transform duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
//             </button>
//           </Link>
//         </div>

//         {/* Image Section - Right side */}
//         <div className="hidden lg:block w-1/2 relative h-[600px]">
//           {/* Arc image */}
//           <Image
//             src="/image/arc.png"
//             alt="arc"
//             width={400}
//             height={400}
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
//           />
//           {/* Graduate Lady Image */}
//           <Image
//             src="/image/lady.png"
//             alt="Graduate"
//             width={500}
//             height={600}
//             className="relative z-10 mx-auto"
//           />

//           {/* Course Text Boxes */}
//           {[
//             { text: "Java Full Stack", position: "top-4 left-0" },
//             { text: "React", position: "top-20 right-0" },
//             { text: "Data Analyst", position: "top-48 right-0" },
//             { text: "Python Data Engineering", position: "bottom-32 left-0" },
//             { text: "Snowflake/ ETL Testing", position: "bottom-16 left-1/3" },
//             { text: "AWS Cloud Engineering", position: "bottom-48 right-0" },
//           ].map((course, index) => (
//             <span
//               key={index}
//               className={`absolute px-4 py-2 bg-gray-800/90 rounded text-white font-semibold text-sm md:text-base shadow-lg z-20 ${course.position}`}
//             >
//               {course.text}
//               <span className="text-red-500 text-xs px-1">★</span>
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

//

// "use client";

// import { FC, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useAnimation, useInView } from "framer-motion";
// import Script from "next/script";

// const Home: FC = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <>
//       <Script id="structured-data" type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "EducationalOrganization",
//           name: "Ignited Minds Learning",
//           description: "Career-Focused IT Training & Placement",
//           url: "https://www.ignitedmindslearning.com",
//           logo: "https://www.ignitedmindslearning.com/logo.png",
//           sameAs: [
//             "https://www.facebook.com/ignitedmindslearning",
//             "https://www.twitter.com/ignitedminds",
//             "https://www.linkedin.com/company/ignited-minds-learning",
//           ],
//           address: {
//             "@type": "PostalAddress",
//             streetAddress: "123 Tech Street",
//             addressLocality: "Bangalore",
//             addressRegion: "Karnataka",
//             postalCode: "560001",
//             addressCountry: "IN",
//           },
//           contactPoint: {
//             "@type": "ContactPoint",
//             telephone: "+91-8296068323",
//             contactType: "customer service",
//           },
//           offers: {
//             "@type": "Offer",
//             description: "IT Training Courses",
//             price: "0",
//             priceCurrency: "INR",
//           },
//         })}
//       </Script>
//       <section className="w-full bg-black text-white pt-20 md:pt-24 lg:pt-28">
//         {/* Main content */}
//         <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
//           {/* Text Section - Left side */}
//           <motion.div
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={containerVariants}
//             className="w-full lg:w-1/2 flex flex-col items-start space-y-6 mb-10 lg:mb-0"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 leading-tight"
//             >
//               Empower Your Career with Top IT Courses and Expert Mentorship
//             </motion.h2>
//             <motion.div
//               variants={itemVariants}
//               className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
//             >
//               <span className="text-red-400">Learn</span> by Experts <br />
//               Get hired in <br />
//               corporates
//               <div className="relative mt-4">
//                 <Image
//                   src="/image/line1.png"
//                   alt="Decorative underline"
//                   width={250}
//                   height={15}
//                   className="relative z-10"
//                   priority
//                 />
//                 <Image
//                   src="/image/line2.png"
//                   alt="Decorative underline"
//                   width={175}
//                   height={15}
//                   className="relative z-10 mt-2 ml-10"
//                   priority
//                 />
//               </div>
//             </motion.div>
//             <motion.p
//               variants={itemVariants}
//               className="text-lg sm:text-xl text-gray-300 max-w-xl"
//             >
//               Master industry-aligned IT courses with hands-on projects and
//               expert mentorship. We provide industry-based job training with
//               100% placement assurance.
//             </motion.p>

//             {/* Explore Now Button */}
//             <motion.div variants={itemVariants}>
//               <Link
//                 href="/registration"
//                 className="relative inline-block w-64 h-16 overflow-hidden border-2 border-red-500 text-red-500 rounded-md font-semibold shadow-lg group mt-8"
//               >
//                 <span className="absolute inset-0 bg-red-500 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
//                 <span className="relative z-10 flex items-center justify-center h-full transition-colors duration-300 ease-out group-hover:text-white">
//                   <span className="mr-2">Explore Now</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Image Section - Right side */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="hidden lg:block w-1/2 relative h-[600px]"
//           >
//             {/* Arc image */}
//             <Image
//               src="/image/arc.png"
//               alt="Decorative arc background"
//               width={400}
//               height={400}
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
//               priority
//             />
//             {/* Graduate Image */}
//             <Image
//               src="/image/lady.png"
//               alt="IT professional with laptop"
//               width={500}
//               height={600}
//               className="relative z-10 mx-auto"
//               priority
//             />

//             {/* Course Text Boxes */}
//             {[
//               { text: "Java Full Stack", position: "top-4 left-0" },
//               { text: "React", position: "top-20 right-0" },
//               { text: "Data Analyst", position: "top-48 right-0" },
//               { text: "Python Data Engineering", position: "bottom-32 left-0" },
//               {
//                 text: "Snowflake/ ETL Testing",
//                 position: "bottom-16 left-1/3",
//               },
//               { text: "AWS Cloud Engineering", position: "bottom-48 right-0" },
//             ].map((course, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                 className={`absolute px-4 py-2 bg-gray-800/90 rounded text-white font-semibold text-sm md:text-base shadow-lg z-20 ${course.position}`}
//               >
//                 {course.text}
//                 <span className="text-red-500 text-xs px-1" aria-hidden="true">
//                   ★
//                 </span>
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

// "use client";

// import { FC, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useAnimation, useInView } from "framer-motion";
// import Head from "next/head";

// const Home: FC = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <>
//       <Head>
//         <link rel="canonical" href="https://www.ignitedmindslearning.com" />
//       </Head>
//       <main className="w-full bg-black text-white pt-20 md:pt-24 lg:pt-28">
//         {/* Main content */}
//         <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
//           {/* Text Section - Left side */}
//           <motion.div
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={containerVariants}
//             className="w-full lg:w-1/2 flex flex-col items-start space-y-6 mb-10 lg:mb-0"
//           >
//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 leading-tight"
//             >
//               Empower Your Career with Top IT Courses and Expert Mentorship
//             </motion.h1>
//             <motion.div
//               variants={itemVariants}
//               className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
//             >
//               <span className="text-red-400">Learn</span> by Experts <br />
//               Get hired in <br />
//               corporates
//               <div className="relative mt-4">
//                 <Image
//                   src="/image/line1.png"
//                   alt="Decorative underline"
//                   width={250}
//                   height={15}
//                   className="relative z-10"
//                   priority
//                 />
//                 <Image
//                   src="/image/line2.png"
//                   alt="Decorative underline"
//                   width={175}
//                   height={15}
//                   className="relative z-10 mt-2 ml-10"
//                   priority
//                 />
//               </div>
//             </motion.div>
//             <motion.p
//               variants={itemVariants}
//               className="text-lg sm:text-xl text-gray-300 max-w-xl"
//             >
//               Master industry-aligned IT courses with hands-on projects and
//               expert mentorship. We provide industry-based job training with
//               100% placement assurance.
//             </motion.p>

//             {/* Explore Now Button */}
//             <motion.div variants={itemVariants}>
//               <Link
//                 href="/registration"
//                 className="relative inline-block w-64 h-16 overflow-hidden border-2 border-red-500 text-red-500 rounded-md font-semibold shadow-lg group mt-8"
//               >
//                 <span className="absolute inset-0 bg-red-500 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
//                 <span className="relative z-10 flex items-center justify-center h-full transition-colors duration-300 ease-out group-hover:text-white">
//                   <span className="mr-2">Explore Now</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Image Section - Right side */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="hidden lg:block w-1/2 relative h-[600px]"
//           >
//             {/* Arc image */}
//             <Image
//               src="/image/arc.png"
//               alt="Decorative arc background"
//               width={400}
//               height={400}
//               className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
//               priority
//             />
//             {/* Graduate Image */}
//             <Image
//               src="/image/lady.png"
//               alt="IT professional with laptop"
//               width={500}
//               height={600}
//               className="relative z-10 mx-auto"
//               priority
//             />

//             {/* Course Text Boxes */}
//             {[
//               { text: "Java Full Stack", position: "top-4 left-0" },
//               { text: "React", position: "top-20 right-0" },
//               { text: "Data Analyst", position: "top-48 right-0" },
//               { text: "Python Data Engineering", position: "bottom-32 left-0" },
//               {
//                 text: "Snowflake/ ETL Testing",
//                 position: "bottom-16 left-1/3",
//               },
//               { text: "AWS Cloud Engineering", position: "bottom-48 right-0" },
//             ].map((course, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                 className={`absolute px-4 py-2 bg-gray-800/90 rounded text-white font-semibold text-sm md:text-base shadow-lg z-20 ${course.position}`}
//               >
//                 {course.title}
//                 <span className="text-red-500 text-xs px-1" aria-hidden="true">
//                   ★
//                 </span>
//               </motion.span>
//             ))}
//           </motion.div>
//         </div>
//       </main>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "EducationalOrganization",
//             name: "Ignited Minds Learning",
//             description: "Career-Focused IT Training & Placement",
//             url: "https://www.ignitedmindslearning.com",
//             logo: "https://www.ignitedmindslearning.com/logo.png",
//             sameAs: [
//               "https://www.facebook.com/ignitedmindslearning",
//               "https://www.twitter.com/ignitedminds",
//               "https://www.linkedin.com/company/ignited-minds-learning",
//             ],
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "123 Tech Street",
//               addressLocality: "Bangalore",
//               addressRegion: "Karnataka",
//               postalCode: "560001",
//               addressCountry: "IN",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+91-8296068323",
//               contactType: "customer service",
//             },
//             offers: {
//               "@type": "Offer",
//               description: "IT Training Courses",
//               price: "0",
//               priceCurrency: "INR",
//             },
//           }),
//         }}
//       />
//     </>
//   );
// };

// export default Home;

"use client";

import { FC, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Head from "next/head";

const Home: FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.ignitedmindslearning.com" />
      </Head>
      <main className="w-full bg-black text-white pt-20 md:pt-24 lg:pt-28">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
          {/* Text Section - Left side */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col items-start space-y-6 mb-10 lg:mb-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 leading-tight"
            >
              Empower Your Career with Top IT Courses and Expert Mentorship
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
              <span className="text-red-400">Learn</span> by Experts <br />
              Get hired in <br />
              corporates
              <div className="relative mt-4">
                <Image
                  src="/image/line1.png"
                  alt="Decorative underline"
                  width={250}
                  height={15}
                  className="relative z-10"
                  priority
                />
                <Image
                  src="/image/line2.png"
                  alt="Decorative underline"
                  width={175}
                  height={15}
                  className="relative z-10 mt-2 ml-10"
                  priority
                />
              </div>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-xl"
            >
              Master industry-aligned IT courses with hands-on projects and
              expert mentorship. We provide industry-based job training with
              100% placement assurance.
            </motion.p>

            {/* Explore Now Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/registration"
                className="relative inline-block w-64 h-16 overflow-hidden border-2 border-red-500 text-red-500 rounded-md font-semibold shadow-lg group mt-8"
              >
                <span className="absolute inset-0 bg-red-500 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center justify-center h-full transition-colors duration-300 ease-out group-hover:text-white">
                  <span className="mr-2">Explore Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block w-1/2 relative h-[600px]"
          >
            {/* Arc image */}
            <Image
              src="/image/arc.png"
              alt="Decorative arc background"
              width={400}
              height={400}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
              priority
            />
            {/* Graduate Image */}
            <Image
              src="/image/lady.png"
              alt="IT professional with laptop"
              width={500}
              height={600}
              className="relative z-10 mx-auto"
              priority
            />

            {/* Course Text Boxes */}
            {[
              { text: "Java Full Stack", position: "top-4 left-0" },
              { text: "React", position: "top-20 right-0" },
              { text: "Data Analyst", position: "top-48 right-0" },
              { text: "Python Data Engineering", position: "bottom-32 left-0" },
              {
                text: "Snowflake/ ETL Testing",
                position: "bottom-16 left-1/3",
              },
              { text: "AWS Cloud Engineering", position: "bottom-48 right-0" },
            ].map((course, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className={`absolute px-4 py-2 bg-gray-800/90 rounded text-white font-semibold text-sm md:text-base shadow-lg z-20 ${course.position}`}
              >
                {course.text}{" "}
                <span className="text-red-500 text-xs px-1" aria-hidden="true">
                  ★
                </span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Ignited Minds Learning",
            description: "Career-Focused IT Training & Placement",
            url: "https://www.ignitedmindslearning.com",
            logo: "https://www.ignitedmindslearning.com/logo.png",
            sameAs: [
              "https://www.facebook.com/ignitedmindslearning",
              "https://www.twitter.com/ignitedminds",
              "https://www.linkedin.com/company/ignited-minds-learning",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Tech Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8296068323",
              contactType: "customer service",
            },
            offers: {
              "@type": "Offer",
              description: "IT Training Courses",
              price: "0",
              priceCurrency: "INR",
            },
          }),
        }}
      />
    </>
  );
};

export default Home;
