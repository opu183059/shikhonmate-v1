import { Button } from "antd";
import { IoBookOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-semibold text-5xl">
          Transform Education with Smart Management
        </h1>
        <h6 className="text-3xl my-10">
          Boost efficiency, enhance learning, and simplify administration with
          our smart solution.
        </h6>
        <Button className="btn1 text-xl p-5">
          <IoBookOutline size={20} /> Get Started
        </Button>
      </div>
    </div>
  );
};

export default Banner;
