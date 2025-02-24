// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const WhyChooseUs: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const svgRef = useRef<SVGSVGElement>(null);
//   const paragraphRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const heading = headingRef.current;
//     const svg = svgRef.current;
//     const paragraph = paragraphRef.current;

//     if (section && heading && svg && paragraph) {
//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         heading,
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
//       );

//       gsap.fromTo(
//         svg,
//         { opacity: 0, scaleX: 0 },
//         { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
//       );

//       gsap.fromTo(
//         paragraph,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
//       );
//     }
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="text-center mb-16 relative bg-black px-4 py-8 sm:py-12"
//     >
//       <h2
//         ref={headingRef}
//         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
//         style={{
//           fontFamily: "Lexend, sans-serif",
//         }}
//       >
//         Why Choose Us?
//       </h2>

//       <svg
//         ref={svgRef}
//         width="100%"
//         height="15"
//         viewBox="0 0 547 17"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="mx-auto mb-6"
//         style={{ maxWidth: "547px" }}
//       >
//         <g clipPath="url(#clip0_83_159)">
//           <path
//             d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
//             stroke="url(#paint0_linear_83_159)"
//             strokeWidth="2.64342"
//           />
//           <path
//             d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
//             stroke="url(#paint1_linear_83_159)"
//             strokeWidth="2.64342"
//           />
//         </g>
//         <defs>
//           <linearGradient
//             id="paint0_linear_83_159"
//             x1="42.3283"
//             y1="10.3379"
//             x2="49.6943"
//             y2="44.6203"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FF0000" />
//             <stop offset="1" stopColor="#FF6666" />
//           </linearGradient>
//           <linearGradient
//             id="paint1_linear_83_159"
//             x1="1.32172"
//             y1="6.40797"
//             x2="9.48162"
//             y2="48.5804"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#FF0000" />
//             <stop offset="1" stopColor="#FF6666" />
//           </linearGradient>
//           <clipPath id="clip0_83_159">
//             <rect
//               width="546.67"
//               height="15.8605"
//               fill="white"
//               transform="translate(0 0.399902)"
//             />
//           </clipPath>
//         </defs>
//       </svg>

//       <p
//         ref={paragraphRef}
//         className="text-red-200 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto"
//         style={{
//           fontFamily: "Lexend, sans-serif",
//           lineHeight: "1.6",
//         }}
//       >
//         A choice that makes a big difference in your career. Ignited Minds is
//         here to help its students reach their goals and their training
//         experiences.
//       </p>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React, { useEffect, useRef } from "react";
import { Lightbulb, Users, Trophy, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const reasons = [
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience in Snowflake and data engineering.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Small Class Sizes",
      description:
        "Enjoy personalized attention and interactive learning in our small group sessions.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-500" />,
      title: "Hands-on Projects",
      description:
        "Apply your skills to real-world scenarios and build a portfolio to showcase to employers.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Career Support",
      description:
        "Get guidance on job search, resume building, and interview preparation to launch your Snowflake career.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const svg = svgRef.current;
    const paragraph = paragraphRef.current;

    if (section && heading && svg && paragraph) {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        heading,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        svg,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
        >
          Why Choose Ignited Minds Learning?
        </h2>

        <svg
          ref={svgRef}
          width="100%"
          height="15"
          viewBox="0 0 547 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-6"
          style={{ maxWidth: "547px" }}
        >
          <g clipPath="url(#clip0_83_159)">
            <path
              d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
              stroke="url(#paint0_linear_83_159)"
              strokeWidth="2.64342"
            />
            <path
              d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
              stroke="url(#paint1_linear_83_159)"
              strokeWidth="2.64342"
            />
          </g>
        </svg>

        <p
          ref={paragraphRef}
          className="text-blue-200 text-lg max-w-2xl mx-auto mb-12"
        >
          A choice that makes a big difference in your career. Ignited Minds is
          here to help its students reach their goals and their training
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-blue-200">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
