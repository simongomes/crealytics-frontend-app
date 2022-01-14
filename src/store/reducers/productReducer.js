import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/datastore";

const initialState = {
  products: products.slice(0, 100),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    /**
     * Search product by product title
     * Updates products object in state
     *
     * @param state - the state object
     * @param action - action object passed while dispatched
     */
    search: (state, { payload }) => {
      state.products = products
        .filter(({ title }) =>
          title.toLowerCase().includes(payload.toLowerCase())
        )
        .slice(0, 100);
    },
  },
});

export const { search } = productSlice.actions;

export default productSlice.reducer;
