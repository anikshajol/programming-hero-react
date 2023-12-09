import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseAxios from "../../../Hooks/UseAxios";
import Swal from "sweetalert2";
import UseMenu from "../../../Hooks/UseMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axiosSecure = UseAxios();
  const [menu, loading, refetch] = UseMenu();

  if (loading) {
    return (
      <p className="text-center">
        Loading <span className="animate-ping">....</span>{" "}
      </p>
    );
  }

  console.log(menu);
  const handleDeleteItem = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        refetch();
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleEditItem = (item) => {
    console.log(item);
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subheading={"Hurry Up"}
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th>SL#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button
                      onClick={() => {
                        handleEditItem(item);
                      }}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaEdit className="text-xl text-orange-500"></FaEdit>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-xl text-red-500"></FaTrash>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
