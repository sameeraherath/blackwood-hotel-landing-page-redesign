// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <div className="hidden md:flex space-x-4 justify-center flex-grow ">
            <a
              href="#home"
              className="text-green-700 hover:text-green-600  text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              About
            </a>
            <a
              href="#rooms"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2  px-4 border-b pb-6">
            <a
              href="#home"
              className="block text-green-700 hover:text-green-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-green-700 hover:text-green-600"
            >
              About
            </a>
            <a
              href="#rooms"
              className="block text-green-700 hover:text-green-600"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="block text-green-700 hover:text-green-600"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block text-green-700 hover:text-green-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
