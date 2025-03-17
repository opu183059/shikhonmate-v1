import { NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png";
import { mainMenu } from "../../utils/mainMenu";
import { Button } from "antd";
const MainHeader = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <div className="logo">
          <img src={logo} alt="Shikhonmate" className="w-44" />
        </div>
        <div className="main-menu flex gap-4 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-10 bg-[#F5F5F5] px-4 py-2 rounded-full">
          {mainMenu.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className=" px-4 py-1 rounded-full"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="login">
          <Button className="btn1">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
