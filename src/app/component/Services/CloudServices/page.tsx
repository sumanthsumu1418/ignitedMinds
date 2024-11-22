// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Footer from '../../Footer';
// import Navbar from '../../Navbar';

// const CloudStrategyPage: React.FC = () => {
//   return (
//     <div className="page-wrapper">
//       {/* Navbar with fixed top and purple background */}
//       <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
//         <Navbar />
//       </div>

//       <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
//         {/* Main Content */}
//         <div className="container mx-auto py-16 px-4">
//           <div className="flex flex-col lg:flex-row">
//             {/* Sidebar with sticky positioning */}
//             <aside className="lg:w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 lg:sticky top-[100px] h-auto lg:h-[calc(70vh-30px)]">
//               <div className="mb-6">
//                 <h4 className="text-lg font-bold mb-8">Our Services</h4>
//                 <ul className="space-y-4 lg:space-y-10">
//                   <li>
//                     <Link href="/component/Services/ItServices" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>IT Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/component/Services/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>software-development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/component/Services/ProductDevelopment" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Product Development
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link href="/component/Services/CloudServices" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Cloud Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/component/Services/TestingServices" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Testing Services
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <div className="w-full lg:w-3/4 lg:pl-8">
//               <div className="service-single-one">
//                 {/* Header Image */}
//                 <div className="image mb-4">
//                   <Image
//                     src="/image/cloud.jpg" // Ensure high-quality image
//                     alt="Cloud Services"
//                     width={800}
//                     height={400}
//                     layout="responsive"
//                     className="rounded shadow-md"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="lower-content">
//                   <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-center lg:text-left">CLOUD SERVICES</h3>
//                   <p className="mb-4 text-justify">
//                     We outline a methodology of on-prem, cloud, or a mixture model, to guarantee that IT foundation usage is amplified, procedures are virtualized, and time to market is quickened.
//                   </p>

//                   <h4 className="text-lg lg:text-xl font-bold mt-6 mb-4">Guide</h4>
//                   <p className="mb-4 text-justify">
//                     With an exceedingly organized way to deal with business necessities, remembering innovation framework, we make a point by point guide to convey suitable cloud arrangements.
//                   </p>

//                   <h4 className="text-lg lg:text-xl font-bold mt-6 mb-4">Evaluation</h4>
//                   <p className="mb-4 text-justify">
//                     We play out a point by point appraisal with documentation of business and IT drivers to decide preparation for cloud reception.
//                   </p>

//                   <h4 className="text-lg lg:text-xl font-bold mt-6 mb-4">Models for Relocation</h4>
//                   <p className="text-justify">
//                     We then decide resources which are reasonable for cloud movement and recognize apropos cloud administrations.
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

// export default CloudStrategyPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const CloudStrategyPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Navbar with fixed top and purple background */}
      <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
        <Navbar />
      </div>

      <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
        {/* Main Content */}
        <div className="container mx-auto py-16 px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="lg:w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 lg:sticky top-[100px] h-auto lg:h-[calc(70vh-30px)] mb-8 lg:mb-0">
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-8 text-black">
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
                      <span className="mr-2">➤</span>Software Development
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
                {/* Header Image */}
                <div className="image mb-4">
                  <Image
                    src="/image/cloud.jpeg"
                    alt="Cloud Services"
                    width={800}
                    height={400}
                    layout="responsive"
                    className="rounded shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="lower-content">
                  <h4 className="text-lg lg:text-xl text-black font-bold mt-6 mb-4">
                    CLOUD SERVICES
                  </h4>
                  <p className="mb-4 text-justify text-gray-700 text-sm sm:text-base">
                    Cloud services are applications and infrastructure hosted on
                    the internet, provided by third-party companies. They allow
                    users to access powerful computing resources without needing
                    to purchase or maintain hardware and software.
                  </p>

                  <h4 className="text-lg lg:text-xl text-gray-800 font-bold mt-6 mb-4">
                    Why Use Cloud Services?
                  </h4>
                  <p className="mb-4 text-justify text-gray-700 text-sm sm:text-base">
                    Cloud services let users focus on utilizing the
                    infrastructure rather than managing it. Providers handle
                    tasks like application processing, storage, and data
                    management, while users can collaborate, share data, and
                    analyze information without relying on IT teams.
                  </p>

                  <h4 className="text-lg lg:text-xl text-gray-800 font-bold mt-6 mb-4">
                    Benefits of Cloud Services
                  </h4>
                  <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base">
                    <li>
                      <strong>Scalability:</strong> Easily adjust resources
                      based on demand.
                    </li>
                    <li>
                      <strong>Flexibility:</strong> Access and modify resources
                      easily.
                    </li>
                    <li>
                      <strong>Speed:</strong> Fast data processing and
                      application deployment.
                    </li>
                    <li>
                      <strong>Security:</strong> Strong security features like
                      encryption and access limits.
                    </li>
                    <li>
                      <strong>Cost Efficiency:</strong> Pay-as-you-go pricing,
                      eliminating upfront investments.
                    </li>
                    <li>
                      <strong>Disaster Recovery:</strong> Automatic backup and
                      recovery to ensure data resilience.
                    </li>
                    <li>
                      <strong>Agility:</strong> Quickly innovate and launch
                      services.
                    </li>
                    <li>
                      <strong>Reliability:</strong> Redundant infrastructure for
                      high availability.
                    </li>
                  </ul>

                  <h4 className="text-lg lg:text-xl text-gray-800 font-bold mt-6 mb-4">
                    How Are Cloud Services Used?
                  </h4>
                  <p className="mb-4 text-justify text-sm text-gray-700 sm:text-base">
                    Cloud services are used for a wide range of applications:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 text-sm sm:text-base">
                    <li>
                      <strong>Email:</strong> Hosted applications for email
                      access without software installation.
                    </li>
                    <li>
                      <strong>Big Data Analytics:</strong> Cloud services for
                      storing and analyzing large datasets.
                    </li>
                    <li>
                      <strong>Software Development:</strong> Fast environment
                      setup and management for developers.
                    </li>
                    <li>
                      <strong>Backup and Recovery:</strong> Cloud storage for
                      data backup and disaster recovery.
                    </li>
                    <li>
                      <strong>Web Hosting:</strong> Scalable resources for
                      hosting websites with automatic load balancing.
                    </li>
                  </ul>

                  <h4 className="text-lg lg:text-xl text-gray-800 font-bold mt-6 mb-4">
                    Types of Cloud Services
                  </h4>
                  <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base">
                    <li>
                      <strong>Software as a Service (SaaS):</strong> Cloud-based
                      software for users to access and use, such as CRM or HRM
                      systems.
                    </li>
                    <li>
                      <strong>Platform as a Service (PaaS):</strong> Provides a
                      framework for users to build, test, and deploy
                      applications.
                    </li>
                    <li>
                      <strong>Infrastructure as a Service (IaaS):</strong>{" "}
                      Provides virtualized computing resources, allowing users
                      to create and manage their own IT environment.
                    </li>
                  </ul>
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

export default CloudStrategyPage;
