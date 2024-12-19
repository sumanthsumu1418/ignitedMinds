// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Phone } from "lucide-react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [activeLink, setActiveLink] = useState<string>("");
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//     setIsMobileMenuOpen(false);
//   };

//   const handleDropdownHover = (dropdown: string) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setActiveDropdown(dropdown);
//   };

//   const handleDropdownLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 300); // Delay before closing the dropdown
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target as Node) &&
//         isMobileMenuOpen
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   const courseOptions = [
//     { name: "Java Full Stack", href: "/java-full-stack" },
//     { name: "React", href: "/react" },
//     {
//       name: "Python Data Engineering",
//       href: "/python-data-engineering",
//     },
//     { name: "AWS Cloud Engineering", href: "/aws-cloud-engineering" },
//     { name: "Snowflakes/ETL Testing", href: "/snowflake" },
//     { name: "Data Analyst", href: "/data-analyst" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-black shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
//         {/* Logo with increased left margin */}
//         <div className="flex items-center ml-4">
//           <Link href="/">
//             <Image
//               src="/image/logo.png"
//               alt="Ignited Minds Logo"
//               width={120}
//               height={120}
//               className="cursor-pointer"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Mobile menu toggle and phone number */}
//         <div className="md:hidden flex items-center space-x-4">
//           <Link
//             href="tel:8296068323"
//             className="group relative px-3 py-1 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-1"
//           >
//             <Phone className="w-3 h-3" />
//             <span className="font-semibold text-sm">8296068323</span>
//             <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
//           </Link>
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle mobile menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop navigation links with increased text size */}
//         <div className="hidden md:flex items-center space-x-8 text-white font-semibold text-lg">
//           <Link
//             href="/aboutus"
//             className={`${
//               activeLink === "About Us" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("About Us")}
//           >
//             About Us
//           </Link>
//           <div
//             className="relative group"
//             onMouseEnter={() => handleDropdownHover("courses")}
//             onMouseLeave={handleDropdownLeave}
//           >
//             <div className="flex items-center">
//               <Link
//                 href="/Courses"
//                 className={`${
//                   activeLink === "Courses" ? "text-red-500" : "text-white"
//                 } hover:text-red-500 transition-colors duration-200 mr-2`}
//                 onClick={() => handleLinkClick("Courses")}
//               >
//                 Courses
//               </Link>
//               <button
//                 className="text-white hover:text-red-500 transition-colors duration-200"
//                 onClick={() => toggleDropdown("courses")}
//                 aria-expanded={activeDropdown === "courses"}
//                 aria-haspopup="true"
//               >
//                 <svg
//                   className={`w-4 h-4 transform transition-transform duration-200 ${
//                     activeDropdown === "courses" ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             {/* Courses Dropdown Menu */}
//             <div
//               ref={dropdownRef}
//               className={`absolute left-0 mt-2 w-48 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
//                 activeDropdown === "courses"
//                   ? "opacity-100 scale-100"
//                   : "opacity-0 scale-95 pointer-events-none"
//               }`}
//             >
//               {courseOptions.map((course) => (
//                 <Link
//                   key={course.name}
//                   href={course.href}
//                   className="block px-4 py-2 text-white hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-sm"
//                   onClick={() => handleLinkClick(course.name)}
//                 >
//                   {course.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link
//             href="/component/blog"
//             className={`${
//               activeLink === "Blogs" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Blogs")}
//           >
//             Blogs
//           </Link>
//           <Link
//             href="/placements"
//             className={`${
//               activeLink === "Placements" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Placements")}
//           >
//             Placements
//           </Link>
//         </div>

//         {/* Desktop Registration button and Phone number */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             href="/registration"
//             className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full ${
//               activeLink === "Registrations"
//                 ? "text-red-500 border-red-500"
//                 : ""
//             } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Registrations")}
//           >
//             Registrations
//           </Link>

//           <Link
//             href="tel:8296068323"
//             className="group relative px-6 py-2 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
//           >
//             <Phone className="w-4 h-4" />
//             <span className="font-semibold">8296068323</span>
//             <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={sidebarRef}
//         className={`fixed inset-y-0 right-0 transform ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out bg-black w-64 z-50 md:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white focus:outline-none"
//             aria-label="Close mobile menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* Sidebar links */}
//         <div className="flex flex-col items-start space-y-4 p-6">
//           <Link
//             href="/aboutus"
//             className={`${
//               activeLink === "About Us" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("About Us")}
//           >
//             About Us
//           </Link>
//           <div>
//             <div className="flex items-center">
//               <Link
//                 href="/Courses"
//                 className={`${
//                   activeLink === "Courses" ? "text-red-500" : "text-white"
//                 } hover:text-red-500 transition-colors duration-200 mr-2`}
//                 onClick={() => handleLinkClick("Courses")}
//               >
//                 Courses
//               </Link>
//               <button
//                 className="text-white hover:text-red-500 transition-colors duration-200"
//                 onClick={() => toggleDropdown("courses")}
//                 aria-expanded={activeDropdown === "courses"}
//                 aria-haspopup="true"
//               >
//                 <svg
//                   className={`w-4 h-4 transform transition-transform duration-200 ${
//                     activeDropdown === "courses" ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
//                 activeDropdown === "courses"
//                   ? "max-h-96 opacity-100"
//                   : "max-h-0 opacity-0 overflow-hidden"
//               }`}
//             >
//               {courseOptions.map((course) => (
//                 <Link
//                   key={course.name}
//                   href={course.href}
//                   className="block text-white hover:text-red-500 transition-colors duration-200"
//                   onClick={() => handleLinkClick(course.name)}
//                 >
//                   {course.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link
//             href="/component/blog"
//             className={`${
//               activeLink === "Blogs" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Blogs")}
//           >
//             Blogs
//           </Link>
//           <Link
//             href="/placements"
//             className={`${
//               activeLink === "Placements" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Placements")}
//           >
//             Placements
//           </Link>
//           <Link
//             href="/registration"
//             className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full mt-4 ${
//               activeLink === "Registrations"
//                 ? "text-red-500 border-red-500"
//                 : ""
//             } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Registrations")}
//           >
//             Registrations
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Phone } from "lucide-react";
// import { gsap } from "gsap";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [activeLink, setActiveLink] = useState<string>("");
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const navbarRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//     setIsMobileMenuOpen(false);
//   };

//   const handleDropdownHover = (dropdown: string) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setActiveDropdown(dropdown);
//   };

//   const handleDropdownLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 300);
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target as Node) &&
//         isMobileMenuOpen
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     // Animate navbar items on mount
//     gsap.from(navbarRef.current?.children, {
//       opacity: 0,
//       y: -20,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   }, []);

//   useEffect(() => {
//     // Animate mobile menu
//     if (isMobileMenuOpen) {
//       gsap.to(sidebarRef.current, {
//         x: 0,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     } else {
//       gsap.to(sidebarRef.current, {
//         x: "100%",
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     }
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     if (activeDropdown === "courses") {
//       gsap.from(dropdownRef.current?.children, {
//         opacity: 0,
//         y: -10,
//         stagger: 0.05,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   }, [activeDropdown]);

//   const courseOptions = [
//     { name: "Java Full Stack", href: "/java-full-stack" },
//     { name: "React", href: "/react" },
//     { name: "Python Data Engineering", href: "/python-data-engineering" },
//     { name: "AWS Cloud Engineering", href: "/aws-cloud-engineering" },
//     { name: "Snowflakes/ETL Testing", href: "/snowflake" },
//     { name: "Data Analyst", href: "/data-analyst" },
//   ];

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 w-full bg-black shadow-md z-50"
//       ref={navbarRef}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
//         {/* Logo with increased left margin */}
//         <div className="flex items-center ml-4">
//           <Link href="/">
//             <Image
//               src="/image/logo.png"
//               alt="Ignited Minds Logo"
//               width={120}
//               height={120}
//               className="cursor-pointer"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Mobile menu toggle and phone number */}
//         <div className="md:hidden flex items-center space-x-4">
//           <Link
//             href="tel:8296068323"
//             className="group relative px-3 py-1 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-1"
//           >
//             <Phone className="w-3 h-3" />
//             <span className="font-semibold text-sm">8296068323</span>
//             <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
//           </Link>
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle mobile menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop navigation links with increased text size */}
//         <div className="hidden md:flex items-center space-x-8 text-white font-semibold text-lg">
//           <Link
//             href="/aboutus"
//             className={`${
//               activeLink === "About Us" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("About Us")}
//           >
//             About Us
//           </Link>
//           <div
//             className="relative group"
//             onMouseEnter={() => handleDropdownHover("courses")}
//             onMouseLeave={handleDropdownLeave}
//           >
//             <div className="flex items-center">
//               <Link
//                 href="/Courses"
//                 className={`${
//                   activeLink === "Courses" ? "text-red-500" : "text-white"
//                 } hover:text-red-500 transition-colors duration-200 mr-2`}
//                 onClick={() => handleLinkClick("Courses")}
//               >
//                 Courses
//               </Link>
//               <button
//                 className="text-white hover:text-red-500 transition-colors duration-200"
//                 onClick={() => toggleDropdown("courses")}
//                 aria-expanded={activeDropdown === "courses"}
//                 aria-haspopup="true"
//               >
//                 <svg
//                   className={`w-4 h-4 transform transition-transform duration-200 ${
//                     activeDropdown === "courses" ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             {/* Courses Dropdown Menu */}
//             <div
//               ref={dropdownRef}
//               className={`absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
//                 activeDropdown === "courses"
//                   ? "opacity-100 scale-100"
//                   : "opacity-0 scale-95 pointer-events-none"
//               }`}
//             >
//               {courseOptions.map((course) => (
//                 <Link
//                   key={course.name}
//                   href={course.href}
//                   className={`block px-4 py-2 text-white hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-sm ${
//                     activeLink === course.name ? "bg-red-500" : ""
//                   }`}
//                   onClick={() => handleLinkClick(course.name)}
//                 >
//                   {course.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link
//             href="/component/blog"
//             className={`${
//               activeLink === "Blogs" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Blogs")}
//           >
//             Blogs
//           </Link>
//           <Link
//             href="/placements"
//             className={`${
//               activeLink === "Placements" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Placements")}
//           >
//             Placements
//           </Link>
//         </div>

//         {/* Desktop Registration button and Phone number */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             href="/registration"
//             className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full ${
//               activeLink === "Registrations"
//                 ? "text-red-500 border-red-500"
//                 : ""
//             } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Registrations")}
//           >
//             Registrations
//           </Link>

//           <Link
//             href="tel:8296068323"
//             className="group relative px-6 py-2 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
//           >
//             <Phone className="w-4 h-4" />
//             <span className="font-semibold">8296068323</span>
//             <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={sidebarRef}
//         className={`fixed inset-y-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out bg-black bg-opacity-80 backdrop-blur-sm w-64 z-50 md:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="text-white focus:outline-none"
//             aria-label="Close mobile menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* Sidebar links */}
//         <div className="flex flex-col items-start space-y-4 p-6">
//           <Link
//             href="/aboutus"
//             className={`${
//               activeLink === "About Us" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("About Us")}
//           >
//             About Us
//           </Link>
//           <div>
//             <div className="flex items-center">
//               <Link
//                 href="/Courses"
//                 className={`${
//                   activeLink === "Courses" ? "text-red-500" : "text-white"
//                 } hover:text-red-500 transition-colors duration-200 mr-2`}
//                 onClick={() => handleLinkClick("Courses")}
//               >
//                 Courses
//               </Link>
//               <button
//                 className="text-white hover:text-red-500 transition-colors duration-200"
//                 onClick={() => toggleDropdown("courses")}
//                 aria-expanded={activeDropdown === "courses"}
//                 aria-haspopup="true"
//               >
//                 <svg
//                   className={`w-4 h-4 transform transition-transform duration-200 ${
//                     activeDropdown === "courses" ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
//                 activeDropdown === "courses"
//                   ? "max-h-96 opacity-100"
//                   : "max-h-0 opacity-0 overflow-hidden"
//               }`}
//             >
//               {courseOptions.map((course) => (
//                 <Link
//                   key={course.name}
//                   href={course.href}
//                   className={`block px-4 py-2 text-white hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-sm ${
//                     activeLink === course.name ? "bg-red-500" : ""
//                   }`}
//                   onClick={() => handleLinkClick(course.name)}
//                 >
//                   {course.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link
//             href="/component/blog"
//             className={`${
//               activeLink === "Blogs" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Blogs")}
//           >
//             Blogs
//           </Link>
//           <Link
//             href="/placements"
//             className={`${
//               activeLink === "Placements" ? "text-red-500" : "text-white"
//             } hover:text-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Placements")}
//           >
//             Placements
//           </Link>
//           <Link
//             href="/registration"
//             className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full mt-4 ${
//               activeLink === "Registrations"
//                 ? "text-red-500 border-red-500"
//                 : ""
//             } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
//             onClick={() => handleLinkClick("Registrations")}
//           >
//             Registrations
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownHover = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Animate navbar items on mount
    if (navbarRef.current) {
      gsap.from(Array.from(navbarRef.current.children), {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    // Animate mobile menu
    if (isMobileMenuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  const courseOptions = [
    { name: "Java Full Stack", href: "/java-full-stack" },
    { name: "React", href: "/react" },
    { name: "Python Data Engineering", href: "/python-data-engineering" },
    { name: "AWS Cloud Engineering", href: "/aws-cloud-engineering" },
    { name: "Snowflakes/ETL Testing", href: "/snowflake" },
    { name: "Data Analyst", href: "/data-analyst" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50" ref={navbarRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo with increased left margin */}
        <div className="flex items-center ml-4">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Ignited Minds Logo"
              width={120}
              height={120}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu toggle and phone number */}
        <div className="md:hidden flex items-center space-x-4">
          <Link
            href="tel:8296068323"
            className="group relative px-3 py-1 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span className="font-semibold text-sm">8296068323</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation links with increased text size */}
        <div className="hidden md:flex items-center space-x-8 text-white font-semibold text-lg">
          <Link
            href="/aboutus"
            className={`${
              activeLink === "About Us" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("About Us")}
          >
            About Us
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownHover("courses")}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center">
              <Link
                href="/Courses"
                className={`${
                  activeLink === "Courses" ? "text-red-500" : "text-white"
                } hover:text-red-500 transition-colors duration-200 mr-2`}
                onClick={() => handleLinkClick("Courses")}
              >
                Courses
              </Link>
              <button
                className="text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => toggleDropdown("courses")}
                aria-expanded={activeDropdown === "courses"}
                aria-haspopup="true"
              >
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "courses" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {/* Courses Dropdown Menu */}
            <div
              ref={dropdownRef}
              className={`absolute left-0 mt-2 w-48 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
                activeDropdown === "courses"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {courseOptions.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="block px-4 py-2 text-white hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-sm"
                  onClick={() => handleLinkClick(course.name)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/blog"
            className={`${
              activeLink === "Blogs" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/placements"
            className={`${
              activeLink === "Placements" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Placements")}
          >
            Placements
          </Link>
        </div>

        {/* Desktop Registration button and Phone number */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/registration"
            className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full ${
              activeLink === "Registrations"
                ? "text-red-500 border-red-500"
                : ""
            } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Registrations")}
          >
            Registrations
          </Link>

          <Link
            href="tel:8296068323"
            className="group relative px-6 py-2 bg-red-600 text-white rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">8296068323</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out bg-black bg-opacity-80 backdrop-blur-sm w-64 z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Close mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Sidebar links */}
        <div className="flex flex-col items-start space-y-4 p-6">
          <Link
            href="/aboutus"
            className={`${
              activeLink === "About Us" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("About Us")}
          >
            About Us
          </Link>
          <div>
            <div className="flex items-center">
              <Link
                href="/Courses"
                className={`${
                  activeLink === "Courses" ? "text-red-500" : "text-white"
                } hover:text-red-500 transition-colors duration-200 mr-2`}
                onClick={() => handleLinkClick("Courses")}
              >
                Courses
              </Link>
              <button
                className="text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => toggleDropdown("courses")}
                aria-expanded={activeDropdown === "courses"}
                aria-haspopup="true"
              >
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === "courses" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                activeDropdown === "courses"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {courseOptions.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="block text-white hover:text-red-500 transition-colors duration-200"
                  onClick={() => handleLinkClick(course.name)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/blog"
            className={`${
              activeLink === "Blogs" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/placements"
            className={`${
              activeLink === "Placements" ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Placements")}
          >
            Placements
          </Link>
          <Link
            href="/registration"
            className={`px-4 py-2 bg-transparent text-white border-2 border-white rounded-full mt-4 ${
              activeLink === "Registrations"
                ? "text-red-500 border-red-500"
                : ""
            } hover:text-red-500 hover:border-red-500 transition-colors duration-200`}
            onClick={() => handleLinkClick("Registrations")}
          >
            Registrations
          </Link>
        </div>
      </div>
    </nav>
  );
}
