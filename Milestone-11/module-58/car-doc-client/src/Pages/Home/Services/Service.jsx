import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-2 pt-2">
        <img src={service.img} alt="Shoes" className="rounded-xl h-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <div className="flex gap-9">
          <p>{service.price}</p>
          <Link to={`/book/${service._id}`}>
            {" "}
            <button className="text-red-900 font-bold"> Book Now </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.propTypes = {
  service: PropTypes.object,
};
