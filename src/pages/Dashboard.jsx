import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/SupabaseClient";
import { MessageSquare, Zap } from "lucide-react";

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

  return (

    <div className="h-screen bg-gradient-to-b from-indigo-950 to-black flex">
    {/* Sidebar */}
    <div className="bg-gray-800 w-1/4 p-4">
      <h2 className="text-white text-2xl mb-4">History</h2>
      <ul className="text-white rounded-xl">
        
    <li className="mb-2 border-b-1 p-1 line-clamp-1 flex gap-x-2 items-center justify-center">
    <MessageSquare className="w-6 h-6"/> 
    <span>How to mine in Rainy area...</span>
    </li>

    <li className="mb-2 border-b-1 p-1 line-clamp-1 flex gap-x-2 items-center justify-center"> 
    <MessageSquare className="w-6 h-6"/> 
    <span>Some hazards...</span>
    </li>

   
      

      
      
      </ul>
    </div>
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col items-center justify-between ml-3">
    <div className="flex justify-between w-full">
      <div></div>
      <div className="text-5xl mt-5 ttracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 font-bold">Minesahayak Chatbot</div>
      <div className="w-[40px] bg-red-300 rounded-full text-center flex items-center justify-center mr-4 mt-6">U</div>
      </div>
      <div className="chat-container flex flex-col w-full ">

        <div className="flex justify-start">
          <div className="bg-blue-500 text-white rounded-lg p-2 my-2 max-w-[80%] ">
            Hello! How can I assist you today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-300 text-black rounded-lg p-2 my-2 max-w-[80%]">
            I have a question about my account.
          </div>
        </div>
        {/* Add more chat messages here */}
      </div>
      <div className="input mb-4 w-[80vw] flex flex-row bg-transparent">
        <input
          type="text"
          className="w-full h-10 border-2 border-gray-100 rounded-l-lg p-4 text-lg placeholder:text-lg"
          placeholder="Enter your Problem"
        />
       
        <button className="h-10 flex justify-center items-center text-white w-[100px] hover:scale-95 transition-all duration-100 font-bold tracking-wide  bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-r-lg text-lg text-center">
          Submit
          <Zap className="text-white w-4 h-4" fill="white"/>
        </button>
        
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
