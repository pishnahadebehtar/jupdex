import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import SwapDetails from "./SwapDetails";
import LimitDetails from "./LimitDetails";
import DCADetails from "./DCADetails";
import VADetails from "./VADetails";

function MoreInfo() {
  const theme = useTheme();
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "transparent",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  const SwapPrams = useSelector((state) => state.SwapSlice);
  const Settings = useSelector((state) => state.SettingSlice);
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
