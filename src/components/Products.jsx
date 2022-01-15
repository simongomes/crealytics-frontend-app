import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const showDetails = useSelector((state) => state.products.showDetails);

  return (
    <>
      <div className="products-container-wrapper">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      {showDetails && <ProductDetails />}
    </>
  );
};

export default Products;
