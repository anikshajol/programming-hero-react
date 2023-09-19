import PropTypes from "prop-types";
import "./User.css";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { title, id } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="border">
      <p>{id}</p>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>

      <button onClick={handleShowDetails}>Enter</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
