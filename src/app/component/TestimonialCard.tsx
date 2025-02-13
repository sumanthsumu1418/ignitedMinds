"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Vinay",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Manoj",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Manjunath",
    role: "Administrative Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sumanth",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Suraj Gowda",
    role: "Industry Expert",
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-black px-4 md:px-6 py-10 md:py-20">
      <div className="container mx-auto max-w-[1390px] h-auto md:h-[878px]">
        <div className="relative mb-8 md:mb-16">
          <h2
            className="text-4xl md:text-[83.86px] leading-tight md:leading-[109.02px] bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text font-bold relative"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Our Mentors says it all
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / (windowWidth < 768 ? 1 : 3))
              }%)`,
            }}
          >
            {[...testimonials, ...testimonials.slice(0, 2)].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
                  style={{
                    opacity: 1,
                    transition: "transform 0.5s ease-in-out",
                    transform: `scale(${
                      index >= currentIndex % testimonials.length &&
                      index <
                        (currentIndex % testimonials.length) +
                          (windowWidth < 768 ? 1 : 3)
                        ? 1
                        : 0.9
                    })`,
                  }}
                >
                  <div className="relative group mx-auto max-w-[309.17px]">
                    <div
                      className="absolute inset-0 border-2 border-dashed border-red-400"
                      style={{
                        width: "100%",
                        height: "100%",
                        top: "0px",
                        left: "0px",
                        borderRadius: "10px 0px 0px 0px",
                      }}
                    ></div>

                    <div
                      className="w-full h-auto md:h-[452.6px] bg-gray-900 rounded-[10px_0_0_0] pt-[22px]"
                      style={{ padding: "22px 0 0 0" }}
                    >
                      <div className="flex flex-col items-center gap-[21px] p-4">
                        <div className="w-32 h-32 md:w-[192px] md:h-[192px] bg-gray-800 overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm md:text-base text-red-300">
                          {testimonial.role}
                        </p>
                        <div className="flex gap-4 mt-2">
                          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors text-sm md:text-base">
                            G
                          </button>
                          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors text-sm md:text-base">
                            X
                          </button>
                          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors text-sm md:text-base">
                            in
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
