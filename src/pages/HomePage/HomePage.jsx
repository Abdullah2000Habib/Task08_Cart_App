import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../mock/products";
import "./style.css";
function HomePage() {
  return (
    <>
      <div className="homePageWrapper">
        <ul>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;