import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

const LatestInsights: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Education",
      category: "Technology",
      date: "Jan 15, 2024",
      image: "/image/blog1.png",
      description:
        "Explore how artificial intelligence is revolutionizing the education sector...",
    },
    {
      title: "Mastering Data Visualization",
      category: "Data Science",
      date: "Jan 14, 2024",
      image: "/image/blog2.png",
      description:
        "Learn the art and science of effective data visualization techniques...",
    },
    {
      title: "React 18: What's New?",
      category: "Web Development",
      date: "Jan 13, 2024",
      image: "/image/blog3.png",
      description:
        "Dive into the latest features and improvements in React 18...",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Insights
          </h2>
          <Link
            href="../articles"
            className="hidden md:flex items-center text-white hover:text-red-400 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="../articles"
            className="inline-flex items-center text-white hover:text-red-400 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
