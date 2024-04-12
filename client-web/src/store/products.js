import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("http://localhost:5000/api/v1/product");
  return response.data;
});
export const createProduct = createAsyncThunk(
  "createProducts",
  async (body, { dispatch }) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/product",
      body
    );
    dispatch(fetchProducts());
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    product: null,
    products: {
      items: [],
      count: 0,
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.items = action.payload;
    });
  },
});
export default counterSlice.reducer;
