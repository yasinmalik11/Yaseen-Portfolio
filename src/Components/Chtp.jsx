import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

function Chtp() {
  return (
    <section
      id="Contact"
      className="bg-gray-900 text-white py-16 px-4 md:px-10"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          <span className="text-indigo-500">Contact</span> Me
        </h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-3 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700">

          <h2 className="text-2xl font-bold text-indigo-400 mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-5 bg-gray-700/60 p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
             <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
  <MdEmail className="text-white text-lg" />
</div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-300 text-sm">
                  yasennmalik@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-gray-700/60 p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
                <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
  <FaPhoneAlt className="text-white text-lg" />
</div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-300 text-sm">
                  0355-468938
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-5 bg-gray-700/60 p-5 rounded-2xl hover:scale-105 hover:bg-gray-600 transition duration-300">
                <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
  <BiSupport className="text-white text-2xl" />
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
              className="bg-gray-700 p-1 rounded-full hover:bg-indigo-600 transition duration-300"
            >
           <FaGithub />
            </a>

            <a
              href="#"
              className="bg-gray-700 p-1 rounded-full hover:bg-indigo-600 transition duration-300"
            >
           <CiLinkedin/>
            </a>

            <a
              href="#"
              className="bg-gray-700 p-1 rounded-full hover:bg-indigo-600 transition duration-300"
            >
           <FaTwitter/>
            </a>
          </div>

        </div>

        {/* Right Side Form */}
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center text-indigo-400">
            Send Message
          </h2>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

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

export default Chtp;

