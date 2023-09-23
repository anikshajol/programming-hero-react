import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Samir"}></Cousin>
        <Cousin name={"Emi"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
