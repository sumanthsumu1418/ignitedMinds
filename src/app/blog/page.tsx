import type { Metadata } from "next";
// import BlogContent from "./BlogContent";
import BlogContent from "./Blog";

export const metadata: Metadata = {
  title: "Blog - Empowering the Future",
  description:
    "Discover insights, success stories, and courses in technology and professional development at Ignited Minds Learning. Your gateway to excellence in the tech industry.",
  keywords: [
    "tech education",
    "online courses",
    "data analysis",
    "React.js",
    "full stack development",
    "professional development",
  ],
  openGraph: {
    title: "Blog IgnitedMinds Learning - Empowering the Future",
    description:
      "Learn, Grow, and Succeed with Ignited Minds Learning. Explore our courses and success stories in tech education.",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Ignited Minds Learning Blog",
      },
    ],
  },
};

export default function Page() {
  return <BlogContent />;
}
