import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async (params) => {
    const response = await fetchProducts(params);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: '',
    page: 1,
    hasMore: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.propertyList.length > 0) {
        state.products = [...state.products, ...action.payload.propertyList];
        state.page += 1;
      } else {
        state.hasMore = false;
      }
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;