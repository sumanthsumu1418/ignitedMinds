import { Metadata } from "next";
import AWSCloudEngineeringCourse from "./AWSCloudEngineeringCourse";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "AWS Cloud Engineering Course – Master Cloud Computing with Hands-On Training",
  description:
    "Learn AWS Cloud Engineering at Ignited Minds! Gain expertise in cloud infrastructure, DevOps, and AWS tools through real-world projects and job-ready skills with placement support.",
  keywords:
    "AWS cloud engineering course, AWS training with certification, learn cloud computing, AWS tools and DevOps, cloud infrastructure training, AWS career-focused course, cloud computing certification Bangalore, hands-on AWS projects, cloud engineering with placement",
  alternates: {
    canonical: "https://www.ignitedmindslearning.com/aws-cloud-engineering",
  },
  openGraph: {
    title:
      "AWS Cloud Engineering Course – Master Cloud Computing with Hands-On Training",
    description:
      "Master AWS Cloud Engineering with hands-on projects and expert mentorship. Get placement assistance and start your tech career.",
    url: "https://www.ignitedmindslearning.com/aws-cloud-engineering",
    type: "website",
    siteName: "Ignited Minds Learning",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-aws-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "AWS Cloud Engineering Course",
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
            name: "AWS Cloud Engineering Course",
            description:
              "Master AWS Cloud Engineering with hands-on projects and expert mentorship",
            provider: {
              "@type": "Organization",
              name: "Ignited Minds Learning",
              sameAs: "https://www.ignitedmindslearning.com",
            },
            courseCode: "AWS-001",
            coursePrerequisites: "Basic IT infrastructure knowledge",
            educationalCredentialAwarded: "AWS Cloud Engineer Certification",
            timeRequired: "P2M24D",
            occupationalCredentialAwarded: "AWS Cloud Engineer",
            offers: {
              "@type": "Offer",
              category: "Cloud Computing Training",
              price: "49999",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              validFrom: "2024-01-01",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "blended",
              courseWorkload: "PT20H",
              instructor: {
                "@type": "Person",
                name: "AWS Certified Instructor",
              },
              location: {
                "@type": "Place",
                name: "Ignited Minds Learning Center",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  addressCountry: "IN",
                },
              },
              startDate: "2024-01-15",
              endDate: "2024-04-15",
            },
          }),
        }}
      />
      <AWSCloudEngineeringCourse />
    </>
  );
}
