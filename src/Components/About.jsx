import React from 'react'

function About() {
  return (
    <section id="about" className="py-16 bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-indigo-500">About</span> Us
        </h1>
        <hr className="w-24 mx-auto mt-4 border-2 border-indigo-500 rounded" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-6 md:px-12 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://media.istockphoto.com/id/2180253986/photo/business-partners-in-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKKAFFHJA3r5-NEl_wUUqslivwsJNiz2W-1Jh6kGuj0="
            alt="About Us"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 text-justify mb-6 xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis qui sed aperiam, non itaque nesciunt nostrum dolorem impedit, facere eum dolorum esse error. Minus laudantium minima incidunt temporibus a eum nostrum repellendus nulla doloremque est, distinctio architecto quibusdam aspernatur molestiae commodi aliquam illum ducimus placeat corrupti consequuntur quo. Doloribus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut, officia corrupti architecto ipsam ratione laborum explicabo! Molestiae velit facere est ut modi officia? Ab, accusamus? Suscipit omnis magnam sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quam dignissimos reprehenderit voluptas dolore consequuntur voluptates unde quia ipsam.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-xl transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
