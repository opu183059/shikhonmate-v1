import { Avatar, Dropdown, Layout, MenuProps } from "antd";
import { CiBellOn } from "react-icons/ci";

const { Header } = Layout;
const DashboardHeader = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Profile</p>,
    },
    {
      key: "2",
      label: <p>Settings</p>,
    },
    {
      key: "3",
      label: <p>Help</p>,
    },
    {
      key: "4",
      label: <p>Logout</p>,
    },
  ];

  return (
    <Header className="bg-white sticky top-0 z-10 flex gap-3 justify-end items-center h-14 px-10 shadow">
      <CiBellOn size={30} />

      <Dropdown menu={{ items }} placement="bottomRight">
        <Avatar
          src={"https://avatars.githubusercontent.com/u/90123719?v=4"}
          className="cursor-pointer"
        />
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
