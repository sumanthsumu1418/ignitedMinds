import React from "react";
import { Metadata } from "next";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Course from "./component/course/Page";
import About from "./component/about/page";
import Blog from "./component/blog/page";
import Component from "./component/placement/page";
import ContactForm from "./component/contact/page";
import Footer from "./component/Footer";
import Testimonials from "./component/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Software Training Institute in Yelahanka | Ignited Minds Learning",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-16">
        <h1 className="sr-only">
          Empower Your Career with Top IT Courses and Expert Mentorship
        </h1>
        <Home />
        <Course />
        <About />
        <Blog />
        <Component />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
