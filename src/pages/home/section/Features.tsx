import featureImage1 from "../../../assets/FeatureImages/feature1.png";
import featureImage2 from "../../../assets/FeatureImages/feature1.png";
import featureImage3 from "../../../assets/FeatureImages/feature1.png";
import featureImage4 from "../../../assets/FeatureImages/feature1.png";
import FeatureCard from "../../../components/cards/FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Control Everything with an Intuitive Interactive Dashboard",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed lectus in sapien tempus fermentum viverra. Iaculis in eu mauris morbi. Sollicitudin quisque id porttitor duis nibh ac mauris.",
      image: featureImage1,
      bgColor: "bg-gradient-to-r from-[#4CA2CB] to-[#1F4354]",
    },
    {
      title: "Easy to Use Student Login for Keeping Track",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed lectus in sapien tempus fermentum viverra. Iaculis in eu mauris morbi. Sollicitudin quisque id porttitor duis nibh ac mauris.",
      image: featureImage2,
      bgColor: "bg-gradient-to-r from-[#41D896] to-[#21733A]",
    },
    {
      title: "Customized Marksheets for Student",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed lectus in sapien tempus fermentum viverra. Iaculis in eu mauris morbi. Sollicitudin quisque id porttitor duis nibh ac mauris.",
      image: featureImage3,
      bgColor: "bg-gradient-to-r from-[#B6CD4D] to-[#179D3F]",
    },
    {
      title: "Manage Courses Keep track of Learning",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed lectus in sapien tempus fermentum viverra. Iaculis in eu mauris morbi. Sollicitudin quisque id porttitor duis nibh ac mauris.",
      image: featureImage4,
      bgColor: "bg-gradient-to-r from-[#4D6BCD] to-[#081129]",
    },
  ];

  return (
    <div className="feature-box">
      <h2 className="text-2xl text-center font-semibold sticky top-5">
        Our Key Features
      </h2>
      <div>
        {features.map((item) => (
          <FeatureCard key={item.title} featureData={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
