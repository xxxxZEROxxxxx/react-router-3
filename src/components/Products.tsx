import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Types/type";



const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get<Product[]>("https://fakestoreapi.com/products").then(({ data: products }) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Products</h2>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="list-group">
          {products.map((product) => {
            return (
              <li key={product.id} className="list-group-item">
                <Link to={`/products/${product.id}`}>{product.id}-{product.title} </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Products
