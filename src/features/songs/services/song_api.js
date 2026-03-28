import api from "../../shared/api/axiosInstance.js";

export const all_song = async()=>{
const result = await api.get(import.meta.env.VITE_GETALLSONG)
return result.data

}