"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {Card, CardContent} from "./ui/card";

const testimonials = [
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

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TestimonialSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-20 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Our reputation speaks for itself
        </motion.h2>

        <motion.div variants={fadeInUp} className="relative overflow-hidden">
          <AnimatePresence>
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
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
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
                              className="text-lg font-semibold text-purple-800 mb-1"
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {testimonial.name}
                            </motion.p>
                            <motion.p
                              className="text-sm text-gray-600 mb-4"
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              {testimonial.position}
                            </motion.p>
                            <motion.p
                              className="text-gray-700 leading-relaxed italic"
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
}
