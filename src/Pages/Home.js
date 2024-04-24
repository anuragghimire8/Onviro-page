import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

const Home = () => {
  

  const [isFirstLoop, setIsFirstLoop] = useState(true);

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setIsFirstLoop(false);
    }, 10000); 

    return () => clearTimeout(timeout);
  }, []);
 
  
  return (
    <div className=' '>
     <div className=' lg:flex  xl:gap-[105px] mt-[120px] xl:mt-[20px] lg:mt-[px] '>
      <div className='text-center  xl:text-left xl:mt-[200px] xl:ml-[140px]  lg:mr-10 xl:pl-0  mx-20 lg:text-left'>
      <p className='text-5xl lg:text-[75px]  font-bold  text-red-900 pb-5 lg:pb-0 '>You<br className='hidden xl:hidden lg:block'/> Dream,</p>
      <p className='text-5xl lg:text-[75px]  font-bold  text-red-900 l'>We <br className='hidden xl:hidden lg:block'/>Deliver.</p>
      <p className='mt-10 text-[16px] '>Welcome to Onviro Tech Pvt.Ltd. "Unlocking the Power of<br/>  Technology for Business Success"</p>
      <button className='  hover:bg-red-800 hover:cursor-pointer  mt-5 rounded-[5px] font-semi-bold  bg-red-900 text-white pr-[38px] py-[7px] text-[17px] w-[170px] '><Link to="/contact-us ">Get Started<hr className='ml-6 w-[105px] border-[1px]'></hr></Link>
      </button>
     

      </div>
      <div className=' p-5   xl:mt-[140px] lg:mt-[-50px]  w-min-full '>  
        <div className='bg-black h-[150px] xl:h-[380px] xl:w-[650px] lg:h-[400px] lg:w-[600px]   flex justify-center ]'><img className="  " alt="Logo" src="/logo512.png"/></div>

       <div className='grid gap-5 lg:flex  gap-5 pt-5'>
        <div className='bg-red-800 h-[95px]  rounded-[7px] flex justify-between lg:grid items-center px-5 text-white hover:bg-red-500'><p className='text-[25px] font-bold  '>1000+</p>
        <p className='text-xl '>Happy <br/> Clients</p></div>
        <div className='bg-red-800 h-[95px] lg:grid  l  rounded-[7px] flex justify-between items-center px-5 text-white hover:bg-red-500 '><p className='text-[25px] font-bold '>20+</p>
        <p className='text-xl'>Creative <br/> Peope</p></div>
        <div className='bg-red-800 h-[95px] lg:grid  rounded-[7px] flex justify-between items-center px-5 text-white hover:bg-red-500'><p className='text-[25px] font-bold lg:w-[100px]'>35000+</p>
        <p className='text-xl'>Happy <br/> Clients</p></div>
        <div className='bg-red-800 h-[95px] lg:grid   rounded-[7px] flex justify-between items-center px-5 text-white hover:bg-red-500'><p className='text-[25px] font-bold'>20+</p>
        <p className='text-xl'>Happy <br/> Clients</p></div>
        </div>
        </div>
      
      </div>

      <div className='bg-red-50 mt-10 text-center '><p className='pt-10'>0/1 Services</p>
      <p className='text-red-800 pt-5 text-xl xl:text-3xl font-bold'>Services we provide</p>
      <p className='p-5'>With over 1000 clients satisfaction, we provide one of the <br className='xl:hidden'/>best service.</p>
      <div className='grid gap-5 p-5 xl:grid-cols-3 xl:p-40 xl:pt-5 lg:grid-cols-3 lg:p-4'>
      <div className='bg-red-800  rounded-[7px]    text-white hover:bg-red-500   pb-10 '>
      <p className='  text-xl font-bold text-left px-10 pt-[50px] '>Website Development </p>
      <p className='text-left px-10 text-[17px]'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives.</p>
      
        </div>
        <div className='bg-purple-900  rounded-[7px]    text-white  hover:bg-purple-500 pb-10 '>
        <p className='text-2xl font-bold text-left px-10 pt-[30px] '>Website Development </p>
      <p className='text-left px-10 p'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives.</p>
        </div>
        <div className='bg-red-800  rounded-[7px]    text-white  hover:bg-red-500 pb-10 '>
        <p className='  text-2xl font-bold text-left px-10 pt-[30px] '>App Development </p>
      <p className='text-left px-10 p'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives..</p>
        </div>
        <div className='bg-purple-900  rounded-[7px]    text-white  hover:bg-purple-500 pb-10 '>
        <p className='  text-2xl font-bold text-left px-10 pt-[30px] '>Offshore Team Management </p>
      <p className='text-left px-10 p'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives.</p>
        </div>
        <div className='bg-red-800  rounded-[7px]    text-white  hover:bg-red-500 pb-10 pb-10  '>
        <p className='  text-2xl font-bold text-left px-10 pt-[30px] '>Software Solutions </p>
      <p className='text-left px-10 p'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives.</p>
        </div>
        <div className='bg-purple-900  rounded-[7px]    text-white  hover:bg-purple-500 pb-10 '>
        <p className='  text-2xl font-bold text-left px-10 pt-[30px] '>It Consultant </p>
      <p className='text-left px-10 p'>Crafting user-centric websites, Onviro Tech blends creativity and functionality, providing a seamless online experience that aligns with clients' brand and objectives.</p>
        </div>
      </div>
      
     
  </div>
  <div className='p-6 pt-[55px]'>
      <p className='pb-10 '>0/2 About Us</p>
      <p className='font-bold text-red-900 text-[19px]'>About Us</p>
      <p className='pt-7 pb-5'>Since View Nepal was first founded in 1999, it catered primarily to companies in the tourist, hiking, and handicraft sectors, specializing in website building and hosting in Nepal. Our company's development of the innovative Lowest, Highest, and Reverse auction web tools brought it international prominence in 2008 and 2009. This significant achievement signaled the shift to providing services to clients worldwide, resulting in a staff of more than 100 full-time developers.Three years ago, View Nepal changed its name to Onviro Tech P. Ltd. in spiteof challenges caused by the COVID-19 epidemic and the Nepal earthquake.

      Today, we are proud to have an in-house staff of knowledgeable professionals overseeing a talented group of software engineers and developers with a range of experience levels. We have developed content management systems, CSR systems, e-commerce websites, accounting software, and stock management software. Additionally, we have developed specific systems like restaurant management systems, IRD-registered billing/stock software, and jewelry management. For proficient and knowledgeable development services, please contact info@onvirotech.com.</p>
      <button className='  hover:bg-red-800 hover:cursor-pointer    rounded-[5px] font-semi-bold  bg-red-900 text-white pr-[38px] py-[7px] text-[17px] w-[160px] '><Link to="/contact-us">Know More<hr className='ml-4 w-[105px] border-[1px]'></hr></Link>
      </button></div>
      <div className='text-center '>
      <p className='pb-5 '>03/Projects</p>
      <p className='text-red-900 pb-5'>Check out latest projects by us</p>
      <p className='pb-20'>View All</p>
      <div className='bg-red-100 '>
      <p className='pb-6'>Trusted By</p>
      <div className=''>
      <marquee className={isFirstLoop ? "marquee" : "marquee-slow"} >
      <div className='flex gap-6'>
   <Link to="/">  <img  className='h-[50px] xl:h-[60px] w-[85px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
   <Link to="/">  <img  className='h-[50px] w-[85px] xl:h-[60px]' src="/logo192.png"/></Link>
    </div>
     </marquee>

      </div>
      <div>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Home;