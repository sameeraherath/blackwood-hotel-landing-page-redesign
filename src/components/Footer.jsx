import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-green-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-black pt-8">
              Black Wood Hotel
            </h2>
            <p className="text-black">Haputale, Sri Lanka</p>
          </div>

          {/* Social Media Links with Lucide Icons */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center  text-gray-900">
          <a href="" className="underline">
            Visit Us.
          </a>
          <p className="pb-2">
            &copy;{new Date().getFullYear()} Black Wood Hotel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
