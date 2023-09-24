import React from 'react';
import abhi from '../assets/abhi.jpeg';

const Herosection = () => {
  return (
    <section>
      <header className='flex flex-col md:flex-row justify-between my-8 md:my-24 mx-4 md:mx-24'>
        <div className='flex justify-center md:justify-start gap-4'>
          <div className='text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text'>
            <img className='w-10 h-10 rounded-full' src={abhi} alt="" />
          </div>
          <div className='text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text'>
            MINING LAW CHATBOT
          </div>
        </div>
        <div className='text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text'>
          2023
        </div>
      </header>

      <div className="h-72 md:h-92 flex items-center justify-center">
        <p className="text-6xl md:text-10xl text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">IMINER</p>
      </div>

      <div className="flex items-center mt-4 justify-center">
        <div className="relative flex">
          <input
            type="text"
            className="pl-4 md:pl-8 pr-2 md:pr-3 py-3 md:py-4 w-full md:w-96 border rounded-lg focus:outline-none focus:border-blue-500 bg-gradient-to-r from-opacity-80 to-white shadow-lg"
            placeholder="Search"
          />
          <button className="px-3 md:px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg ml-2">Button</button>
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-5.2-5.2"></path>
              <circle cx="10" cy="10" r="7"></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className='text-center my-6 md:my-12'>
        <p>Mining Law Chatbot UI</p>
      </div>
    </section>
  );
};

export default Herosection;
