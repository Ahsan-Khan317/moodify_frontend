import { useContext ,createContext} from "react";
import { all_song } from "../services/song_api";
import { useState } from "react";
const Songcontext = createContext()

export  const SongProvider = ({children})=>{
const [song,setsong]= useState([])
const [moodysong,setmoodysong] = useState(null)
const [data,setdata] = useState({
    title:null,
    songurl:null,
    posterurl:null
})
const get_allsong = async () => {
  const result = await all_song();
  setsong(result.result);
  return result.result; // ✅ VERY IMPORTANT
};





const getmoodysong = (mood,songs)=>{
if(mood == "neutral"){
    const result = songs
setmoodysong(result)


}else{
    const result = songs.filter((e)=> e.mood == mood)
setmoodysong(result)

}
}






    return(

        <Songcontext.Provider value={{get_allsong,song,setdata,data,moodysong,getmoodysong}} >

{children}


        </Songcontext.Provider>
    )
}


export const usesong = ()=> useContext(Songcontext)