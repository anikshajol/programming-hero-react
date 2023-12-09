import { FaTrash, FaUser } from "react-icons/fa";
import useUsers from "../../Hooks/useUsers";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  console.log(users);
  const axiosSecure = UseAxios();

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // make admin

  const handleMakeAdmin = (user) => {
    console.log(user._id);

    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users</h2>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <>
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => {
                          handleMakeAdmin(user);
                        }}
                        className=""
                      >
                        <FaUser className="text-xl"></FaUser>
                      </button>
                    )}
                    {/* {user._id} */}
                  </td>
                  <th>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrash className="text-red-500 text-2xl"></FaTrash>
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
