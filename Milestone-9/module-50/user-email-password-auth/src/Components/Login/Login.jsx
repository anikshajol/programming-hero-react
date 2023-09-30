import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const [loginUser, setLoginUser] = useState(null);
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const myInputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    myInputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login", email, password);

    // reset

    setLoginUser("");
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user.emailVerified) {
          setLoginUser("user Logged in successfully");
        } else {
          alert("Please verify your email");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  // reset

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      console.log("please provide an email", emailRef.current.value);
      return;
    } else if (!emailRegex.test(email)) {
      alert("invalid email");

      return;
    }

    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    ref={(emailRef, myInputRef)}
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
                  />
                  <label className="label">
                    <a
                      onClick={handleResetPassword}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>

                  <div>
                    {error && <p className="text-red-400">{error}</p>}
                    {loginUser && <p className="text-green-700">{loginUser}</p>}
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>
                    New to this website? please
                    <Link to={"/register"}>
                      {" "}
                      <span className="underline ">Register</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="open_grepper_editor" title="Edit & Save To Grepper"></div>
    </div>
  );
};

export default Login;
