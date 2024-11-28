import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSettingStates } from "../../../../state/SettingSlice.js";
import { useTheme } from "@mui/material";
function AutoSetting() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const MEVProtect = useSelector((state) => state.SettingSlice.MEVProtect);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box>
          <Typography
            fontSize={"0.7rem"}
            color={theme.palette.secondary.light}
            fontWeight={600}
          >
            Slippage Mode
          </Typography>
          <Typography fontSize={"0.7rem"} color={theme.palette.secondary.main}>
            Set slippage based on simulation and heuristics.
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: theme.palette.background.default,
            borderRadius: "1.2rem",
            padding: "0.1rem",
          }}
        >
          <Button
            size="small"
            sx={{
              fontSize: "0.7rem",
              color: theme.palette.primary.main,
              borderRadius: "1.2rem",
              bgcolor: "rgb(44 48 40)",
              borderRadius: "1.2rem",
            }}
          >
            Dynamic
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box>
          <Typography
            fontSize={"0.7rem"}
            color={theme.palette.secondary.light}
            fontWeight={600}
          >
            Transaction Fees
          </Typography>
          <Typography fontSize={"0.7rem"} color={theme.palette.secondary.main}>
            Set max cap based on trade size.
          </Typography>
        </Box>
        <Button
          size="small"
          sx={{
            fontSize: "0.7rem",
            color: theme.palette.primary.main,
            borderRadius: "1.2rem",
            bgcolor: "rgb(44 48 40)",
            borderRadius: "1.2rem",
          }}
        >
          Dynamic
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box>
          <Typography
            fontSize={"0.7rem"}
            color={theme.palette.secondary.light}
            fontWeight={600}
          >
            MEV Protect
          </Typography>
          <Typography fontSize={"0.7rem"} color={theme.palette.secondary.main}>
            Enable to prevent sandwich/front-run.
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: theme.palette.background.default,
            borderRadius: "1.2rem",
            fontSize: "0.7rem",
          }}
        >
          <Button
            size="small"
            variant="oulined"
            sx={{
              margin: "0.2rem",
              borderRadius: "1.2rem",
              bgcolor: MEVProtect
                ? theme.palette.background.dark
                : "rgba(19,27,36,0.1)",
              color: MEVProtect
                ? theme.palette.info.dark
                : theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.info.dark,
              },
              fontSize: "0.7rem",
              padding: 0,
            }}
            onClick={() =>
              dispatch(
                updateSettingStates({
                  SettingName: "MEVProtect",
                  SettingValue: true,
                })
              )
            }
          >
            Enable
          </Button>
          <Button
            size="small"
            variant="oulined"
            sx={{
              margin: "0.2rem",
              borderRadius: "1.2rem",
              bgcolor: !MEVProtect
                ? theme.palette.background.dark
                : "rgba(19,27,36,0.1)",
              color: !MEVProtect
                ? theme.palette.info.dark
                : theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.info.dark,
              },
              fontSize: "0.7rem",
              padding: 0,
            }}
            onClick={() =>
              dispatch(
                updateSettingStates({
                  SettingName: "MEVProtect",
                  SettingValue: false,
                })
              )
            }
          >
            Disable
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AutoSetting;
