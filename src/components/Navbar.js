import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="App Logo" className="h-10" />
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Testimonials
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sign in
            </a>
            <a href="#" className="ml-4 px-4 py-2 rounded-3xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Get started today
            </a>
          </div>
          <div className="flex md:hidden">
            <div className="flex items-center">
              <a href="#" className="mr-4 px-4 py-2 rounded-3xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Get started
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 focus:outline-none z-50"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#E1E8EF] bg-opacity-75"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative top-[64px] flex justify-center">
            <div className="bg-white rounded-2xl shadow-sm p-8 max-w-xs w-full">
              <div className="flex flex-col items-start">
                <nav className="space-y-4 text-start w-full">
                  <a
                    href="#"
                    className="block px-3 py-1 rounded-md text-base font-medium text-black"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 rounded-md text-base font-medium text-black"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 rounded-md text-base font-medium text-black"
                  >
                    Pricing
                  </a>
                  <hr className="ml-3 border-gray-300 mx-auto" />
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sign in
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
