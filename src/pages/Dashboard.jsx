import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/helper/SupabaseClient'

const Dashboard = () => {
    const navigate=useNavigate()
    const {data}=supabase.auth.getSession()
    if(!data){
        navigate('/auth')
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard