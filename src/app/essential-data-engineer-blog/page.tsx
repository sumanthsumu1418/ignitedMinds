// "use client";

// import Footer from "app/component/Footer";
// import Navbar from "app/component/Navbar";
// import { motion } from "framer-motion";
// import {
//   TrendingUp,
//   Users,
//   Database,
//   Code,
//   Award,
//   Briefcase,
//   Cpu,
//   Cloud,
//   Terminal,
//   MessageSquare,
// } from "lucide-react";

// export default function DataEngineeringCareer() {
//   const reasons = [
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "High Demand",
//       description:
//         "Data engineering has grown by 100% from 2021 to 2022, surpassing data science.",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Varied Roles",
//       description:
//         "Data engineer roles fall into four main groups: generalists, storage specialists, pipeline specialists, and analytics specialists.",
//     },
//     {
//       icon: <Briefcase className="w-6 h-6" />,
//       title: "Job Security",
//       description:
//         "As long as businesses use data for decision-making, the demand for data engineers will remain high.",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Competitive Salaries",
//       description:
//         "Data engineering offers competitive salaries due to high demand and specialized skills.",
//     },
//   ];

//   const skills = [
//     {
//       icon: <Database className="w-6 h-6" />,
//       title: "SQL Skills",
//       description:
//         "Master SQL and its various dialects for effective data manipulation and querying.",
//     },
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "Data Modeling",
//       description:
//         "Learn data modeling techniques for building scalable and optimized databases.",
//     },
//     {
//       icon: <Terminal className="w-6 h-6" />,
//       title: "Python Skills",
//       description:
//         "Use Python for creating data pipelines, integrations, and data analysis.",
//     },
//     {
//       icon: <Cpu className="w-6 h-6" />,
//       title: "Hadoop for Big Data",
//       description:
//         "Work with big data using tools like Hadoop for scalable data processing.",
//     },
//     {
//       icon: <Cloud className="w-6 h-6" />,
//       title: "AWS Cloud Services",
//       description:
//         "Develop cloud computing skills, particularly with AWS services.",
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Soft Skills",
//       description:
//         "Develop problem-solving, teamwork, and communication skills for effective collaboration.",
//     },
//   ];

//   const sections = [
//     {
//       title: "Why Pursue a Career in Data Engineering?",
//       content: `Data engineering has seen massive growth in recent years, surpassing even that of data science. From 2021 to 2022, data engineering job postings grew by 100%, compared to 68% for data science roles. It also has the 4th highest volume of job postings among tech roles.

// The demand for data engineers remains high as long as businesses continue to use data for decision-making and answering business questions. This makes data engineering an excellent career choice with strong job security and growth potential.`,
//     },
//     {
//       title: "Data Engineer Roles and Responsibilities",
//       content: `Data engineer roles typically fall into four core groups:

// 1. Generalists: Involved in all aspects of data collection, storage, analysis, and movement. Often found in small companies or those in early stages of analytics.

// 2. Specialists in Data Storage: Responsible for setting up and managing databases, data warehouses, and other storage platforms.

// 3. Specialists in Programming and Pipelines: Create and manage the flow and movement of data, working with various programming languages and platforms.

// 4. Specialists in Analytics: Work closely with data scientists and other analytics professionals, supporting data-related projects.

// Each group requires a specific set of skills and tools, allowing data engineers to specialize based on their interests and the needs of their organization.`,
//     },
//     {
//       title: "Data Engineer Requirements",
//       content: `Most data engineering positions typically require:

// 1. Qualifications: A bachelor's degree in computer science, engineering, mathematics, or a related IT field.

// 2. Certifications: While not always mandatory, certifications can help prove your understanding of specific frameworks or tools.

// 3. Experience: Many companies require at least a few years of experience in a related field or with relevant tools.

// For those new to the field, it's common to start in a related role (such as software engineer or data analyst) and transition to data engineering after gaining experience.`,
//     },
//     {
//       title: "Top 5 Data Engineering Skills",
//       content: `While the field of data engineering is broad, these five skills are crucial for most roles:

// 1. SQL Skills: Master SQL and its various dialects for effective data manipulation.

// 2. Data Modeling Techniques: Learn to design scalable and optimized databases and warehouses.

// 3. Python Skills: Use Python for creating data pipelines, integrations, and data analysis.

// 4. Hadoop for Big Data: Work with big data using tools like Hadoop for scalable data processing.

// 5. AWS Cloud Services: Develop cloud computing skills, particularly with AWS services.

// Additionally, soft skills such as problem-solving, teamwork, and effective communication are crucial for success in data engineering roles.`,
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="text-center mb-16">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
//             >
//               Data Engineering as a Career
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl text-gray-300 max-w-3xl mx-auto"
//             >
//               Discover why data engineering is a promising career choice and how
//               to get started in this rapidly growing field
//             </motion.p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
//           >
//             {reasons.map((reason, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 * index }}
//                 className="bg-gray-800 border border-gray-700 rounded-lg p-6"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mr-4">
//                     {reason.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold">{reason.title}</h3>
//                 </div>
//                 <p className="text-gray-400">{reason.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {sections.map((section, index) => (
//             <motion.section
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 + 0.2 * index }}
//               className="mb-12"
//             >
//               <h2 className="text-3xl font-bold mb-6 text-red-400">
//                 {section.title}
//               </h2>
//               <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
//                 <div className="prose prose-invert max-w-none">
//                   {section.content.split("\n").map((paragraph, i) => (
//                     <p key={i} className="text-gray-300 mb-4">
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </motion.section>
//           ))}

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-16"
//           >
//             <h2 className="text-3xl font-bold mb-6 text-red-400 text-center">
//               Essential Data Engineering Skills
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 * index }}
//                   className="bg-gray-800 border border-gray-700 rounded-lg p-6"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="p-2 bg-green-500/10 rounded-lg text-green-400 mr-4">
//                       {skill.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold">{skill.title}</h3>
//                   </div>
//                   <p className="text-gray-400">{skill.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//             className="mt-16 text-center bg-gray-800 border border-gray-700 rounded-lg p-8"
//           >
//             <h2 className="text-3xl font-bold mb-6 text-red-400">
//               Ready to Start Your Data Engineering Career?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Explore our comprehensive data engineering courses and start your
//               journey towards becoming a skilled data engineer today.
//             </p>
//             <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-6 rounded-full hover:from-blue-600 hover:to-green-600 transition duration-300">
//               Explore Courses
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import type { Metadata } from "next";
import DataEngineeringCareerContent from "./DataEngineeringCareerContent";

export const metadata: Metadata = {
  title: "Essential Data Engineer as a Career | Ignited Minds Learning",
  description:
    "Discover why data engineering is a promising career choice and how to get started in this rapidly growing field. Learn about roles, responsibilities, and essential skills.",
  keywords: [
    "data engineering",
    "career",
    "big data",
    "SQL",
    "Python",
    "AWS",
    "Hadoop",
  ],
  openGraph: {
    title: "Essential Data Engineer as a Career | Ignited Minds Learning",
    description:
      "Explore the promising field of data engineering and learn how to start your career in this rapidly growing tech sector.",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-essential-data-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineering Career",
      },
    ],
  },
};

export default function Page() {
  return <DataEngineeringCareerContent />;
}
