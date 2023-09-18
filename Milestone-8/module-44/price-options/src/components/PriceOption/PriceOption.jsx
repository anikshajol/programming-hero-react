import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  console.log(option);

  const { name, price, features } = option;

  return (
    <div className="bg-red-900 p-2 rounded-md text-white space-y-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>{" "}
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-center">
        <span className="text-3xl">{name}</span>
      </h4>
      <p className="text-center mb-10 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </p>
      <div className="mt-36">
        <button className="bg-blue-950 w-full text-white btn b">Buy Now</button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
