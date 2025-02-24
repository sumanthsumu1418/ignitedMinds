// import React from "react";
// import BlogCard from "./BlogCard";

// const LatestInsights: React.FC = () => {
//   const blogPosts = [
//     {
//       title: "Zero Copy Clone SnowFlake",
//       category: "Technology",
//       date: "Jan 15, 2024",
//       image: "/image/article1.png",
//       link: "zero-clone-snowflake-blog",
//       description:
//         "Zero Copy Cloning in Snowflake allows users to create fully functional copies of databases...",
//     },
//     {
//       title: "Snowflake Architecture Diagram",
//       category: "Data Science",
//       date: "Jan 14, 2024",
//       image: "/image/article2.jpg",
//       link: "snowflake-architecture-blog",
//       description:
//         "The Snowflake Architecture refers to the unique design of the Snowflake Data Platform...",
//     },
//     {
//       title: "Essential Data Engineering",
//       category: "Data Science",
//       date: "Jan 14, 2024",
//       image: "/image/article3.jpg",
//       link: "essential-data-engineer-blog",
//       description:
//         "Learn the art and science of effective data visualization techniques...",
//     },
//   ];

//   return (
//     <section className="bg-black py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Latest Insights
//           </h2>
//           {/* <Link
//             href="../articles"
//             className="hidden md:flex items-center text-white hover:text-red-400 transition-colors"
//           >
//             View all articles <ArrowRight className="ml-2 w-4 h-4" />
//           </Link> */}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
//             <BlogCard key={index} {...post} />
//           ))}
//         </div>
//         {/* <div className="mt-8 text-center md:hidden">
//           <Link
//             href="../articles"
//             className="inline-flex items-center text-white hover:text-red-400 transition-colors"
//           >
//             View all articles <ArrowRight className="ml-2 w-4 h-4" />
//           </Link>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default LatestInsights;

import type React from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

const LatestInsights: React.FC = () => {
  const insights = [
    {
      title: "5 Reasons Why Snowflake is Revolutionizing Data Warehousing",
      excerpt:
        "Discover how Snowflake's cloud-native architecture is changing the game for businesses of all sizes.",
      author: "John Doe",
      date: "May 15, 2023",
    },
    {
      title:
        "Snowflake vs. Traditional Data Warehouses: A Comparative Analysis",
      excerpt:
        "Learn about the key differences and advantages of Snowflake over traditional on-premise solutions.",
      author: "Jane Smith",
      date: "May 10, 2023",
    },
    {
      title: "Getting Started with Snowflake: A Beginner's Guide",
      excerpt:
        "Follow this step-by-step tutorial to set up your first Snowflake data warehouse and start querying data.",
      author: "Mike Johnson",
      date: "May 5, 2023",
    },
  ];

  const blogPosts = [
    {
      title: "Zero Copy Clone SnowFlake",
      category: "Technology",
      date: "Jan 15, 2024",
      image: "/image/article1.png",
      link: "zero-clone-snowflake-blog",
      description:
        "Zero Copy Cloning in Snowflake allows users to create fully functional copies of databases...",
    },
    {
      title: "Snowflake Architecture Diagram",
      category: "Data Science",
      date: "Jan 14, 2024",
      image: "/image/article2.jpg",
      link: "snowflake-architecture-blog",
      description:
        "The Snowflake Architecture refers to the unique design of the Snowflake Data Platform...",
    },
    {
      title: "Essential Data Engineering",
      category: "Data Science",
      date: "Jan 14, 2024",
      image: "/image/article3.jpg",
      link: "essential-data-engineer-blog",
      description:
        "Learn the art and science of effective data visualization techniques...",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8">
          Latest Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                {insight.title}
              </h3>
              <p className="text-blue-300 mb-4">{insight.excerpt}</p>
              <div className="text-sm text-blue-100">
                <span>{insight.author}</span> • <span>{insight.date}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mt-16 mb-8">
          Featured Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default LatestInsights;
