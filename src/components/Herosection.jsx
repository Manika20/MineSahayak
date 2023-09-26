import React, { useEffect, useState } from 'react';
import VideoLogo from '../assets/Videoicon.png'
import Navbar from './Navbar';
import TypewriterComponent from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/helper/SupabaseClient';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Herosection = () => {
  const [isLogged,setIsLogged]=useState(false)
  useEffect(()=>{
    async function fetchUser(){
      const {data:{user}}=await supabase.auth.getUser()
      if(user) setIsLogged(true)
    }
  fetchUser()
  },[]) 

  const [ref, inView] = useInView({
    triggerOnce: false, // Allow animations to repeat
    threshold: 0.2, // Adjust this value as needed
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className='bg-gradient-to-b from-indigo-950 to-black h-screen md:h-92'>
      <Navbar />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
      >
        <section className=' flex justify-center items-center md:items-baseline pt-28 '>
          {/* main div for heading and button thing  */}
          <div className='flex flex-col items-center justify-center gap-x-4'>
            {/* heading div  */}
            <div className="flex flex-col justify-center items-center tracking-tight text-transparent bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 bg-clip-text">
              <p className="headingText text-5xl/snug sm:text-8xl/snug  lg:text-9xl text-white">MineSahayak</p>
              <p className='text-4xl'>( माइनसहायक )</p>
            </div>
            {/* button div   */}
            <div className='md:ml-4 md:mr-4 lg:ml-0 lg:mr-0 text-center md:text-start flex flex-col justify-center md:flex-row md:justify-between items-center gap-y-4 md:gap-x-4 p-4 md:px-6 md:border md:border-1  md:border-indigo-400 md:mt-8 rounded-full'>
              <p className='text-sm  text-gray-400 font-semibold md:text-xl'>The Right Answer to Every Mining Question, Your Companion on the Path to Mining Success!</p>
              <Link to={`${isLogged ? '/dashboard' : '/auth'}`}>
                <motion.button
                  className="btn hover:scale-95 transition-all duration-100 font-extrabold text-base/snug tracking-tight btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-3xl"
                  whileHover={{ scale: 1.05 }} // Apply scale animation on hover
                >
                  Get Started!
                </motion.button>
              </Link>
            </div>
            {/* watch video icon  */}
            <div className='flex justify-between gap-x-4 items-center md:mt-10 lg:mt-16 '>
              <motion.img
                src={VideoLogo}
                alt=""
                className='w-8 h-8'
                initial={{ opacity: 0, y: -20 }} // Initial position
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate on view
                transition={{ duration: 0.8 }}
              />
              <a href="#" target='_blank'>
                <motion.p
                  className='text-lg/snug tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 capitalize font-bold'
                  initial={{ opacity: 0, y: 20 }} // Initial position
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate on view
                  transition={{ duration: 0.8 }}
                >
                  Watch tutorial
                </motion.p>
              </a>
            </div>
            {/* learn more  */}
          </div>
        </section>
      </motion.div>

    </div>
  );
};

export default Herosection;