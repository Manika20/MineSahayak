import React from 'react';
import { motion } from 'framer-motion';
import { featureData } from '../constants';
import Chatbot from '../assets/Chatbot.png';
import { useInView } from 'react-intersection-observer';

const FeatureSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const leftDivVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightDivVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      key={inView ? 'visible' : 'hidden'}
      className="h-full bg-gradient-to-b from-black to-indigo-950 w-full flex flex-col justify-center items-center gap-y-14 text-2xl pt-56 "
    >
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-14 text-2xl ">
        <div className="font-bold px-6 md:px-4 text-center text-lg/snug md:text-3xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mb-12">
          माइनसहायक: Your Mining Companion, Get the Right Answers to Mining Laws!
        </div>
        <div className="flex flex-col md:gap-y-10 pb-16 md:pb-0 ">
          {featureData &&
            featureData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className={`flex ${
                    item.flag === false ? 'flex-row-reverse' : 'flex-row'
                  } justify-between items-center gap-x-16 px-4 sm:px-8 md:px-24 pb-6`}
                >                                                         
                  {/* left div  */}
                  <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={leftDivVariants}
                    className="w-full sm:w-[50%]"
                  >
                    <div className="border border-1 border-blue-300 md:border-none rounded-xl p-4 flex flex-col gap-y-4 w-full ">
                      <h1 className="text-3xl md:text-4xl/snug font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 tracking-tighter">
                        {item.heading}
                      </h1>
                      <h3 className="capitalize text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                        {item.subHeading}
                      </h3>
                      <p className="text-slate-400 text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                  {/* right div  */}
                  <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={rightDivVariants}
                    className="w-full sm:w-[25%] md:w-4/4 hidden md:block"
                  >
                    <div className="md:w-4/4 hidden md:block">
                      <img src={item.image} alt="" className="rounded-xl w-full" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;