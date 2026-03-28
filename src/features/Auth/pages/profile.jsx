import { useNavigate } from "react-router-dom";
import { useauth } from "../contexts/auth_context.jsx";

import { useEffect } from "react";
const Profile = () => {
  const {setuser,user,user_logout,setloading,fetchUser} = useauth()
  const navigate = useNavigate()

  const clicked = ()=>{
    user_logout()
    navigate("/")
  }

  useEffect(()=>{
  
      
  fetchUser()
  
  
  },[user])
 return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#020617] to-[#1e293b] relative overflow-hidden">

    {/* 🔥 Glow Effects */}
    <div className="absolute w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full top-10 left-10"></div>
    <div className="absolute w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

    {/* 🎯 Card */}
    <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 w-85 max-w-[90%] flex flex-col items-center">

      {/* 👤 Avatar */}
      <div className="w-20 h-20 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
        {user?.username?.charAt(0)?.toUpperCase()}
      </div>

      {/* 🧠 Heading */}
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        My Profile
      </h1>

      {/* 📄 Info */}
      <div className="w-full space-y-4 mb-6">

        <div className="bg-white/5 p-3 rounded-xl border border-white/10 overflow-hidden">
          <p className="text-xs text-gray-400">Username</p>
          <p className="text-lg font-medium text-white truncate">
            {user?.username}
          </p>
        </div>

        <div className="bg-white/5 p-3 rounded-xl border border-white/10 overflow-hidden">
          <p className="text-xs text-gray-400">Email</p>
          <p className="text-lg font-medium text-white truncate">
            {user?.email}
          </p>
        </div>

      </div>

      {/* 🚀 Logout Button */}
      <button
        onClick={clicked}
        className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition duration-300 font-semibold active:scale-95"
      >
        Logout
      </button>

    </div>
  </div>
);
};

export default Profile;