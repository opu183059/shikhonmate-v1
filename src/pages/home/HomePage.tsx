import Banner from "./section/Banner";
import Plans from "./section/Plans";
import Services from "./section/Services";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Plans />
      <Services />
    </div>
  );
};

export default HomePage;
