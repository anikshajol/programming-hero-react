import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
import { createContext } from "react";
export const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa ">
      <h3>Grandpa</h3>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
