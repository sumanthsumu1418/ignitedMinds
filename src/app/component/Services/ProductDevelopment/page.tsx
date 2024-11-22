// import React from 'react';
// import Navbar from '../../Navbar';
// import Footer from '../../Footer';
// import Link from 'next/link'; // Importing Link from next/link

// const ProductDevelopment = () => {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
//         {/* Main Content */}
//         <div className="container mx-auto py-16 px-4">
//           <div className="flex flex-col md:flex-row">
//             {/* Sidebar */}
//             <div className="w-1/4 p-4">
//               <aside className="w-full p-4 bg-gradient-to-r from-purple-50 to-purple-200 sticky top-[100px] h-[calc(70vh-30px)]">
//                 <div className="mb-6">
//                   <h4 className="text-lg font-bold mb-8">Our Services</h4>
//                   <ul className="space-y-6">
//                   <li>
//                       <Link href="/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                         <span className="mr-2">➤</span>IT Services
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/software-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                         <span className="mr-2">➤</span>Software Development
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/product-development" className="flex items-center text-gray-700 hover:text-blue-500">
//                         <span className="mr-2">➤</span>Product Development
//                       </Link>
//                     </li>
//                     <li className="active">
//                       <Link href="/cloud-strategy" className="flex items-center text-gray-700 hover:text-blue-500">
//                         <span className="mr-2">➤</span>Cloud Services
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/testing-services" className="flex items-center text-gray-700 hover:text-blue-500">
//                         <span className="mr-2">➤</span>Testing Services
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </aside>
//             </div>

//             {/* Content Section */}
//             <div className="w-3/4 p-4">
//               <div className="bg-gradient-to-r from-purple-50 to-purple-200">
//                 <div className="mb-6">
//                   <img src="/image/Productdevelopment.jpg" alt="Product Development" className="w-full h-auto rounded-lg" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-4">Product Development</h3>
//                   <p className="text-gray-700 mb-6">
//                     Software Product Development is the methodology used for structuring, planning, and controlling the process of developing products. It involves a lot of groundwork to define the product vision, consider product sustainability, and ensure business success. A product development initiative must guarantee quality and work towards a specific release date. We understand where your priorities lie. We build a product roadmap jointly with you, and work towards building the product within your targets of budget and timeline.
//                   </p>

//                   <h3 className="text-2xl font-semibold mb-4">Capabilities of Ignited Minds</h3>
//                   <p className="text-gray-700 mb-6">
//                     Working with us ensures product development speed, product quality, and cost savings for you. Throughout the project of product development, our core development team works with your visualization team. While you can focus on strategic initiatives, our team focuses on production and feature enhancements.
//                   </p>
//                   <p className="text-gray-700 mb-6">
//                     An Application Consultant from our core team plays the sheet-anchor role and oversees the entire project through the stages of Software Product Development Lifecycle to ensure that the implementation process is carried out smoothly and ends successfully. The Application Consultant also ensures that on completion of the project, you get what you had initially wished for.
//                   </p>
//                   <div className="text-gray-700 mb-6">
//                     Our software product development services ensure the following for you:
//                     <ul className="list-disc pl-6 mt-2">
//                       <li>Assured Return on Investment</li>
//                       <li>Faster development cycle</li>
//                       <li>Increased development productivity</li>
//                       <li>Low development costs</li>
//                       <li>Reduced time to market</li>
//                       <li>Quality software products</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default ProductDevelopment;

import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Link from "next/link";
import Image from "next/image";

const ProductDevelopment = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4 sm:py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar with sticky positioning */}
            <aside className="lg:w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 lg:sticky lg:top-[100px] h-auto lg:h-[calc(70vh-30px)] mb-8 lg:mb-0">
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
                  <li>
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

            {/* Content Section */}
            <div className="w-full lg:w-3/4 p-4">
              <div className="bg-gradient-to-r from-purple-50 to-purple-200">
                {/* Responsive Image */}
                <div className="mb-6">
                  <Image
                    src="/image/productdevelopment.jpeg"
                    alt="Product Development"
                    className="rounded-lg"
                    width={1200} // Replace with actual image width
                    height={800} // Replace with actual image height
                    layout="responsive"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                    PRODUCT DEVELOPMENT
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 mb-6">
                    Product development is the process of creating and launching
                    products to meet customer needs. It involves various stages
                    such as ideation, concept testing, marketing strategy,
                    business analysis, and commercialization. It is a
                    collaborative effort involving product managers, designers,
                    engineers, and external stakeholders, often using an
                    iterative approach with improvements based on customer
                    feedback.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                    Stages of Product Development
                  </h3>
                  <div className="text-sm md:text-base text-gray-700 mb-6">
                    <p>
                      Here are the key stages of the product development
                      process:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Ideation:</strong> Generating ideas to improve
                        existing products or create new ones based on customer
                        needs.
                      </li>
                      <li>
                        <strong>Idea Screening:</strong> Evaluating product
                        ideas to determine their viability and potential market
                        appeal.
                      </li>
                      <li>
                        <strong>Concept Development or Testing:</strong>{" "}
                        Transforming ideas into detailed product concepts or
                        prototypes for customer feedback.
                      </li>
                      <li>
                        <strong>Marketing Strategy:</strong> Defining the
                        marketing approach, including pricing, sales goals, and
                        distribution strategies.
                      </li>
                      <li>
                        <strong>Business Analysis:</strong> Assessing the
                        product's profitability, costs, and sales projections.
                      </li>
                      <li>
                        <strong>Test Marketing:</strong> Launching the product
                        in limited markets to gather feedback and refine the
                        product before the full release.
                      </li>
                      <li>
                        <strong>Commercialization:</strong> Full-scale
                        production and market launch of the product.
                      </li>
                      <li>
                        <strong>Post-Launch Review and Iteration:</strong>{" "}
                        Analyzing product performance and iterating on future
                        updates or versions based on customer feedback.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDevelopment;
