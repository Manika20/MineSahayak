import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/SupabaseClient";

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
    <div className="h-screen bg-gradient-to-b from-indigo-950 to-black">
    <div className="flex flex-col items-center justify-between h-full">
      <div className="text-5xl mt-5 text-cyan-500">Minesahayak Chatbot</div>
      <div className="chat-container flex flex-col w-[80vw] justify-end">
        <div className="flex justify-start">
          <div className="bg-blue-500 text-white rounded-lg p-2 my-2 max-w-[80%]">
            Hello! How can I assist you today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-300 text-black rounded-lg p-2 my-2 max-w-[80%]">
            I have a question about my account.
          </div>
        </div>
      </div>
      <div className="input mb-4 w-[80vw] flex flex-row bg-transparent">
        <input
          type="text"
          className="w-full h-10 border-2 border-gray-100 rounded-l-lg p-4 text-lg placeholder:text-lg"
          placeholder="Enter your Problem"
        />
        <button className="h-10 w-[100px] bg-cyan-500 rounded-r-lg text-lg text-black text-center">
          Submit
        </button>
      </div>
    </div>
  </div>
  
  
  );
};

export default Dashboard;
