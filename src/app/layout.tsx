// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
// import WhatsAppButton from "../app/component/WhatsAppButton";
// import "./globals.css";

// // Load Google Font
// const inter = Inter({ subsets: ["latin"] });

// // Load Local Fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.ignitedmindslearning.com"),
//   title: {
//     default: "Ignited Minds Learning – Career-Focused IT Training & Placement",
//     template: "%s | Ignited Minds Learning",
//   },
//   description:
//     "Boost your career with industry-aligned IT courses at Ignited Minds Learning. Master Java, React, Python, AWS, and more with hands-on projects, expert mentorship, and assured placements.",
//   keywords:
//     "IT training courses, career-focused IT learning, Java training, React.js certification, Python data engineering, AWS cloud training, placement-focused IT courses, Ignited Minds Learning, best IT courses in Bangalore, IT career advancement",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.ignitedmindslearning.com",
//     siteName: "Ignited Minds Learning",
//     title: "Career-Focused IT Training & Placement",
//     description:
//       "Boost your career with industry-aligned IT courses. Master Java, React, Python, AWS, and more with expert mentorship and assured placements.",
//     images: [
//       {
//         url: "https://www.ignitedmindslearning.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Ignited Minds Learning - Empower Your Career",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@ignitedminds",
//     creator: "@ignitedminds",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://www.ignitedmindslearning.com" />
//       </head>
//       <body
//         className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//         <WhatsAppButton />
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
// import WhatsAppButton from "../app/component/WhatsAppButton";
// // import GTM from "@/components/GTM";
// import "./globals.css";
// import GTM from "./component/GTM";

// // Load Google Font
// const inter = Inter({ subsets: ["latin"] });

// // Load Local Fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.ignitedmindslearning.com"),
//   title: {
//     default: "Ignited Minds Learning – Career-Focused IT Training & Placement",
//     template: "%s | Ignited Minds Learning",
//   },
//   description:
//     "Boost your career with industry-aligned IT courses at Ignited Minds Learning. Master Java, React, Python, AWS, and more with hands-on projects, expert mentorship, and assured placements.",
//   keywords:
//     "IT training courses, career-focused IT learning, Java training, React.js certification, Python data engineering, AWS cloud training, placement-focused IT courses, Ignited Minds Learning, best IT courses in Bangalore, IT career advancement",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.ignitedmindslearning.com",
//     siteName: "Ignited Minds Learning",
//     title: "Career-Focused IT Training & Placement",
//     description:
//       "Boost your career with industry-aligned IT courses. Master Java, React, Python, AWS, and more with expert mentorship and assured placements.",
//     images: [
//       {
//         url: "https://www.ignitedmindslearning.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Ignited Minds Learning - Empower Your Career",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@ignitedminds",
//     creator: "@ignitedminds",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://www.ignitedmindslearning.com" />
//       </head>
//       <body
//         className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <GTM /> {/* Add GTM component */}
//         {children}
//         <WhatsAppButton />
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import localFont from "next/font/local";
// import WhatsAppButton from "../app/component/WhatsAppButton";
// import GTM from "./component/GTM";
// import "./globals.css";

// // Load Google Font
// const inter = Inter({ subsets: ["latin"] });

// // Load Local Fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.ignitedmindslearning.com"),
//   title: {
//     default: "Ignited Minds Learning – Career-Focused IT Training & Placement",
//     template: "%s | Ignited Minds Learning",
//   },
//   description:
//     "Boost your career with industry-aligned IT courses at Ignited Minds Learning. Master Java, React, Python, AWS, and more with hands-on projects, expert mentorship, and assured placements.",
//   keywords:
//     "IT training courses, career-focused IT learning, Java training, React.js certification, Python data engineering, AWS cloud training, placement-focused IT courses, Ignited Minds Learning, best IT courses in Bangalore, IT career advancement",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://www.ignitedmindslearning.com",
//     siteName: "Ignited Minds Learning",
//     title: "Career-Focused IT Training & Placement",
//     description:
//       "Boost your career with industry-aligned IT courses. Master Java, React, Python, AWS, and more with expert mentorship and assured placements.",
//     images: [
//       {
//         url: "https://www.ignitedmindslearning.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Ignited Minds Learning - Empower Your Career",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@ignitedminds",
//     creator: "@ignitedminds",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://www.ignitedmindslearning.com" />
//         <meta
//           name="google-site-verification"
//           content="UK77my9ALBWyBUS6-rcruDH5Tki84bWpOR_u98qQrhM"
//         />
//       </head>
//       <body
//         className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <GTM />
//         {children}
//         <WhatsAppButton />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import WhatsAppButton from "../app/component/WhatsAppButton";
import GTM from "./component/GTM";
import "./globals.css";

// Load Google Font
const inter = Inter({ subsets: ["latin"] });

// Load Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ignitedmindslearning.com"),
  title: {
    default: "Ignited Minds Learning – Career-Focused IT Training & Placement",
    template: "%s | Ignited Minds Learning",
  },
  description:
    "Boost your career with industry-aligned IT courses at Ignited Minds Learning. Master Java, React, Python, AWS, and more with hands-on projects, expert mentorship, and assured placements.",
  keywords:
    "IT training courses, career-focused IT learning, Java training, React.js certification, Python data engineering, AWS cloud training, placement-focused IT courses, Ignited Minds Learning, best IT courses in Bangalore, IT career advancement",
  verification: {
    google: "UK77my9ALBWyBUS6-rcruDH5Tki84bWpOR_u98qQrhM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ignitedmindslearning.com",
    siteName: "Ignited Minds Learning",
    title: "Career-Focused IT Training & Placement",
    description:
      "Boost your career with industry-aligned IT courses. Master Java, React, Python, AWS, and more with expert mentorship and assured placements.",
    images: [
      {
        url: "https://www.ignitedmindslearning.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignited Minds Learning - Empower Your Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ignitedminds",
    creator: "@ignitedminds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.ignitedmindslearning.com" />
        <meta
          name="google-site-verification"
          content="UK77my9ALBWyBUS6-rcruDH5Tki84bWpOR_u98qQrhM"
        />
      </head>
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTM />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
