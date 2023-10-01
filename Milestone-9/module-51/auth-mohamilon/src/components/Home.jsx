import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-3xl text-center">This is home {authInfo.name} </h2>
    </div>
  );
};

export default Home;
