import PriceOption from "../PriceOption/PriceOption";

/* eslint-disable no-unused-vars */
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99 ",
      features: [
        "Access to cardio and weightlifting areas",
        "Locker room and shower facilities",
        "Free Wi-Fi",
        "24/7 gym access",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99 ",
      features: [
        "All Basic Membership features",
        "Unlimited group fitness classes",
        "Personal training session (1 per month)",
        "Access to sauna and steam room",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: "$79.99 ",
      features: [
        "All Premium Membership features for two adults and two children",
        "Childcare services during workout hours",
        "Discounted personal training sessions for family members",
        "Special family events and workshops",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: "$24.99 ",
      features: [
        "Access to cardio and weightlifting areas",
        "Locker room and shower facilities",
        "Free Wi-Fi",
        "24/7 gym access",
        "Valid student ID required",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2>Best Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
