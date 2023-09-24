import React from 'react';
import VideoLogo from '../assets/Videoicon.png'
import Navbar from './Navbar';
import TypewriterComponent from 'typewriter-effect';
const Herosection = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-950 to-black h-screen md:h-92'>
      <Navbar/>
    <section className=' flex justify-center items-center md:items-baseline pt-28 '>
      {/* main div for heading and button thing  */}
      <div className='flex flex-col items-center justify-center gap-x-4'>
      {/* heading div  */}
        <div className=" ">
          <p className="headingText text-5xl/snug sm:text-8xl/snug tracking-tight lg:text-9xl text-transparent bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 bg-clip-text">MineSahayak</p>
        </div>
      {/* button div   */}
      <div className='text-center md:text-start flex flex-col justify-center md:flex-row md:justify-between items-center gap-y-4 md:gap-x-4 p-4 md:px-6 md:border md:border-1  md:border-indigo-400 md:mt-8 rounded-full'>
        {/* headline */}
        {/* <div  className='text-sm  text-gray-400 font-semibold md:text-xl'> */}
          {/* <TypewriterComponent
          options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}/> */}
        {/* </div> */}
            <p className='text-sm  text-gray-400 font-semibold md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis?</p>
         {/* butto */}
         <button className="btn hover:scale-95 transition-all duration-100 font-extrabold text-base/snug tracking-tight btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">Get Started!</button>         
      </div>
      {/* watch video icon  */}
      <div className='flex justify-between gap-x-4 items-center mt-16 '>
        <img src={VideoLogo} alt="" className='w-8 h-8' />
        <a href="#" target='_blank'>
          <p className='text-lg/snug tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 capitalize font-bold'>Watch tutorial </p>
          </a>
      </div>
      {/* learn more  */}
    </div>
    </section>
    </div>
  );
};

export default Herosection;
