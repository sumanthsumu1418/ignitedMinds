import About from "./component/about/page";
import Blog from "./component/blog/page";
import ContactForm from "./component/contact/page";
import Course from "./component/course/Page";
import Footer from "./component/Footer";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Component from "./component/placement/page";
import TestimonialCarousel from "./component/TestimonialCard";

const HomePage: React.FC = () => (
  <main className="min-h-screen bg-gray-50">
    <Navbar />
    <Home />
    <Course />
    <About />
    <Blog />
    <Component />
    <TestimonialCarousel />
    <ContactForm />
    <Footer />
  </main>
);

export default HomePage;
