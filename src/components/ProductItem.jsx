import React from "react";
import { useDispatch } from "react-redux";
import {
  setProductDetails,
  toggleDetails,
} from "../store/reducers/productReducer";
import Image from "react-async-image";

const ProductItem = (props) => {
  const { title, gtin, gender, sale_price, price, image_link } = props.product;

  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(setProductDetails(props.product));
    dispatch(toggleDetails());
  };

  return (
    <div className="product-item-wrapper" onClick={handleProductClick}>
      <div className="product-container">
        <div className="product-thumbnail">
          <Image src={image_link} alt={title} />
        </div>
        <div className="product-content">
          <h5>{title}</h5>
          <p>
            <strong>Gtin:</strong> {gtin}
          </p>
          <p>
            <strong>Gender:</strong>{" "}
            {["male", "female", "unisex"].includes(gender) ? gender : "unknown"}
          </p>
          <div className="product-prices">
            <div>
              <strong>Price:</strong> <br />
              {price}
            </div>
            <div>
              <strong>Sale Price:</strong> <br />
              {sale_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
