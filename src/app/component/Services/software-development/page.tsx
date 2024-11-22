// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Footer from '../../Footer';
// import Navbar from '../../Navbar';

// const Page = () => {
//   return (
//     <div className="page-wrapper">
//       {/* Navbar with fixed top and purple background */}
//       <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
//         <Navbar />
//       </div>

//       <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
//         {/* Main Content */}
//         <div className="container mx-auto py-16 px-4">
//           <div className="flex flex-col md:flex-row">
//             {/* Sidebar with sticky positioning */}
//             <aside className="w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 sticky top-[100px] h-[calc(70vh-30px)]">
//               <div className="mb-6">
//                 <h4 className="text-lg font-bold mb-8">Our Services</h4>
//                 <ul className="space-y-10">
//                 <Link href="/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>IT Services
//                     </Link>
//                   <li>
//                     <Link href="/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Software Development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/product-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Product Development
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link href="/cloud-strategy" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Cloud Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/testing-services" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Testing Services
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <div className="w-full md:w-3/4 md:pl-8">
//               <div className="service-single-one">
//                 {/* Image */}
//                 <div className="image mb-4">
//                   <Image
//                     src="/image/software.jpg"
//                     alt="Software Development"
//                     width={800}
//                     height={400}
//                     layout="responsive"
//                     className="rounded shadow-md"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="lower-content">
//                   <h3 className="text-2xl font-semibold mb-4">SOFTWARE DEVELOPMENT</h3>
//                   <p className="mb-4">
//                     We strive to bring together the best talents and expertise from various fields to become a trusted
//                     technology partner for businesses aiming to enhance their reputation or expand their market reach.
//                     Collaborating closely with our clients, we develop an initial concept and detailed project plan.
//                     From there, a dedicated project coordinator ensures seamless management of the project through all
//                     phases, including system engineering, analysis, design, coding, testing, quality assurance, and
//                     ongoing maintenance.
//                   </p>
//                   <p>
//                     Additionally, we offer value-added services to help our clients establish a strong online presence.
//                     With a skilled team and extensive experience in some of the most competitive markets both in India
//                     and globally, we provide end-to-end web solutions. These include custom-designed websites, complete
//                     web-enabling of business operations, and customer relationship management solutions. We work
//                     hand-in-hand with our clients, guiding them through the process and highlighting the long-term
//                     benefits and opportunities that our tailored solutions deliver.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const Page = () => {
  return (
    <div className="page-wrapper">
      {/* Navbar with fixed top and purple background */}
      <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
        <Navbar />
      </div>

      <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4 sm:py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar with sticky positioning */}
            <aside className="lg:w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 lg:sticky top-[100px] h-auto lg:h-[calc(70vh-30px)]">
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-8 text-gray-800">
                  Our Services
                </h4>
                <ul className="space-y-4 lg:space-y-10">
                  <li>
                    <Link
                      href="/component/Services/ItServices"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                      <span className="mr-2">➤</span>IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/component/Services/software-development"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                      <span className="mr-2">➤</span>software-development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/component/Services/ProductDevelopment"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                      <span className="mr-2">➤</span>Product Development
                    </Link>
                  </li>
                  <li className="active">
                    <Link
                      href="/component/Services/CloudServices"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                      <span className="mr-2">➤</span>Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/component/Services/TestingServices"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                      <span className="mr-2">➤</span>Testing Services
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 lg:pl-8">
              <div className="service-single-one">
                {/* Image */}
                <div className="image mb-4">
                  <Image
                    src="/image/software.jpeg"
                    alt="Software Development"
                    width={800}
                    height={400}
                    layout="responsive"
                    className="rounded shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="lower-content">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    SOFTWARE DEVELOPMENT
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Software development involves creating, designing,
                    deploying, and maintaining software. Software includes
                    instructions that tell computers what to do and can be
                    categorized into system software (e.g., operating systems),
                    programming software (e.g., compilers), application software
                    (e.g., web apps), and embedded software (e.g., in cars or
                    IoT devices). Programmers write code, software engineers
                    apply engineering principles, and software developers manage
                    the development process. Custom software development tailors
                    software to specific users or organizations, while
                    commercial software is designed for general use.
                  </p>
                  <p>
                    The software development process includes planning,
                    gathering requirements, designing, coding, testing,
                    deploying, and maintaining software. It follows
                    methodologies like Agile, DevOps, and Waterfall, and focuses
                    on continuous improvement. Software development is crucial
                    because it drives innovation across industries, enhancing
                    products and services, such as AI-powered assistants or IoT
                    devices. Key technologies influencing software development
                    include AI, cloud-native development, blockchain, low-code
                    platforms, and analytics. Effective software development
                    involves applying modern techniques and tools to accelerate
                    deployment, ensure quality, and meet user needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
