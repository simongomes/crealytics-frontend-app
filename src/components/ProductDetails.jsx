import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDetails } from "../store/reducers/productReducer";

const ProductDetails = () => {
  const product = useSelector((state) => state.products.productDetails);
  const dispatch = useDispatch();

  return (
    <div className="product-details-wrapper">
      <div className="product-details-container">
        <span
          className="product-details-close-button"
          onClick={() => dispatch(toggleDetails())}
        >
          X
        </span>
        <div className="product-item-wrapper">
          <div className="product-container">
            <div className="product-thumbnail">
              <img src={product.image_link} alt={product.title} />
            </div>
            <div className="product-content">
              <h5>{product.title}</h5>
              <p>
                <strong>Gtin:</strong> {product.gtin}
              </p>
              <p>
                <strong>Gender:</strong>{" "}
                {["male", "female", "unisex"].includes(product.gender)
                  ? product.gender
                  : "unknown"}
              </p>
              <div className="product-prices">
                <div>
                  <strong>Price:</strong> <br />
                  {product.price}
                </div>
                <div>
                  <strong>Sale Price:</strong> <br />
                  {product.sale_price}
                </div>
              </div>
            </div>
            <div className="product-details-additional-images">
              {product.additional_image_link?.split(",").map((image, index) => (
                <img key={index} src={image} alt="additional" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
