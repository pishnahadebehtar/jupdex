import { Box, Typography, TextField } from "@mui/material";
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
function DCAFeatures() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const swapPrams = useSelector((state) => state.SwapSlice);
  const [DCAEveryAnchor, SetDCAEveryAnchor] = useState(null);
  const DCAEveryPopup = (e) => {
    DCAEveryAnchor === null
      ? SetDCAEveryAnchor(e.currentTarget)
      : SetDCAEveryAnchor(null);
  };

  const SetAmount = (e, ref) => {
    const value = e.target.value;
    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (value.match(regex) || value === "") {
      dispatch(updateSwap({ Type: ref, Value: value }));
    }
  };
  return (
    <Box display={"flex"} gap={1} flexDirection={"column"}>
      <Box
        gap={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          onClick={(e) => DCAEveryPopup(e)}
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
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
                if (value.match(regex) || value === "") {
                  dispatch(
                    updateSwap({ Type: "DCAOrderInterval", Value: value })
                  );
                }
              }}
              value={swapPrams.DCAOrderInterval}
            />
            <Typography
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={theme.palette.secondary.light}
              fontSize={"1rem"}
            >
              {swapPrams.DCAOrderIntervalUnit}
              <ArrowDropDown />
            </Typography>
            <BasePopup open={Boolean(DCAEveryAnchor)} anchor={DCAEveryAnchor}>
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
                        Type: "DCAOrderIntervalUnit",
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
                        Type: "DCAOrderIntervalUnit",
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
                        Type: "DCAOrderIntervalUnit",
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
                        Type: "DCAOrderIntervalUnit",
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
                        Type: "DCAOrderIntervalUnit",
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
          padding={"1rem"}
        >
          <Typography color={theme.palette.secondary.main} fontSize={"0.7rem"}>
            Over
          </Typography>
          <Box>
            <TextField
              variant="standard"
              sx={{
                minWidth: "15%",
                maxWidth: "55%",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              onChange={(e) => SetAmount(e, "DCAOverHowManyOrder")}
              value={swapPrams.DCAOverHowManyOrder}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={theme.palette.background.dark}
        borderRadius={"0.5rem"}
        height={"100px"}
        width={"100%"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          width={"100%"}
          gap={1}
          justifyContent={"space-between"}
          padding={"1rem"}
          color={theme.palette.secondary.main}
        >
          <Typography fontSize={"0.75rem"}>Price Range (Optional)</Typography>
          <Typography fontSize={"0.75rem"}>
            Rate{" "}
            {swapPrams.BuyAmount
              ? swapPrams.BuyAmount / swapPrams.SellAmount
              : "0"}{" "}
            {tokendata[swapPrams.SwapTokenToSellId].symbol}
            {"/"}
            {tokendata[swapPrams.SwapTokenToBuyId].symbol}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={theme.palette.secondary.main}
          padding={"0.5rem"}
          width={"100%"}
          gap={1}
        >
          <TextField
            variant="standard"
            sx={{
              minWidth: "15%",
              maxWidth: "55%",
              "& .MuiInputBase-input": {
                color: "white",
                bgcolor: theme.palette.background.default,
                borderRadius: "0.5rem",
                padding: "0.2rem",
              },
            }}
            placeholder="Min Price"
            onChange={(e) => SetAmount(e, "DCAMinPriceRange")}
            value={swapPrams.DCAMinPriceRange}
          />
          -
          <TextField
            variant="standard"
            sx={{
              minWidth: "15%",
              maxWidth: "55%",
              "& .MuiInputBase-input": {
                color: "white",
                bgcolor: theme.palette.background.default,
                borderRadius: "0.5rem",
                padding: "0.2rem",
              },
            }}
            placeholder="Max Price"
            onChange={(e) => SetAmount(e, "DCAMaxPriceRange")}
            value={swapPrams.DCAMaxPriceRange}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DCAFeatures;
