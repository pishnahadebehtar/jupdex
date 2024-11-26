import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import SwapDetails from "./SwapComponents/SwapDetails";
import LimitDetails from "./LimitComponents/LimitDetails";
import DCADetails from "./DCAComponents/DCADetails";
import VADetails from "./VAComponents/VADetails";

function MoreInfo() {
  const theme = useTheme();
  const SwapPrams = useSelector((state) => state.SwapSlice);
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "transparent",
          borderColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.main,
        }}
      >
        <CardContent>
          <Box>
            {SwapPrams.swapMode === "swap" ? <SwapDetails /> : false}
            {SwapPrams.swapMode === "limit" ? <LimitDetails /> : false}
            {SwapPrams.swapMode === "dca" ? <DCADetails /> : false}
            {SwapPrams.swapMode === "va" ? <VADetails /> : false}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MoreInfo;
