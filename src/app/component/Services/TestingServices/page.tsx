// import React from "react";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <div>

//       {/* Sidebar and Services Page Content */}
//       <div className="flex container mx-auto py-12">
//         {/* Sidebar */}
//         <div className="w-1/4 bg-gray-200 p-6">
//           <h4 className="text-xl font-bold mb-4">Our Services</h4>
//           <ul className="space-y-2">
//             <li>
//               <Link href="/services/software-development">Software Development</Link>
//             </li>
//             <li>
//               <Link href="/services/product-development">Product Development</Link>
//             </li>
//             <li>
//               <Link href="/services/testing-services">Testing Services</Link>
//             </li>
//             <li>
//               <Link href="/services/cloud-strategy">Cloud Strategy</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content for Testing Services */}
//         <div className="w-3/4 p-6">
//           <h1 className="text-3xl font-bold mb-6">Testing Services</h1>

//           <p className="mb-4">
//             Quality Assurance (QA) and Testing Services guarantees that web applications, desktop applications, and independent software are carefully tested using market-accustomed testing and quality analysis processes.
//           </p>

//           <p className="mb-4">
//             We offer a complete range of Software Quality Assurance (QA) and Software Testing Services by capitalizing on software application quality, performance, while managing expenses and reducing the possibility of risks for our valuable clientele.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-4">How is Ignited Minds different in the Market?</h2>
//           <ul className="list-disc pl-6 mb-6">
//             <li>We have the visualization, ability to implement, and steadiness to test website and mobile device software.</li>
//             <li>We offer a customer-oriented and time-specific model for delivering our services.</li>
//             <li>Ignited Minds believes in attaining distinction in delivering value to our customers and allies.</li>
//             <li>Our booming track record in accomplishing demanding actions, verified techniques, and a highly process-specific approach addresses the capacity of our capabilities.</li>
//             <li>Our attitude of preserving the highest level of client satisfaction ensures 100% reference-ability.</li>
//           </ul>

//           <h2 className="text-2xl font-semibold mt-6 mb-4">Services:</h2>
//           <p className="mb-4">
//             We offer autonomous QA and Testing Services on all aspects of the entire software development and release lifecycle. Our QA services help our clients deliver their web-based products/services with assurance and compete better in the market. This includes devising test plans and cases, implementation, defect coverage, risk evaluation, and suggestions.
//           </p>

//           <h2 className="text-2xl font-semibold mt-6 mb-4">Why Outsource Testing to Ignited Minds?</h2>
//           <ul className="list-disc pl-6 mb-6">
//             <li>Autonomous Testing Environment which is objective, independent, and evenhanded.</li>
//             <li>We consider the best testing practices available in the market.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
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
//                   <li>
//                     <Link href="/services/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>IT Services
//                     </Link>
//                   </li>
//                   <Link href="/services/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Software Development
//                     </Link>
//                   <li>
//                     <Link href="/services/product-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Product Development
//                     </Link>
//                   </li>
//                   <li className="active">
//                     <Link href="/services/testing-services" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Testing Services
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/services/cloud-strategy" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>Cloud Services
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </aside>

//             {/* Main Content for Testing Services */}
//             <div className="w-full md:w-3/4 md:pl-8">
//               <div className="service-single-one">
//                 {/* Header Image */}
//                 <div className="image mb-4">
//                   <Image
//                     src="/image/softwaretesting.jpg"  // Image path
//                     alt="Testing Services"
//                     width={800}  // HD quality width
//                     height={400} // Adjusted height
//                     layout="responsive"
//                     className="rounded shadow-md"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="lower-content">
//                   <h1 className="text-3xl font-bold mb-6">TESTING SERVICES</h1>

//                   <p className="mb-4">
//                     Quality Assurance (QA) and Testing Services guarantees that web applications, desktop applications, and independent software are carefully tested using market-accustomed testing and quality analysis processes.
//                   </p>

//                   <p className="mb-4">
//                     We offer a complete range of Software Quality Assurance (QA) and Software Testing Services by capitalizing on software application quality, performance, while managing expenses and reducing the possibility of risks for our valuable clientele.
//                   </p>

//                   <h2 className="text-2xl font-semibold mt-6 mb-4">How is Ignited Minds different in the Market?</h2>
//                   <ul className="list-disc pl-6 mb-6">
//                     <li>We have the visualization, ability to implement, and steadiness to test website and mobile device software.</li>
//                     <li>We offer a customer-oriented and time-specific model for delivering our services.</li>
//                     <li>Ignited Minds believes in attaining distinction in delivering value to our customers and allies.</li>
//                     <li>Our booming track record in accomplishing demanding actions, verified techniques, and a highly process-specific approach addresses the capacity of our capabilities.</li>
//                     <li>Our attitude of preserving the highest level of client satisfaction ensures 100% reference-ability.</li>
//                   </ul>

//                   <h2 className="text-2xl font-semibold mt-6 mb-4">Services:</h2>
//                   <p className="mb-4">
//                     We offer autonomous QA and Testing Services on all aspects of the entire software development and release lifecycle. Our QA services help our clients deliver their web-based products/services with assurance and compete better in the market. This includes devising test plans and cases, implementation, defect coverage, risk evaluation, and suggestions.
//                   </p>

//                   <h2 className="text-2xl font-semibold mt-6 mb-4">Why Outsource Testing to Ignited Minds?</h2>
//                   <ul className="list-disc pl-6 mb-6">
//                     <li>Autonomous Testing Environment which is objective, independent, and evenhanded.</li>
//                     <li>We consider the best testing practices available in the market.</li>
//                   </ul>
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
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
        <Navbar />
      </div>

      <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
        {/* Main Container */}
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
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
            <div className="w-full md:w-3/4">
              <div className="service-single-one">
                {/* Header Image */}
                <div className="image mb-6">
                  <Image
                    src="/image/softwaretesting.jpeg"
                    alt="Testing Services"
                    width={800}
                    height={400}
                    layout="responsive"
                    className="rounded shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="lower-content">
                  <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    TESTING SERVICES
                  </h1>
                  <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">
                    SDLC Methodologies for Web Development
                  </h2>
                  <p className="mb-4 text-gray-600">
                    The Software Development Life Cycle (SDLC) is a structured
                    approach to building software efficiently. Key methodologies
                    include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>
                      <strong>Waterfall Model:</strong> Sequential phases, best
                      for small projects with well-defined requirements.
                    </li>
                    <li>
                      <strong>Agile Methodology:</strong> Iterative approach
                      focusing on collaboration and adaptability for dynamic
                      requirements.
                    </li>
                    <li>
                      <strong>Iterative Model:</strong> Delivers functionality
                      incrementally, ideal for evolving projects.
                    </li>
                    <li>
                      <strong>V-Model:</strong> Emphasizes testing at each
                      stage, suitable for high-reliability systems.
                    </li>
                    <li>
                      <strong>Spiral Model:</strong> Combines iterative and
                      risk-driven approaches for large projects.
                    </li>
                    <li>
                      <strong>DevOps:</strong> Integrates development and
                      operations for continuous testing and deployment.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
                    Web Application Testing Steps
                  </h2>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>
                      <strong>Functionality Testing:</strong> Verifies features
                      like forms, links, and navigation.
                    </li>
                    <li>
                      <strong>Usability Testing:</strong> Ensures intuitive
                      design and user experience.
                    </li>
                    <li>
                      <strong>Interface Testing:</strong> Tests interactions
                      between APIs, servers, and databases.
                    </li>
                    <li>
                      <strong>Compatibility Testing:</strong> Checks
                      compatibility across browsers, devices, and operating
                      systems.
                    </li>
                    <li>
                      <strong>Performance Testing:</strong> Assesses load
                      handling and scalability under traffic.
                    </li>
                    <li>
                      <strong>Security Testing:</strong> Identifies
                      vulnerabilities to protect against attacks.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
                    Testing Tools for Web Applications
                  </h2>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>
                      <strong>Automated Testing Tools:</strong> Ensure
                      consistent and repeatable tests.
                      <ul className="list-disc pl-6">
                        <li>
                          Selenium: Automates browser actions for functional
                          testing.
                        </li>
                        <li>
                          Cypress: Provides real-time reloading for end-to-end
                          testing.
                        </li>
                        <li>
                          Jest: Simplifies unit testing for JavaScript
                          applications.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Load Testing Tools:</strong> Measure performance
                      under varying traffic.
                      <ul className="list-disc pl-6">
                        <li>
                          Apache JMeter: Simulates multiple user scenarios.
                        </li>
                        <li>Gatling: Scalable tool for stress testing.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Security Testing Tools:</strong> Safeguard
                      applications against vulnerabilities.
                      <ul className="list-disc pl-6">
                        <li>
                          OWASP ZAP: Identifies and mitigates security flaws.
                        </li>
                        <li>
                          Burp Suite: Comprehensive suite for security scanning.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cross-Browser Testing Tools:</strong> Ensure
                      consistent behavior across browsers.
                      <ul className="list-disc pl-6">
                        <li>BrowserStack: Tests on a cloud-based platform.</li>
                        <li>Sauce Labs: Automates cross-browser testing.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Accessibility Testing Tools:</strong> Enhance
                      usability for disabled users.
                      <ul className="list-disc pl-6">
                        <li>
                          axe: Integrates with frameworks to provide
                          accessibility reports.
                        </li>
                        <li>WAVE: Instantly evaluates accessibility issues.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Code Quality & CI Tools:</strong> Maintain code
                      integrity and automate workflows.
                      <ul className="list-disc pl-6">
                        <li>Jenkins: Automates build and testing pipelines.</li>
                        <li>
                          CircleCI: Simplifies continuous testing and delivery.
                        </li>
                      </ul>
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

export default Page;
