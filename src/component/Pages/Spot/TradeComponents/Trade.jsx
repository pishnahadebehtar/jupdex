import { Box, Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useSelector, useDispatch } from "react-redux";
import { updateSwap } from "../../../../state/SwapSlice.js";
import SellSide from "./SellSide.jsx";
import BuySide from "./BuySide.jsx";
import DCAFeatures from "../DCAComponents/DCAFeatures.jsx";
import LimitFeatures from "../LimitComponents/LimitFeatures.jsx";
import MarketFinder from "../SwapComponents/MarketFinder.jsx";
import TradeDetail from "./TradeDetail.jsx";
import TradeButton from "./TradeButton.jsx";
import VAFeatures from "../VAComponents/VAFeature.jsx";
function Trade() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const swapPrams = useSelector((state) => state.SwapSlice);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      gap={1}
    >
      <SellSide />
      <Divider
        sx={{
          bgcolor: theme.palette.background.light,
          height: "1px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <IconButton
          size="small"
          sx={{
            color: theme.palette.secondary.main,
            bgcolor: theme.palette.background.default,
            border: `2px solid ${theme.palette.background.dark}`,
            transition: "0.2s",

            "&:hover": {
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              bgcolor: theme.palette.background.dark,
            },
          }}
          onClick={() => {
            dispatch(
              updateSwap({
                Type: "SwapTokenToSellId",
                Value: swapPrams.SwapTokenToBuyId,
              })
            );
            dispatch(
              updateSwap({
                Type: "SwapTokenToBuyId",
                Value: swapPrams.SwapTokenToSellId,
              })
            );
          }}
        >
          <SwapVertIcon />
        </IconButton>
      </Divider>
      <BuySide />
      {swapPrams.swapMode === "dca" ? <DCAFeatures /> : false}
      {swapPrams.swapMode === "limit" ? <LimitFeatures /> : false}
      {swapPrams.swapMode === "va" ? <VAFeatures /> : false}
      {swapPrams.SellAmount ? <MarketFinder /> : false}
      <TradeButton />
      {swapPrams.SellAmount && swapPrams.BuyAmount ? <TradeDetail /> : false}
    </Box>
  );
}

export default Trade;
