import { Layout, Menu, MenuProps } from "antd";
import { logout, useCurrentToken } from "../../redux/feature/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { PiBuildingOffice, PiUsersFourBold } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { jwtDecode } from "jwt-decode";
import logo from "../../../public/Logo.png";
import { TUser } from "../../types/user.type";

const { Sider } = Layout;

const userRole = {
  SUPERADMIN: "super-admin",
  ADMIN: "admin",
  USER: "user",
};

const DashboardSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = jwtDecode(token);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  let sidebarItems: MenuProps["items"];

  // console.log(sidebarItemsGenerator(superAdminPaths, userRole.SUPERADMIN));

  switch ((user as TUser)!.userRole) {
    case userRole.SUPERADMIN:
      sidebarItems = [
        {
          key: "dashboard",
          icon: <LuLayoutDashboard size={18} />,
          label: <Link to={"/super-admin"}>Dashboard</Link>,
        },
        {
          key: "manage-institutes",
          icon: <PiBuildingOffice size={18} />,
          label: (
            <Link to={"/super-admin/manage-institutes"}>Manage Institutes</Link>
          ),
        },
        {
          key: "manage-users",
          icon: <PiUsersFourBold size={18} />,
          label: <Link to={"/super-admin/manage-users"}>Manage Users</Link>,
        },
        {
          key: "manage-subscriptions",
          icon: <MdOutlinePriceChange size={18} />,
          label: (
            <Link to={"/super-admin/manage-subscriptions"}>
              Manage Subscriptions
            </Link>
          ),
        },
      ];
      break;
    case userRole.ADMIN:
      sidebarItems = [
        {
          key: "manage-users",
          icon: <PiUsersFourBold size={18} />,
          label: <p>Admin</p>,
        },
      ];
      break;
    case userRole.USER:
      sidebarItems = [
        {
          key: "manage-users",
          icon: <PiUsersFourBold size={18} />,
          label: <p>User</p>,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth={0}
      collapsible
      width={240}
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
        className="bg-four"
      />

      <div className="absolute bottom-5 w-full flex justify-center">
        <div
          onClick={handleLogout}
          className=" px-2 py-1 w-full text-center hover:bg-[#4DA6C8] hover:text-gray-50 font-semibold cursor-pointer duration-200"
        >
          Logout
        </div>
      </div>
    </Sider>
  );
};

export default DashboardSidebar;
