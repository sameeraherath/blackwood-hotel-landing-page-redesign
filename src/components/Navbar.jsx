import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <div className="hidden md:flex space-x-8 justify-center flex-grow ">
            <Link
              to="/"
              className="text-green-700 hover:text-green-600  text-lg"
            >
              Home
            </Link>
            {/* Link to homepage with section hash */}
            <Link
              to="/#about"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              About
            </Link>
            <Link
              to="/#rooms"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Rooms
            </Link>
            <Link
              to="/#gallery"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-green-700 hover:text-green-600 text-lg"
            >
              Contact
            </Link>
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
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2  px-4 border-b pb-6">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-green-700 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={toggleMenu}
              className="block text-green-700 hover:text-green-600"
            >
              About
            </Link>
            <Link
              to="/#rooms"
              onClick={toggleMenu}
              className="block text-green-700 hover:text-green-600"
            >
              Rooms
            </Link>
            <Link
              to="/#gallery"
              onClick={toggleMenu}
              className="block text-green-700 hover:text-green-600"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block text-green-700 hover:text-green-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
