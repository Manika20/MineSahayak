import React, { useEffect } from 'react'
import Authcomp from '../components/Authcomp'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/helper/SupabaseClient'

const AuthPage = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        async function fetchUser(){
        const { data: { user } } =  await supabase.auth.getUser()
        if(user) navigate('/dashboard')
        }
        fetchUser()
    },[])
   
  return (
    <div>
        <Authcomp/>
    </div>
  )
}

export default AuthPage