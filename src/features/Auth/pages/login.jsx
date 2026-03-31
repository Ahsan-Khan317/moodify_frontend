import { useState } from "react";
import home_bg from "../../../assets/home_bg.png";
import { useNavigate } from "react-router-dom";
import Inputs from "../components/input.jsx";
import { useauth } from "../contexts/auth_context.jsx";
import MessageCard from "../../shared/COMPONENTS/msgCard.jsx";
const Login = () => {
  const { user_login } = useauth()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const [msg,setmsg] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await user_login(form);
 
setmsg(result)
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${home_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
         {msg && <MessageCard msg={msg.message} success={msg.success} onClose={() => setmsg(null)} />}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Inputs type="email" name="email" placeholder="Email" form_val={form.email} handleChange={handleChange} />
          <Inputs type="password" name="password" placeholder="Password" form_val={form.password} handleChange={handleChange} />

          <button
            type="submit"
            className="bg-white cursor-pointer active:scale-95 text-black py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-300">
          Don’t have an account?{" "}
          <span
            onClick={()=>navigate("/signup")}
            className="underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>
    
    </div>
   
  );
};

export default Login;