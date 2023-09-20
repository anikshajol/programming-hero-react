import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const data = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${data.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [data.id]);

  const navigate = useNavigate();

  //   const product = useLoaderData();
  //   console.log(product);

  const handleNavigate = () => {
    navigate(-1);
  };
  const { title, description, thumbnail } = product;

  return (
    <div className="flex justify-center">
      <div className=" border-2 w-96  border-red-500  p-6">
        <img src={thumbnail} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="bg-red-400 p-2 rounded-md" onClick={handleNavigate}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
