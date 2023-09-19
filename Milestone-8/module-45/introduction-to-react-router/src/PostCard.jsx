import { useLoaderData, useNavigate } from "react-router-dom";

const PostCard = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  console.log(post);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Post details: {post.body}</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostCard;
