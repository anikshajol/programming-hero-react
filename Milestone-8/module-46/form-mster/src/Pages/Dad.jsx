// import { useContext } from "react";
import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = ({ asset }) => {
  return (
    <div>
      <h1>Father</h1>

      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother asset={asset}></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
