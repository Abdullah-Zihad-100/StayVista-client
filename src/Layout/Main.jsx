import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber"
import Footer from "../Components/Footer";
const Main = () => {
  return (
    <div>
      <Navber />

      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default Main;
