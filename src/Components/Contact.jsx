import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <section
      id="Contact"
      className="bg-gray-900 text-white py-16 px-4 md:px-10"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          <span className="text-indigo-500">Contact</span> Me
        </h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

       {/* Left Side - Contact Info */}
<div className="bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700">

  <h2 className="text-2xl font-bold text-indigo-400 mb-8">
    Contact Information
  </h2>

  <div className="space-y-6">

    {/* Email */}
    <div className="flex items-center gap-5 bg-gray-700/60 backdrop-blur-sm p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
      <div className="bg-indigo-600 p-4 rounded-2xl text-xl shadow-lg">
        <MdEmail />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Email</h3>
        <p className="text-gray-300 text-sm">
          yasennmalik@gmail.com
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-5 bg-gray-700/60 backdrop-blur-sm p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
      <div className="bg-indigo-600 p-4 rounded-2xl text-xl shadow-lg">
        <FaPhoneAlt />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Phone</h3>
        <p className="text-gray-300 text-sm">
          0355-468938
        </p>
      </div>
    </div>

    {/* Support */}
    <div className="flex items-center gap-5 bg-gray-700/60 backdrop-blur-sm p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
      <div className="bg-indigo-600 p-4 rounded-2xl text-xl shadow-lg">
        <MdSupportAgent />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Support</h3>
        <p className="text-gray-300 text-sm">
          24/7 Available for your help
        </p>
      </div>
    </div>

  </div>

  {/* Social Icons */}
  <div className="flex gap-5 mt-10 text-2xl">
    <a
      href="https://github.com/yasinmalik11"
      target="_blank"
      rel="noreferrer"
      className="bg-gray-700 p-3 rounded-full hover:bg-indigo-600 transition duration-300"
    >
      <FaGithub />
    </a>

    <a
      href="#"
      className="bg-gray-700 p-3 rounded-full hover:bg-indigo-600 transition duration-300"
    >
      <CiLinkedin />
    </a>

    <a
      href="#"
      className="bg-gray-700 p-3 rounded-full hover:bg-indigo-600 transition duration-300"
    >
      <FaTwitter />
    </a>
  </div>

</div>


        {/* Right Side - Form */}
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center text-indigo-400">
            Send Message
          </h2>

          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
