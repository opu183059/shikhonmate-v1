import { Button, Card, Dropdown, MenuProps, Modal } from "antd";
import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import SubscriptionPlanDetail from "../modals/SubscriptionPlanDetail";

const SubscriptionCard = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Edit
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Change Status
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Delete Plan
        </a>
      ),
    },
  ];
  return (
    <Card className="bg-[#F8F8F8] rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl ">Basic</h2>
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
          <PiDotsThreeVerticalBold size={22} className="cursor-pointer" />
        </Dropdown>
      </div>
      <p className="text-xl font-semibold mt-5">
        BDT 5999<span className="text-base font-normal">/Month</span>
      </p>
      <p className="mt-5 font-semibold mb-1">Features Included-</p>
      <ul>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
      </ul>
      <p className="mt-5 font-semibold mb-1">Description</p>
      <p className="line-clamp-3 leading-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        blanditiis, cum cumque architecto veniam iusto error tempore commodi
      </p>
      <div className="flex justify-center mt-4">
        <Button
          type="primary"
          className="btn1"
          onClick={() => setModal2Open(true)}
        >
          View Details
        </Button>
      </div>

      <Modal
        title="Subscription Plan Details"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <SubscriptionPlanDetail />
      </Modal>
    </Card>
  );
};

export default SubscriptionCard;
