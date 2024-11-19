import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { Tooltip, tooltipClasses } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

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
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
        }}
      >
        <CardContent>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={theme.palette.secondary.dark}
          >
            <Typography>Minimum Received</Typography>
            <Typography>{SwapPrams.BuyAmount}</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={theme.palette.secondary.dark}
          >
            <Typography>
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
            <Typography>
              {(SwapPrams.SellAmount * Settings.MaxSlippage) / 100}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={theme.palette.secondary.dark}
          >
            <Typography>
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
            <Typography>{SwapPrams.SellAmount}</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={theme.palette.secondary.dark}
          >
            <Typography>Price Impact</Typography>
            <Typography>{"<0.01"}</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            color={theme.palette.secondary.dark}
          >
            <Typography>Price Difference</Typography>
            <Typography>{"0.002"}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MoreInfo;
