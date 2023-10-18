const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const newCoffee = {
      name,
      quantity,
    };
    console.log(newCoffee);

    fetch(`http://localhost:5000/coffee`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data added successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h3>Add coffee name and details</h3>
      <form onSubmit={handleAddCoffee}>
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
                placeholder="Available Quantity"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block mt-3"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
