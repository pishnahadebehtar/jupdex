import { createSlice } from "@reduxjs/toolkit";

const SwapSlice = createSlice({
  name: "SwapSlice",
  initialState: {
    SelectSwapTokenSide: "Sell",
    SelectSwapTokenOpen: "Closed",
    BuyAmount: "",
    SellAmount: "",
    SwapTokenToBuyId: 3,
    SwapTokenToSellId: 2,
  },
  reducers: {
    updateSwap: (state, action) => {
      switch (action.payload.Type) {
        case "SelectSwapTokenOpen":
          state.SelectSwapTokenOpen = action.payload.Value;
          break;
        case "SwapTokenToBuyId":
          state.SwapTokenToBuyId = action.payload.Value;
          break;
        case "SwapTokenToSellId":
          state.SwapTokenToSellId = action.payload.Value;
          break;
        case "BuyAmount":
          state.BuyAmount = action.payload.Value;
          break;
        case "SellAmount":
          state.SellAmount = action.payload.Value;
          break;
        case "SelectSwapTokenSide":
          state.SelectSwapTokenSide = action.payload.Value;
          break;
        default:
          console.log("Error on dispatch");
          break;
      }
    },
  },
});
export const { updateSwap } = SwapSlice.actions;
export default SwapSlice.reducer;
