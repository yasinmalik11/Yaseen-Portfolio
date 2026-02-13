import React, { useState } from "react";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar">
      <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
              {["Hero", "about", "Skills", "Project", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="text-gray-300 hover:text-white hover:scale-105 transition duration-300"
                  >
                    {item === "Hero"
                      ? "Home"
                      : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>

            {/* Mobile Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6 transition-transform duration-300 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-gray-900/95 backdrop-blur-md px-4 pb-4 space-y-3 animate-fadeIn">
            {["Hero", "about", "Skills", "Project", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white py-2 border-b border-gray-700"
                >
                  {item === "Hero"
                    ? "Home"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </div>
        )}
      </nav>
    </section>
  );
}

export default Portfolio;
