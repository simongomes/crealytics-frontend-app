import { render, screen } from "@testing-library/react";
import ProductItem from "../components/ProductItem";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from "../store/reducers/productReducer";

describe("ProductItem component loaded successfully", () => {
  const store = configureStore({
    reducer: {
      products: productReducer,
    },
  });

  const product = {
    title: "Weekday THURSDAY Jeans Slim Fit black",
    gtin: 2001007926858,
    gender: "female",
    sale_price: "39.95 EUR",
    price: "32.95 EUR",
    image_link:
      "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
    additional_image_link:
      "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
  };

  render(
    <Provider store={store}>
      <ProductItem product={product} />
    </Provider>
  );

  test("All element loaded successfully", () => {
    const produtTitleElement = screen.getByText(
      /Weekday THURSDAY Jeans Slim Fit black/i
    );
    expect(produtTitleElement).toBeInTheDocument();

    const gtinElement = screen.getByText(/2001007926858/i);
    expect(gtinElement).toBeInTheDocument();

    const genderElement = screen.getByText(/female/i);
    expect(genderElement).toBeInTheDocument();

    const salePriceElement = screen.getByText(/39.95 EUR/i);
    expect(salePriceElement).toBeInTheDocument();

    const priceElement = screen.getByText(/32.95 EUR/i);
    expect(priceElement).toBeInTheDocument();
  });
});
