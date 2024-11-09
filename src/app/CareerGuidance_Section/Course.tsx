import React from "react";
import BigCards from "./BigCards";
import SmallCards from "./SmallCards";

const Course = () => {
  const bigCard_Data = [
    {
      title: "career guidance for ",
      description: "Graduation",
      img: "/image/CareerGuidance_Images/Frame 1.png",
      icon: "/image/CareerGuidance_Images/right_arrow.svg",
    },
    {
      title: "career guidance for ",
      description: "Tech Graduation",
      img: "/image/CareerGuidance_Images/OBJECTS.png",
      icon: "/image/CareerGuidance_Images/right_arrow.svg",
    },
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
    <div className="pt-12 md:pt-[186px] bg-gradient-to-r from-purple-50 to-purple-200 pb-[0.1px]">
      <div className="mb-8 md:mb-[85px]">
        <h4 className="text-[24px] md:text-[32px] font-bold leading-7 lg:leading-[21.6px] lg:tracking-[0.08em] text-center text-black">
          Expert Training and Placement Institute
        </h4>
      </div>
      <BigCards data={bigCard_Data} />

      <div className="mx-4 my-8 md:my-[120px] flex flex-col md:flex-row gap-4 md:gap-[35px] justify-center">
        <SmallCards data={smallCard_Data} />
      </div>
    </div>
  );
};

export default Course;