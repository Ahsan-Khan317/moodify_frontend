import {createContext, useContext, useEffect, useState } from "react";
import { register,login,logout,getme } from "../services/auth_api.js";

const Authcontext = createContext()

const Authprovider = ({children})=>{
  const [user,setuser] = useState(null);
  const [loading,setloading]= useState(true);

  // ✅ Fetch user on app load
  const fetchUser = async ()=>{
    try {
      const result = await getme();
      setuser(result.result); // adjust if backend structure differs
    } catch (error) {
      setuser(null);
    } finally {
      setloading(false);
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])

  // ✅ REGISTER
  const user_register = async (data)=>{
    try {
      setloading(true)
      const result = await register(data);
      setuser(result);
      return result;
    } catch (error) {
      console.log(error)
      return null;
    } finally {
      setloading(false)
    }
  }

  // ✅ LOGIN
  const user_login = async (data)=>{
    try {
      setloading(true)
      const result = await login(data);
      setuser(result);
      return result;
    } catch (error) {
      console.log(error)
      return null;
    } finally {
      setloading(false)
    }
  }

  // ✅ LOGOUT
  const user_logout = async ()=>{
    try {
      await logout();
      setuser(null);
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <Authcontext.Provider value={{
      user,
      loading,
      user_register,
      user_login,
      user_logout,
      fetchUser
    }}>
      {children}
    </Authcontext.Provider>
  )
}

export default Authprovider
export const useauth = ()=> useContext(Authcontext)