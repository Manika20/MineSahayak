import React, { useState } from 'react'
import { Zap } from 'lucide-react';
import { supabase } from '../lib/helper/SupabaseClient';
import { redirect, useNavigate } from 'react-router-dom';
const Authcomp = () => {
    const [num,setNum]=useState('')
    const [otpVal,setOtpVal]=useState('')
    const [otp,setOtp]=useState(false)
    // console.log(num)
    const navigate=useNavigate()
    const generateOtp=async()=>{
        if(num.length !== 10){ 
            alert('Please enter a correct phone number.')
            setNum('')
            return ;
    }
        let { user, error } = await supabase.auth.signInWithOtp({
            phone: `+91${num}`,
          })
        //   setNum('')
          setOtp(true)
    }
    //check
    const checkOtp=async()=>{
        let { session, error } = await supabase.auth.verifyOtp({
            phone: `+91${num}`,
            token: otpVal,
            type: 'sms',
          })
          if(!error){
            navigate('/dashboard')
          }
          else{
            alert(error)
            setOtpVal('')
          }
    }
// google 
    const signInWithGoogle=async()=>{
        const {data,err}=await supabase.auth.signInWithOAuth({
                provider: 'google',
                options:{
                    redirectTo:`http://mine-sahayak.vercel.app/dashboard`,
                }
        })
    }
     
  
  return (
    <div className='bg-gradient-to-b from-indigo-950 pt-48 to-black h-screen md:h-92'>
        <div className=''>
        <div className='flex flex-col items-center justify-center  w-[50%] mx-auto rounded-xl'>
            {/* phone number  */}
            <div className='text-center rounded-xl p-4 flex flex-col items-center justify-center '>
            <h3 className='font-bold text-4xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800'>Login with Phone Number</h3>
          {!otp ? 
          <input onChange={(e)=>setNum(e.target.value)} value={num} name='num' type="text" placeholder={`Please enter your phone number.`} className='border-b-1 bg-inherit mt-4 w-[90%] p-2 ml-8 focus:border-none focus:outline-none cursor-pointer text-xl text-white' /> : <input onChange={(e)=>setOtpVal(e.target.value)} value={otpVal} name='otpVal' type="text" placeholder={`Please enter your otp.`} className='border-b-1 bg-inherit mt-4 w-[90%] p-2 ml-8 focus:border-none focus:outline-none cursor-pointer text-xl text-white' /> }
           {otp ? (
              <button onClick={checkOtp} className="btn w-[60%] hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-">
              Verify OTP <Zap className='text-white' fill='white'/></button>
           ): 
           (
           <button onClick={generateOtp} className="btn w-[60%] hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-">
            Get OTP <Zap className='text-white' fill='white'/></button>)
            }
            </div>
            {/* google */}
            {!otp && (<><h1 className='text-white font-extrabold text-2xl'>OR</h1>
            <button onClick={signInWithGoogle} className="btn  hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-">
                Login with Google
                <Zap className='text-white' fill='white'/>
            </button></>)}
        </div>
        </div>
    </div>
  )
}

export default Authcomp