import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Switch,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { updateSettingStates } from "../../../../state/SettingSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ManualSetting() {
  const dispatch = useDispatch();
  const SettingState = useSelector((state) => state.SettingSlice);
  const theme = useTheme();
  const [FixedSlippageButtonPushed, SetFixedSlippageButtonPushed] =
    useState(false);
  return (
    <Box width="100%">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={2}
      >
        <Typography color={theme.palette.secondary.light}>Slippage</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography color={theme.palette.secondary.main}>
            Slippage Mode
          </Typography>

          <Box
            sx={{
              bgcolor: theme.palette.background.dark,
              padding: "0.1rem",
              borderRadius: "1.2rem",
            }}
          >
            <Button
              color={
                SettingState.SlippageMode === "dynamic"
                  ? "primary"
                  : "secondary"
              }
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.SlippageMode === "dynamic"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.SlippageMode === "dynamic"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "SlippageMode",
                    SettingValue: "dynamic",
                  })
                );
              }}
            >
              Dynamic
            </Button>
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.SlippageMode !== "dynamic"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.SlippageMode !== "dynamic"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.SlippageMode === "dynamic"
                  ? "secondary"
                  : "primary"
              }
              onClick={() =>
                dispatch(
                  updateSettingStates({
                    SettingName: "SlippageMode",
                    SettingValue: "fixed",
                  })
                )
              }
            >
              Fixed
            </Button>
          </Box>
        </Box>
        {SettingState.SlippageMode === "dynamic" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography color={theme.palette.secondary.main}>
              Fixed Slippage
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                bgcolor: theme.palette.background.dark,
                maxWidth: "50%",
                borderRadius: "1.2rem",
              }}
            >
              <Button
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SettingState.FixedSlippage === 0.5
                      ? "rgba(199, 242, 132, 0.1)"
                      : "rgba(19,27,36,.1)",

                  color:
                    SettingState.FixedSlippage === 0.5
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: "rgba(199, 242, 132, 0.1)",
                    color: theme.palette.secondary.light,
                  },
                  fontSize: "0.8rem",
                }}
                color={
                  SettingState.FixedSlippage === 0.5 ? "primary" : "secondary"
                }
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "FixedSlippage",
                      SettingValue: 0.5,
                    })
                  );
                  SetFixedSlippageButtonPushed(true);
                }}
              >
                0.5%
              </Button>
              <Button
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SettingState.FixedSlippage === 1
                      ? "rgba(199, 242, 132, 0.1)"
                      : "rgba(19,27,36,.1)",

                  color:
                    SettingState.FixedSlippage === 1
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: "rgba(199, 242, 132, 0.1)",
                    color: theme.palette.secondary.light,
                  },
                  fontSize: "0.8rem",
                }}
                color={
                  SettingState.FixedSlippage === 1 ? "primary" : "secondary"
                }
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "FixedSlippage",
                      SettingValue: 1,
                    })
                  );
                  SetFixedSlippageButtonPushed(true);
                }}
              >
                1%
              </Button>
              <TextField
                size="small"
                sx={{
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
                color="background"
                placeholder="0.00%"
                value={
                  FixedSlippageButtonPushed ? "" : SettingState.FixedSlippage
                }
                onChange={(e) => {
                  const value = e.target.value;
                  const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
                  if (value.match(regex) || value === "") {
                    dispatch(
                      updateSettingStates({
                        SettingName: "FixedSlippage",
                        SettingValue: value,
                      })
                    );
                    SetFixedSlippageButtonPushed(false);
                  }
                }}
              />
            </Box>
          </Box>
        ) : null}
        {SettingState.SlippageMode === "fixed" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography color={theme.palette.secondary.main}>
              Max Slippage
            </Typography>

            <TextField
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              color="background"
              placeholder="0.00%"
              value={SettingState.MaxSlippage}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
                if (value.match(regex) || value === "") {
                  dispatch(
                    updateSettingStates({
                      SettingName: "MaxSlippage",
                      SettingValue: value,
                    })
                  );
                }
              }}
            />
          </Box>
        ) : null}
      </Box>
      <Divider
        sx={{
          bgcolor: theme.palette.secondary.main,
          height: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></Divider>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        gap={2}
      >
        <Typography color={theme.palette.secondary.light}>
          Transaction Broadcasting
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography color={theme.palette.secondary.main}>
            Broadcast Mode
          </Typography>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              bgcolor: theme.palette.background.dark,
              maxWidth: "70%",
              borderRadius: "1.2rem",
            }}
          >
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.BroadcastMode === "PriorityFee"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.BroadcastMode === "PriorityFee"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.BroadcastMode === "PriorityFee"
                  ? "primary"
                  : "secondary"
              }
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "BroadcastMode",
                    SettingValue: "PriorityFee",
                  })
                );
              }}
            >
              Priority Fee
            </Button>
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.BroadcastMode === "JitoOnly"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.BroadcastMode === "JitoOnly"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.BroadcastMode === "JitoOnly"
                  ? "primary"
                  : "secondary"
              }
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "BroadcastMode",
                    SettingValue: "JitoOnly",
                  })
                );
              }}
            >
              Jito Only
            </Button>
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.BroadcastMode === "Both"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.BroadcastMode === "Both"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.BroadcastMode === "Both" ? "primary" : "secondary"
              }
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "BroadcastMode",
                    SettingValue: "Both",
                  })
                );
              }}
            >
              Both
            </Button>
          </Box>
        </Box>
        {SettingState.FeeMode === "MaxCap" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography color={theme.palette.secondary.main}>Speed</Typography>
            <Box
              sx={{
                bgcolor: theme.palette.background.dark,
                padding: "0.1rem",
                borderRadius: "1.2rem",
              }}
            >
              <Button
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SettingState.Speed === "Fast"
                      ? "rgba(199, 242, 132, 0.1)"
                      : "rgba(19,27,36,.1)",

                  color:
                    SettingState.Speed === "Fast"
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: "rgba(199, 242, 132, 0.1)",
                    color: theme.palette.secondary.light,
                  },
                  fontSize: "0.8rem",
                }}
                color={SettingState.Speed === "Fast" ? "primary" : "secondary"}
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "Speed",
                      SettingValue: "Fast",
                    })
                  );
                }}
              >
                Fast
              </Button>
              <Button
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SettingState.Speed === "Turbo"
                      ? "rgba(199, 242, 132, 0.1)"
                      : "rgba(19,27,36,.1)",

                  color:
                    SettingState.Speed === "Turbo"
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: "rgba(199, 242, 132, 0.1)",
                    color: theme.palette.secondary.light,
                  },
                  fontSize: "0.8rem",
                }}
                color={SettingState.Speed === "Turbo" ? "primary" : "secondary"}
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "Speed",
                      SettingValue: "Turbo",
                    })
                  );
                }}
              >
                Turbo
              </Button>
              <Button
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SettingState.Speed === "Ultra"
                      ? "rgba(199, 242, 132, 0.1)"
                      : "rgba(19,27,36,.1)",

                  color:
                    SettingState.Speed === "Ultra"
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  "&:hover": {
                    bgcolor: "rgba(199, 242, 132, 0.1)",
                    color: theme.palette.secondary.light,
                  },
                  fontSize: "0.8rem",
                }}
                color={SettingState.Speed === "Ultra" ? "primary" : "secondary"}
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "Speed",
                      SettingValue: "Ultra",
                    })
                  );
                }}
              >
                Ultra
              </Button>
            </Box>
          </Box>
        ) : null}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography color={theme.palette.secondary.main}>Fee Mode</Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              bgcolor: theme.palette.background.dark,
              padding: "0.1rem",
              borderRadius: "1.2rem",
            }}
          >
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.FeeMode === "MaxCap"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.FeeMode === "MaxCap"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.FeeMode === "MaxCap" ? "primary" : "secondary"
              }
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "FeeMode",
                    SettingValue: "MaxCap",
                  })
                );
              }}
            >
              Max Cap
            </Button>
            <Button
              sx={{
                margin: "0.2rem",
                borderRadius: "1.2rem",
                bgcolor:
                  SettingState.FeeMode === "ExactFee"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                color:
                  SettingState.FeeMode === "ExactFee"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
                fontSize: "0.8rem",
              }}
              color={
                SettingState.FeeMode === "ExactFee" ? "primary" : "secondary"
              }
              onClick={() => {
                dispatch(
                  updateSettingStates({
                    SettingName: "FeeMode",
                    SettingValue: "ExactFee",
                  })
                );
              }}
            >
              Exact Fee
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography color={theme.palette.secondary.main}>
            {SettingState.FeeMode === "MaxCap" ? "Set Max Cap" : "Exact Fee"}
          </Typography>

          <TextField
            size="small"
            sx={{
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
            color="background"
            placeholder="0.00 SOL"
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
              if (value.match(regex) || value === "") {
                dispatch(
                  updateSettingStates({
                    SettingName: "FeeCap",
                    SettingValue: value,
                  })
                );
              }
            }}
            value={SettingState.FeeCap}
          />
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: theme.palette.secondary.main,
          height: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></Divider>
      <Box>
        <Accordion
          sx={{ bgcolor: theme.palette.background.light, color: grey[500] }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="secondary" />}
            aria-controls="advanced settings"
            id="advanced-settings"
            sx={{ color: theme.palette.secondary.light, fontWeight: 800 }}
          >
            Advanced Settings
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>Direct Route Only</Typography>
              <Switch
                checked={SettingState.DirectRoutOnly}
                onChange={(e) =>
                  dispatch(
                    updateSettingStates({
                      SettingName: "DirectRoutOnly",
                      SettingValue: e.target.checked,
                    })
                  )
                }
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>Use wSOL</Typography>
              <Switch
                checked={SettingState.UsewSOL}
                onChange={(e) =>
                  dispatch(
                    updateSettingStates({
                      SettingName: "UsewSOL",
                      SettingValue: e.target.checked,
                    })
                  )
                }
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Typography>AMM Exclusion</Typography>
              <Switch
                checked={SettingState.AMMExclusion}
                onChange={(e) =>
                  dispatch(
                    updateSettingStates({
                      SettingName: "AMMExclusion",
                      SettingValue: e.target.checked,
                    })
                  )
                }
              />
            </Box>
            <Typography fontSize="1rem">No amms are being excluded.</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default ManualSetting;
