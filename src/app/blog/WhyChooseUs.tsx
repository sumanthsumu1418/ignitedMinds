import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

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
    <div
      ref={sectionRef}
      className="text-center mb-16 relative bg-black px-4 py-8 sm:py-12"
    >
      <h2
        ref={headingRef}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
        style={{
          fontFamily: "Lexend, sans-serif",
        }}
      >
        Why Choose Us?
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
        <defs>
          <linearGradient
            id="paint0_linear_83_159"
            x1="42.3283"
            y1="10.3379"
            x2="49.6943"
            y2="44.6203"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6666" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_83_159"
            x1="1.32172"
            y1="6.40797"
            x2="9.48162"
            y2="48.5804"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6666" />
          </linearGradient>
          <clipPath id="clip0_83_159">
            <rect
              width="546.67"
              height="15.8605"
              fill="white"
              transform="translate(0 0.399902)"
            />
          </clipPath>
        </defs>
      </svg>

      <p
        ref={paragraphRef}
        className="text-red-200 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto"
        style={{
          fontFamily: "Lexend, sans-serif",
          lineHeight: "1.6",
        }}
      >
        A choice that makes a big difference in your career. Ignited Minds is
        here to help its students reach their goals and their training
        experiences.
      </p>
    </div>
  );
};

export default WhyChooseUs;

//----------------------------------------

// import React from "react";

// const blogs = [
//   {
//     title: "Embedded Software Development Process and Tools",
//     content: `
//       Embedded software development involves designing, programming, and testing software that operates within embedded systems. These systems are specialized computing devices performing dedicated functions, often with limited resources. They are present in devices like smartphones, medical equipment, automobiles, and household appliances. ...
//     `,
//     sections: [
//       {
//         title: "Understanding Embedded Systems and Applications",
//         description:
//           "Embedded systems are specialized computing systems integrated into larger devices to perform specific tasks. Unlike general-purpose computers, they are optimized for efficiency, reliability, and real-time performance. ...",
//       },
//       {
//         title: "Phases of the Embedded Software Development Process",
//         description:
//           "The embedded software development process involves several phases to ensure the creation of reliable and efficient software. These include requirement analysis, system design, development, testing, and deployment. ...",
//       },
//     ],
//   },
//   {
//     title: "Purpose of Prompt Engineering in Generative AI Systems",
//     content: `
//       Prompt engineering is a specialized technique within artificial intelligence, particularly generative AI, that focuses on crafting precise and effective prompts to optimize the output of AI models. ...
//     `,
//     sections: [
//       {
//         title: "What Are Generative AI Systems?",
//         description:
//           "Generative AI systems are advanced artificial intelligence models designed to create new, original content across various domains. Unlike traditional AI models, these systems produce outputs like text, images, and more. ...",
//       },
//       {
//         title: "The Role of Prompts in AI Communication",
//         description:
//           "Prompts are the essential communication medium between users and generative AI systems. They guide AI models to interpret user intent and produce meaningful responses. ...",
//       },
//     ],
//   },
//   {
//     title: "Snowflake Architecture Diagram Explained",
//     content: `
//       Snowflake is a cloud-based data warehouse that is easy to set up, scalable, and flexible. It enables businesses to securely manage, process, and share data in real time. ...
//     `,
//     sections: [
//       {
//         title: "Core Layers of Snowflake Architecture",
//         description:
//           "Snowflake’s architecture is built around three core layers: the storage layer, compute layer, and cloud services layer. Each layer serves specific functions to optimize performance. ...",
//       },
//       {
//         title: "Key Benefits of Snowflake Architecture",
//         description:
//           "Snowflake provides scalability, flexibility, and cost efficiency with advanced features like result caching and automatic query optimization. ...",
//       },
//     ],
//   },
// ];

// const BlogsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg p-6 mb-8 border"
//           >
//             <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
//             <p className="text-gray-700 mb-6">
//               {blog.content.substring(0, 200)}...
//             </p>
//             <div>
//               {blog.sections.map((section, idx) => (
//                 <div key={idx} className="mb-4">
//                   <h3 className="text-lg font-medium">{section.title}</h3>
//                   <p className="text-gray-600">{section.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;
