import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import FeatureCard from "./FeatureCard";

const BlogContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses in Data Analysis and React.js are designed by industry experts, ensuring you learn the most in-demand skills and tools.",
      image: "/image/blog1.png",
    },
    {
      title: "Gain Experience Quickly",
      description:
        "With our intensive training programs, gain 6 months to 1 year of industry-level experience in just 2-3 months of focused learning.",
      image: "/image/blog2.png",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from seasoned professionals who bring years of industry experience to the table, providing personalized guidance.",
      image: "/image/blog3.png",
    },
    {
      title: "100% Placement Assistance",
      description:
        "Our dedicated placement team works tirelessly to connect you with top companies, ensuring you land your dream job.",
      image: "/image/blog4.png",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Our online training programs allow you to learn at your own pace, making it easy to balance your studies with other commitments.",
      image: "/image/blog5.png",
    },
    {
      title: "Real-world Projects",
      description:
        "Gain hands-on experience through real-world projects and case studies, simulating professional challenges.",
      image: "/image/blog6.png",
    },
  ];

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

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const headings = content.querySelectorAll("h1, h2, h3");
      const paragraphs = content.querySelectorAll("p, ul");

      gsap.fromTo(
        headings,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        }
      );
    }

    const slider = sliderRef.current;
    if (slider) {
      gsap.to(slider, {
        x: `-${currentIndex * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentIndex]);

  return (
    <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
        Empowering the Future: Learn, Grow, and Succeed with Ignited Minds
        Learning
      </h1>
      <p className="mb-6 text-lg leading-relaxed">
        In today's fast-paced world, staying ahead of the curve means mastering
        new-age skills and technologies. Ignited Minds Learning, a leading
        Edu-tech organization based in Bangalore, is here to equip students and
        professionals with the tools they need to excel. Whether you are looking
        to jumpstart your career, upgrade your skills, or explore innovative
        fields, our comprehensive training programs are designed to meet your
        needs.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Why Choose Ignited Minds Learning?
      </h2>

      {/* Slider for Mobile */}
      <div className="sm:hidden relative mt-8 sm:mt-16">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
          >
            {features.map((feature, index) => (
              <div className="min-w-full flex justify-center" key={index}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-red-600 rounded-full shadow z-10 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Next Slide"
        >
          <ChevronRight className="text-white w-6 h-6" />
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
            index={index}
          />
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        What Will You Learn?
      </h2>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4 text-red-400">
        Data Analysis Course Highlights:
      </h3>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Fundamentals of Data Analysis",
          "Mastery of tools like Python, SQL, and Tableau",
          "Data visualization and storytelling",
          "Advanced analytics techniques",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4 text-red-400">
        React.js Course Highlights:
      </h3>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Introduction to JavaScript and ES6",
          "Building reusable components with React",
          "State management using Redux",
          "Deployment and performance optimization",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Who Can Enroll?
      </h2>
      <ul className="list-none mb-6 space-y-3">
        {[
          "Freshers: Begin your journey into the tech world with foundational and advanced skills.",
          "Experienced Professionals: Upskill and transition to high-paying roles in Data Analysis or React.js development.",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 text-xl">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Success Stories
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Our alumni have gone on to work at top companies, achieving their career
        goals with the help of our training programs.
      </p>
      <blockquote className="border-l-4 border-red-500 pl-4 mb-6 italic">
        "Ignited Minds Learning transformed my career. The React.js course
        helped me land a role as a front-end developer in a top tech company.
        The placement support was phenomenal!" – Rajesh K., Front-End Developer
      </blockquote>
      <blockquote className="border-l-4 border-red-500 pl-4 mb-6 italic">
        "The Data Analysis course gave me the confidence and skills to
        transition into analytics. Today, I'm working as a data analyst in a
        multinational corporation." – Priya S., Data Analyst
      </blockquote>

      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        Join Ignited Minds Learning Today!
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        The tech industry is evolving rapidly, and the time to act is now.
        Whether you aspire to become a data analyst or a React.js developer,
        Ignited Minds Learning provides you with the tools, training, and
        support you need to succeed.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        Visit us at{" "}
        <a
          href="http://www.ignitedmindslearning.com"
          className="text-red-400 hover:underline transition-colors duration-300"
        >
          www.ignitedmindslearning.com
        </a>{" "}
        to explore our Data Analysis and React.js courses and enroll today.
        Together, let's ignite your potential and shape your future in the tech
        industry.
      </p>
    </div>
  );
};

export default BlogContent;
