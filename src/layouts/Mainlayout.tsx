import { Outlet } from "react-router-dom";
import MainHeader from "../components/shared/MainHeader";
import MainFooter from "../components/shared/MainFooter";

const Mainlayout = () => {
  return (
    <div className="background-gradient">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default Mainlayout;
