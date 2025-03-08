import { Layout, Menu, MenuProps } from "antd";
import { TUser } from "../../redux/feature/auth/authSlice";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { PiBuildingOffice, PiUsersFourBold } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "../../../public/Logo.png";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardSidebar = () => {
  //   const token = useAppSelector(useCurrentToken);

  //   let user;

  //   if (token) {
  //     user = jwtDecode(token);
  //   }

  const user = {
    userEmail: "string",
    userID: "1212",
    userRole: "admin",
    iat: 4545,
    exp: 4545,
  };

  let sidebarItems: MenuProps["items"];

  switch ((user as TUser)!.userRole) {
    case userRole.ADMIN:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <LuLayoutDashboard size={18} />,
          label: <Link to={"/dashboard/supper-admin/home"}>Dashboard</Link>,
        },
        {
          key: "manage-institutes",
          icon: <PiBuildingOffice size={18} />,
          label: (
            <Link to={"/dashboard/supper-admin/manage-institutes"}>
              Manage Institutes
            </Link>
          ),
        },
        {
          key: "manage-users",
          icon: <PiUsersFourBold size={18} />,
          label: (
            <Link to={"/dashboard/supper-admin/manage-users"}>
              Manage Users
            </Link>
          ),
        },
        {
          key: "manage-subscriptions",
          icon: <MdOutlinePriceChange size={18} />,
          label: (
            <Link to={"/dashboard/supper-admin/manage-subscriptions"}>
              Manage Subscriptions
            </Link>
          ),
        },
      ];
      break;
    case userRole.USER:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <FaRegUser size={18} />,
          label: <Link to={"/admin/dashboard/profile"}>Dashboard</Link>,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Sider
      width={280}
      theme="light"
      className="h-screen sticky top-0 left-0 bg-four"
    >
      <div className="h-[4rem] flex justify-center items-center text-gray-50 mb-5">
        <img src={logo} className="w-28" />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={sidebarItems}
        className="bg-four px-2"
      />
    </Sider>
  );
};

export default DashboardSidebar;
