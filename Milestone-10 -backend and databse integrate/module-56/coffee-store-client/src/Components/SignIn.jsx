import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        console.log(res.user);
        const user = {
          email,
          lastLoggedAt: res.user?.metadata?.lastSignInTime,
        };
        fetch(`http://localhost:5000/user`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          className=" input input-primary"
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <input
          className="input-secondary input"
          type="password"
          name="password"
          id=""
        />
        <input
          type="submit"
          className="input input-secondary"
          value="Sign In"
        />
      </form>
    </div>
  );
};

export default SignIn;
