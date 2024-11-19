import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const results = createSlice({
  name: "results",
  initialState: {
    loading: false,
    searchterm: "pizza",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const fetchAPI = createAsyncThunk("results/getdata", async (id) => {
  try {
    console.log(id);
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${id}`
    );
    const data = await response.json();
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
});1

export default results.reducer;
