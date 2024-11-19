import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    fav: [],
    history: [],
  },
  reducers: {
    updateHistory: (state, action) => {
      state.history.push(action.payload);
    },
    updateFave: (state, action) => {
      state.fav.push(action.payload);
    },
  },
});

export const { updateFave, updateHistory } = userSlice.actions;

export default userSlice.reducer;
