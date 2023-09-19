import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import "./User.css";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Posts</h2>
      <div className="grid">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
