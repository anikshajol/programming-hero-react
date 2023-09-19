import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { name, website } = user;
  return (
    <div>
      <h2>Details about users Name: {name}</h2>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
