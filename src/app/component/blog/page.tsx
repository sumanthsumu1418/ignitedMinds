"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const WhyChooseUs: React.FC = () => {
  const headingRef = useRef(null);
  const svgRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      svgRef.current,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <div className="text-center mb-16 relative bg-gradient-to-r from-purple-50 to-purple-200 px-4 py-8 sm:py-12">
      <h2
        ref={headingRef}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4"
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
        className="mx-auto"
        style={{ maxWidth: "547px", marginBottom: "20px" }}
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
            <stop stopColor="#0063F4" />
            <stop offset="1" stopColor="#00F0AA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_83_159"
            x1="1.32172"
            y1="6.40797"
            x2="9.48162"
            y2="48.5804"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0063F4" />
            <stop offset="1" stopColor="#00F0AA" />
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
        className="text-gray-800 text-sm sm:text-base md:text-lg px-4"
        style={{
          fontFamily: "var(--fontfamilyFont1)",
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[400px] bg-white shadow-lg transition-all ease-in-out transform hover:scale-105 rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-48 sm:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={toggleLike}
          className="absolute top-15 right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-100 transition-colors flex items-center justify-center shadow-md"
          aria-label="Like"
        >
          <Heart
            className={`w-5 h-5 ${liked ? "text-red-500" : "text-gray-700"}`}
          />
        </button>
      </div>
      <div className="p-4 bg-[#FFF7FC] flex-1 flex flex-col justify-between">
        <h3
          className="text-lg sm:text-xl font-bold mb-2 text-gray-800"
          style={{
            fontFamily: "var(--fontfamilyFont2)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-700"
          style={{
            fontFamily: "var(--fontfamilyFont2)",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const features = [
    {
      title: "IT Experts as Trainers",
      description:
        "Learning a technology with a professional who is well expertise in that solves 60% of your needs.",
      image: "image/blog1.png",
    },
    {
      title: "Fully Hands-on Training",
      description:
        "We support any training with more practical classes. So, we always prefer to give hands-on training.",
      image: "image/blog2.png",
    },
    {
      title: "Affordable Fees",
      description:
        "We are dead cheap in fees. Quality training with less price is only at Ignited Minds.",
      image: "image/blog3.png",
    },
    {
      title: "Flexible Timings",
      description:
        "We give the students flexibility timings, as we have many trainers and the number is still increasing.",
      image: "image/blog4.png",
    },
    {
      title: "Lab Support",
      description:
        "If you need software assistance, we are here to back you up. Bring your laptop and load the required softwares.",
      image: "image/blog5.png",
    },
    {
      title: "Interview Preparation",
      description:
        "Every course is covered with interview point questions and real-time scenarios.",
      image: "image/blog6.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="w-full bg-gradient-to-r from-purple-50 to-purple-200 px-4 py-8 sm:py-16">
      <div className="max-w-[1440px] mx-auto">
        <Head>
          <title>My Next.js App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <WhyChooseUs />

        {/* Slider for Mobile */}
        <div className="sm:hidden relative mt-8 sm:mt-16">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft />
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {features.map((feature, index) => (
                <div className="min-w-full flex justify-center" key={index}>
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow z-10"
            aria-label="Next Slide"
          >
            <ChevronRight />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
