// "use client";

// import Footer from "app/component/Footer";
// import Navbar from "app/component/Navbar";
// import { motion } from "framer-motion";
// import {
//   CloudIcon,
//   DatabaseIcon,
//   ShieldCheckIcon,
//   BarChart3Icon,
//   UsersIcon,
//   LockIcon,
//   LayersIcon,
//   ClockIcon,
// } from "lucide-react";

// export default function SnowflakeArchitecture() {
//   const features = [
//     {
//       icon: <CloudIcon className="w-6 h-6" />,
//       title: "Cloud-Based Platform",
//       description:
//         "Snowflake is a cloud-based data warehouse that is easy to set up, scalable, and flexible.",
//     },
//     {
//       icon: <DatabaseIcon className="w-6 h-6" />,
//       title: "Data Management",
//       description:
//         "It enables businesses to securely manage, process, and share data in real time.",
//     },
//     {
//       icon: <BarChart3Icon className="w-6 h-6" />,
//       title: "Analytics Integration",
//       description:
//         "Snowflake integrates with popular analytics tools, supporting various data needs like data warehousing and data science.",
//     },
//     {
//       icon: <ShieldCheckIcon className="w-6 h-6" />,
//       title: "Data Governance",
//       description:
//         "Its strong data governance features ensure compliance, enabling businesses to make fast, informed decisions.",
//     },
//     {
//       icon: <UsersIcon className="w-6 h-6" />,
//       title: "Collaboration",
//       description:
//         "Snowflake is ideal for efficient data management and seamless collaboration.",
//     },
//     {
//       icon: <LockIcon className="w-6 h-6" />,
//       title: "Security",
//       description:
//         "Built-in security features protect your data while maintaining accessibility.",
//     },
//   ];

//   const sections = [
//     {
//       title: "What is Snowflake Architecture?",
//       content: `The Snowflake Architecture refers to the unique design of the Snowflake Data Platform, a cloud-based data warehouse solution built for handling large-scale data storage, processing, and analysis. Unlike traditional data warehouses, which often have rigid and complex architectures, Snowflake's architecture is designed to be simple, scalable, and highly flexible, making it ideal for modern data-driven businesses.

// The platform is built on top of cloud infrastructure (available on AWS, Microsoft Azure, and Google Cloud), providing users with the ability to separate storage, compute, and services. This separation enables users to scale each component independently based on their needs, which makes Snowflake an ideal choice for businesses that require both elasticity and performance at a cost-effective price.`,
//     },
//     {
//       title: "Core Layers of Snowflake Architecture",
//       content: `Snowflake's architecture is built around three core layers:

// 1. Storage Layer:
//    • All data is stored here.
//    • Snowflake uses a centralized storage model to handle structured and semi-structured data (e.g., JSON, Avro, Parquet) in a single location.

// 2. Compute Layer:
//    • This layer consists of virtual warehouses that handle computational workloads.
//    • These warehouses scale up or down based on demand, ensuring optimal performance.

// 3. Cloud Services Layer:
//    • The cloud services layer manages metadata, query optimization, security, and infrastructure.
//    • It enables seamless data processing and supports multi-user collaboration.`,
//     },
//     {
//       title: "Unique Features of Snowflake's Architecture",
//       content: `• Multi-Cluster Shared Data Architecture: Allows users to scale compute resources dynamically so that different workloads (e.g., data loading, querying, and analytics) don't interfere with each other.
// • Support for Structured and Semi-Structured Data: Snowflake's versatility accommodates diverse datasets.
// • High Availability & Elastic Scalability: Snowflake's design ensures cost-efficiency and seamless integration with analytics tools.`,
//     },
//     {
//       title: "How Does Snowflake Architecture Work?",
//       content: `Snowflake's architecture separates its components to allow independent scaling, cost efficiency, and high performance. When a query or data transformation is initiated, Snowflake follows these steps:

// 1. Data Retrieval: Pulls data from the storage layer (optimized for structured and semi-structured data).
// 2. Data Processing: Virtual warehouses in the compute layer handle the data query or transformation.
// 3. Orchestration: The cloud services layer manages the process, ensuring efficient query execution without data conflicts or resource limitations.`,
//     },
//     {
//       title: "Key Benefits of Snowflake Architecture",
//       content: `• Scalability: Independent scaling of compute and storage resources.
// • Flexibility: Supports structured, semi-structured (JSON, Avro), and unstructured data.
// • Cost Efficiency: Pay-per-use pricing ensures businesses only pay for what they use.
// • Performance Optimization: Advanced query optimization and multi-cluster architecture ensure fast performance.
// • Zero Maintenance: Fully managed platform eliminates the need for infrastructure maintenance.
// • Security: End-to-end encryption, role-based access control, and compliance with industry standards ensure data safety.
// • Data Sharing: Real-time, secure data sharing without replication.`,
//     },
//     {
//       title: "Performance Optimization in Snowflake Architecture",
//       content: `Snowflake employs several strategies to optimize performance:

// • Automatic Query Optimization: Ensures efficient execution plans for queries.
// • Result Caching: Reduces query times by caching results.
// • Elastic Scaling: Dynamically adjusts compute power to meet workload demands.
// • Partitioning and Clustering: Automatically organizes data for efficient retrieval.
// • Materialized Views: Speeds up query execution by precomputing results.`,
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-black text-white px-8 py-48 sm:py-16 md:py-48 lg:py-56">
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
//               className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-cyan-500"
//             >
//               Snowflake Architecture Diagram
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl text-gray-300 max-w-3xl mx-auto"
//             >
//               Understanding the comprehensive architecture of Snowflake's cloud
//               data platform
//             </motion.p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 * index }}
//                 className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mr-4">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                 </div>
//                 <p className="text-gray-400">{feature.description}</p>
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
//               <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
//                 <div className="prose prose-invert max-w-none">
//                   {section.content.split("\n").map((paragraph, i) => (
//                     <p
//                       key={i}
//                       className="text-gray-300 mb-4 whitespace-pre-line"
//                     >
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </motion.section>
//           ))}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//             className="mt-16 text-center bg-gray-800/50 border border-gray-700 rounded-lg p-8"
//           >
//             <h2 className="text-3xl font-bold mb-6 text-red-400">
//               Why Choose Ignited Minds Learning for Snowflake Training?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Ignited Minds Learning, the best institute in Yelahanka, offers
//               comprehensive Snowflake training designed for aspiring data
//               professionals. As the best Snowflake course training institute in
//               Yelahanka, we provide:
//             </p>
//             <ul className="text-left text-gray-300 mb-8 space-y-2">
//               <li className="flex items-center">
//                 <UsersIcon className="w-5 h-5 mr-2 text-cyan-400" />
//                 Expert-Led Training: Learn from experienced instructors with
//                 industry expertise.
//               </li>
//               <li className="flex items-center">
//                 <LayersIcon className="w-5 h-5 mr-2 text-cyan-400" />
//                 Hands-On Practice: Real-world projects to build practical
//                 skills.
//               </li>
//               <li className="flex items-center">
//                 <ShieldCheckIcon className="w-5 h-5 mr-2 text-cyan-400" />
//                 Certification Guidance: Assistance with SnowPro certification
//                 preparation.
//               </li>
//               <li className="flex items-center">
//                 <BarChart3Icon className="w-5 h-5 mr-2 text-cyan-400" />
//                 Placement Support: Lifetime career support to help you land your
//                 dream job.
//               </li>
//               <li className="flex items-center">
//                 <ClockIcon className="w-5 h-5 mr-2 text-cyan-400" />
//                 Flexible Learning: Access recorded sessions and attend free demo
//                 classes.
//               </li>
//             </ul>
//             <button className="bg-gradient-to-r from-red-500 to-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:from-red-600 hover:to-cyan-600 transition duration-300">
//               Enroll Today!
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import type { Metadata } from "next";
import SnowflakeArchitectureContent from "./SnowflakeArchitectureContent";

export const metadata: Metadata = {
  title: "Snowflake Architecture Diagram",
  description:
    "Understand the comprehensive architecture of Snowflake's cloud data platform. Learn about its core layers, unique features, and key benefits.",
  keywords: [
    "Snowflake",
    "data warehouse",
    "cloud architecture",
    "data platform",
    "data engineering",
  ],
  openGraph: {
    title: "Snowflake Architecture Explained | Ignited Minds Learning",
    description:
      "Dive deep into Snowflake's cloud-based data warehouse architecture. Discover how it separates storage, compute, and services for optimal performance.",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-snowflake-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "Snowflake Architecture Diagram",
      },
    ],
  },
};

export default function Page() {
  return <SnowflakeArchitectureContent />;
}
