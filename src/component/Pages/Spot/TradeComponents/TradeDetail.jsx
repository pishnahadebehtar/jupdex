import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import tokendata from "../../../../assets/tokenData.js";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import MoreInfo from "./MoreInfo.jsx";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function TradeDetail() {
  const theme = useTheme();
  const swapPrams = useSelector((state) => state.SwapSlice);
  const [ShowMore, SetShowMore] = useState();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      color={theme.palette.secondary.main}
      flexDirection={"column"}
      width={"100%"}
      gap={1}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={theme.palette.secondary.main}
        width={"100%"}
      >
        {swapPrams.swapMode === "swap" ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            sx={{
              fontSize: "0.8rem",
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          >
            1 {tokendata[swapPrams.SwapTokenToSellId].symbol} ={" "}
            {swapPrams.BuyAmount / swapPrams.SellAmount}{" "}
            {tokendata[swapPrams.SwapTokenToBuyId].symbol}
            <SwapHorizIcon fontSize="small" />
          </Box>
        ) : (
          false
        )}

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          onClick={() => {
            SetShowMore(!ShowMore);
          }}
          sx={{
            fontSize: "0.8rem",
            "&:hover": {
              color: theme.palette.primary.main,
              cursor: "pointer",
            },
          }}
          gap={2}
        >
          {ShowMore ? (
            <KeyboardArrowDownIcon fontSize="0.8rem" />
          ) : (
            <KeyboardArrowUpIcon fontSize="0.8rem" />
          )}
          <Typography fontSize={"0.8rem"}>
            {swapPrams.swapMode === "swap"
              ? `${ShowMore ? "Show" : "Hide"} More Info`
              : swapPrams.swapMode === "limit"
              ? "Limit Order Summary"
              : swapPrams.swapMode === "dca"
              ? "DCA Order Summary"
              : "VA Order Summary"}
          </Typography>
          <CircularProgress
            size="0.8rem"
            variant="determinate"
            value={progress}
          />
        </Box>
      </Box>
      {ShowMore && swapPrams.BuyAmount ? <MoreInfo /> : false}
    </Box>
  );
}

export default TradeDetail;
