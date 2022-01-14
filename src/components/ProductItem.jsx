const ProductItem = (props) => {
  const {
    title,
    gtin,
    gender,
    sale_price,
    price,
    image_link,
    additional_image_link,
  } = props.product;

  return (
    <div className="product-item-wrapper">
      <div className="product-container">
        <div className="product-thumbnail">
          <img src={image_link} alt={title} />
        </div>
        <div className="product-content">
          <h5>{title}</h5>
          <p>
            <strong>Gtin:</strong> {gtin}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
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
