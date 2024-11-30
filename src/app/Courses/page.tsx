"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";
import { Card, CardContent } from "../component/ui/card";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const carouselImages = [
  { src: "/image/Courses/j1.jpeg", alt: "Java Course" },
  { src: "/image/Courses/p1.jpeg", alt: "Python Course" },
  { src: "/image/Courses/r1.png", alt: "React Course" },
  { src: "/image/Courses/s1.jpeg", alt: "Snowflake Course" },
  { src: "/image/Courses/d1.jpeg", alt: "Data Analysis Course" },
  { src: "/image/Courses/a1.jpeg", alt: "AWS Course" },
];

const courses = [
  {
    name: "Java Full Stack",
    duration: "2 Months",
    price: "20,000",
    image: "/image/Courses/jfsbuy.jpeg",
    link: "java-full-stack",
  },
  {
    name: "Python Data Engineering",
    duration: "2 Months",
    price: "10,000",
    image: "/image/Courses/pybuy.jpeg",
    link: "python-data-engineering",
  },
  {
    name: "AWS cloud engineering",
    duration: "2 Months",
    price: "15,000",
    image: "/image/Courses/awsbuy.jpeg",
    link: "AWS-Cloud-Engineering",
  },
  {
    name: "Snowflakes/ETL Testing",
    duration: "2 Months",
    price: "12,000",
    image: "/image/Courses/snowbuy2.jpg",
    link: "snowflake",
  },
  {
    name: "Data analyst",
    duration: "2 Months",
    price: "16,000",
    image: "/image/Courses/dabuy.jpeg",
    link: "data-analyst",
  },
  {
    name: "React",
    duration: "2 Months",
    price: "20,000",
    image: "/image/Courses/buy1.jpg",
    link: "react",
  },
];

const achievements = [
  { title: "Training Centres", count: 100 },
  { title: "Students Trained", count: 10000 },
  { title: "Years Legacy of Success", count: 5 },
];

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

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function CoursesPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % (testimonials.length - 2)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="min-h-screen bg-black text-white"
    >
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 py-8 pt-20">
        {/* Hero Carousel Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative overflow-hidden mb-12 h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-xl"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={carouselImages[currentImage].src}
                alt={carouselImages[currentImage].alt}
                layout="fill"
                objectFit="contain"
                quality={100}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Main Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-red-500 leading-tight"
          >
            A Technical Institute That Makes You
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-red-400"
          >
            Professional
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg mb-6 text-white leading-relaxed max-w-3xl mx-auto"
          >
            Learn from passionate instructors with expertise who believe in
            practical teaching methodologies. Personal counseling to understand
            academic performance, initial screening, aspirations, accessing
            individual strong/weak areas and customized curriculum fit for each
            individual. Explore our courses below…
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/registration"
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-lg inline-block"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Courses Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-red-500"
          >
            Courses
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="bg-gradient-to-br from-red-900 to-black rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={course.image}
                    alt={course.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">
                    {course.name}
                  </h3>
                  <p className="text-white mb-4">
                    ⏰ {course.duration} &nbsp;&nbsp;&nbsp; 💸 Rs {course.price}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={course.link}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 inline-block"
                    >
                      KNOW MORE
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Learning Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 items-center gap-8 mb-12"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-red-500 leading-tight">
              We're Changing the Ways You Learn New Things
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white leading-relaxed">
              Experience an unparalleled learning journey with innovative
              techniques and exceptional mentorship. We're here to ensure your
              growth is exponential and impactful.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/image/Courses/newage.jpg"
              alt="Innovative Learning"
              width={660}
              height={660}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-br from-red-900 to-black rounded-lg shadow-md p-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-red-500"
          >
            Milestones Achieved
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  className="text-4xl sm:text-5xl font-bold text-red-400 mb-2"
                >
                  {achievement.count}+
                </motion.div>
                <div className="text-lg sm:text-xl text-white">
                  {achievement.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Reputation Section */}
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
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
            >
              Our reputation speaks for itself
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
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

        {/* Career Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-900 to-black rounded-lg shadow-lg p-8 mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
              <motion.div
                className="text-red-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Plane className="w-12 h-12 sm:w-16 sm:h-16" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 max-w-2xl text-center sm:text-left">
                Strengthen your career prospects and get placed in renowned
                companies
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/registration"
                className="px-6 sm:px-8 py-3 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 font-semibold text-sm sm:text-base inline-block"
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </main>
    </motion.div>
  );
}
