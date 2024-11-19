import { createSlice } from "@reduxjs/toolkit";

const ModeSlice = createSlice({
  name: "ModeSlice",
  initialState: {
    mode: "dark",
    isMenuOpen: false,
    swapSettingOpen: false,
    swapSettingState: "Auto",
  },
  reducers: {
    updateMode: (state, action) => {
      state.mode = action.payload;
    },
    updateIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    updateSwapSettingOpen: (state, action) => {
      state.swapSettingOpen = action.payload;
    },
    updateSwapSettingState: (state, action) => {
      state.swapSettingState = action.payload;
    },
  },
});

export const {
  updateMode,
  updateIsMenuOpen,
  updateSwapSettingOpen,
  updateSwapSettingState,
} = ModeSlice.actions;

export default ModeSlice.reducer;
