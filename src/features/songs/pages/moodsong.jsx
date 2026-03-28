
import { usesong } from "../context/song.contexts.jsx";

import { useNavigate } from "react-router-dom";
const Moodsong = () => {
    const navigate = useNavigate()

    const {moodysong,setdata} = usesong()

   
console.log(moodysong)


const handleclick = (title,songurl,posterurl) =>{

setdata({
    title:title,
    songurl:songurl,
    posterurl:posterurl

})

navigate("/music_player")

}

  return (
    <div className="min-h-screen bg-black text-white pt-25 px-4">

      {/* 🧠 Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold 
                       bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 
                       text-transparent bg-clip-text">
          AI Mood Music Recommendations 🎧
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Smart songs based on your facial emotion
        </p>
      </div>

      {/* 🎵 Small Cards Grid */}
      <div className="grid 
                      grid-cols-2 
                      sm:grid-cols-3 
                      md:grid-cols-4 
                      lg:grid-cols-5 
                      gap-4">

        {moodysong?.map((song) => (
          <div
onClick={()=>{
    handleclick(song.title,song.songurl,song.posterurl
)
}}

            key={song._id}
            className="bg-zinc-900 rounded-xl overflow-hidden 
                       hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* Poster */}
            <img
              src={song.posterurl}
              alt={song.title}
              className="w-full h-32 object-cover"
            />

            {/* Title */}
            <div className="p-2">
              <p className="text-xs sm:text-sm font-medium truncate">
                {song.title}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Moodsong;