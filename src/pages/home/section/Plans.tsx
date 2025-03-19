import PlansCard from "../../../components/cards/PlansCard";

const Plans = () => {
  const plans = [1, 2, 3];
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold py-8">Our Plans</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
        {plans.map((item) => (
          <PlansCard key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
