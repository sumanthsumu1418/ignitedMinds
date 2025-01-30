import React from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

const LatestInsights: React.FC = () => {
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
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Insights
          </h2>
          {/* <Link
            href="../articles"
            className="hidden md:flex items-center text-white hover:text-red-400 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        {/* <div className="mt-8 text-center md:hidden">
          <Link
            href="../articles"
            className="inline-flex items-center text-white hover:text-red-400 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default LatestInsights;
