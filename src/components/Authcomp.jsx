import React, { useState } from 'react'
import { Zap } from 'lucide-react';
const Authcomp = () => {
    const [num,setNum]=useState('')
    console.log(num)
  return (
    <div className='bg-gradient-to-b from-indigo-950 pt-48 to-black h-screen md:h-92'>
        <div className=''>
        <div className='flex flex-col items-center justify-center  w-[50%] mx-auto rounded-xl'>
            {/* phone number  */}
            <div className='text-center rounded-xl p-4 flex flex-col items-center justify-center '>
            <h3 className='font-bold text-4xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800'>Login with Phone Number</h3>
            <input onChange={(e)=>setNum(e.target.value)} type="text" placeholder='Please enter your phone number.' className='border-b-1 bg-inherit mt-4 w-[90%] p-2 ml-8 focus:border-none focus:outline-none cursor-pointer text-xl text-white' />
            <button className="btn w-[60%] hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-">Get OTP <Zap className='text-white' fill='white'/></button>
            </div>
            {/* google */}
            <h1 className='text-white font-extrabold text-2xl'>OR</h1>
            <button className="btn  hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-">
                Login with Google
                <Zap className='text-white' fill='white'/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Authcomp