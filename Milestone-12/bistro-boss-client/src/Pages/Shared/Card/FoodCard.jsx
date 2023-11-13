const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
          <p className="bg-slate-950 text-white absolute right-5 top-5 p-1 rounded ">
            ${price}{" "}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
