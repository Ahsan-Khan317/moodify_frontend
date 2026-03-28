import home_bg from "../../../assets/home_bg.png";
import { usesong } from "../../songs/context/song.contexts.jsx";
import Navbar from "../../shared/COMPONENTS/navbar.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const {get_allsong,song} = usesong()
  const navigate = useNavigate()

  useEffect(()=>{

           get_allsong()
          
      },[])

  return (
    <div
      className="h-screen w-screen  relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${home_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 🌊 Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/40"></div>

      {/* 🔥 Glow Effects (responsive) */}
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-purple-500/30 blur-[100px] rounded-full top-5 left-5"></div>
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-blue-500/30 blur-[100px] rounded-full bottom-5 right-5"></div>

      <Navbar />

      {/* 💎 HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-28 sm:mt-15">

        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl">

          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
            Feel Your Mood 🎧
          </h1>

          <p className="text-gray-200 mt-3 text-sm sm:text-base">
            AI detects your emotion and recommends music instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center">
            <button
              onClick={()=>{navigate("/detect_emotion")}}
              className="bg-white text-black px-5 py-2 cursor-pointer active:scale-95 rounded-xl font-semibold hover:scale-105 transition">
              Start Detection
            </button>

            <button
              onClick={()=>{navigate("/all_music")}}
              className="border border-white px-5 py-2 cursor-pointer active:scale-95 rounded-xl hover:bg-white hover:text-black transition">
              Explore Music
            </button>
          </div>

        </div>
      </div>

      {/* 🎵 FEATURES */}
      <div className="relative z-10 mt-6 sm:mt-28 px-4  sm:px-16">

        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Why Moodify?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold">🎥 Face Detection</h3>
            <p className="text-gray-300 text-sm mt-2">
              Real-time emotion detection using AI.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold">🎧 Smart Music</h3>
            <p className="text-gray-300 text-sm mt-2">
              Songs based on your mood instantly.
            </p>
          </div>

          <div className="backdrop-blur-xl not-sm:hidden bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold">⚡ Fast</h3>
            <p className="text-gray-300 text-sm mt-2">
              Smooth and real-time experience.
            </p>
          </div>

        </div>
      </div>

      <div className="relative z-10 mt-16 sm:mt-24 text-center pb-6 text-gray-300 text-xs sm:text-sm px-4">
        © 2026 Moodify. All rights reserved.
      </div>

    </div>
  );
};

export default Home;