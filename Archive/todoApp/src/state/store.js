import { configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./ContentSlice";

export const store = configureStore({
  reducer: { ContentSlice },
});
