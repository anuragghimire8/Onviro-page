import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'

const Projects = () => {

  const [showImages,setShowImages]=useState(false);
  return (
   <Layout>
<div className=' '>
<div className='lg:grid grid-cols-2 bg-red-100  gap-40 h-auto '>
   <div className=' pt-[100px] mt-10 lg:pl-[100px] pl-3 '><p className='text-red-900 text-3xl lg:text-5xl font-bold pb-2'>Our <br className='hidden lg:block  pt-'/>Projects</p>
   <p className='text-red-900 font-bold pb-4'>Innovative Solutions, Transformative Results: Explore Our Projects Portfolio</p>
   <p className='pb-10'>Our tech company has successfully completed a diverse portfolio of projects, showcasing our expertise and versatility in the industry. From developing custom software solutions for startups to implementing large-scale enterprise applications for established businesses, our projects span across various sectors such as healthcare, finance, e-commerce, and logistics. We take pride in delivering high-quality solutions that meet our clients' unique requirements, leveraging cutting-edge technologies and adhering to industry best practices. With a focus on innovation, reliability, and user experience, our projects demonstrate our commitment to helping businesses thrive in the digital age.</p></div>
   <div className='hidden lg:block lg:mt-[100px] xl:mt-[100px] bg-black mr-[225px] xl:mr-[350px] pt-[210px] xl:pt-[130px] xl:h-[550px]'>
   <img   className='' src='/logo512.png'/>
   </div>
   <div>
   </div>
   </div>
   <div className='grid grid-cols-3  gap-5 p-5 '>
   <p>eTender Application</p>
   <p>Website Development</p>
   <p>Mobile Applications</p>
   <p>Software Solution</p>
   <button  onClick={()=>setShowImages(!showImages)} className='bg-red-100 rounded-[5px] text-left pl-2 h-[40px] w-[100px] hover:scale-105 '>View All<hr className='border-black '></hr></button>
   
   </div>
   {showImages &&  (
   <div className='   grid gap-y-5   mb-10  p-5 md:grid md:grid-cols-4 gap-x-4'>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p>
   <p className='text-white'>View Project <hr className='mx-[52px]'></hr></p>
   </div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p></div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p>
   <p className='text-white'>View Project </p></div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p></div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p></div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p></div>
   <div className='bg-black  hover:bg-blue-100    grid justify-center text-center gap-5 pb-10 pt-10 md:px-10 rounded-xl'>
   <img className='' src="/logo192.png "></img><p className='text-white p-2'>React Js</p></div>
   </div>
  )}
</div>
   </Layout>
  )
}

export default Projects
