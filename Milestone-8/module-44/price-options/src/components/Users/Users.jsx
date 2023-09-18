import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl">{users.length}</h2>
    </div>
  );
};

export default Users;
