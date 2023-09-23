import Cousin from "./Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle </h2>
      <section className="flex">
        <Cousin name={"Shawon"} asset={asset}></Cousin>
        <Cousin name={"Mahedi"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
