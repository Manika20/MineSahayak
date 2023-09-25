import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/helper/SupabaseClient'

const Dashboard = () => {
    const navigate=useNavigate()
    const logout=async()=>{
        const {err}=await supabase.auth.signOut()
        if(err){
        alert('Error logging out!')
        }
        else{
            navigate('/')
        }
    }
    useEffect(()=>{
        async function fetchUser(){
        const { data: { user } } =  await supabase.auth.getUser()
        if(!user) navigate('/')
        }
    fetchUser()
},[])

  return (
    <button className='p-4 bg-red-500 w-[10%] cursor-pointer' onClick={logout}>
        logout
    </button>
  )
}

export default Dashboard