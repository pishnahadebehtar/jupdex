import { createSlice } from "@reduxjs/toolkit";

const SwapSlice = createSlice({
  name: "SwapSlice",
  initialState: {
    swapMode: "swap",
    SelectSwapTokenSide: "Sell",
    SelectSwapTokenOpen: "Closed",
    BuyAmount: 0,
    SellAmount: 0,
    SwapTokenToBuyId: 3,
    SwapTokenToSellId: 2,
    DCASellPerOrder: 60,
    DCAOrderInterval: 1,
    DCAOrderIntervalUnit: "minute",
    DCAOverHowManyOrder: 2,
    DCAMinPriceRange: null,
    DCAMaxPriceRange: null,
    LimitExpriy: "never",
    VAInterval: 1,
    VAIntervalUnit: "minute",
    LimitAmount: 0,
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
        case "swapMode":
          state.swapMode = action.payload.Value;
          break;
        case "DCASellPerOrder":
          state.DCASellPerOrder = action.payload.Value;
          break;
        case "DCAOrderInterval":
          state.DCAOrderInterval = action.payload.Value;
          break;
        case "DCAOrderIntervalUnit":
          state.DCAOrderIntervalUnit = action.payload.Value;
          break;
        case "DCAOverHowManyOrder":
          state.DCAOverHowManyOrder = action.payload.Value;
          break;
        case "LimitExpriy":
          state.LimitExpriy = action.payload.Value;
          break;
        case "VAInterval":
          state.VAInterval = action.payload.Value;
          break;
        case "VAIntervalUnit":
          state.VAIntervalUnit = action.payload.Value;
          break;
        case "DCAMinPriceRange":
          state.DCAMinPriceRange = action.payload.Value;
          break;
        case "DCAMAXPriceRange":
          state.DCAMaxPriceRange = action.payload.Value;
          break;
        case "LimitAmoount":
          state.LimitAmount = action.payload.Value;
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
