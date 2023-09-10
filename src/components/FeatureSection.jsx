import React from 'react'
import { featureData } from '../constants'

const FeatureSection = () => {
  return (
    <div className='h-full md:h-screen w-full flex flex-col justify-center bg-black  '>
        <div className='flex justify-evenly '>
        <div className='grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2 '>
        {
            featureData.map((item)=>{
                return(
                <div className="card w-96 bg-gray-600/10 text-white shadow-xl hover:cursor-pointer hover:scale-105 transition-all duration-150">
                    <div className="card-body">
                    <h1 className="card-title capitalize text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-200">{item.heading}</h1>
                    <h2 className='capitalize  text-lg md:text-xl text-slate-300'>{item.subHeading}</h2>
                    <p className='text-slate-400 md:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis dolores voluptas accusamus nisi ipsa placeat magnam nostrum aperiam minus sint, in iure maxime consectetur, quidem aliquid illum repellat quas?</p>

                </div>
             </div>
                )
            })
        }
    </div>
    </div>

    </div>
  )
}

export default FeatureSection