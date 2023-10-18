import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.email.value;

    const updateUser = { name, email };
    console.log(updateUser);

    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div>
      <h2>Update Information of: {loadedData.name}</h2>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedData.name} id="" />{" "}
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedData.email}
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
