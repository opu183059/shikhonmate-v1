import { Dropdown, MenuProps } from "antd";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const SubscriptionCard = () => {
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
    <div className="bg-[#F8F8F8] p-7 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl ">Basic</h2>

        <Dropdown menu={{ items }} placement="bottomRight">
          <PiDotsThreeVerticalBold size={22} className="cursor-pointer" />
        </Dropdown>
      </div>
      <p className="text-xl font-semibold mt-5">
        ৳5999 <span className="text-base font-normal">/Month</span>
      </p>
      <p className="mt-5 font-semibold mb-1">Features Included-</p>
      <ul>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
        <li>✔️ Feature 1</li>
      </ul>
      <p className="mt-5 font-semibold mb-1">Description</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        blanditiis, cum cumque architecto veniam iusto error tempore commodi
      </p>
    </div>
  );
};

export default SubscriptionCard;
