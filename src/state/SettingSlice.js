import { createSlice } from "@reduxjs/toolkit";

const SettingSlice = createSlice({
  name: "SettingSlice",
  initialState: {
    SwapSettingOpen: false,
    SwapSettingState: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).SwapSettingState
      : "Auto",
    SlippageMode: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).SlippageMode
      : "dynamic",
    TransactionFees: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).TransactionFees
      : "dynamic",
    MEVProtect: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).MEVProtect
      : true,
    MaxSlippage: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).MaxSlippage
      : 3,
    FixedSlippage: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).FixedSlippage
      : "",
    BroadcastMode: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).BroadcastMode
      : "PriorityFee",
    Speed: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).Speed
      : "Ultra",
    FeeMode: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).FeeMode
      : "MaxCap",
    FeeCap: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).FeeCap
      : 0.004,
    DirectRoutOnly: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).DirectRoutOnly
      : false,
    UsewSOL: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).UsewSOL
      : false,
    AMMExclusion: localStorage.getItem("SettingState")
      ? JSON.parse(localStorage.getItem("SettingState")).AMMExclusion
      : false,
  },
  reducers: {
    updateSettingStates: (state, action) => {
      switch (action.payload.SettingName) {
        case "SlippageMode":
          state.SlippageMode = action.payload.SettingValue;
          localStorage.setItem("SettingState", JSON.stringify(state));
          break;
        case "TransactionFees":
          state.TransactionFees = action.payload.SettingValue;
          break;
        case "MEVProtect":
          state.MEVProtect = action.payload.SettingValue;
          break;
        case "MaxSlippage":
          state.MaxSlippage = action.payload.SettingValue;
          break;
        case "FixedSlippage":
          state.FixedSlippage = action.payload.SettingValue;
          break;
        case "BroadcastMode":
          state.BroadcastMode = action.payload.SettingValue;
          break;
        case "Speed":
          state.Speed = action.payload.SettingValue;
          break;
        case "FeeMode":
          state.FeeMode = action.payload.SettingValue;
          break;
        case "DirectRoutOnly":
          state.DirectRoutOnly = action.payload.SettingValue;
          break;
        case "UsewSOL":
          state.UsewSOL = action.payload.SettingValue;
          break;
        case "AMMExclusion":
          state.AMMExclusion = action.payload.SettingValue;
          break;
        case "SwapSettingOpen":
          state.SwapSettingOpen = action.payload.SettingValue;

          break;
        case "SwapSettingState":
          state.SwapSettingState = action.payload.SettingValue;
          break;
        default:
          console.log("Error on dispatch");
          break;
      }
    },
  },
});
export const { updateSettingStates } = SettingSlice.actions;

export default SettingSlice.reducer;
