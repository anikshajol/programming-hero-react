import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
const Google = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn p-2 text-xl w-full "
        >
          <FaGoogle /> Google
        </button>
      </div>
    </div>
  );
};

export default Google;
