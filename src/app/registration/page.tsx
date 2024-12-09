// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import Footer from "../component/Footer";
// import Register_1 from "./Sign";
// import Navbar from "../component/Navbar";

// const Register = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add("animate-visible");
//             } else {
//               entry.target.classList.remove("animate-visible"); // Reset animation
//             }
//           });
//         },
//         { threshold: 0.2 }
//       );

//       const elements =
//         sectionRef.current?.querySelectorAll(".animate-on-scroll");
//       elements?.forEach((el) => observer.observe(el));

//       return () => observer.disconnect();
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Register Section */}
//       <div
//         ref={sectionRef}
//         className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-16 py-12 bg-black min-h-screen pt-32 sm:pt-26 lg:pt-20"
//       >
//         {/* Text Section */}
//         <div className="flex-1 animate-on-scroll opacity-0 transform translate-y-10">
//           <h1 className="font-serif text-4xl lg:text-6xl font-bold text-blue-500 tracking-wide leading-tight">
//             Register Today <br />
//             With Us!
//           </h1>
//           <p className="font-sans text-lg lg:text-2xl text-red-200 font-medium mt-4">
//             Are you ready to learn?
//           </p>
//           <p className="font-sans text-base lg:text-lg text-white leading-7 mt-4">
//             Join our courses for a wonderful learning experience with a
//             technical backset in addition to your professional development.
//           </p>
//         </div>

//         {/* <div className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-16 py-12 bg-black min-h-screen pt-28 sm:pt-24 lg:pt-20">
//   <div className="flex-1 animate-on-scroll opacity-0 transform translate-y-10 text-center lg:text-left">
//   <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-500 tracking-wide leading-tight">
//     Register Today <br className="hidden sm:inline" />
//     With Us!
//   </h1>
//   <p className="font-sans text-base sm:text-lg lg:text-2xl text-red-200 font-medium mt-4">
//     Are you ready to learn?
//   </p>
//   <p className="font-sans text-sm sm:text-base lg:text-lg text-white leading-7 mt-4">
//     Join our courses for a wonderful learning experience with a
//     technical backset in addition to your professional development.
//   </p>
// </div>
// </div> */}

//         {/* Image Section */}
//         <div className="flex-1 w-full lg:w-auto flex justify-center">
//           <Image
//             src="/image/Courses/register.png"
//             alt="Team discussing"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-lg transform scale-100 lg:scale-90"
//             priority
//           />
//         </div>
//       </div>

//       {/* Registration Form */}
//       <Register_1 />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Register;

import { Metadata } from "next";
import Register from "./Register";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Register for IT Courses at Ignited Minds – Secure Your Future Today",
  description:
    "Sign up for Ignited Minds' career-focused IT training programs. Learn in-demand skills like Java, Python, AWS, and more with expert mentors and guaranteed placement assistance.",
  keywords:
    "Ignited Minds registration, IT course sign-up, register for IT training, career-focused IT courses, IT training registration page, start IT career training, sign up for Java training, Python registration course, AWS training registration",
  openGraph: {
    title:
      "Register for IT Courses at Ignited Minds – Secure Your Future Today",
    description:
      "Start your IT career journey with expert-led training programs and guaranteed placement assistance.",
    url: "https://www.ignitedmindslearning.com/registration",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-registration.jpg",
        width: 1200,
        height: 630,
        alt: "Register for IT Courses at Ignited Minds",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="registration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IT Course Registration - Ignited Minds Learning",
            description:
              "Register for career-focused IT training programs with placement assistance",
            provider: {
              "@type": "Organization",
              name: "Ignited Minds Learning",
              sameAs: "https://www.ignitedmindslearning.com",
            },
            offers: {
              "@type": "Offer",
              category: "IT Training Programs",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Register />
    </>
  );
}
