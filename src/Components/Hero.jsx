import React from 'react';
import img from '../Img/my.png';

function Hero() {
  return (
    <section
      id="Hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-24 bg-gray-900 dark:bg-gray-800"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white  mb-6">
          Hi, I am <span className="text-blue-500 dark:text-blue-400">Muhammad Yaseen</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus enim beatae maiores
          excepturi explicabo repellendus amet, molestias debitis? Velit rerum inventore eveniet error
          exercitationem dolor iure dolorum consectetur voluptate.
        </p>
        <a
          href="#Project"
          className="inline-block px-6 py-3 text-2xl sm:text-xl font-semibold text-white bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
        >
          View Projects
        </a>
      </div>

      {/* Image Section */}
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-10 lg:mb-0 flex justify-center lg:justify-end">
        <div className="w-full h-full rounded-full border-4 border-blue-400 overflow-hidden transform hover:scale-105 transition duration-500 shadow-2xl">
          <img src={img} alt="Muhammad Yaseen" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
