import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer from "../store/reducers/productReducer";
import userEvent from "@testing-library/user-event";

describe("App component tests", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productReducer,
      },
    });
  });
  test("renders the App component with the store configuration", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const pageTitleElement = screen.getByText(/Crealytics Frontend Challenge/i);
    expect(pageTitleElement).toBeInTheDocument();
  });

  test("render search input", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchInputElement = screen.getByTestId("search-input");
    expect(searchInputElement).toBeInTheDocument();
    expect(searchInputElement).toHaveAttribute("type", "text");
  });

  test("render gender dropdown", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const genderDropdownElement = screen.getByTestId("gender-select");
    expect(genderDropdownElement).toBeInTheDocument();
  });

  test("render sale checkbox and behaviour", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const saleCheckboxElement = screen.getByTestId("sale-checkbox");
    expect(saleCheckboxElement).toBeInTheDocument();

    fireEvent.click(saleCheckboxElement);
    expect(saleCheckboxElement).toBeChecked();
  });

  test("render pagination elements", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const paginationLeftElement = screen.getByTestId("pagination-left");
    expect(paginationLeftElement).toBeInTheDocument();

    const paginationRightElement = screen.getByTestId("pagination-right");
    expect(paginationRightElement).toBeInTheDocument();
  });

  test("search input has correct value", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchInputElement = screen.getByTestId("search-input");
    userEvent.type(searchInputElement, "simon");
    expect(searchInputElement).toHaveValue("simon");
  });

  test("gender dropdown has correct value", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const genderDropdownElement = screen.getByTestId("gender-select");
    fireEvent.change(genderDropdownElement, { target: { value: "male" } });
    expect(genderDropdownElement.value).toBe("male");
  });
});
