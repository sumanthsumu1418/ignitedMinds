import React from "react";
import BigCards from "./BigCards";
import SmallCards from "./SmallCards";
import SliderCards from "./SliderCards";

const Course: React.FC = () => {
  const bigCard_Data = [
    {
      title: "Career guidance for",
      description: "Job Seekers",
      img: "/image/CareerGuidance_Images/Frame 1.png",
      icon: "/image/CareerGuidance_Images/right_arrow.svg",
      link: "/component/Courses",
    },
  ];

  const sliderCard_Data = [
    { image: "/image/Courses/j1.jpeg", title: "Java Full Stack" },
    { image: "/image/Courses/p1.jpeg", title: "Python Data Engineering" },
    { image: "/image/Courses/a1.jpeg", title: "AWS Cloud Engineering" },
    { image: "/image/Courses/s1.jpeg", title: "Snowflake" },
    { image: "/image/Courses/d1.jpeg", title: "Data Analyst" },
    { image: "/image/Courses/r1.png", title: "React" },
  ];

  const smallCard_Data = [
    {
      icon: "/image/CareerGuidance_Images/business 1.png",
      title: "1-on-1 with Mentors",
    },
    {
      icon: "/image/CareerGuidance_Images/practice 1.png",
      title: "Learn Practically",
    },
    {
      icon: "/image/CareerGuidance_Images/certificate 1.png",
      title: "Get Certified",
    },
    {
      icon: "/image/CareerGuidance_Images/job-offer 1.png",
      title: "Get Placed",
    },
  ];

  return (
    <div className="bg-black py-12">
      <div className="mb-8 text-center">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-2">
          Expert Training and Placement Institute
        </h4>
        <p className="text-gray-300 text-lg">Empowering Your Career Journey</p>
      </div>
      <BigCards data={bigCard_Data} />
      <div className="mx-4 my-12">
        <h5 className="text-2xl md:text-4xl font-semibold text-red-500 mb-6 text-center">
          Your Path to Success
        </h5>
        <SliderCards cards={sliderCard_Data} />
        <SmallCards data={smallCard_Data} />
      </div>
    </div>
  );
};

export default Course;
