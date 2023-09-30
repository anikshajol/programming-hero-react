import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h2 className="text-4xl text-center ">Oops!</h2>
      <button>
        <Link to={"/"}>Go HOme</Link>{" "}
      </button>
    </div>
  );
};

export default ErrorPage;
