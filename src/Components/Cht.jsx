import React, { useEffect, useState } from "react";

function Cht() {
  const [darkMode, setDarkMode] = useState(false);

  // Page load par theme check karega
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <section
      id="navbar"
      className="bg-white dark:bg-gray-900 transition duration-300"
    >
      <nav className="bg-gray-800 dark:bg-black fixed w-screen transition duration-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            <h1 className="font-bold text-3xl text-white">
              Portfolio
            </h1>

            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-4">
              <a href="#Hero" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#Skills" className="text-gray-300 hover:text-white">
                Skills
              </a>
              <a href="#Project" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#Contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>

            {/* 🌙 Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-4 py-2 rounded-lg bg-gray-700 text-white 
                         dark:bg-yellow-400 dark:text-black 
                         transition duration-300"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Cht;
