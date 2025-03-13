import { Avatar, Badge, Dropdown, Layout, MenuProps } from "antd";
import { CiBellOn } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/feature/auth/authSlice";
import { GoGear } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoHelpCircleOutline } from "react-icons/io5";

const { Header } = Layout;
const DashboardHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p className="flex items-center gap-2 w-28">
          <AiOutlineUser size={18} /> Profile
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p className="flex items-center gap-2 w-28">
          <GoGear size={18} /> Settings
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p className="flex items-center gap-2 w-28">
          <IoHelpCircleOutline size={20} /> Help
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <p onClick={handleLogout} className="flex items-center gap-2 w-28">
          <RxExit size={14} className="mx-[3px]" /> Logout
        </p>
      ),
    },
  ];

  return (
    <Header className="bg-white sticky top-0 z-10 flex gap-3 justify-end items-center h-14 px-10 shadow">
      <Badge dot>
        <CiBellOn size={30} className="cursor-pointer" />
      </Badge>

      <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight">
        <Avatar
          src={"https://avatars.githubusercontent.com/u/90123719?v=4"}
          className="cursor-pointer"
        />
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
