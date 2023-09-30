import "./Job.css";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  //   console.log(job);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="company logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="job-type-btn mr-4">{remote_or_onsite}</button>
            <button className="job-type-btn">{job_type}</button>
          </div>

          {/* location */}
          <div className="flex items-center gap-2">
            <p className="flex items-center">
              <CiLocationOn />
              {location}
            </p>

            <p className="flex items-center">
              <BsCurrencyDollar /> {salary}
            </p>
          </div>

          <div className="card-actions justify-start">
            <Link to={`job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
