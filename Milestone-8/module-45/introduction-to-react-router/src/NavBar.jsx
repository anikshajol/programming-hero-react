import { Link } from "react-router-dom";
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
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/posts"}>Posts</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
