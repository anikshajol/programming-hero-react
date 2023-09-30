import { useState } from "react";
import "./Register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  // console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(accepted, email, password);

    //  reset error
    setError("");
    setUser("");

    // validate password

    if (password.length < 6) {
      setError("Password Should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your Password should have at least one uppercase");
      return;
    } else if (!accepted) {
      setError("Please accept our terms and conditions");
      return;
    }

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const regUser = result.user;
        console.log(regUser);
        sendEmailVerification(regUser)
          .then(() => {
            setUser("User Registered successfully");
          })
          .catch();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
    // e.target.reset();
    // navigate("/login");
  };

  return (
    <div>
      <h3 className="text-3xl text-center font-extrabold">Please Register</h3>
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center mt-4 "
      >
        <input
          type="email"
          name="email"
          id="email "
          placeholder="Email"
          required
        />
        <br />
        <div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>show</span>
        </div>
        <br />
        <br />
        <div>
          <input type="checkbox" name="terms" id="" />
          <label htmlFor="terms"> Accept Our Terms and Conditions</label>
        </div>
        <input className="w-40 py-2 rounded-md" type="submit" value="Submit" />
        <div>
          <p>
            {" "}
            Already have an account? <Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </form>
      {error && <p className="text-center text-2xl text-red-500">{error}</p>}
      {user && <p className="text-center text-2xl text-green-500">{user}</p>}
    </div>
  );
};

export default Register;
