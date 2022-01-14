import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/datastore";

const initialState = {
  products: products.slice(0, 100),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer;
