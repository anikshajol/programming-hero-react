import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Google from "./SocialLogin/Google";

const Login = () => {
  // const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((res) => {
      res.user;
      console.log(res.user);
      Swal.fire({
        title: ` User login successfully`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      // <Navigate to={"/"}></Navigate>;
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="w-full mx-auto bg-gray-500">
      <div className="hero w-5/6 mx-auto bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center  lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="py-6">
              <img src={loginImg} className="w-1/2" alt="" />
            </div>
          </div>

          <div className="card felex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
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

              {/* captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="Input Captcha"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  disabled={disable}
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <Google></Google>
            <small className="px-3">
              No account? <Link to={"/register"}> Register </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
