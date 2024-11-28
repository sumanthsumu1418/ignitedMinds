// import BigCards from "./BigCards";
// import SmallCards from "./SmallCards";
// import SliderCards from "./SliderCards";

// const Course = () => {
//   const bigCard_Data = [
//     {
//       title: "Career guidance for",
//       description: "Job Seekers",
//       img: "/image/CareerGuidance_Images/Frame 1.png",
//       icon: "/image/CareerGuidance_Images/right_arrow.svg",
//       link: "/component/Courses",
//     },
//     // {
//     //   title: "Career guidance for",
//     //   description: "Tech-graduates",
//     //   img: "/image/CareerGuidance_Images/OBJECTS.png",
//     //   icon: "/image/CareerGuidance_Images/right_arrow.svg",
//     //   link: "/component/Courses",
//     // },
//   ];

//   const smallCard_Data = [
//     {
//       icon: "/image/CareerGuidance_Images/business 1.png",
//       title: "1-on-1 with Mentors",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/practice 1.png",
//       title: "Learn Practically",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/certificate 1.png",
//       title: "Get Certified",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/job-offer 1.png",
//       title: "Get Placed",
//     },
//   ];

//   return (
//     <div className="bg-black py-12">
//       <div className="mb-8 text-center">
//         <h4 className="text-[24px] md:text-[32px] font-bold text-red-500">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <BigCards data={bigCard_Data} />
//       <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
//         {/* <h1>Career Growth</h1> */}
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// };

// export default Course;

// import BigCards from "./BigCards";
// import SmallCards from "./SmallCards";
// import SliderCards from "./SliderCards";

// const Course = () => {
//   const bigCard_Data = [
//     {
//       title: "Career guidance for",
//       description: "Job Seekers",
//       img: "/image/CareerGuidance_Images/Frame 1.png",
//       icon: "/image/CareerGuidance_Images/right_arrow.svg",
//       link: "/component/Courses",
//     },
//   ];

//   const sliderCard_Data = [
//     {
//       image: "/image/Courses/jfsbuy.jpeg",
//       title: "Java Full Stack",
//     },
//     { image: "/image/Courses/pybuy.jpeg", title: "python-data-engineering" },
//     { image: "/image/Courses/awsbuy.jpeg", title: "AWS-Cloud-Engineering" },
//     { image: "/image/Courses/snowbuy2.jpg", title: "snowflake" },
//     { image: "/image/Courses/dabuy.jpeg", title: "data-analyst" },
//     { image: "/image/Courses/buy1.jpg", title: "react" },
//   ];

//   const smallCard_Data = [
//     {
//       icon: "/image/CareerGuidance_Images/business 1.png",
//       title: "1-on-1 with Mentors",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/practice 1.png",
//       title: "Learn Practically",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/certificate 1.png",
//       title: "Get Certified",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/job-offer 1.png",
//       title: "Get Placed",
//     },
//   ];

//   return (
//     <div className="bg-black py-12">
//       <div className="mb-8 text-center">
//         <h4 className="text-[24px] md:text-[32px] font-bold text-red-500">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <BigCards data={bigCard_Data} />
//       <SliderCards cards={sliderCard_Data} />
//       <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// };

// export default Course;

// import BigCards from "./BigCards";
// import SmallCards from "./SmallCards";
// import SliderCards from "./SliderCards";

// const Course = () => {
//   const bigCard_Data = [
//     {
//       title: "Career guidance for",
//       description: "Job Seekers",
//       img: "/image/CareerGuidance_Images/Frame 1.png",
//       icon: "/image/CareerGuidance_Images/right_arrow.svg",
//       link: "/component/Courses",
//     },
//   ];

//   const sliderCard_Data = [
//     {
//       image: "/image/Courses/jfsbuy.jpeg",
//       title: "Java Full Stack",
//     },
//     { image: "/image/Courses/pybuy.jpeg", title: "Python Data Engineering" },
//     { image: "/image/Courses/awsbuy.jpeg", title: "AWS Cloud Engineering" },
//     { image: "/image/Courses/snowbuy2.jpg", title: "Snowflake" },
//     { image: "/image/Courses/dabuy.jpeg", title: "Data Analyst" },
//     { image: "/image/Courses/buy1.jpg", title: "React" },
//   ];

//   const smallCard_Data = [
//     {
//       icon: "/image/CareerGuidance_Images/business 1.png",
//       title: "1-on-1 with Mentors",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/practice 1.png",
//       title: "Learn Practically",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/certificate 1.png",
//       title: "Get Certified",
//     },
//     {
//       icon: "/image/CareerGuidance_Images/job-offer 1.png",
//       title: "Get Placed",
//     },
//   ];

//   return (
//     <div className="bg-black py-12">
//       <div className="mb-8 text-center">
//         <h4 className="text-[24px] md:text-[32px] font-bold text-red-500">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <BigCards data={bigCard_Data} />
//       <SliderCards cards={sliderCard_Data} />
//       <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// };

// export default Course;

import BigCards from "./BigCards";
import SmallCards from "./SmallCards";
import SliderCards from "./SliderCards";

const Course = () => {
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
    {
      image: "/image/Courses/jfsbuy.jpeg",
      title: "Java Full Stack",
    },
    { image: "/image/Courses/pybuy.jpeg", title: "Python Data Engineering" },
    { image: "/image/Courses/awsbuy.jpeg", title: "AWS Cloud Engineering" },
    { image: "/image/Courses/snowbuy2.jpg", title: "Snowflake" },
    { image: "/image/Courses/dabuy.jpeg", title: "Data Analyst" },
    { image: "/image/Courses/buy1.jpg", title: "React" },
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
        <h4 className="text-[24px] md:text-[32px] font-bold text-red-500">
          Expert Training and Placement Institute
        </h4>
      </div>
      <BigCards data={bigCard_Data} />
      <SliderCards cards={sliderCard_Data} />
      <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
        <SmallCards data={smallCard_Data} />
      </div>
    </div>
  );
};

export default Course;
