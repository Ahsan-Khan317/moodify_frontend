import { useEffect, useRef, useState } from "react";
import detect from "../hooks/detect.face.js";
import setupCamera from "../services/camera.services.js";
import loadModel from "../services/mediapipe.services.js";
import home_bg from "../../../assets/home_bg.png";
import Navbar from "../../shared/COMPONENTS/navbar.jsx";

 import { usesong } from "../../songs/context/song.contexts.jsx";
import { useNavigate } from "react-router-dom";

const MediaPipeEmotion = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null);
  const faceLandmarker = useRef(null);
 const{get_allsong,getmoodysong,song} = usesong()
  const [emotion, setEmotion] = useState("Start Emotion Detection");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      await loadModel(faceLandmarker);
      console.log("Model Loaded ✅");
    };
    load();
  }, []);

  return (
   <>
   <Navbar />
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-4 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${home_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌊 Blur */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/40"></div>

      {/* 🔥 Glow */}
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-purple-500/30 blur-[120px] rounded-full top-5 left-5"></div>
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-blue-500/30 blur-[120px] rounded-full bottom-5 right-5"></div>

      {/* 🎯 CARD */}
      <div className="relative z-10 w-full max-w-3xl min-h-130 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center gap-6">

        {/* 🧠 Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-center">
          AI Emotion Detection 🎭
        </h2>

        {/* 🎥 Video */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/30 flex items-center justify-center">

            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* 😎 Emotion / Loading */}
        <div className="text-center min-h-15 flex items-center justify-center">
          {loading ? (
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-300 animate-pulse">
              Detecting Emotion...
            </h1>
          ) : (
            <div>
              <p className="text-gray-300 text-sm">Detected Emotion</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-300 mt-1">
                {(emotion == "...")?"detect again":emotion.toUpperCase()}
              </h1>
            </div>
          )}
        </div>

        {/* 🚀 Button */}
     <div className="flex sm:flex-row flex-col gap-4 mt-2 ">
  
  {/* 🚀 Detect Button */}
  <button
    className="bg-white text-black cursor-pointer px-6 py-2 rounded-xl font-semibold hover:scale-105 active:scale-95 transition"
    onClick={async () => {
      setLoading(true);
      setEmotion("...");

      await setupCamera(videoRef);

      videoRef.current.onloadeddata = () => {
        detect(
          videoRef.current,
          setEmotion,
          faceLandmarker.current,
          get_allsong,
          getmoodysong,song
        );
      };

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }}
  >
    Detect Expression
  </button>

  {/* 🎵 NEW BUTTON */}
  <button
    className="bg-blue-500 text-white cursor-pointer px-6 py-2 rounded-xl font-semibold hover:scale-105 active:scale-95 transition"
    onClick={() => navigate("/expression_songs")}
  >
    Feel the {(emotion == "..." || emotion == "Start Emotion Detection")?"":emotion} Music 🎧
  </button>

</div>

      </div>
    </div></>
  );
};

export default MediaPipeEmotion;