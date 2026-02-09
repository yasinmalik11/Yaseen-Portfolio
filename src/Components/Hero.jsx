import React from 'react'
import img from '../Img/my.png'

function Hero() {
  return (
    <>

    <section className='flex flex-col-reverse p-0 m-0 lg:flex-row items-center m' id='Hero'>
        <div className='w-full h-fit  lg:p-5 lg:m-3 lg:my-30'> 
            <h1 className='font-bold text-5xl m-3 text-white xl:text-7xl md:text-6xl sm:text-5xl @max-xs:text-4xl'>Hi,I am <span className='text-blue-500 '>Muhammad Yaseen</span></h1>
            <p className='text-justify text-2xl m-4 text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore delectus enim beatae maiores excepturi explicabo repellendus amet, molestias debitis? Velit rerum inventore eveniet error exercitationem dolor iure dolorum consectetur voluptate.</p>
            <button className='p-1 mx-1 bg-blue-600 border-0 shadow-2xl rounded-3xl text-2xl text-white  md:p-2 md:mx-2 lg:p-3 lg:mx-3 xl:p-4 xl:mx-4'>View Projects</button>
        </div>

        <div className='w-fit h-fit mx-20 my-10'>
            <div className='w-74 h-74 rounded-full border-4 overflow-hidden border-blue-400 '><img className='  rounded-full' src={img} alt="" /></div>
        </div>
    </section>
    </>
  )
}

export default Hero