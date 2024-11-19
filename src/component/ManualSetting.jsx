import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Divider,
  TextField,
  Switch,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { updateSettingStates } from "../state/SettingSlice";
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
        <Typography variant="h4" fontSize={"1.2rem"} color={grey[200]}>
          Slippage
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
            Slippage Mode
          </Typography>

          <ButtonGroup>
            <Button
              color={
                SettingState.SlippageMode === "dynamic"
                  ? "primary"
                  : "secondary"
              }
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
          </ButtonGroup>
        </Box>
        {SettingState.SlippageMode === "dynamic" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
              Fixed Slippage
            </Typography>

            <ButtonGroup sx={{ maxWidth: "50%" }}>
              <Button
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
            </ButtonGroup>
            <TextField
              id="FixedSlippage"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              color="background"
              placeholder="0.00%"
              onChange={(e) => {
                dispatch(
                  updateSettingStates({
                    SettingName: "FixedSlippage",
                    SettingValue: `${e.target.value}`,
                  })
                );
                SetFixedSlippageButtonPushed(false);
              }}
              value={
                FixedSlippageButtonPushed ? "" : SettingState.FixedSlippage
              }
            />
          </Box>
        ) : null}
        {SettingState.SlippageMode === "fixed" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
              Max Slippage
            </Typography>

            <TextField
              id="MaxSlippage"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              color="background"
              placeholder="0.00%"
              onChange={(e) => {
                dispatch(
                  updateSettingStates({
                    SettingName: "MaxSlippage",
                    SettingValue: `${e.target.value}`,
                  })
                );
              }}
              value={SettingState.MaxSlippage}
            />
          </Box>
        ) : null}
      </Box>
      <Divider
        sx={{
          bgcolor: grey[600],
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
        <Typography variant="h4" fontSize={"1.2rem"} color={grey[200]}>
          Transaction Broadcasting
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
            Broadcast Mode
          </Typography>

          <ButtonGroup>
            <Button
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
          </ButtonGroup>
        </Box>
        {SettingState.FeeMode === "MaxCap" ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
              Speed
            </Typography>
            <ButtonGroup>
              <Button
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
            </ButtonGroup>
          </Box>
        ) : null}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
            Fee Mode
          </Typography>

          <ButtonGroup>
            <Button
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
          </ButtonGroup>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h4" fontSize={"1rem"} color={grey[700]}>
            {SettingState.FeeMode === "MaxCap" ? "Set Max Cap" : "Exact Fee"}
          </Typography>

          <TextField
            id="FeeCap"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            size="small"
            sx={{
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
            color="background"
            placeholder="0.00 SOL"
            onChange={(e) => {
              dispatch(
                updateSettingStates({
                  SettingName: "FeeCap",
                  SettingValue: `${e.target.value}`,
                })
              );
            }}
            value={SettingState.FeeCap}
          />
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: grey[600],
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
            sx={{ color: grey[200] }}
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
