
function Portfolio() {
  

  return (
    <>
      <section id="navbar">
        <nav className="bg-gray-800 dark:bg-gray-900 fixed w-screen z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
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
                </button>
              </div>

              {/* Logo & nav links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex items-center">
                  <h1 className="text-3xl font-bold text-white ">
                    Portfolio
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex space-x-4">
                  <a
                    href="#Hero"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#Skills"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Skills
                  </a>
                  <a
                    href="#Project"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#Contact"
                    className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Dark mode toggle */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Portfolio;
