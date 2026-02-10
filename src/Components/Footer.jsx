import React from 'react'
import { FaGithub} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <>
    
    <section className='w-full h-full bg-black grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
        <div className='m-5 p-2 md:p-6'>
            <h1 className='text-blue-500 text-3xl font-bold' >Muhammad Yaseen</h1>
            <p className='text-white text-sm text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis labore maiores atque ut! Ex expedita optio, iste explicabo consequuntur saepe    .</p>
              <div className='flex'> <FaGithub className="text-white text-2xl mx-1 "/>
                      <CiLinkedin className="text-white text-2xl mx-1"/>
                      <FaTwitter className="text-white text-2xl mx-1" />
                      <MdEmail className="text-white text-2xl mx-1" />
            
                      </div>
        </div>

        <div className='m-5 grid grid-cols-1 p-6'>
          <h2 className='text-white text-3xl mb-2'>Important Links</h2>
          <a href="#Hero "className='text-white mb-1 '>Home</a>
          <a href="#about "className='text-white  mb-1 '>About</a>
          <a href="#Project" className='text-white mb-1 '>Project</a>
          <a href="#Skills" className='text-white mb-1 '>Skills</a>
          <a href="#Contact" className='text-white mb-1 '>Contact</a>
        </div>
         <div className='m-5 grid grid-cols-1 p-6'>
          <h2 className='text-white text-3xl '>Contact info</h2>
          <a href="#Portfolio" className='text-white '>0355468938</a>
          <a href="#Portfolio" className='text-white '>my@gmail.coml</a>
          <a href="#Portfolio" className='text-white '>jjdk@gamil.com</a>
        </div>
         <div className='m-5 grid grid-cols-1 p-6'>
          <h2 className='text-white text-3xl'>Social Links</h2>
          <a href="#Portfolio" className='text-white '>Facebook</a>
          <a href="#Portfolio" className='text-white '>Instagram</a>
          <a href="#Portfolio" className='text-white '>Twitter</a>
        </div>
      
    </section>
      <div id='foter' className='bg-gray-800 w-full h-fit text-white text-md text-center'>
          <h2>@ 2026 devolap by Muhammad Yaseen </h2>
        </div>
    </>
  )
}

export default Footer