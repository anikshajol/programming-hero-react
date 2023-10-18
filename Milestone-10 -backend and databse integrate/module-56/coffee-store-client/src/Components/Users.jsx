import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);
  console.log(users);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>Users {usersData.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Register</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user) => (
              <tr key={user._id}>
                <th></th>
                <td>{user.email}</td>

                <td>{user?.createAt ? user?.createAt : "N/A"}</td>

                <td>{user?.lastLoggedAt ? user?.lastLoggedAt : "N/A"}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
