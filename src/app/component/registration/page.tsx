"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Footer from "../Footer";
import Register_1 from "./Sign";
import Navbar from "../Navbar";

const Register = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
            } else {
              entry.target.classList.remove("animate-visible"); // Reset animation
            }
          });
        },
        { threshold: 0.2 }
      );

      const elements =
        sectionRef.current?.querySelectorAll(".animate-on-scroll");
      elements?.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      {/* Register Section */}
      <Navbar />
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-16 py-12 bg-black min-h-screen"
      >
        <div className="flex-1 animate-on-scroll opacity-0 transform translate-y-10">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-blue-900 tracking-wide leading-tight animate-on-scroll opacity-0 transform -translate-x-10">
            Register Today <br />
            With Us!
          </h1>
          <p className="font-sans text-lg lg:text-2xl text-white font-medium mt-4 animate-on-scroll opacity-0 transform translate-x-10">
            Are you ready to learn?
          </p>
          <p className="font-sans text-base lg:text-lg text-white leading-7 mt-4 animate-on-scroll opacity-0 transform translate-y-10">
            Join our courses for a wonderful learning experience with a
            technical backset in addition to your professional development.
          </p>
        </div>
        <div className="flex-1 w-full lg:w-auto flex justify-center">
          <Image
            src="/image/team.jpg"
            alt="Team discussing"
            width={400}
            height={300}
            className="rounded-lg shadow-lg animate-on-scroll opacity-0 transform scale-75"
            priority
          />
        </div>
      </div>

      <Register_1 />
      <Footer />
    </>
  );
};

export default Register;