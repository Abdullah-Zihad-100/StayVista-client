import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader";
import useRole from "../Hooks/useRole";

const HostRoute = ({ children }) => {
  const [role,isLoading]=useRole()
  if (isLoading) {
    return <Loader />;
  }
  if (role === "host") {
    return children;
  }

return <Navigate to={"/dashboard"}></Navigate>;


};
export default HostRoute;
