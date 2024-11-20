import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import { useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateSettingStates } from "../state/SettingSlice";
import React from "react";
import { grey } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";
import AutoSetting from "./AutoSetting.jsx";
import ManualSetting from "./ManualSetting.jsx";

function SwapSetting() {
  const theme = useTheme();
  const SettingState = useSelector((state) => state.SettingSlice);
  const SwapSettingState = useSelector(
    (state) => state.SettingSlice.SwapSettingState
  );
  const dispatch = useDispatch();
  const match = useMediaQuery("(min-width:750px)");
  return (
    <Box
      p={2}
      width={"100vw"}
      sx={{
        bgcolor: "transparent",
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        height: "100vh",
        borderRadius: "10px",
        boxShadow: `0 0 0.25rem  ${theme.palette.primary.main}`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        WebkitBoxShadow: `0 0 0.25rem  ${theme.palette.primary.main}`,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={theme.palette.secondary.dark}
        sx={{
          width: match ? "45%" : "95%",
          borderRadius: "10px",
          boxShadow: `0 0 0.08rem  ${grey[200]}`,
        }}
      >
        <Card>
          <CardHeader
            sx={{
              bgcolor: theme.palette.background.default,
              color: "white",
              "& .MuiCardHeader-subheader": {
                color: "darkgray",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
              },
              "& .MuiCardHeader-title": {
                color: "white",
                fontSize: "1.25rem",
              },
            }}
            title="Swap Settings"
            subheader={
              SwapSettingState === "Auto"
                ? "Jupiter will help you to configure transaction fee and slippage settings based on your trade, heuristics and market conditions"
                : "You have full control over your own transaction fee and slippage settings, please use carefully."
            }
            action={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",

                  borderRadius: "1.2rem",
                  bgcolor: theme.palette.background.dark,
                }}
              >
                <Button
                  variant="oulined"
                  color={SwapSettingState === "Auto" ? "info" : "secondary"}
                  sx={{
                    margin: "0.2rem",
                    borderRadius: "1.2rem",
                    bgcolor:
                      SwapSettingState === "Auto"
                        ? theme.palette.background.default
                        : "rgba(19,27,36,0.1)",
                    color:
                      SwapSettingState === "Auto"
                        ? theme.palette.info.dark
                        : theme.palette.secondary.main,
                    "&:hover": {
                      color: theme.palette.info.dark,
                    },
                    fontSize: "0.8rem",
                  }}
                  onClick={() => {
                    dispatch(
                      updateSettingStates({
                        SettingName: "SwapSettingState",
                        SettingValue: "Auto",
                      })
                    );
                    dispatch(
                      updateSettingStates({
                        SettingName: "SlippageMode",
                        SettingValue: "dynamic",
                      })
                    );
                    dispatch(
                      updateSettingStates({
                        SettingName: "TransactionFees",
                        SettingValue: "dynamic",
                      })
                    );
                  }}
                >
                  Auto
                </Button>
                <Button
                  variant="oulined"
                  sx={{
                    margin: "0.2rem",
                    borderRadius: "1.2rem",
                    bgcolor:
                      SwapSettingState !== "Auto"
                        ? theme.palette.background.default
                        : "rgba(19,27,36,0.1)",
                    color:
                      SwapSettingState !== "Auto"
                        ? theme.palette.info.dark
                        : theme.palette.secondary.main,
                    "&:hover": {
                      color: theme.palette.info.dark,
                    },
                    fontSize: "0.8rem",
                  }}
                  onClick={() => {
                    dispatch(
                      updateSettingStates({
                        SettingName: "SwapSettingState",
                        SettingValue: "Manual",
                      })
                    );
                    dispatch(
                      updateSettingStates({
                        SettingName: "TransactionFees",
                        SettingValue: "manual",
                      })
                    );
                  }}
                >
                  Manual
                </Button>
              </Box>
            }
          ></CardHeader>
          <CardContent
            sx={{
              bgcolor: theme.palette.background.light,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",

                width: "100%",
                maxHeight: "40vh",
                overflowY: "scroll",
                margin: "1rem",
              }}
            >
              {SwapSettingState === "Auto" ? (
                <AutoSetting />
              ) : (
                <ManualSetting />
              )}
            </Box>

            <Button
              variant="contained"
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "SwapSettingOpen",
                    SettingValue: false,
                  })
                );
                localStorage.setItem(
                  "SettingState",
                  JSON.stringify(SettingState)
                );
              }}
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.background.dark,
                fontSize: "1.25rem",
                fontWeight: "bold",
                borderRadius: "20px",
                width: "100%",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default SwapSetting;
