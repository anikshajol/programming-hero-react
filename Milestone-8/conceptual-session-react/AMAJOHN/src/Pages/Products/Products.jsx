import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const productsData = useLoaderData();

  const { products } = productsData;
  return (
    <div className="container mx-auto">
      <h2>This is products route{products.length}</h2>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
