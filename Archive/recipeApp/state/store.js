import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import results from "./results";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    searchSlice,
    results,
    userSlice,
  },
});
