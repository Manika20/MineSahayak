import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/SupabaseClient";
import { MessageSquare, Zap,Menu,X } from "lucide-react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const { err } = await supabase.auth.signOut();
    if (err) {
      alert("Error logging out!");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) navigate("/");
    }
    fetchUser();
  }, []);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  
  const MyOffcanvas = () => {
    return (
      <Offcanvas className="fixed top-0 md:hidden w-1/2 sm:w-1/3 bottom-0 left-0 border bg-gray-800 text-white p-4" show={showOffcanvas}>
        <Offcanvas.Header  className="flex justify-between">
        <h2 className="text-white text-3xl mb-4 ">History</h2>
          {/* Close button for dismiss option */}
          <Button className="border-0 bg-transparent  text-white" onClick={handleOffcanvas}>
            <X className= "text-white" fill="white"/>
          </Button>
          </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Your Offcanvas content goes here */}
          <ul className="text-white rounded-xl">
      <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate w-24 sm:w-52">How to mine in Rainy area How to mine in Rainy area...</li>
        </div>
        <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate w-24 sm:w-52">Some hazards...</li>
        </div>

        <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate w-24 sm:w-52">Legal Tenders...</li>
        </div>

   </ul>
        </Offcanvas.Body>
      </Offcanvas>
    );
  };
  

  return (

    <div className="h-screen bg-gradient-to-b from-indigo-950 to-black flex">
     {/*menu*/}
     <div className="md:hidden">
  <Button className="border-0 mt-4 bg-transparent text-white" onClick={handleOffcanvas}>
    <Menu className= "text-white" fill="white"/>
     </Button>
   <MyOffcanvas />
    </div>
     
     
    {/* Sidebar */}
    <div className="hidden md:block bg-gray-800 w-1/4 p-4">
      <h2 className="text-white text-2xl mb-4">History</h2>
      <ul className="text-white rounded-xl">
      <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate md:w-32 lg:w-44 xl:w-80">How to mine in Rainy area How to mine in Rainy area...</li>
        </div>
        <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate md:w-32 lg:w-44 xl:w-80">Some hazards...</li>
        </div>

        <div className="flex gap-x-2 items-center justify-left">
        <MessageSquare className="w-6 h-6"/> 
        <li className="mb-2 border-b-1 p-1 line-clamp-1 truncate md:w-32 lg:w-44 xl:w-80">Legal Tenders...</li>
        </div>

   </ul>
    </div>
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col items-center justify-between ml-3">
    <div className="flex justify-between w-full">
      <div></div>
      <div className=" text-3xl md:text-5xl  h-10 md:h-14  mt-5 tracking-tighter text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 font-bold">Minesahayak <span className="hidden lg:inline">Chatbot</span></div>
      <div className="w-[40px] md:w-[50px] bg-yellow-200 rounded-full text-center flex items-center justify-center mr-5  mt-6">U</div>
      </div>
      <div className="chat-container flex flex-col w-full  mr-6 md:mr-0">

        <div className="flex justify-start">
          <div className="bg-blue-500  text-white rounded-lg p-2 my-2 ml-1  max-w-[80%] ">
            Hello! How can I assist you today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-300 text-black rounded-lg p-2 my-2 mr-4  max-w-[80%]">
            I have a question about my account.
          </div>
        </div>
        {/* Add more chat messages here */}
      </div>
      <div className="input mb-7 w-[70vw] lg:w-[75vw] flex flex-row bg-transparent mr-6 lg:mr-0">
        <input
          type="text"
          className="w-full h-10 border-2 border-gray-100 rounded-l-lg p-4 text-lg placeholder:text-lg"
          placeholder="Enter your Problem"
        />
       
        <button className="h-10 flex justify-center items-center text-white w-[100px] hover:scale-95 transition-all duration-100 font-bold tracking-wide  bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-r-lg text-lg text-center">
          <span className="hidden sm:inline">Submit</span>
          <Zap className="text-white w-4 h-4" fill="white"/>
        </button>
        
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
