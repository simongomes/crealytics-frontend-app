import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="products-container-wrapper">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
