import React from 'react'
import { featureData } from '../constants'
import Chatbot from '../assets/Chatbot.png'
const FeatureSection = () => {
  return (
    <div className='h-full bg-gradient-to-b from-black to-indigo-950 w-full flex flex-col justify-center items-center gap-y-14 text-2xl bg-black  pt-56'>
      <div className='font-bold px-6 md:px-4 text-center text-lg/snug md:text-3xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800'>
      माइनसहायक: Your Mining Companion, Get the Right Answers to Mining Laws!
      </div>
      <div className='flex flex-col md:gap-y-10 pb-16 md:pb-0 '>
      { featureData && featureData.map((item)=>{
        return(
          <div key={item.id} className={`flex ${item.flag === false?'flex-row-reverse':'flex-row'} justify-between items-center gap-x-16 px-24 pb-6`}>
        {/* left div  */}
        <div className='border border-1 border-blue-300 md:border-none rounded-xl p-4 flex flex-col gap-y-4  w-full md:w-[45%] '>
          <h1 className='text-2xl md:text-3xl/snug font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 tracking-tighter'>{item.heading}</h1>
          <h3 className='capitalize text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white'>{item.subHeading}</h3>
          <p className='text-slate-400 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum eum quidem porro tempore similique sit nulla, inventore doloremque enim soluta ullam ad voluptatibus.</p>
        </div>
        {/* right div  */}
        <div className='w-[55%] hidden md:block'>
      <img src={Chatbot} alt="" className='rounded-xl' />
        </div>
       </div>
        )
      })}
    </div>
    </div>
  )
}

export default FeatureSection