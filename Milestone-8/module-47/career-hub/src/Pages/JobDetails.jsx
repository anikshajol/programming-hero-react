import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplication } from "../Utilities/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));

  console.log(job);

  const handleApplyJob = () => {
    saveApplication(parseInt(id));
    toast(" You have applied succesfully !");
  };

  return (
    <div>
      <h3>Job details</h3>
      <div className="grid grid-cols-4">
        <section className="border col-span-3">
          <h2>Job Details of:{job.job_title} </h2>
          <p className="text-xl">{job.company_name} </p>
        </section>

        <section className="border ">
          <h2 className="text-2xl">Job details</h2>
          <Link to={"/applied"}>
            {" "}
            <button onClick={handleApplyJob} className=" btn btn-primary">
              Apply Now
            </button>
          </Link>
        </section>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
