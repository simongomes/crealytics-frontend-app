import React from "react";
import { useDispatch } from "react-redux";
import { toggleDetails } from "../store/reducers/productReducer";

const ProductDetails = () => {
  const product = {
    title: "Weekday THURSDAY Jeans Slim Fit black",
    gtin: 2001007926858,
    gender: "female",
    sale_price: "39.95 EUR",
    price: "39.95 EUR",
    image_link:
      "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
    additional_image_link:
      "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
  };
  
  const dispatch = useDispatch();

  return (
    <div className="product-details-wrapper">
      <div className="product-details-container">
        <span className="product-details-close-button" onClick={() => dispatch(toggleDetails())}>X</span>
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
                <strong>Gender:</strong> {product.gender}
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
              {product.additional_image_link.split(",").map((image) => (
                <img src={image} alt="additional" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
