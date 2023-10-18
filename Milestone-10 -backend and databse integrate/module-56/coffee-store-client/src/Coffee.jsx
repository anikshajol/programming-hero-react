import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = () => {
  const getCoffeeData = useLoaderData();
  const [coffees, setCoffee] = useState(getCoffeeData);
  console.log(coffees);

  const handleDelete = (_id) => {
    console.log(_id);

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
        // console.log(" delete confirm");

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
    const remaining = coffees.filter((cof) => cof._id !== _id);
    setCoffee(remaining);
  };
  return (
    <div>
      <h1>Coffee we have</h1>

      {coffees?.map((coffee) => (
        <ul className="border border-red-500 my-2 p-1" key={coffee._id}>
          <li>{coffee.name}</li>
          <li>{coffee.quantity}</li>

          <div className="my-2">
            <button className="btn">View</button>
            <Link to={`/updateCoffee/${coffee._id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button onClick={() => handleDelete(coffee._id)} className="btn">
              X
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Coffee;
