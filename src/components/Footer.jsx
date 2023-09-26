import React from 'react'
import Abhi from '../assets/abhi.jpeg'

const Footer = () => {
    return (
        <div className='bg-black'>
        <div className=''>
            <div className='font-bold px-6 md:px-4 text-center text-lg/snug md:text-3xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mb-10'>
                PS Code: SIH1312

            </div>
            <div className='capitalize text-xl md:text-1xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white text-center'>
                Problem Statement Title: Chatbot to respond to text queries pertaining to various Acts, Rules, and Regulations applicable to Mining industries
            </div>

        </div>
        <div>
            <div className='text-center m-10 capitalize text-xl md:text-1xl font-semibold text-transparent bg-clip-text bg-white'>
                Team MMM
            </div>
            <div className='flex justify-center space-x-10 text-center'>
                
                <div >
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Vishal Chauhan</h3>
                    
                </div>
                <div >
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Abhishek Bahukhandi</h3>
                    
                </div>
                <div >
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Shobhnik </h3>
                    
                </div>
                <div >
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Yash Singhal</h3>
                    
                </div>
                
            </div>
            <br />
            {/* <div>
                <div className='flex justify-center '>
            
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Jayant Pahwa</h3>
                    
                </div>
                <div >
                    <img src={Abhi} alt="" className="h-32 w-32 rounded-full object-cover h-full w-full shadow-md"/>
                    <h3>Manika Goyal</h3>
                    
                </div>
            </div> */}
        </div>
        </div>
    )
}

export default Footer