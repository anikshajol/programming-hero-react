import { useLoaderData } from "react-router-dom";
import User from "./User";
import "./User.css";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <div>
      <h2>Users{users.length}</h2>
      <div className="grid">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
