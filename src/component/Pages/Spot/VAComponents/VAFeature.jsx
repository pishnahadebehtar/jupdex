import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { updateSwap } from "../../../../state/SwapSlice";
import { useTheme } from "@mui/material";
import { useState } from "react";
import tokendata from "../../../../assets/tokenData.js";
function VAFeatures() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const swapPrams = useSelector((state) => state.SwapSlice);
  const [VAEveryAnchor, SetVAEveryAnchor] = useState(null);
  const VAEveryPopup = (e) => {
    VAEveryAnchor === null
      ? SetVAEveryAnchor(e.currentTarget)
      : SetVAEveryAnchor(null);
  };
  const SetAmount = (e, ref) => {
    const value = e.target.value;
    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (value.match(regex) || value === "") {
      dispatch(updateSwap({ Type: ref, Value: value }));
    }
  };
  const [DateButton, SetDateButton] = useState("Start Date");
  return (
    <Box display={"flex"} gap={1} flexDirection={"column"}>
      <Box
        gap={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          onClick={(e) => VAEveryPopup(e)}
          bgcolor={theme.palette.background.dark}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          borderRadius={"0.5rem"}
          height={"75px"}
          padding={"1rem"}
        >
          <Typography color={theme.palette.secondary.main} fontSize={"0.7rem"}>
            Every
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0.5rem"}
          >
            <TextField
              variant="standard"
              sx={{
                minWidth: "15%",
                maxWidth: "25%",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              placeholder="0.00"
              onChange={(e) => SetAmount(e, "VAOrderInterval")}
              value={swapPrams.VAOrderInterval}
            />
            <Typography
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={theme.palette.secondary.light}
              fontSize={"1rem"}
            >
              {swapPrams.VAOrderIntervalUnit}
              <ArrowDropDown />
            </Typography>
            <BasePopup open={Boolean(VAEveryAnchor)} anchor={VAEveryAnchor}>
              <Box
                width={"100%"}
                bgcolor={theme.palette.background.dark}
                padding={"1rem"}
                color={"white"}
              >
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() =>
                    dispatch(
                      updateSwap({
                        Type: "VAOrderIntervalUnit",
                        Value: "minute",
                      })
                    )
                  }
                >
                  <ListItemText primary="minute" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() =>
                    dispatch(
                      updateSwap({
                        Type: "VAOrderIntervalUnit",
                        Value: "hour",
                      })
                    )
                  }
                >
                  <ListItemText primary="hour" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() =>
                    dispatch(
                      updateSwap({
                        Type: "VAOrderIntervalUnit",
                        Value: "day",
                      })
                    )
                  }
                >
                  <ListItemText primary="day" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() =>
                    dispatch(
                      updateSwap({
                        Type: "VAOrderIntervalUnit",
                        Value: "week",
                      })
                    )
                  }
                >
                  <ListItemText primary="week" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() =>
                    dispatch(
                      updateSwap({
                        Type: "VAOrderIntervalUnit",
                        Value: "month",
                      })
                    )
                  }
                >
                  <ListItemText primary="month" />
                </ListItemButton>
              </Box>
            </BasePopup>
          </Box>
        </Box>

        <Box
          bgcolor={theme.palette.background.dark}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          borderRadius={"0.5rem"}
          height={"75px"}
          minWidth={"60%"}
          padding={"0.5rem"}
          gap={2}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              color={theme.palette.secondary.main}
              fontSize={"0.7rem"}
            >
              Select Date
            </Typography>
            <Button
              sx={{ fontSize: "0.7rem", padding: 0 }}
              onClick={() =>
                SetDateButton(
                  DateButton === "Start Date" ? "Reset" : "Start Date"
                )
              }
            >
              {DateButton}
            </Button>
          </Box>
          <Box>
            <Typography
              color={theme.palette.secondary.light}
              fontSize={"0.9rem"}
            >
              {DateButton === "Start Date"
                ? "Start Date"
                : "mm/dd/yyyy --:-- --"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VAFeatures;
