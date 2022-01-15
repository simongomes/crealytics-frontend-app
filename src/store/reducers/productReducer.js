import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/datastore";

const initialState = {
  products: products.slice(0, 100),
  totalProducts: products,
  totalPages: products.length / 100,
  searchTerm: "",
  showDetails: false,
  productDetails: {},
  filters: {
    gender: null,
    sale: false,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    /**
     * Updates the searchTerm
     *
     * @param state - the state object
     * @param action - action object passed while dispatched
     */
    updateSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    /**
     * Search product by product title
     * Updates products object in state
     *
     * @param state - the state object
     */
    search: (state) => {
      state.totalProducts = products.filter(({ title }) =>
        title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      state.products = state.totalProducts;

      if (state.filters.gender && state.filters.sale) {
        state.products = state.totalProducts.filter(
          (product) =>
            product.gender === state.filters.gender &&
            product.sale_price.split(" ")[0] < product.price.split(" ")[0]
        );
      } else if (state.filters.gender) {
        state.products = state.totalProducts.filter(
          (product) => product.gender === state.filters.gender
        );
      } else if (state.filters.sale) {
        state.products = state.totalProducts.filter(
          (product) =>
            product.sale_price.split(" ")[0] < product.price.split(" ")[0]
        );
      }

      state.totalProducts = state.products;

      state.products = state.products.slice(0, 100);
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
    setProductDetails: (state, { payload }) => {
      state.productDetails = payload;
    },
    /**
     * Updates the filter object
     *
     * @param state - the state object
     * @param action - action object passed while dispatched
     */
    updateFilter: (state, action) => {
      if (action.payload.filterType === "sale") {
        state.filters.sale = action.payload.value;
      } else {
        state.filters.gender =
          action.payload.value === "-1" ? null : action.payload.value;
      }
    },
  },
});

export const {
  updateSearchTerm,
  search,
  toggleDetails,
  setProductDetails,
  updateFilter,
} = productSlice.actions;

export default productSlice.reducer;
