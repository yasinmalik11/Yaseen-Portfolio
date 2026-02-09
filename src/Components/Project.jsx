import React from 'react'
function Project() {
  return (
    <>
 
      <h1 className='sticky text-3xl text-white font-bold text-center mb-2 '>My <span className='text-indigo-500 '>Project</span></h1>
      <hr className='bg-white h-1'/>
    
    <section id='Project' className='grid grid-rows-1 gap-2 justify-baseline  p-5 bg-transparent md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 '>
     
      {/* <div className=' bg-amber-200 w-fit h-fit flex '> */}
    <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700 rounded-md '>
      <img className="w-full h-69  rounded-md object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D=" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold mx-2">First Project</h1>
        
          <p className='mx-2 text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     
       <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-3'>Click me</button>
      </div>
    </div>
     <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700  rounded-md   '>
      <img className="w-full h-69  rounded-md object-cover " src="https://media.istockphoto.com/id/2180253986/photo/business-partners-in-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKKAFFHJA3r5-NEl_wUUqslivwsJNiz2W-1Jh6kGuj0=" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold  mx-2 ">First Project</h1>
        
          <p className='mx-2 text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-3'>Click me</button>
      </div>
    </div>
    {/* </div> */}
    {/* <div className='flex bg-amber-300 w-fit h-fit'> */}
           <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700  rounded-md'>
      <img className="w-full h-69  rounded-md object-cover " src="https://media.istockphoto.com/id/1206225766/photo/a-woman-using-and-typing-on-laptop-computer-with-blank-white-desktop-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=k2ymKV4c3W0R87n2QoMj0evCvEgdgSaswB4kNi1odZw=" alt='' />
      <div className="mt-2 ">
        <h1 className="text-2xl text-sky-500 font-bold  mx-2">First Project</h1>
        
          <p className='mx-2  text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis error consequatur assumenda repudiandae suscipit voluptate nobis eius eaque labore sed pariatur officia</p>
     
        <button className='bg-blue-700 hover:bg-blue-800 rounded-lg py-1  text-white px-3 text-center mt-1 m-2'>Click me</button>
      </div>
    </div>
     <div className='w-fit h-fit bg-gray-700 border-4 border-indigo-700 rounded-md'>
      <img className="w-full h-69  rounded-md object-cover" src="https://media.istockphoto.com/id/2182836513/photo/asian-senior-woman-happily-watching-movie-on-laptop-with-her-elderly-husband-on-sofa-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=2v2AZ9yQZOhIn2GADZ5clDWcgSEM_TFv5OT9AU33-PE=" alt='' />
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