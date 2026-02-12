import React from 'react'
import { FaGithub} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



function Contact() {
  return (
    <>
    
    <h1 className='text-3xl text-white font-bold text-center mb-2 ' id='Contact'> <span className='text-indigo-500 '>Contact</span></h1>
      <hr className='bg-white h-1'/>
    <div className='h-full grid grid-cols-1  md:grid-cols-2 xl:grid-cols-2 m-2 xl:m-10 border-2 border-white rounded-lg'>
      <div className='w-full h-fit m-2 xl:m-6 xl:grid grid-cols-1 '>
        <h1 className='text-3xl font-bold text-blue-600  mb-4 xl:mx-0 '>Contact Information</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
       
      <div className=''>
 <h1 className=' text-2xl font-bold text-white mb-2'>Email</h1>
        <p className='text-white text-lg mb-10 '>Yasennmalik@gmail.com</p></div>
         <div>   <h1  className=' text-2xl font-bold text-white mb-2'>Contact Cell</h1>
        <p className='text-white text-lg mb-10 lg:grid grid-cols-2'>0355468938</p></div>
         <div>   <h1  className=' text-2xl font-bold text-white mb-2'>Contact Cell</h1>
        <p className='text-white text-lg mb-6'>fjdkjx </p></div>
       <div>   <h1  className=' text-3xl font-bold text-blue-600  mb-2 '>Contact Cell</h1>
         <div className='flex'>
         <a href="https://github.com/yasinmalik11"><FaGithub className="text-white text-2xl mx-1 " /></a> 
        <a href="https://www.google.com/search?q=linkedin+sign+in&oq=linked&gs_lcrp=EgZjaHJvbWUqDQgDEAAYgwEYsQMYgAQyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIGCAIQRRhAMg0IAxAAGIMBGLEDGIAEMgoIBBAAGLEDGIAEMg0IBRAAGIMBGLEDGIAEMhAIBhAuGMcBGLEDGNEDGIAEMgoIBxAAGLEDGIAE0gEJNTgzOWowajE1qAIIsAIB8QXe2TC8KvJBE_EF3tkwvCryQRM&sourceid=chrome&ie=UTF-8"><CiLinkedin className="text-white text-2xl mx-1"/></a>  
        
          <FaTwitter className="text-white text-2xl mx-1" />
          <MdEmail className="text-white text-2xl mx-1" />

          </div>
          </div>

</div>
      </div>

        <form className='bg-black grid grid-cols-1 justify-center m-2 md:items-center md:justify-center xl:m-4 p-4 rounded-xl shadow-lg  max-w-2xl items-center'>
            <h2 className='text-white items-center font-bold text-center mb-6 text-2xl'>Register</h2>

            <div className='mb-4'>
                <label className='text-lg font-bold text-gray-200 '>Name</label>
                <input className='w-full px-2 py-2 border rounded-lg text-white border-white text-lg mt-2' type="text" name='name' placeholder='Enter your name' />
            </div>
             <div className='mb-4'>
                <label className='text-xl text-gray-200'>Email</label>
                <input className='w-full px-2 py-2 border rounded-lg text-white border-white text-lg mt-2' type="email" name='email' placeholder='Enter your Email' />
            </div>
             <div className='mb-4'>
                <label className='text-xl text-gray-200'>Message</label>
                 <textarea className='w-full px-2 h-30 border text-white border-white rounded-lg text-lg mt-2' name="Message" id="" placeholder='Enter your massage'></textarea>
            </div>
          <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
            
        </form>
    </div>
    </>
  )
}

export default Contact