// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Vinay",
//     role: "Founder & CEO",
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     name: "Manoj",
//     role: "CTO",
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     name: "Manjunath",
//     role: "Administrative Manager",
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     name: "Sumanth",
//     role: "Project Manager",
//     image: "/placeholder.svg?height=400&width=400",
//   },
//   {
//     name: "David Lee",
//     role: "Industry Expert",
//     image: "/placeholder.svg?height=400&width=400",
//   },
// ];

// export default function TestimonialCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full bg-black px-4 md:px-6 py-10 md:py-20">
//       <div className="container mx-auto max-w-[1390px] h-auto md:h-[878px]">
//         <div className="relative mb-8 md:mb-16">
//           <h2 className="text-4xl md:text-[83.86px] leading-tight md:leading-[109.02px] text-white font-bold" style={{ fontFamily: "var(--fontfamilyFont3)" }}>
//             Our reputation
//             <br />
//             says it all
//           </h2>
//           <Image
//             src="/image/UnderL.png"
//             alt=""
//             width={300}
//             height={20}
//             className="absolute top-[90%] md:top-[90px] left-0 w-1/2 md:w-auto"
//           />
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-1000 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / (windowWidth < 768 ? 1 : 3))}%)`,
//             }}
//           >
//             {[...testimonials, ...testimonials.slice(0, 2)].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
//                 style={{
//                   opacity: 1,
//                   transition: "transform 0.5s ease-in-out",
//                   transform: `scale(${
//                     index >= currentIndex % testimonials.length &&
//                     index < (currentIndex % testimonials.length) + (windowWidth < 768 ? 1 : 3)
//                       ? 1
//                       : 0.9
//                   })`,
//                 }}
//               >
//                 <div className="relative group mx-auto max-w-[309.17px]">
//                   <div
//                     className="absolute inset-0 border-2 border-dashed border-red-500"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       top: "0px",
//                       left: "0px",
//                       borderRadius: "10px 0px 0px 0px",
//                     }}
//                   ></div>

//                   <div className="w-full h-auto md:h-[452.6px] bg-black rounded-[10px_0_0_0] pt-[22px]" style={{ padding: "22px 0 0 0" }}>
//                     <div className="flex flex-col items-center gap-[21px] p-4">
//                       <div className="w-32 h-32 md:w-[192px] md:h-[192px] bg-gray-800 overflow-hidden">
//                         <Image
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           width={192}
//                           height={192}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <h3 className="text-lg md:text-xl font-semibold text-white">
//                         {testimonial.name}
//                       </h3>
//                       <p className="text-sm md:text-base text-gray-300">
//                         {testimonial.role}
//                       </p>
//                       <div className="flex gap-4 mt-2
// ">
//                         {["G", "X", "in"].map((letter, i) => (
//                           <button key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center text-sm md:text-base">
//                             {letter}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export const testimonials = [
  {
    id: 1,
    image: "/image/Courses/userplaceholder.png",
    name: "Akash Jaiswal",
    position: "Support Engineer Accenture",
    text: "The best thing about Ignited Minds is their approach towards every individual student. They take care of their students until they are satisfied with the training & placements. And that's what makes them one of a kind! Thank you Ignited Minds for the amazing learning experience.",
  },
  {
    id: 2,
    image: "/image/Courses/userplaceholder.png",
    name: "Vijay Thakur",
    position: "Entrepreneur",
    text: 'I enjoyed the training by Ignited Minds thoroughly. Their motto - "Learning by Doing" has instilled in me the sense of experimental learning. After the training, I have seen improvement in myself as I keep implementing those skills in my day-to-day life also.',
  },
  {
    id: 3,
    image: "/image/Courses/userplaceholder.png",
    name: "Dilip Singh",
    position: "Software Developer",
    text: "Ignited Minds provided me with an excellent learning experience. The instructors were knowledgeable and the curriculum was up-to-date with industry standards.",
  },
  {
    id: 4,
    image: "/image/Courses/userplaceholder.png",
    name: "Manjunath N",
    position: "Data Analyst",
    text: "The practical approach to learning at Ignited Minds has been invaluable in my career. I gained hands-on experience that I use daily in my job.",
  },
  {
    id: 5,
    image: "/image/Courses/userplaceholder.png",
    name: "Chetan Gowda",
    position: "Software Engineer",
    text: "The hands-on projects at Ignited Minds helped me bridge the gap between theory and practice, enabling me to apply my skills directly in the workplace.",
  },
  {
    id: 6,
    image: "/image/Courses/userplaceholder.png",
    name: "Anusha G",
    position: "Marketing Specialist",
    text: "The innovative approach at Ignited Minds gave me the confidence to tackle real-world challenges. The skills I gained have been essential to my growth in the marketing field.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % (testimonials.length - 2)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-20 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
        >
          Our reputation speaks for itself
        </motion.h2>
        <motion.div variants={fadeInUp} className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials
                .slice(currentTestimonialIndex, currentTestimonialIndex + 3)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={index === 2 ? "hidden lg:block" : ""}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-red-900 to-black">
                      <CardContent className="p-6">
                        <motion.div
                          className="flex flex-col items-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                            <Image
                              src={testimonial.image}
                              alt={`${testimonial.name}'s testimonial`}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-center">
                            <motion.p
                              className="text-lg font-semibold text-red-400 mb-1"
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {testimonial.name}
                            </motion.p>
                            <motion.p
                              className="text-sm text-gray-400 mb-4"
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              {testimonial.position}
                            </motion.p>
                            <motion.p
                              className="text-white leading-relaxed italic"
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              "{testimonial.text}"
                            </motion.p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
