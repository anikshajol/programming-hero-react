import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        const createAt = res.user?.metadata?.creationTime;
        const user = { email, createAt };
        fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleCreateUser}>
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
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;
