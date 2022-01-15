import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/datastore";

const initialState = {
  products: products.slice(0, 100),
  showDetails: false,
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
    /**
     * Toggle showDetails to show and hide product details modal
     *
     * @param state - the state object
     */
    toggleDetails: (state) => {
      state.showDetails = !state.showDetails;
    },
  },
});

export const { search, toggleDetails } = productSlice.actions;

export default productSlice.reducer;
