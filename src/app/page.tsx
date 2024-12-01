import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Course from "./component/course/Page";
import About from "./component/about/page";
import Blog from "./component/blog/page";
import Component from "./component/placement/page";
import ContactForm from "./component/contact/page";
import Footer from "./component/Footer";
import Testimonials from "./component/TestimonialCarousel";

const HomePage: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-black">
    <Navbar />
    <div className="flex-grow pt-16">
      {" "}
      <Home />
      <Course />
      <About />
      <Blog />
      <Component />
      <Testimonials />
      <ContactForm />
    </div>
    <Footer />
  </div>
);

export default HomePage;
