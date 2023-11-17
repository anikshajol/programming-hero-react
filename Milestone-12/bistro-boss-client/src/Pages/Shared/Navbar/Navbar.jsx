import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  // console.log(user.displayName);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <NavLink to={"/order/salad"}>Our Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/secret"}> Secret</NavLink>
      </li>

      {!user ? (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      ) : (
        <li className="hidden" onClick={handleLogOut}>
          <NavLink to={"/"}>Logout</NavLink>
        </li>
      )}
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
          {user ? (
            <>
              <Link to={"/"}>
                <button className="btn">
                  <FaCartArrowDown />
                  <div className="badge badge-secondary">{cart.length}</div>
                </button>
              </Link>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOut}>
                <NavLink to={"/"}>Logout</NavLink>
              </button>
            </>
          ) : (
            <div className="avatar hidden">
              <div className="w-12 rounded-full">
                <img src="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
