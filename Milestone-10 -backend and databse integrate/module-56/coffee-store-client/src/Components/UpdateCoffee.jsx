import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { _id, name, quantity } = loadedData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const updateCoffee = {
      name,
      quantity,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h2>Update Coffee</h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex gap-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Add Coffee Name"
                name="name"
                defaultValue={name}
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block mt-3"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
