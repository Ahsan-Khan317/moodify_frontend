import { useauth } from "../../Auth/contexts/auth_context.jsx";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./loader.jsx";

const ProtectedRoute = () => {
  const { loading, user } = useauth();

  if (loading) {
    return <Loader />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;