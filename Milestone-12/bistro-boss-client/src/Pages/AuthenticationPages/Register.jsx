import { useContext } from "react";
import regImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Google from "./SocialLogin/Google";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    createUser(email, password)
      .then((res) => {
        const regUser = res.user;
        console.log(regUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            // console.log("name and photo update");
            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the data base");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your registration successfully complete",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // if (loading) {
  //   return <div>Loading..........</div>;
  // }

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="w-full mx-auto bg-gray-500">
        <div className="hero w-5/6 mx-auto bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center  lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <div className="py-6">
                <img src={regImg} className="w-1/2" alt="" />
              </div>
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />

                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                {/* photo url */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    name="name"
                    {...register("photo", { required: true })}
                    className="input input-bordered"
                  />

                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}

                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <Google />
              <small className="px-4">
                Already Have an account? <Link to={"/login"}> Login </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
