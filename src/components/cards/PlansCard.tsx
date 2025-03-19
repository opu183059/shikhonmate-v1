import { Button, Card } from "antd";
import { FaCheckSquare } from "react-icons/fa";

const PlansCard = ({ number }: { number: number }) => {
  return (
    <Card
      hoverable
      className={`w-80 md:w-full p-3 md:p-6 shadow-sm ${
        number % 2 == 0 && "bg-gradient-to-r from-gray-50 to-[#E0EFFF]"
      } border border-[#E0EFFF]`}
    >
      <p className="text-xl font-bold">Basic</p>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur. Tellus eu vitae tellus accumsan.
      </p>
      <p>
        <span className="text-2xl font-bold">${number},000</span>/month
      </p>
      <Button className="btn1 my-3" type="primary">
        Choose this plan
      </Button>
      <p className="text-lg font-semibold">Features-</p>
      <ul>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 1
        </li>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 2
        </li>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 3
        </li>
        {number % 2 === 0 && (
          <>
            <li className="flex items-center gap-2">
              <FaCheckSquare /> Feature 4
            </li>
            <li className="flex items-center gap-2">
              <FaCheckSquare /> Feature 5
            </li>
          </>
        )}
      </ul>
    </Card>
  );
};

export default PlansCard;
