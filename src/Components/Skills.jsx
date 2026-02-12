import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";

function Skills() {

  const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "bg-green-600", progress: "w-[93%]" },
    { icon: <RiTailwindCssFill />, name: "Tailwind", color: "bg-sky-600", progress: "w-[80%]" },
    { icon: <IoLogoJavascript />, name: "JavaScript", color: "bg-yellow-400", progress: "w-[57%]" },
    { icon: <GrReactjs />, name: "React", color: "bg-blue-500", progress: "w-[72%]" },
  ];

  return (
    <section className="py-16 bg-gray-900" id="Skills">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          My <span className="text-indigo-500">Skills</span>
        </h1>
        <hr className="w-24 mx-auto mt-4 border-2 border-indigo-500 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 md:px-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-white flex justify-center">
              <span className={`mx-auto text-${skill.color.split('-')[1]}-500`}>{skill.icon}</span>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-6">{skill.name}</h2>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className={`${skill.color} h-3 rounded-full transition-all duration-1000`} style={{ width: skill.progress.replace('w-[','').replace(']','') }}></div>
            </div>
            <p className="mt-2 text-gray-300">{skill.progress.replace('w-[','').replace(']','')}%</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
