import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-6xl text-center">Featured Jobs {jobs.length} </h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 place-items-center">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? " hidden" : "text-center py-4"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
