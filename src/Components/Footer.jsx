import React from "react";
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-14 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* About Section */}
          <div>
            <h1 className="text-2xl font-bold text-indigo-500 mb-4">
              Muhammad Yaseen
            </h1>
            <p className="text-sm leading-6">
              Passionate Frontend Developer skilled in React & Tailwind CSS.
              I create modern, responsive and user-friendly web applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl">
              <FaGithub className="hover:text-indigo-500 cursor-pointer transition" />
              <CiLinkedin className="hover:text-indigo-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-indigo-500 cursor-pointer transition" />
              <MdEmail className="hover:text-indigo-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Important Links
            </h2>
            <ul className="space-y-2">
              <li><a href="#Hero" className="hover:text-indigo-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
              <li><a href="#Project" className="hover:text-indigo-500 transition">Projects</a></li>
              <li><a href="#Skills" className="hover:text-indigo-500 transition">Skills</a></li>
              <li><a href="#Contact" className="hover:text-indigo-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MdPhone className="text-indigo-500" />
                <span>0355-468938</span>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-indigo-500" />
                <span>yasennmalik@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Follow Me
            </h2>

            <div className="flex gap-4 text-xl">
              <FaFacebook className="hover:text-indigo-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-indigo-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-indigo-500 cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 Developed by <span className="text-indigo-500 font-medium">Muhammad Yaseen</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
