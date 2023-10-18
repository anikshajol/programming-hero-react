import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to={"/coffee"}>
          <li>Coffee</li>
        </Link>
        <Link to={"/addCoffee"}>
          <li>Add Coffee</li>
        </Link>
        <Link to={"/users"}>
          <li>Users</li>
        </Link>
        <Link to={"/register"}>
          <li>SignUp</li>
        </Link>
        <Link to={"/sign-in"}>
          <li>Sign in</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
