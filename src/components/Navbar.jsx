import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo  */}
        <div></div>
        {/* button  */}
        <Link to={'/auth'}>
        <button  className="btn hover:scale-95 transition-all duration-100 font-extrabold text-base/snug tracking-tight btn-primary bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl">Dive In</button>
        </Link>
    </div>
  )
}

export default Navbar