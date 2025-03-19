import { Card } from "antd";
import { ServiceCardProps } from "../../types/props.type";

const ServicesCard = ({ serviceData }: { serviceData: ServiceCardProps }) => {
  return (
    <Card hoverable className="shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
        <img src={serviceData.icon} className="w-16" />
        <p className="text-base font-semibold text-center">
          {serviceData.text}
        </p>
      </div>
    </Card>
  );
};

export default ServicesCard;
