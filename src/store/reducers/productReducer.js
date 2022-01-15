import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/datastore";

const initialState = {
  products: products.slice(0, 100),
  showDetails: false,
  productDetails: {},
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
    /**
     * Set the product details object with the selected product
     * 
     * @param state - the state object
     * @param action - contains the selected product object
     */
    setProductDetails: (state, {payload}) => {
      state.productDetails = payload;
    }
  },
});

export const { search, toggleDetails, setProductDetails } = productSlice.actions;

export default productSlice.reducer;
