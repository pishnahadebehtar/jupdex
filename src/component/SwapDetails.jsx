import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
function SwapDetails() {
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
        <Typography fontSize={"0.75rem"}>Minimum Received</Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.BuyAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>
          Max Transaction Fee [
          <BootstrapTooltip
            title="This is for Solana transaction fee and Priority fee"
            placement="top"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -9],
                    },
                  },
                ],
              },
            }}
          >
            <QuestionMark fontSize="xxs" />
          </BootstrapTooltip>
          ]
        </Typography>
        <Typography fontSize={"0.75rem"}>
          {(SwapPrams.SellAmount * Settings.MaxSlippage) / 100}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>
          Deposit[
          <BootstrapTooltip
            title="You need to have the token accounts in order to execute the trade."
            placement="top"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -9],
                    },
                  },
                ],
              },
            }}
          >
            <QuestionMark fontSize="xxs" />
          </BootstrapTooltip>
          ]
        </Typography>
        <Typography fontSize={"0.75rem"}>{SwapPrams.SellAmount}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Price Impact</Typography>
        <Typography fontSize={"0.75rem"}>{"<0.01"}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={theme.palette.secondary.main}
      >
        <Typography fontSize={"0.75rem"}>Price Difference</Typography>
        <Typography fontSize={"0.75rem"}>{"0.002"}</Typography>
      </Box>
    </Box>
  );
}

export default SwapDetails;
