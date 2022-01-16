import { render } from "@testing-library/react";
import ProductDetails from "../components/ProductDetails";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from "../store/reducers/productReducer";
import { products } from "./../utils/datastore";

test("ProductDetails component loaded successfully", () => {
  const initialState = {
    products: products.slice(0, 100),
    totalProducts: products,
    totalPages: Math.ceil(products.length / 100),
    currentPage: 1,
    searchTerm: "",
    showDetails: false,
    productDetails: {
      title: "Weekday THURSDAY Jeans Slim Fit black",
      gtin: 2001007926858,
      gender: "female",
      sale_price: "39.95 EUR",
      price: "32.95 EUR",
      image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
      additional_image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    },
    filters: {
      gender: null,
      sale: false,
    },
  };
  const store = configureStore({
    reducer: {
      products: productReducer,
    },
    initialState,
  });

  render(
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
});
