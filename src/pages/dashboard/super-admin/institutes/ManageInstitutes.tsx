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

const ManageInstitutes = () => {
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
    Institute: string;
    SubscriptionPlan: string;
    District: string;
    SubscriptionEndDate: string;
    Status: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Institute",
      dataIndex: "Institute",
      key: "Institute",
    },
    {
      title: "Subscription Plan",
      dataIndex: "SubscriptionPlan",
      key: "SubscriptionPlan",
    },
    {
      title: "District",
      dataIndex: "District",
      key: "District",
    },
    {
      title: "Subscription End Date",
      key: "SubscriptionEndDate",
      dataIndex: "SubscriptionEndDate",
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (record) => (
        <Tag color={record == "Active" ? "green" : "red"}>{record}</Tag>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      Institute: "ABC",
      SubscriptionPlan: "Premium",
      District: "Chittagong",
      SubscriptionEndDate: "10/03/26",
      Status: "Active",
    },
    {
      key: "2",
      Institute: "ABC",
      SubscriptionPlan: "Premium",
      District: "Chittagong",
      SubscriptionEndDate: "10/03/26",
      Status: "Inactive",
    },
    {
      key: "3",
      Institute: "ABC",
      SubscriptionPlan: "Premium",
      District: "Chittagong",
      SubscriptionEndDate: "10/03/26",
      Status: "Active",
    },
    {
      key: "4",
      Institute: "ABC",
      SubscriptionPlan: "Premium",
      District: "Chittagong",
      SubscriptionEndDate: "10/03/26",
      Status: "Active",
    },
  ];

  return (
    <div>
      <Search
        placeholder="Search by Institute, Status...."
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
          Add New Institution
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
          <h6 className="font-semibold">District</h6>
          <Divider className="my-1" />
          <Checkbox defaultChecked>Dhaka</Checkbox> <br />
          <Checkbox defaultChecked>Chittagong</Checkbox>
          <br />
          <Checkbox defaultChecked>Barishal</Checkbox>
          <br />
          <Checkbox defaultChecked>Khulna</Checkbox>
          <br />
          <Checkbox defaultChecked>Rajshahi</Checkbox>
          <br />
          <Checkbox defaultChecked>Rangpur</Checkbox>
          <br />
          <Checkbox defaultChecked>Mymensingh</Checkbox>
          <br />
          <Checkbox defaultChecked>Sylhet</Checkbox>
          <br />
        </div>
        <div className="mb-5">
          <h6 className="font-semibold">Plan</h6>
          <Divider className="my-1" />
          <Checkbox defaultChecked>Premium</Checkbox> <br />
          <Checkbox defaultChecked>Gold</Checkbox> <br />
          <Checkbox defaultChecked>Platinum</Checkbox> <br />
          <Checkbox defaultChecked>Basic</Checkbox> <br />
          <br />
        </div>
      </Drawer>
    </div>
  );
};

export default ManageInstitutes;
