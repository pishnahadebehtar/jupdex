import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { updateSwap } from "../../../../state/SwapSlice.js";
import { useTheme } from "@mui/material";
import tokendata from "../../../../assets/tokenData.js";
import { Wallet } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
function BuySide() {
  const [selected, setSelected] = useState("NotSelected");
  const swapPrams = useSelector((state) => state.SwapSlice);
  const theme = useTheme();
  const selectSideFocus = (side) => {
    side === "SellSide"
      ? selected === "NotSelected" || selected === "BuySide"
        ? setSelected("SellSide")
        : setSelected("NotSelected")
      : selected === "NotSelected" || selected === "SellSide"
      ? setSelected("BuySide")
      : setSelected("NotSelected");
  };
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:800px)");
  const SetAmount = (e, ref) => {
    const value = e.target.value;
    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (value.match(regex) || value === "") {
      dispatch(updateSwap({ Type: ref, Value: value }));
    }
  };
  const BuyTokenIcon = require(`../../../../assets/${
    tokendata[swapPrams.SwapTokenToBuyId].name
  }.png`);
  return (
    <Box
      onClick={() => selectSideFocus("SellSide")}
      sx={{
        width: "100%",
        minHeight: "20vh",
        bgcolor: theme.palette.background.dark,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,

        borderRadius: "10px",
        border:
          selected === "SellSide"
            ? `1px solid ${theme.palette.primary.dark}`
            : "none",
        boxShadow:
          selected === "SellSide"
            ? `0 0 0.5rem ${theme.palette.primary.dark}`
            : "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "99%",
            flexDirection: "column",
            gap: "10px",
            padding: matches ? "1rem" : "0",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "95%",
              textAlignLast: "center",
            }}
          >
            <Typography
              color={theme.palette.secondary.light}
              sx={{ letterSpacing: "0.01px" }}
              fontSize={"0.9rem"}
            >
              You're Buying
            </Typography>
            <Box
              display={"flex"}
              gap={"10px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                color={theme.palette.secondary.main}
                display={"flex"}
                alignItems={"center"}
                fontSize={"0.8rem"}
              >
                <Wallet fontSize="0.8rem" /> 0.0000{" "}
                {tokendata[swapPrams.SwapTokenToBuyId].symbol}
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"center"}
            sx={{
              width: "95%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                bgcolor: theme.palette.background.default,
                color: "white",
                minWidth: "25%",
                mt: "10px",
                borderRadius: "10px",
                minHeight: "40px",
                border: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 0 0.8rem ${theme.palette.primary.dark}`,
                },
              }}
              startIcon={
                <img
                  src={BuyTokenIcon}
                  width="20px"
                  height={"20px"}
                  alt={tokendata[swapPrams.SwapTokenToBuyId].name}
                />
              }
              endIcon={<KeyboardArrowDownIcon />}
              onClick={() => {
                dispatch(
                  updateSwap({ Type: "SelectSwapTokenOpen", Value: "Open" })
                );
                dispatch(
                  updateSwap({ Type: "SelectSwapTokenSide", Value: "Buy" })
                );
              }}
            >
              {tokendata[swapPrams.SwapTokenToBuyId].name}
            </Button>
            <TextField
              variant="standard"
              sx={{
                minWidth: "15%",
                maxWidth: "25%",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              color="background"
              placeholder="0.00"
              onChange={(e) => SetAmount(e, "BuyAmount")}
              value={swapPrams.BuyAmount}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BuySide;
