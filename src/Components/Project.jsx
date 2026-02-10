import React from 'react'
function Project() {
  return (
    <>
 
      <h1 className='sticky text-3xl text-white font-bold text-center mb-2 '>My <span className='text-indigo-500 '>Project</span></h1>
      <hr className='bg-white h-1'/>
    
    <section id='Project' className='grid grid-rows-1 gap-2 justify-baseline  p-5 bg-transparent md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 '>
     
      {/* <div className=' bg-amber-200 w-fit h-fit flex '> */}
    <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700 rounded-md '>
      <img className="w-full h-69  rounded-md object-cover" src="https://user-images.githubusercontent.com/16396664/146666086-28e88beb-c2f0-431f-adfb-2396d8f64c80.png" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold mx-2">First Project</h1>
        
          <p className='mx-2 text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     
       <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-3'>Click me</button>
      </div>
    </div>
     <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700  rounded-md   '>
      <img className="w-full h-69  rounded-md object-cover " src="https://repository-images.githubusercontent.com/337150944/a51e8900-6aec-11eb-8c14-9119664dccda" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold  mx-2 ">First Project</h1>
        
          <p className='mx-2 text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-3'>Click me</button>
      </div>
    </div>
    {/* </div> */}
    {/* <div className='flex bg-amber-300 w-fit h-fit'> */}
           <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700  rounded-md'>
      <img className="w-full h-69  rounded-md object-cover " src="https://www.datocms-assets.com/205/1640011361-react-ecommerce-tutorial.png?auto=format&h=500" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold  mx-2">First Project</h1>
        
          <p className='mx-2  text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     
        <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-2'>Click me</button>
      </div>
    </div>
     <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700 rounded-md'>
      <img className="w-full h-69  rounded-md object-cover" src="https://cdn.dribbble.com/userupload/42599224/file/original-622eb65208f11be39cef3096a0b75635.png" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold  mx-2">First Project</h1>
        
          <p className='mx-2  text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     
        <button className='bg-blue-700 hover:bg-blue-800 rounded-lg  text-white px-3 py-1 text-center mt-1 m-2'>Click me</button>
      </div>
    </div>
    {/* </div> */}


  </section>
  
    </>
  )
}

export default Project