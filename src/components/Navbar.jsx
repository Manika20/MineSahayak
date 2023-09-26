import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/helper/SupabaseClient'

const Navbar = () => {
  const [isLogged,setIsLogged]=useState(false)
  useEffect(()=>{
    async function fetchUser(){
    const { data: { user } } =  await supabase.auth.getUser()
    // console.log(user)
    if(user) setIsLogged(true)
    }
    fetchUser()
},[])
  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo  */}
        <div></div>
        {/* button  */}
        <Link to={`${isLogged?'/dashboard':'/auth'}`}>
        <button  className="btn hover:scale-95 transition-all duration-100 font-extrabold text-base/snug tracking-tight btn-primary bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl">Dive In</button>
        </Link>
    </div>
  )
}

export default Navbar