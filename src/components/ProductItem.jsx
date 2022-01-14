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
        <div className="product-content"></div>
      </div>
    </div>
  );
};

export default ProductItem;
