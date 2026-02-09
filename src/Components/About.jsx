import React from 'react'

function About() {
  return (
<>
<section id='about'>
        <h1 className='text-center font-bold text-white text-3xl'><span className='text-indigo-500'>About</span> Us</h1>
        <div className='grid grid-cols-1 m-10 border-4 border-gray-600 p-5 justify-between gap-5 lg:grid-cols-1 xl:grid-cols-2'> 
            <img src="https://media.istockphoto.com/id/2180253986/photo/business-partners-in-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKKAFFHJA3r5-NEl_wUUqslivwsJNiz2W-1Jh6kGuj0=" className='w-full h-full object-cover' alt="" />
            <div><h3 className='text-white text-2xl font-bold'>About Us</h3><p className='text-white text-justify xl:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus veritatis qui sed aperiam, non itaque nesciunt nostrum dolorem impedit, facere eum dolorum esse error. Minus laudantium minima incidunt temporibus a eum nostrum repellendus nulla doloremque est, distinctio architecto quibusdam aspernatur molestiae commodi aliquam illum ducimus placeat corrupti consequuntur quo. Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut, officia corrupti architecto ipsam ratione laborum explicabo! Molestiae velit facere est ut modi officia? Ab, accusamus? Suscipit omnis magnam sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quam dignissimos reprehenderit voluptas dolore consequuntur voluptates unde quia ipsam. </p><button className='px-10 py-2 my-3 bg-blue-500 text-lg text-white rounded-md'>Button</button></div>
        </div>
    </section>
</> 
 )
}

export default About