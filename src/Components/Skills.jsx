import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";

function Skills() {


  return (
    <>
    {/* <section className=' w-fit h-fit flex bg-gray-500 p-40 '>
       <div className=' p-50'></div>
    </section> */}
    
  <section class="h-fit lg:h-fit xl:h-100" id='Skills'>
    <h1 className='text-center text-3xl text-white font-bold mb-2'>My <span className='text-indigo-500 text-center'>Skills</span></h1>
    <hr className='bg-white h-1'/>
   <div className='grid grid-cols-1  px-4  py-16 justify-between gap-2 md:grid-cols-2 md:mb-10 lg:grid-cols-2 lg:px-5 lg:mb-10 xl:grid-cols-4  '>
  <div className='bg-gray-900 py-8 px-5 mb-10 rounded-2xl justify-center md:mb-8 lg:mb-10 '>
            <FaHtml5 className="text-orange-500 text-6xl mx-auto mb-4" />
    <h1 className='text-white text-4xl mx-10 mb-8 justify-center text-center'>HTML </h1>
    <div className='w-full bg-white rounded-2xl h-2.5'>
    <div className='bg-green-600 h-2.5 rounded-2xl w-[93%]'>
    </div>
    </div>
      <p className='text-center text-gray-300 mt-2 '>93%</p>
  </div>
  <div className='bg-gray-900 py-8 px-5 mb-10 rounded-2xl justify-center lg:mb-10'>
    <RiTailwindCssFill className="text-sky-600 text-6xl mx-auto mb-4" />
    <h1 className='text-white text-4xl   mb-8 justify-center text-center'>TAILWIND</h1>
    <div className='w-full bg-white rounded-2xl h-2.5'>
    <div className='bg-blue-600 h-2.5 rounded-2xl w-[80%]'>
    </div>
    </div>
      <p className='text-center text-gray-300 mt-2 '>80%</p>
  </div>
  <div className='bg-gray-900  py-8 px-5 mb-10 rounded-2xl justify-center lg:mb-10'>
    <IoLogoJavascript className="text-yellow-300 text-6xl mx-auto mb-4" />
    <h2 className='text-white text-4xl  mb-8 justify-center text-center'>JAVA SCRIPT</h2>
    <div className='w-full bg-white rounded-2xl h-2.5'>
    <div className='bg-red-600 h-2.5 rounded-2xl w-[57%]'>
    </div>
    </div>
      <p className='text-center text-gray-300 mt-2 '>57%</p>
  </div>
  <div className='bg-gray-900 py-8 px-5 mb-10 rounded-2xl justify-center lg:mb-10'>
    <GrReactjs className="text-blue-300 text-6xl mx-auto mb-4" />

    <h1 className='text-white text-4xl mb-8 justify-center text-center'>REACT</h1>
    <div className='w-full bg-white rounded-2xl h-2.5'>
    <div className='bg-yellow-600 h-2.5 rounded-2xl w-[72%]'>
    </div>
    </div>
      <p className='text-center text-gray-300 mt-2 '>72%</p>
  </div>
  </div>
 
</section>

    </>
  )
}

export default Skills