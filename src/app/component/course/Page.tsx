// // import React from "react";
// // import BigCards from "./BigCards";
// // import SmallCards from "./SmallCards";

// // const Course = () => {
// //   const bigCard_Data = [
// //     {
// //       title: "Career guidance for",
// //       description: "Graduates",
// //       img: "/image/CareerGuidance_Images/Frame 1.png",
// //       icon: "/image/CareerGuidance_Images/right_arrow.svg",
// //     },
// //     {
// //       title: "Career guidance for",
// //       description: "Tech-graduates",
// //       img: "/image/CareerGuidance_Images/OBJECTS.png",
// //       icon: "/image/CareerGuidance_Images/right_arrow.svg",
// //     },
// //   ];

// //   const smallCard_Data = [
// //     {
// //       icon: "/image/CareerGuidance_Images/business 1.png",
// //       title: "1-on-1 with Mentors",
// //     },
// //     {
// //       icon: "/image/CareerGuidance_Images/practice 1.png",
// //       title: "Learn Practically",
// //     },
// //     {
// //       icon: "/image/CareerGuidance_Images/certificate 1.png",
// //       title: "Get Certified",
// //     },
// //     {
// //       icon: "/image/CareerGuidance_Images/job-offer 1.png",
// //       title: "Get Placed",
// //     },
// //   ];

// //   return (
// //     <div className="bg-gradient-to-r from-purple-50 to-purple-200 py-12">
// //       <div className="mb-8 text-center">
// //         <h4 className="text-[24px] md:text-[32px] font-bold text-gray-800 animateFadeIn">
// //           Expert Training and Placement Institute
// //         </h4>
// //       </div>
// //       <BigCards data={bigCard_Data} />
// //       <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
// //         <SmallCards data={smallCard_Data} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Course;

// import React from "react";
// import BigCards from "./BigCards";
// import SmallCards from "./SmallCards";
import BigCards from "./BigCards";
import SmallCards from "./SmallCards";

// const Course = () => {
//   const bigCard_Data = [
//     {
//       title: "Career guidance for",
//       description: "Graduates",
//       img: "/image/CareerGuidance_Images/Frame 1.png",
//       icon: "/image/CareerGuidance_Images/right_arrow.svg",
//     },
//     {
//       title: "Career guidance for",
//       description: "Tech-graduates",
//       img: "/image/CareerGuidance_Images/OBJECTS.png",
//       icon: "/image/CareerGuidance_Images/right_arrow.svg",
//     },
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
//     <div className="bg-gradient-to-r from-purple-50 to-purple-200 py-12">
//       <div className="mb-8 text-center">
//         <h4 className="text-[24px] md:text-[32px] font-bold text-gray-800">
//           Expert Training and Placement Institute
//         </h4>
//       </div>
//       <BigCards data={bigCard_Data} />
//       <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
//         <SmallCards data={smallCard_Data} />
//       </div>
//     </div>
//   );
// };

// export default Course;

const Course = () => {
  const bigCard_Data = [
    {
      title: "Career guidance for",
      description: "Graduates",
      img: "/image/CareerGuidance_Images/Frame 1.png",
      icon: "/image/CareerGuidance_Images/right_arrow.svg",
      link: "/component/Courses", // Add link property
    },
    {
      title: "Career guidance for",
      description: "Tech-graduates",
      img: "/image/CareerGuidance_Images/OBJECTS.png",
      icon: "/image/CareerGuidance_Images/right_arrow.svg",
      link: "/component/Courses", // Add link property
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
    <div className="bg-gradient-to-r from-purple-50 to-purple-200 py-12">
      <div className="mb-8 text-center">
        <h4 className="text-[24px] md:text-[32px] font-bold text-gray-800">
          Expert Training and Placement Institute
        </h4>
      </div>
      <BigCards data={bigCard_Data} />
      <div className="mx-4 my-8 flex flex-col md:flex-row gap-4 justify-center">
        <SmallCards data={smallCard_Data} />
      </div>
    </div>
  );
};

export default Course;
