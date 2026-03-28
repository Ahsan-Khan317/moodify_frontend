import { useRef, useState } from "react";
import { usesong } from "../context/song.contexts.jsx";
import { useEffect } from "react";
const MusicPlayer = () => {

    const{data} = usesong()
    
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(()=>{
toggleMusic()
  },[])

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;

    setCurrentTime(formatTime(current));
    setDuration(formatTime(total));

    if (total) {
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    const total = audioRef.current.duration;

    audioRef.current.currentTime = (value / 100) * total;
    setProgress(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-linear-to-br from-black via-blue-950 to-black 
                    relative overflow-hidden px-4">

      {/* 🔥 Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-600 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* 🎵 Music Card */}
      <div className="w-full max-w-sm z-10 p-5 rounded-3xl 
                      bg-linear-to-br from-blue-900/60 via-black/70 to-blue-700/60
                      backdrop-blur-xl border border-white/10 
                      text-white shadow-2xl
                      hover:scale-105 transition duration-500">

        {/* Poster */}
        <img
          src={data.posterurl}
          alt="poster"
          className={`w-full h-48 object-cover rounded-xl transition duration-500 
          ${isPlaying ? "scale-105 shadow-[0_0_25px_rgba(59,130,246,0.8)]" : ""}`}
        />

        {/* Title */}
        <h2 className="mt-4 text-lg font-semibold text-center">
          {data.title}
        </h2>

        {/* Audio */}
        <audio
          ref={audioRef}
          src={data.songurl}
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Controls */}
        <div className="mt-4 flex flex-col gap-4">

          <button
            onClick={toggleMusic}
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 cursor-pointer
            transition-all duration-200 py-2 rounded-full font-semibold"
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>

          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-blue-400 cursor-pointer"
          />

          <div className="flex justify-between text-xs text-gray-300">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;