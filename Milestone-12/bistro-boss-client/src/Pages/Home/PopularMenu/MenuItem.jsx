const MenuItem = ({ item }) => {
  //   console.log(Object.keys(item).join(","));
  const { name, recipe, image, price } = item;
  return (
    <section className="flex items-center">
      <div className="mr-8">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[100px] "
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center gap-8">
        <div>
          <h2 className="uppercase text-xl">{name}</h2>
          <p>{recipe}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
