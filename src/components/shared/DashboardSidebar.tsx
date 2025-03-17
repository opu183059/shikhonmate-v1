import { Layout, Menu, MenuProps } from "antd";
import { useCurrentToken } from "../../redux/feature/auth/authSlice";
import { PiUsersFourBold } from "react-icons/pi";
import { useAppSelector } from "../../redux/hooks";
import { jwtDecode } from "jwt-decode";
import logo from "../../../public/Logo.png";
import { TUser, userRole } from "../../types/user.type";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { superAdminPaths } from "../../routes/superAdmin.routes";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const { Sider } = Layout;

const DashboardSidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = jwtDecode(token);
  }

  let sidebarItems: MenuProps["items"];

  switch ((user as TUser)!.userRole) {
    case userRole.SUPERADMIN:
      sidebarItems = sidebarItemsGenerator(
        superAdminPaths,
        userRole.SUPERADMIN
      ) as MenuProps["items"];
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
      collapsedWidth={55}
      collapsible
      width={220}
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
      <Menu
        mode="inline"
        items={[
          {
            key: "1",
            icon: <IoHomeOutline size={18} />,
            label: <Link to={"/"}>Home</Link>,
          },
        ]}
        className="bg-four"
      />
    </Sider>
  );
};

export default DashboardSidebar;
