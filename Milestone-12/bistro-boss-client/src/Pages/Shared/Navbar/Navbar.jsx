import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/Dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white max-w-screen-xl  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu mr-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className=" capitalize text-xl">
            Bistro Boss <br /> Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 hover:text-white">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
