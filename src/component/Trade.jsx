import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useSelector, useDispatch } from "react-redux";
import { Wallet } from "@mui/icons-material";
import RouteIcon from "@mui/icons-material/Route";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreInfo from "./MoreInfo.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { updateSwap } from "../state/SwapSlice.js";
import tokendata from "../assets/tokenData.js";

function Trade() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = useSelector((state) => state.ModeSlice.mode);
  const [ShowMore, SetShowMore] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [selected, setSelected] = useState("NotSelected");
  const swapPrams = useSelector((state) => state.SwapSlice);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5vh",
      }}
    >
      <Box
        onClick={() =>
          selected === "NotSelected" || selected === "BuySide"
            ? setSelected("SellSide")
            : setSelected("NotSelected")
        }
        sx={{
          width: "100%",
          minHeight: "25vh",
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
              justifyContent: "space-between",
              alignItems: "center",
              width: "99%",
              flexDirection: "column",
              gap: "20px",
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
                fontSize="0.875rem"
              >
                You're Selling
              </Typography>
              <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  color={theme.palette.secondary.dark}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Wallet /> 0.0000
                </Typography>

                <Button
                  size="small"
                  sx={{
                    fontSize: "0.6rem",
                    color: theme.palette.secondary.light,
                    bgcolor: theme.palette.background.default,
                    borderRadius: "0.4rem",
                    minWidth: "10px",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      boxShadow: `0 0 0.1rem ${theme.palette.primary.dark}`,
                    },
                  }}
                >
                  Half
                </Button>
                <Button
                  size="small"
                  sx={{
                    fontSize: "0.6rem",
                    color: theme.palette.secondary.light,
                    bgcolor: theme.palette.background.default,
                    borderRadius: "0.4rem",
                    minWidth: "10px",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      boxShadow: `0 0 0.1rem ${theme.palette.primary.dark}`,
                    },
                  }}
                >
                  Max
                </Button>
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
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0.8rem ${theme.palette.primary.dark}`,
                  },
                }}
                startIcon={
                  <img
                    src={`../assets/${
                      tokendata[swapPrams.SwapTokenToSellId].name
                    }.png`}
                    width="20px"
                    height={"20px"}
                    alt={tokendata[swapPrams.SwapTokenToSellId].name}
                  />
                }
                endIcon={<KeyboardArrowDownIcon />}
                onClick={() => {
                  dispatch(
                    updateSwap({ Type: "SelectSwapTokenOpen", Value: "Open" })
                  );
                  dispatch(
                    updateSwap({ Type: "SelectSwapTokenSide", Value: "Sell" })
                  );
                }}
              >
                {tokendata[swapPrams.SwapTokenToSellId].name}
              </Button>
              <TextField
                id="BuyingAmount"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                variant="standard"
                sx={{
                  minWidth: "15%",
                  maxWidth: "25%",
                  "& .MuiInputBase-input": {
                    color: mode === "dark" ? "white" : "black",
                  },
                }}
                color="background"
                placeholder="0.00"
                onChange={(e) => {
                  const value = e.target.value;
                  const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
                  if (value.match(regex) || value === "") {
                    dispatch(updateSwap({ Type: "SellAmount", Value: value }));
                  }
                }}
                value={swapPrams.SellAmount}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: theme.palette.background.dark,
          height: "1px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.1rem",
          marginBottom: "0.1rem",
        }}
      >
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
            bgcolor: theme.palette.background.default,
            border: `2px solid ${theme.palette.background.dark}`,
            transition: "0.2s",
            fontSize: "1.3rem",
            "&:hover": {
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              bgcolor: theme.palette.background.dark,
            },
          }}
          onClick={() => {
            let tempSellSideId = swapPrams.SwapTokenToSellId;
            let tempBuySideId = swapPrams.SwapTokenToBuyId;
            dispatch(
              updateSwap({ Type: "SwapTokenToSellId", Value: tempBuySideId })
            );
            dispatch(
              updateSwap({ Type: "SwapTokenToBuyId", Value: tempSellSideId })
            );
          }}
        >
          <SwapVertIcon />
        </IconButton>
      </Divider>
      <Box
        onClick={() =>
          selected === "NotSelected" || selected === "SellSide"
            ? setSelected("BuySide")
            : setSelected("NotSelected")
        }
        sx={{
          width: "100%",
          minHeight: "25vh",
          bgcolor: theme.palette.background.light,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.primary.main,
          fontWeight: "bold",
          borderRadius: "10px",
          border:
            selected === "BuySide"
              ? `1px solid ${theme.palette.primary.dark}`
              : "none",
          boxShadow:
            selected === "BuySide"
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
              justifyContent: "space-between",
              alignItems: "center",
              width: "99%",
              flexDirection: "column",
              gap: "20px",
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
                fontSize="0.875rem"
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
                  variant="h4"
                  color={theme.palette.secondary.main}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Wallet /> 0.0000
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
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0.8rem ${theme.palette.primary.dark}`,
                  },
                }}
                startIcon={
                  <img
                    src={`/assets/${
                      tokendata[swapPrams.SwapTokenToBuyId].name
                    }.png`}
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
                    updateSwap({
                      Type: "SelectSwapTokenSide",
                      Value: "Buy",
                    })
                  );
                }}
              >
                {tokendata[swapPrams.SwapTokenToBuyId].name}
              </Button>
              <TextField
                id="BuyingAmount"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                variant="standard"
                sx={{
                  minWidth: "15%",
                  maxWidth: "25%",
                  "& .MuiInputBase-input": {
                    color: mode === "dark" ? "white" : "black",
                  },
                  "& .MuiInputBase-input-disabled": {
                    color: mode === "dark" ? "white" : "black",
                  },
                }}
                color="background"
                placeholder="0.00"
                onChange={(e) => {
                  const value = e.target.value;
                  const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
                  if (value.match(regex) || value === "") {
                    dispatch(updateSwap({ Type: "BuyAmount", Value: value }));
                  }
                }}
                value={swapPrams.BuyAmount}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {swapPrams.SellAmount ? (
        <Box
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            startIcon={<RouteIcon />}
            variant="outlined"
            sx={{ borderRadius: "3rem" }}
          >
            2 Markets
          </Button>
          <Typography
            color={theme.palette.secondary.main}
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          >
            via Raydium, Orca
          </Typography>
        </Box>
      ) : (
        false
      )}

      <Button
        variant="contained"
        sx={{
          "&:disabled": {
            color: theme.palette.primary.dark,
            bgcolor: theme.palette.background.dark,
          },
          height: "4rem",
          borderRadius: "0.5rem",
        }}
        disabled={swapPrams.SellAmount ? false : true}
      >
        {swapPrams.SellAmount && swapPrams.BuyAmount
          ? "Swap"
          : "Entre An Amount"}
      </Button>
      {swapPrams.BuyAmount != "" ? (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={theme.palette.secondary.dark}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          >
            1 {tokendata[swapPrams.SwapTokenToSellId].symbol} ={" "}
            {swapPrams.BuyAmount / swapPrams.SellAmount}{" "}
            {tokendata[swapPrams.SwapTokenToBuyId].symbol}
            <SwapHorizIcon />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={() => {
              SetShowMore(!ShowMore);
            }}
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
            gap={2}
          >
            {ShowMore ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            <Typography>{ShowMore ? "Show" : "Hide"} More Info</Typography>
            <CircularProgress
              size="1rem"
              variant="determinate"
              value={progress}
            />
          </Box>
        </Box>
      ) : (
        false
      )}
      {ShowMore && swapPrams.BuyAmount ? <MoreInfo /> : false}
    </Box>
  );
}

export default Trade;
