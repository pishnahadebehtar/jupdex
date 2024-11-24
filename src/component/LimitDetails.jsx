import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import tokendata from "../assets/tokenData.js";
function LimitDetails() {
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
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Sell Order</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.SellAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>To Buy</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.BuyAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>
          Buy {tokendata[SwapPrams.SwapTokenToBuyId].symbol} at Rate
        </Typography>
        <Typography fontSize={"0.75rem"}>
          {SwapPrams.BuyAmount} {tokendata[SwapPrams.SwapTokenToBuyId].symbol}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Expriy</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.LimitExpriy}</Typography>
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

export default LimitDetails;
