import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  GetProps,
  Input,
  Table,
  TableProps,
  Tag,
} from "antd";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const ManageUsers = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  interface DataType {
    key: string;
    name: string;
    email: string;
    role: string;
    institute: string;
    status: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "institute",
      key: "institute",
      dataIndex: "institute",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (record) => (
        <Tag color={record == "Active" ? "green" : "red"}>{record}</Tag>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      email: "abc@gmail.com",
      role: "New York No. 1 Lake Park",
      institute: "ABC",
      status: "Inactive",
    },
    {
      key: "2",
      name: "John Brown",
      email: "abc@gmail.com",
      role: "New York No. 1 Lake Park",
      institute: "ABC",
      status: "Active",
    },
    {
      key: "3",
      name: "John Brown",
      email: "abc@gmail.com",
      role: "New York No. 1 Lake Park",
      institute: "ABC",
      status: "Active",
    },
    {
      key: "4",
      name: "John Brown",
      email: "abc@gmail.com",
      role: "New York No. 1 Lake Park",
      institute: "ABC",
      status: "Active",
    },
    {
      key: "5",
      name: "John Brown",
      email: "abc@gmail.com",
      role: "New York No. 1 Lake Park",
      institute: "ABC",
      status: "Active",
    },
  ];

  return (
    <div>
      <Search
        placeholder="Search by username, email, role...."
        allowClear
        onSearch={onSearch}
        className="w-full md:w-96 mb-8"
      />
      <div>
        <Button
          type="primary"
          icon={<GoPlus />}
          size="large"
          className="btn1 mb-5"
        >
          Add New User
        </Button>
      </div>

      <div className="flex justify-between">
        <h1 className="heading1">Users List</h1>
        <Button
          icon={<VscSettings />}
          onClick={showDrawer}
          className="text-[#065A82]"
        >
          Filter
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        rowKey="_id"
        scroll={{ x: "max-content" }}
      />

      <Drawer title="Filter Selection" onClose={onClose} open={open}>
        <div className="mb-5">
          <h6 className="font-semibold">Status</h6>
          <Divider className="my-1" />
          <Checkbox defaultChecked>Active</Checkbox> <br />
          <Checkbox defaultChecked>Inactive</Checkbox>
        </div>
        <div className="mb-5">
          <h6 className="font-semibold">Institute</h6>
          <Divider className="my-1" />
          <Checkbox defaultChecked>Institute 1</Checkbox> <br />
          <Checkbox defaultChecked>Institute 2</Checkbox>
          <br />
          <Checkbox defaultChecked>Institute 3</Checkbox>
          <br />
          <Checkbox defaultChecked>Institute 4</Checkbox>
          <br />
        </div>
        <div className="mb-5">
          <h6 className="font-semibold">Role</h6>
          <Divider className="my-1" />
          <Checkbox defaultChecked>Admin</Checkbox> <br />
          <Checkbox defaultChecked>Co-Admin</Checkbox>
          <br />
          <Checkbox defaultChecked>Editor</Checkbox>
          <br />
          <Checkbox defaultChecked>Moderator</Checkbox>
          <br />
        </div>
      </Drawer>
    </div>
  );
};

export default ManageUsers;
