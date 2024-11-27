

"use client";

import { FC } from "react";
import Image from "next/image";

const Home: FC = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-64px)] flex items-center">
        {/* Text Section - Left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-red-500">
            Attention Job Seekers!
          </h2>
          <div className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-red-400">Learn</span> by Experts <br /> 
            Get hired in <br />
            corporates
            <div className="relative mt-4">
              <Image
                src="/image/line1.png"
                alt="line"
                width={250}
                height={15}
                className="relative z-10"
              />
              <Image
                src="/image/line2.png"
                alt="line"
                width={175}
                height={15}
                className="relative z-10 mt-2 ml-10"
              />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-xl">
            We will provide industry-based job training with 100% placement.
          </p>

          {/* Explore Now Button */}
          <button className="relative w-64 h-16 overflow-hidden border-2 border-red-500 text-red-500 rounded-md font-semibold shadow-lg flex items-center group mt-8">
            <span className="relative z-10 text-white text-2xl bg-red-500 px-6 py-4">
              →
            </span>
            <span className="relative text-xl z-10 pl-4 pr-4 transition-all duration-500 group-hover:text-white">
              Explore Now
            </span>
            <span className="absolute inset-0 bg-red-500 transition-transform duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
          </button>
        </div>

        {/* Image Section - Right side */}
        <div className="hidden lg:block w-1/2 relative h-[600px]">
          {/* Arc image */}
          <Image
            src="/image/arc.png"
            alt="arc"
            width={400}
            height={400}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
          />
          {/* Graduate Lady Image */}
          <Image
            src="/image/lady.png"
            alt="Graduate"
            width={500}
            height={600}
            className="relative z-10 mx-auto"
          />

          {/* Course Text Boxes */}
          {[
            { text: "Java Full Stack", position: "top-4 left-0" },
            { text: "React", position: "top-20 right-0" },
            { text: "Data Analyst", position: "top-48 right-0" },
            { text: "Python Data Engineering", position: "bottom-32 left-0" },
            { text: "Snowflake/ ETL Testing", position: "bottom-16 left-1/3" },
            { text: "AWS Cloud Engineering", position: "bottom-48 right-0" },
          ].map((course, index) => (
            <span
              key={index}
              className={`absolute px-4 py-2 bg-gray-800/90 rounded text-white font-semibold text-sm md:text-base shadow-lg z-20 ${course.position}`}
            >
              {course.text}
              <span className="text-red-500 text-xs px-1">★</span>
            </span>
          ))}

          {/* Diamond Image */}
          {/* <Image
            src="/image/diamond.png"
            alt="Diamond Shape"
            width={80}
            height={80}
            className="absolute bottom-0 right-0 z-10"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

