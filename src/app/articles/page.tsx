import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import BlogCard from "../BlogCard";
import BlogCard from "./../blog/BlogCard";

const AllBlogs: React.FC = () => {
  const allBlogPosts = [
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
    {
      title: "Machine Learning for Beginners",
      category: "Artificial Intelligence",
      date: "Jan 12, 2024",
      image: "/image/blog4.png",
      description:
        "A comprehensive guide to getting started with machine learning...",
    },
    {
      title: "The Rise of No-Code Platforms",
      category: "Technology Trends",
      date: "Jan 11, 2024",
      image: "/image/blog5.png",
      description:
        "Exploring the growing trend of no-code development platforms...",
    },
    {
      title: "Cybersecurity Best Practices",
      category: "Security",
      date: "Jan 10, 2024",
      image: "/image/blog6.png",
      description:
        "Essential cybersecurity practices for individuals and businesses...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-48">
          <div className="flex items-center mb-8">
            <Link
              href="../blog"
              className="flex items-center text-white hover:text-red-400 transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            All Articles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllBlogs;
