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
//                   <li>
//                     <Link href="/It Services" className="flex items-center text-gray-700 hover:text-blue-500">
//                       <span className="mr-2">➤</span>IT Services
//                     </Link>
//                   </li>
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
//                     src="/image/freepik__upload__88831.jpeg"
//                     alt="IT Services"
//                     width={870} // Image width
//                     height={680} // Image height
//                     layout="intrinsic" // Maintains aspect ratio
//                     className="rounded shadow-md object-cover" // Additional styles
//                     style={{ maxWidth: "870px", maxHeight: "580px" }} // Explicitly set maximum dimensions
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="lower-content">
//                   <h3 className="text-2xl font-semibold mb-4">IT SERVICES</h3>
//                   <p className="mb-4">
//                     At Ignited Minds, we provide comprehensive IT services designed to empower businesses to stay ahead in the ever-evolving digital landscape. From cloud computing solutions to custom software development and IT support, our expert team works with cutting-edge technologies to ensure your systems are secure, scalable, and efficient. We offer a range of services tailored to meet the unique needs of your business, including data management, IT infrastructure optimization, and 24/7 technical support, helping you improve your operational efficiency and stay competitive.
//                   </p>
//                   <p className="mb-4">
//                     Our IT services are focused on driving innovation and maximizing the potential of your technology investments. Whether you're looking to streamline operations, improve cybersecurity, or migrate to the cloud, Ignited Minds is committed to delivering high-quality solutions that align with your business goals. We partner with you to design and implement IT strategies that not only address your current needs but also position you for long-term growth in the digital age. Our experienced professionals work closely with your team to provide proactive solutions and seamless support throughout every phase of your IT journey.
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
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-purple-600 shadow-md z-50">
        <Navbar />
      </div>

      <main className="pt-[80px] bg-gradient-to-r from-purple-50 to-purple-200">
        {/* Main Content */}
        <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="lg:w-1/4 p-4 bg-gradient-to-r from-purple-50 to-purple-200 lg:sticky top-[100px] h-auto lg:h-[calc(70vh-30px)]">
              <div className="mb-6">
                <h4 className="text-lg text-gray-800 font-bold mb-8">
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
                {/* Image */}
                <div className="image mb-4">
                  <Image
                    src="/image/ItServices.jpeg"
                    alt="IT Services"
                    width={870}
                    height={680}
                    layout="intrinsic"
                    className="rounded shadow-md object-cover w-full h-auto"
                  />
                </div>

                {/* Content */}
                <div className="lower-content">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
                    IT SERVICES
                  </h3>
                  <p className="text-sm lg:text-base mb-4 text-gray-700">
                    At Ignited Minds, we provide comprehensive IT services
                    designed to empower businesses to stay ahead in the
                    ever-evolving digital landscape. From cloud computing
                    solutions to custom software development and IT support, our
                    expert team works with cutting-edge technologies to ensure
                    your systems are secure, scalable, and efficient.
                  </p>
                  <p className="text-sm lg:text-base mb-4 text-gray-700">
                    Our IT services are focused on driving innovation and
                    maximizing the potential of your technology investments.
                    Whether you're looking to streamline operations, improve
                    cybersecurity, or migrate to the cloud, Ignited Minds is
                    committed to delivering high-quality solutions that align
                    with your business goals.
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
