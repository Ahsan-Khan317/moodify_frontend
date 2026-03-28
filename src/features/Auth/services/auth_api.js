import api from "../../shared/api/axiosInstance.js"

 export const register = async(data)=>{

    const result = await api.post(import.meta.env.VITE_REGISTER,data);
    return result.data


}

 export const login = async(data)=>{

    const result = await api.post(import.meta.env.VITE_LOGIN,data);
    return result.data


}

 export const logout = async()=>{

    const result = await api.post(import.meta.env.VITE_LOGOUT);
    return result.data


}

 export const getme = async()=>{

    const result = await api.get(import.meta.env.VITE_GETME);
    return result.data


}

