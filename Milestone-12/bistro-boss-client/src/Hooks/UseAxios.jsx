import axios from "axios";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // req interceptors
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptors", token);
      config.headers.authorization = `bearer ${token}`;
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptors 401 and 403
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("status error", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
        console.log(status);
        // Swal.fire({
        //   position: "top-end",
        //   icon: "error",
        //   title: `${status} Forbidden Access`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxios;
