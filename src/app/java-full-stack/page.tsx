import { Metadata } from "next";
import JavaFullStackCourse from "./JavaFullStackCourse";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Java Full Stack Development Course – Master Frontend & Backend Skills",
  description:
    "Enroll in Ignited Minds' Java Full Stack Development course. Gain expertise in Java, Spring Boot, Angular, and more with real-time projects, expert mentors, and placement assistance.",
  keywords:
    "Java Full Stack course, Java development training, learn Spring Boot, Java frontend and backend, Java full stack developer course, Java certification with placement, full stack Java training Bangalore, IT career training, Java Spring Boot and Angular",
  alternates: {
    canonical: "https://www.ignitedmindslearning.com/java-full-stack",
  },
  openGraph: {
    title: "Become a Java Full Stack Developer with Industry-Aligned Training",
    description:
      "Master Java Full Stack Development with hands-on projects and expert mentorship. Get placement assistance and start your tech career.",

    url: "https://www.ignitedmindslearning.com/java-full-stack",
    type: "website",
    siteName: "Ignited Minds Learning",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-java-fullstack.jpg",
        width: 1200,
        height: 630,
        alt: "Java Full Stack Development Course",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Java Full Stack Development Course",
            description:
              "Master Java Full Stack Development with hands-on projects and expert mentorship",
            provider: {
              "@type": "Organization",
              name: "Ignited Minds Learning",
              sameAs: "https://www.ignitedmindslearning.com",
            },
            courseCode: "JFS-001",
            coursePrerequisites: "Basic programming knowledge",
            educationalCredentialAwarded:
              "Java Full Stack Developer Certification",
            timeRequired: "P12W",
            occupationalCredentialAwarded: "Java Full Stack Developer",
            offers: {
              "@type": "Offer",
              category: "Java Full Stack Training",
              price: "49999",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              validFrom: "2025-02-01",
            },
          }),
        }}
      />
      <JavaFullStackCourse />
    </>
  );
}
