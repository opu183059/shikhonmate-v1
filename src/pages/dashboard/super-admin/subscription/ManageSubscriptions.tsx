import { Button } from "antd";
import SubscriptionCard from "../../../../components/cards/SubscriptionCard";
import { GoPlus } from "react-icons/go";

const ManageSubscriptions = () => {
  return (
    <div>
      <div className="md:flex justify-between mb-1">
        <h1 className="heading1">All Subscription Plans</h1>
        <Button
          type="primary"
          icon={<GoPlus />}
          size="large"
          className="btn1 mb-5 md:mb-0"
        >
          Create New Subscription
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-8 gap-5 xl:gap-14">
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
