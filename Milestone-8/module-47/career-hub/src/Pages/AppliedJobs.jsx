import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/localStorage";

const AppliedJobs = () => {
  const navigate = useNavigate();

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [displayJobs, setDisplayJobs] = useState([]);

  const jobs = useLoaderData();
  console.log(jobs);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      // console.log(storedJobIds, jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Applied Jobs: {appliedJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("onsite")}>
            <a>Onsite</a>
          </li>
          <li onClick={() => handleFilter("remote")}>
            <a>Remote</a>
          </li>
        </ul>
      </details>

      {/* applied list */}
      <ul className="text-center">
        {displayJobs.map((job, idx) => (
          <li key={idx}>
            <span>
              {job.job_title} {job.company_name} {job.remote_or_onsite}{" "}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={handleGoBack} className="btn btn-secondary">
        Go Back
      </button>
    </div>
  );
};

export default AppliedJobs;
