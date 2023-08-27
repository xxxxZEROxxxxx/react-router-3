import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../Types/type";



const ProductDetails = () => {
  const [product, setProduct] = useState<Product>({} as Product);

  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${productId}`)
      .then(({ data: dataProduct }) => {
        setProduct(dataProduct);
      });
  }, [productId]); 

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Price:{product.price}$</p>
          <NavLink className="btn btn-primary" to="/products">
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

