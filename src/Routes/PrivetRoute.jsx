import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    console.log(location?.pathname)

    if(user){
        return children;
    }
    if(loading){
return <Loader/>
    }

    return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
}
export default PrivetRoute;