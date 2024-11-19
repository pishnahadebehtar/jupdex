import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export const fetchAPI = createAsyncThunk("productSlice/fetchAPI", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
});

export default productSlice.reducer;
