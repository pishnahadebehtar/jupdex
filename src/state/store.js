import { configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./ContentSlice.js";
import ModeSlice from "./modeSlice.js";
import SettingSlice from "./SettingSlice.js";
import SwapSlice from "./SwapSlice.js";
export const store = configureStore({
  reducer: { ContentSlice, ModeSlice, SettingSlice, SwapSlice },
});
