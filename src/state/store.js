import { configureStore } from "@reduxjs/toolkit";

import ModeSlice from "./modeSlice.js";
import SettingSlice from "./SettingSlice.js";
import SwapSlice from "./SwapSlice.js";
export const store = configureStore({
  reducer: { ModeSlice, SettingSlice, SwapSlice },
});
