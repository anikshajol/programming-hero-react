import {  NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    gap: "10px",
    background: "red",
    padding: "10px",
  };
  return (
    <nav>
      <ul style={ulStyle}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
