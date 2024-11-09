"use client";

import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close the sidebar on mobile when a link is clicked
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-50 to-purple-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="image/logo.png"
            alt="Ignited Minds Logo"
            className="h-10 w-auto md:h-20 cursor-pointer" // Larger logo for laptop
          />
        </div>

        {/* Mobile menu toggle (only visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            {/* Hamburger Icon */}
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

        {/* Desktop Navigation Links (hidden on small screens, visible on medium and up) */}
        <div className="hidden md:flex items-center space-x-8 text-black font-semibold text-lg">
          {["About Us", "Courses", "Blogs", "Placements"].map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`${
                activeLink === link ? "text-purple-700" : "text-black"
              } hover:text-purple-700`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Registration Button (hidden on small screens, visible on medium and up) */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={() => handleLinkClick("Registrations")}
            className={`px-4 py-2 bg-transparent text-black border-2 border-black rounded-full ${
              activeLink === "Registrations" ? "text-purple-700" : ""
            } hover:text-purple-700`}
          >
            Registrations
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible on small screens when menu is open) */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-purple-200 w-64 z-50 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black focus:outline-none"
          >
            {/* Close Icon */}
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

        {/* Sidebar Links */}
        <div className="flex flex-col items-start space-y-4 p-6">
          {["About Us", "Courses", "Blogs", "Placements"].map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`${
                activeLink === link ? "text-purple-700" : "text-black"
              } hover:text-purple-700`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("Registrations")}
            className={`px-4 py-2 bg-transparent text-black border-2 border-black rounded-full mt-4 ${
              activeLink === "Registrations" ? "text-purple-700" : ""
            } hover:text-purple-700`}
          >
            Registrations
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
