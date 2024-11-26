import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

import { useSelector } from "react-redux";
import tokendata from "../../../../assets/tokenData.js";
function VADetails() {
  const theme = useTheme();
  const SwapPrams = useSelector((state) => state.SwapSlice);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Sell Total</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.SellAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Sell per Order</Typography>
        <Typography fontSize={"0.75rem"}>
          {SwapPrams.DCASellPerOrder}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>To Buy</Typography>
        <Typography fontSize={"0.75rem"}>
          {SwapPrams.BuyAmount
            ? SwapPrams.swapMode === "limit"
              ? ""
              : SwapPrams.BuyAmount
            : 0}{" "}
          {""}
          {tokendata[SwapPrams.SwapTokenToBuyId].symbol}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Order Interval</Typography>
        <Typography fontSize={"0.75rem"}>
          {SwapPrams.DCAOrderInterval} {SwapPrams.DCAOrderIntervalUnit}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Start Date</Typography>
        <Typography fontSize={"0.75rem"}>Immediate</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Estimated end date</Typography>
        <Typography fontSize={"0.75rem"}>29 Dec 2024 15:57</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>
          Estimated Price Impact per Order
        </Typography>
        <Typography fontSize={"0.75rem"}>0.03%</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Platform Fee</Typography>
        <Typography fontSize={"0.75rem"}>0.10%</Typography>
      </Box>
    </Box>
  );
}

export default VADetails;
