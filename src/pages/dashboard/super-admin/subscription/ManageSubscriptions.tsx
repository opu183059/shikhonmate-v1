import { Button } from "antd";
import SubscriptionCard from "../../../../components/cards/SubscriptionCard";
import { GoPlus } from "react-icons/go";

const ManageSubscriptions = () => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <h1 className="heading1">All Subscription Plans</h1>
        <Button type="primary" icon={<GoPlus />} size="large" className="btn1">
          Create New Subscription
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-14">
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </div>
    </div>
  );
};

export default ManageSubscriptions;
