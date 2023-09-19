import PropTypes from "prop-types";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id } = user;
  return (
    <div className="border">
      <h2>Name:{user.name}</h2>
      <p>Email:{user.email} </p>
      <p>Phone:{user.phone} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
