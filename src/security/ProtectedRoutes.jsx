import { Outlet, Navigate } from "react-router-dom";
//import Home from "../pages/Home";

function useAuth(){
  const user = {loggedIn: true}
  return user && user.loggedIn;
}

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to='/'/>;
}

export default ProtectedRoutes