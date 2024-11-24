import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import tokendata from "../assets/tokenData.js";
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
        <Typography fontSize={"0.75rem"}>Max budget</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.SellAmount}</Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>To Buy</Typography>
        <Typography fontSize={"0.75rem"}>
          {tokendata[SwapPrams.SwapTokenToBuyId].symbol}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>
          To Increase portfolio value by
        </Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.BuyAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Every</Typography>
        <Typography fontSize={"0.75rem"}>
          {SwapPrams.VAInterval} {SwapPrams.VAIntervalUnit}
        </Typography>
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
