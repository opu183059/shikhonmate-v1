import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png";
import { mainMenu } from "../../utils/mainMenu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { Avatar, Dropdown, MenuProps } from "antd";
import { RxExit } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";

const MainHeader = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to={`${user?.userRole}/dashboard`}
          className="flex items-center gap-2 w-28"
        >
          <LuLayoutDashboard size={18} /> Dashboard
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <p onClick={handleLogout} className="flex items-center gap-2 w-28">
          <RxExit size={14} className="mx-[3px]" /> Logout
        </p>
      ),
    },
  ];

  console.log(user);
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
        <div>
          {user ? (
            <Dropdown
              trigger={["click"]}
              menu={{ items }}
              placement="bottomRight"
            >
              <Avatar
                size={35}
                src={"https://avatars.githubusercontent.com/u/90123719?v=4"}
                className="cursor-pointer"
              />
            </Dropdown>
          ) : (
            <Link to={"/login"} className="btn2">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
