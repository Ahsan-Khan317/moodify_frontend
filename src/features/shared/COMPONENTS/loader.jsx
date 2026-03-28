import { useauth } from "../../Auth/contexts/auth_context.jsx"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
const Loader = ()=>{
    
    const {loading,user} = useauth()
    if(loading){
        return(
            <div className="absolute inset-0 z-30">
            <img src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" alt="" className="h-full w-full"/>
        </div>
        )
    }

   return user?<Outlet />:<Navigate to="/login" />

}

export default Loader