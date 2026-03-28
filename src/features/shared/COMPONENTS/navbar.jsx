import { NavLink, useNavigate } from "react-router-dom";
import { useauth } from "../../Auth/contexts/auth_context.jsx";
const Navbar = () => {
  const {user} = useauth()
  const navigate = useNavigate()
  return (
    <div className="absolute top-0 z-10 flex justify-between  w-screen items-center px-4 sm:px-10 py-4">
      
      <h1
      onClick={()=>{navigate("/")}}
      className="text-xl sm:text-2xl font-bold">Moodify</h1>

      <div className=" flex flex-1  gap-6 text-sm items-center justify-end">

    
        <NavLink
          to= {user ?"/profile" : "/login"}
          className="border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition"
        >
          {user?"Profile":"Login"}
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;