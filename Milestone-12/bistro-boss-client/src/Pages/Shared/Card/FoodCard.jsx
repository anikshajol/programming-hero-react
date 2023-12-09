import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../../../Hooks/UseAxios";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, recipe, image, price, _id } = item;
  const location = useLocation();
  const axiosSecure = UseAxios();
  const [, refetch] = useCart();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    // console.log(food);
    if (user && user?.email) {
      //send cart item to the database
      console.log(user?.email);

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        recipe,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: ` ${name} added to Your cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch cart for updated the cart item
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Do You want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
          <p className="bg-slate-950 text-white absolute right-5 top-5 p-1 rounded ">
            {price ? "$" + price : "N/A"}{" "}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
