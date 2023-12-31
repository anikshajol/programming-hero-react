import { FaTrash } from "react-icons/fa6";

import useCart from "../../Hooks/useCart";

import UseAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Spinners from "../../Spinners/Spinners";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const { loading } = useAuth();
  const axiosSecure = UseAxios();

  if (loading) {
    return <Spinners></Spinners>;
  }

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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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

  const price = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl"> Items: {cart.length} </h2>
        <h2 className="text-4xl"> Price: {price.toFixed(2)}</h2>
        {!cart.length ? (
          <button className="btn btn-primary cursor-pointer" disabled>
            Pay
          </button>
        ) : (
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-primary">Pay</button>
          </Link>
        )}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((item, index) => (
                <>
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
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
    </div>
  );
};

export default Cart;
