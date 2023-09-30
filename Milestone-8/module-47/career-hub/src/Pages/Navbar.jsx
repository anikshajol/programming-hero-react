import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-lg ">
      <h2 className="text-3xl">CareerHub</h2>
      <ul className="flex gap-4">
        <NavLink to={"/statistics"}>Statistics</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/applied"}>Applied Jobs</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </ul>
      <button className="btn btn-primary font-bold">Star Applying</button>
    </nav>
  );
};

export default Navbar;
