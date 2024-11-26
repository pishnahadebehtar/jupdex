import React from "react";
import { Button ,useTheme} from "@mui/material";
import { useSelector } from "react-redux";
function TradeButton() {
    const swapPrams = useSelector((state) => state.SwapSlice);
    const theme = useTheme()
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "1.1rem",

        "&:disabled": {
          bgcolor: theme.palette.primary.light,
          color: theme.palette.background.default,
        },
        height: "3.5rem",
        borderRadius: "0.8rem",
        textTransform: "none",
      }}
      disabled={swapPrams.SellAmount && swapPrams.BuyAmount ? false : true}
    >
      {swapPrams.SellAmount && swapPrams.BuyAmount
        ? swapPrams.swapMode === "swap"
          ? "Swap"
          : swapPrams.swapMode === "limit"
          ? "Place Limit Order"
          : swapPrams.swapMode === "dca"
          ? "Start DCA"
          : "Start VA"
        : swapPrams.SellAmount
        ? "Waiting for Fetching The Price ..."
        : "Entre an amount"}
    </Button>
  );
}

export default TradeButton;
