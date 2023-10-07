import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { supabase } from '../lib/helper/SupabaseClient';

import { useNavigate } from 'react-router-dom';

const Authcomp = () => {
  const [num, setNum] = useState('');
  const [otpVal, setOtpVal] = useState('');
  const [otp, setOtp] = useState(false);
  const navigate = useNavigate();

  const generateOtp = async () => {
    if (num.length !== 10) {
      alert('Please enter a correct phone number.');
      setNum('');
      return;
    }
    let { user, error } = await supabase.auth.signInWithOtp({
      phone: `+91${num}`,
    });
    setOtp(true);
  };

  const checkOtp = async () => {
    let { session, error } = await supabase.auth.verifyOtp({
      phone: `+91${num}`,
      token: otpVal,
      type: 'sms',
    });
    // if (session?.access_token) navigate('/d/ashboard');
    if(!error){
      navigate('/dashboard')
    }
    else{
      alert(error)
      setOtpVal('')
    }

  };
     
  const signInWithGoogle=async()=>{
        const {data,err}=await supabase.auth.signInWithOAuth({
                provider: 'google',
                options:{
                    redirectTo:'/dashboard',
                }
        })
    }

  return (
    <div className='bg-gradient-to-b from-indigo-950 pt-12 md:pt-48 to-black min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='max-w-lg mx-auto'>
          <div className='text-center rounded-xl p-4'>
            <h3 className='font-bold text-4xl md:text-5xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800'>
              Login with Phone Number
            </h3>
            {!otp ? (
              <input
                onChange={(e) => setNum(e.target.value)}
                value={num}
                name='num'
                type='text'
                placeholder={`Please enter your phone number.`}
                className='border-b-1 bg-inherit mt-4 w-full p-2 focus:border-none focus:outline-none cursor-pointer text-xl text-white'
              />
            ) : (
              <input
                onChange={(e) => setOtpVal(e.target.value)}
                value={otpVal}
                name='otpVal'
                type='text'
                placeholder={`Please enter your otp.`}
                className='border-b-1 bg-inherit mt-4 w-full p-2 focus:border-none focus:outline-none cursor-pointer text-xl text-white'
              />
            )}
            {otp ? (
              <button
                onClick={checkOtp}
                className='btn w-full hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-'
              >
                Enter OTP <Zap className='text-white' fill='white' />
              </button>
            ) : (
              <button
                onClick={generateOtp}
                className='btn w-full hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-'
              >
                Get OTP <Zap className='text-white' fill='white' />
              </button>
            )}
          </div>

          <div className='text-center mt-4'>
            {!otp && (
              <>
                <h1 className='text-white font-extrabold text-2xl md:text-3xl'>
                  OR
                </h1>
                <button onClick={signInWithGoogle}
                  className='btn w-full hover:scale-95 transition-all duration-100 font-bold mt-4 text-base tracking-wide btn-primary bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-'
                >
                  Login with Google
                  <Zap className='text-white' fill='white' />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authcomp;
