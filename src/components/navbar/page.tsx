"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500/50 backdrop-blur-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-900">
                <img
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  alt="Site Logo"
                />
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 text-center align-middle my-auto">
            <Link href="/login">
              <span className="text-gray-900 hover:text-gray-700">Login</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center items-center">
          <div className="px-10 pt-auto pb-3 space-y-3 sm:px-3">
            <Link href="/login">
              <span className="block text-gray-900 hover:text-green-700 m-2">
                Login
              </span>
            </Link>
            <hr />
            <Link href="/cart">
              <span className="block text-gray-900 hover:text-green-700 m-2">
                Cart
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
