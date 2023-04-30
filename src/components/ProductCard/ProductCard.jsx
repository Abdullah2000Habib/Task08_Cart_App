import React from "react";
import { useProductContext } from "../../contexts/productContext";
import "./style.css";
function ProductCard({ product }) {
  const {
    state: { products },
    addToCart,
    removeFromCart,
  } = useProductContext();
  const isExistInCart = () => products.find((item) => item.id === product.id);

  const toggleCart = () => {
    isExistInCart() ? removeFromCart(product.id) : addToCart(product);
  };
  
  return (
    <>
      <li className="productCartWrapper" >
        <h3 className="productCartName">
          Name: {product.name}
          <button className="productCartButton" onClick={toggleCart}>{isExistInCart() ? "-" : "+"}</button>
        </h3>
        <p className="productCartDescription">Description: {product.description}</p>
        <span className="productCartPrice">Price:{product.price}</span>
      </li>
    </>
  );
}

export default ProductCard;