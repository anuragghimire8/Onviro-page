import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [toogle,setToogle]=useState(true);

      

  return (
    <div>
    <div className=' flex justify-between xl:p-4 p-5 items-center shadow-lg fixed left-0 right-0 top-0  bg-white'>
    <div className=" xl:mx-[90px] mx-[65px]   text-xl text-red-800 font-bold"><Link to="/">Onviro</Link></div>
  

   
    <div className=''><ul className='md:hidden  hidden lg:flex gap-[35px]  xl:mr-[115px]   font-bold   '>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/">Home</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer' ><Link to="/about-us">About Us</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/services">Services</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/projects">Projects</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/products">Products</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/web-hosting">Web Hosting</Link></li>
    
    
    </ul></div>
   
    <div className=' hidden md:hidden lg:block hover:bg-red-800 hover:cursor-pointer xl:mr-[103px]  xl:mr-[120px]    rounded-[5px] font-semi-bold  bg-red-900 text-white px-[21px] py-[7px] text-[17px] w-[153px] '><Link to="/contact-us">Contact Us</Link><hr className='border-[1px] '></hr></div>
    <div className='mr-[25px] lg:hidden'>
    
    {
        toogle ?
        <AiOutlineMenu onClick={()=>setToogle(!toogle)} className="text-black text-2xl font-bold hover:cursor-pointer lg:hidden "/>
        :
        <AiOutlineClose onClick={()=>setToogle(!toogle)} className="h-[29px] w-[29px] rounded-full bg-red-900 text-white   hover:cursor-pointer lg:hidden p-1"/>
        
    }
    <div className=''><ul className={`h-full lg:hidden   grid pb-[450px] text-[14px]    duration-1000 text-xl p-9 px-6 text-black fixed ${toogle ? 'right-[-100%] ' :'right-0'} top-[65px] bg-white w-[75%] `}>
    <li className='hover:text-red-700 hover:cursor-pointer '><Link to="/">Home</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer' ><Link to="/about-us">About Us</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/services">Services</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/projects">Projects</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/products">Products</Link></li>
    <li className='hover:text-red-700 hover:cursor-pointer'><Link to="/web-hosting">Web Hosting</Link></li>
    
    </ul></div>
    </div>
  </div>
  
    </div>
  )
}

export default Navbar
