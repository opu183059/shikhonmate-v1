import Banner from "./section/Banner";
import Features from "./section/Features";
import Plans from "./section/Plans";
import Services from "./section/Services";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Features />
      <Plans />
      <Services />
    </div>
  );
};

export default HomePage;
