import React, { useEffect, useState } from "react";

function Portfolio() {
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
    <>
    <section className='' id='navbar'>
    <nav class="bg-gray-800 fixed w-screen "   >
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
           <h1 className='font-bold text-3xl text-white'>Portfolio</h1>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">

            <a href="#Hero" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white">Home</a>
            <a href="#about" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a>
            <a href="#Skills" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white">Skills</a>
            <a href="#Project" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#Contact" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       <button
              onClick={toggleDarkMode}
              className="ml-4 px-4 py-2 rounded-lg bg-red-700 text-green 
                         dark:bg-yellow-400 dark:text-black 
                         transition duration-300"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

{/*        
        <el-dropdown class="relative ml-3">
          <button class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </button> */}

          <el-menu anchor="bottom end" popover class="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
          </el-menu>
        {/* </el-dropdown> */}
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3">
   
      <a href="#" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Skills</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
       <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</a>
    </div>
  </el-disclosure>
 
</nav>



{/* 
<div class="max-w-6xl mx-auto px-6">

  
    <h2 class="text-4xl font-bold text-center mb-14">
      My <span class="text-indigo-500">Skills</span>
    </h2>

   
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    
      <div class="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-2 transition">
        <h3 class="text-xl font-semibold mb-4">HTML</h3>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full w-[90%]"></div>
        </div>
        <p class="mt-2 text-gray-400">90%</p>
      </div>

      <div class="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-2 transition">
        <h3 class="text-xl font-semibold mb-4">CSS / Tailwind</h3>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full w-[85%]"></div>
        </div>
        <p class="mt-2 text-gray-400">85%</p>
      </div>

      <div class="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-2 transition">
        <h3 class="text-xl font-semibold mb-4">JavaScript</h3>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full w-[75%]"></div>
        </div>
        <p class="mt-2 text-gray-400">75%</p>
      </div>

      <div class="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-2 transition">
        <h3 class="text-xl font-semibold mb-4">React</h3>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full w-[70%]"></div>
        </div>
        <p class="mt-2 text-gray-400">70%</p>
      </div>

    </div>
  </div> */}
  </section>
    </>
  )
}

export default Portfolio