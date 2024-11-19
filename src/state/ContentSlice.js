import { createSlice } from "@reduxjs/toolkit";

const ContentSlice = createSlice({
  name: "ContentSlice",
  initialState: {
    temp: {
      id: 0,
      title: "",
      detail: "",
      category: "",
      fromDate: "",
      ToDate: "",
    },
    data: localStorage.getItem("content")
      ? JSON.parse(localStorage.getItem("content"))
      : [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("content", JSON.stringify(state.data));
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      localStorage.setItem("content", JSON.stringify(state.data));
    },
    update: (state, action) => {
      state.temp = action.payload;
    },
  },
});

export const { addData, deleteData, update } = ContentSlice.actions;

export default ContentSlice.reducer;
