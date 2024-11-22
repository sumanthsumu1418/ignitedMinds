"use client";

import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
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
    }, 300); // Delay before closing the dropdown
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const courseOptions = [
    { name: "Java Full Stack", href: "/component/java-full-stack" },
    { name: "React", href: "/component/react" },
    {
      name: "Python Data Engineering",
      href: "/component/python-data-engineering",
    },
    { name: "AWS Cloud Engineering", href: "/component/AWS-Cloud-Engineering" },
    { name: "Snowflakes/ETL Testing", href: "/component/snowflake" },
    { name: "Data Analyst", href: "/component/data-analyst" },
  ];

  const serviceOptions = [
    { name: "IT SERVICES", href: "/component/Services/ItServices" },
    {
      name: "SOFTWARE DEVELOPMENT",
      href: "/component/Services/software-development",
    },
    {
      name: "PRODUCT DEVELOPMENT",
      href: "/component/Services/ProductDevelopment",
    },
    { name: "CLOUD SERVICES", href: "/component/Services/CloudServices" },
    { name: "TESTING SERVICES", href: "/component/Services/TestingServices" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-50 to-purple-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Ignited Minds Logo"
              width={80}
              height={80}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
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

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-12 text-black font-semibold text-base">
          <Link
            href="/component/aboutus"
            className={`${
              activeLink === "About Us" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
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
                href="/component/Courses"
                className={`${
                  activeLink === "Courses" ? "text-purple-700" : "text-black"
                } hover:text-purple-700 transition-colors duration-200 mr-2`}
                onClick={() => handleLinkClick("Courses")}
              >
                Courses
              </Link>
              <button
                className="text-black hover:text-purple-700 transition-colors duration-200"
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
              className={`absolute left-0 mt-2 w-48 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
                activeDropdown === "courses"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {courseOptions.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="block px-4 py-2 text-black hover:bg-purple-100 transition-colors duration-200"
                  onClick={() => handleLinkClick(course.name)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownHover("services")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center ${
                activeLink === "Services" ? "text-purple-700" : "text-black"
              } hover:text-purple-700 transition-colors duration-200`}
              onClick={() => toggleDropdown("services")}
              aria-expanded={activeDropdown === "services"}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : ""
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
            {/* Services Dropdown Menu */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
                activeDropdown === "services"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {serviceOptions.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-4 py-2 text-black hover:bg-purple-100 transition-colors duration-200"
                  onClick={() => handleLinkClick(service.name)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/component/blog"
            className={`${
              activeLink === "Blogs" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/component/placements"
            className={`${
              activeLink === "Placements" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Placements")}
          >
            Placements
          </Link>
        </div>

        {/* Desktop Registration button */}
        <div className="hidden md:flex justify-end">
          <Link
            href="/component/registration"
            className={`px-4 py-2 bg-transparent text-black border-2 border-black rounded-full ${
              activeLink === "Registrations" ? "text-purple-700" : ""
            } hover:text-purple-700 hover:border-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Registrations")}
          >
            Registrations
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-purple-200 w-64 z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black focus:outline-none"
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
            href="/component/aboutus"
            className={`${
              activeLink === "About Us" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("About Us")}
          >
            About Us
          </Link>
          <div>
            <div className="flex items-center">
              <Link
                href="/component/Courses"
                className={`${
                  activeLink === "Courses" ? "text-purple-700" : "text-black"
                } hover:text-purple-700 transition-colors duration-200 mr-2`}
                onClick={() => handleLinkClick("Courses")}
              >
                Courses
              </Link>
              <button
                className="text-black hover:text-purple-700 transition-colors duration-200"
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
                  className="block text-black hover:text-purple-700 transition-colors duration-200"
                  onClick={() => handleLinkClick(course.name)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <button
              className={`flex items-center ${
                activeLink === "Services" ? "text-purple-700" : "text-black"
              } hover:text-purple-700 transition-colors duration-200`}
              onClick={() => toggleDropdown("services")}
              aria-expanded={activeDropdown === "services"}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : ""
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
            <div
              className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                activeDropdown === "services"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {serviceOptions.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-black hover:text-purple-700 transition-colors duration-200"
                  onClick={() => handleLinkClick(service.name)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/component/blog"
            className={`${
              activeLink === "Blogs" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/component/placements"
            className={`${
              activeLink === "Placements" ? "text-purple-700" : "text-black"
            } hover:text-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Placements")}
          >
            Placements
          </Link>
          <Link
            href="/component/registration"
            className={`px-4 py-2 bg-transparent text-black border-2 border-black rounded-full mt-4 ${
              activeLink === "Registrations" ? "text-purple-700" : ""
            } hover:text-purple-700 hover:border-purple-700 transition-colors duration-200`}
            onClick={() => handleLinkClick("Registrations")}
          >
            Registrations
          </Link>
        </div>
      </div>
    </nav>
  );
}
