import ServicesCard from "../../../components/cards/ServicesCard";
import serviceImg1 from "../../../../public/Services Icon/1.svg";
import serviceImg2 from "../../../../public/Services Icon/2.svg";
import serviceImg3 from "../../../../public/Services Icon/3.svg";
import serviceImg4 from "../../../../public/Services Icon/4.svg";
import serviceImg5 from "../../../../public/Services Icon/5.svg";
import serviceImg6 from "../../../../public/Services Icon/6.svg";

const Services = () => {
  const servicesArray = [
    {
      icon: serviceImg1,
      text: "Student and Teacher Login System",
    },
    {
      icon: serviceImg2,
      text: "Exam Management System",
    },
    {
      icon: serviceImg3,
      text: "Student and Teacher Registration ",
    },
    {
      icon: serviceImg4,
      text: "Payment Management",
    },
    {
      icon: serviceImg5,
      text: "Course Management",
    },
    {
      icon: serviceImg6,
      text: "Progress Tracking",
    },
  ];
  return (
    <div className="py-8">
      <h2 className="text-2xl text-center font-semibold py-8">Our Services</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-14">
        {servicesArray.map((item) => (
          <ServicesCard serviceData={item} key={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Services;
