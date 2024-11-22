"use client"; // This marks the file as a client-side component

import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-50 to-purple-200 px-4 mt-12 md:mt-24 overflow-hidden">
      <main className="relative flex flex-col md:flex-row-reverse items-center md:justify-between w-full px-4 space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Arc image */}
          <img
            src="image/arc.png"
            alt="arc"
            className="absolute top-14 left-1/2 transform -translate-x-1/2 z-0 rotate-[18deg]"
          />
          {/* Graduate Lady Image */}
          <img
            src="image/lady.png"
            alt="Graduate"
            className="h-25 w-auto relative mt-10 md:mr-20"
          />

          {/* Java Full Stack Text Box */}
          <span className="absolute top-4 left-0 transform px-2 pt-1 bg-gray-100 rounded text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl">
            Java Full Stack
            <span className="text-yellow-500 px-1 py-2 text-sm">★</span>
          </span>

          {/* React Text Box */}
          <span className="absolute top-20 right-0 transform px-2 pt-1 bg-gray-100 rounded text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl sm:right-12">
            React<span className="text-yellow-500 text-sm px-2">★</span>
          </span>

          {/* Oracle Text Box */}
          <span className="absolute top-48 right-0 transform px-1 pt-1 bg-gray-100 rounded text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl sm:top-60">
            Data Analyst
            <span className="text-yellow-500 text-sm px-2">★</span>
          </span>

          {/* Python Spark Text Box */}
          <span className="absolute bottom-24 left-0 transform px-2 pt-1 bg-gray-100 rounded text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl sm:bottom-36 sm:-left-24">
            Python Data Engineering
            <span className="text-yellow-500 text-sm py-2">★</span>
          </span>

          {/* Snowflake Online Training Text Box */}
          <span className="absolute bottom-0 left-1/3 transform -translate-x-1/2 px-2 pt-1 bg-gray-100 rounded text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl">
            Snowflake/ <br />
            ETL Testing
            <span className="text-yellow-500 text-sm px-4 py-0">★</span>
          </span>

          {/* AWS DevOps Text Box */}
          <span className="absolute bottom-36 right-0 transform px-2 pt-1 bg-gray-100 rounded-md text-black font-semibold text-xl shadow z-20 tracking-wider sm:text-2xl sm:bottom-44 sm:right-10">
            AWS Cloud Engineering
            <span className="text-yellow-500 text-sm py-2">★</span>
          </span>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start space-y-4 md:ml-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-red-500 bg-clip-text text-transparent text-center md:text-left">
            Attention Job Seakers!
          </h2>
          <p className="text-3xl md:text-5xl font-semibold text-gray-800 leading-normal text-center md:text-left">
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              Learn
            </span>{" "}
            by Experts <br /> Get hired in <br />
            corporates
            <img
              src="image/line1.png"
              alt="line"
              className="h-3 w-[58%] relative z-10 ml-2 md:mr-20"
            />
            <img
              src="image/line2.png"
              alt="line"
              className="h-3 w-[40%] relative z-10 ml-14 md:mr-20"
            />
          </p>
          <p className="text-sm text-gray-700 pt-4 pb-6 text-center md:text-left">
            We will provide industry-based job training with <br />
            100% placement.
          </p>

          {/* Explore Now Button */}
          <button className="relative w-[242px] h-[59px] overflow-hidden border-2 border-black text-black rounded-[5px] font-semibold shadow-lg flex items-center group">
            {/* Arrow with initial black background */}
            <span className="relative z-10 text-white text-2xl bg-black md:px-6 md:py-3 px-4 py-3">
              →
            </span>
            {/* Button Text */}
            <span className="relative text-lg z-10 pl-4 pr-4 transition-all duration-500 group-hover:text-white">
              Explore Now
            </span>
            {/* Expanding Background Overlay */}
            <span className="absolute inset-0 bg-black transition-transform duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
          </button>

          {/* Diamond Image */}
          <img
            src="image/diamond.png"
            alt="Diamond Shape"
            className="mt-4 mx-auto md:ml-80 h-16 w-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
