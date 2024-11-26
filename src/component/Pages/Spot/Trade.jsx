import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useSelector, useDispatch } from "react-redux";
import { ArrowDropDown, Wallet } from "@mui/icons-material";
import RouteIcon from "@mui/icons-material/Route";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MoreInfo from "./MoreInfo.jsx";
import { updateSwap } from "../../../state/SwapSlice.js";
import tokendata from "../../../assets/tokenData.js";
function Trade() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = useSelector((state) => state.ModeSlice.mode);
  const [ShowMore, SetShowMore] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [selected, setSelected] = useState("NotSelected");
  const swapPrams = useSelector((state) => state.SwapSlice);
  const matches = useMediaQuery("(min-width:800px)");
  const [DCAEveryAnchor, SetDCAEveryAnchor] = useState(null);

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

  const selectSideFocus = (side) => {
    side === "SellSide"
      ? selected === "NotSelected" || selected === "BuySide"
        ? setSelected("SellSide")
        : setSelected("NotSelected")
      : selected === "NotSelected" || selected === "SellSide"
      ? setSelected("BuySide")
      : setSelected("NotSelected");
  };

  const SetAmount = (e, ref) => {
    const value = e.target.value;
    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (value.match(regex) || value === "") {
      dispatch(updateSwap({ Type: ref, Value: value }));
    }
  };

  const SellTokenIcon = require(`../../../assets/${
    tokendata[swapPrams.SwapTokenToSellId].name
  }.png`);
  const BuyTokenIcon = require(`../../../assets/${
    tokendata[swapPrams.SwapTokenToBuyId].name
  }.png`);
  const DCAEveryPopup = (e) => {
    DCAEveryAnchor === null
      ? SetDCAEveryAnchor(e.currentTarget)
      : SetDCAEveryAnchor(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      gap={1}
    >
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
              padding: swapPrams.swapMode === "swap" ? "1rem" : "0",
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
                You're Selling
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
                  {tokendata[swapPrams.SwapTokenToSellId].symbol}
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
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0.8rem ${theme.palette.primary.dark}`,
                  },
                }}
                startIcon={
                  <img
                    src={SellTokenIcon}
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
                onChange={(e) => SetAmount(e, "SellAmount")}
                value={swapPrams.SellAmount}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: theme.palette.background.light,
          height: "1px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <IconButton
          size="small"
          sx={{
            color: theme.palette.secondary.main,
            bgcolor: theme.palette.background.default,
            border: `2px solid ${theme.palette.background.dark}`,
            transition: "0.2s",

            "&:hover": {
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              bgcolor: theme.palette.background.dark,
            },
          }}
          onClick={() => {
            dispatch(
              updateSwap({
                Type: "SwapTokenToSellId",
                Value: swapPrams.SwapTokenToSellId,
              })
            );
            dispatch(
              updateSwap({
                Type: "SwapTokenToBuyId",
                Value: swapPrams.SwapTokenToBuyId,
              })
            );
          }}
        >
          <SwapVertIcon />
        </IconButton>
      </Divider>
      <Box
        onClick={() => selectSideFocus("BuySide")}
        sx={{
          width: "100%",
          minHeight: "20vh",
          bgcolor: theme.palette.background.dark,
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
              ? `0 0 1rem ${theme.palette.primary.dark}`
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
              gap: "10px",
              padding: swapPrams.swapMode === "swap" ? "1rem" : "0",
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
                    color: mode === "dark" ? "white" : "black",
                  },
                }}
                placeholder="0.00"
                onChange={(e) => SetAmount(e, "BuyAmount")}
                value={swapPrams.BuyAmount}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {swapPrams.swapMode === "dca" ? (
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
              <Typography
                color={theme.palette.secondary.main}
                fontSize={"0.7rem"}
              >
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
                      color: mode === "dark" ? "white" : "black",
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
                <BasePopup
                  open={Boolean(DCAEveryAnchor)}
                  anchor={DCAEveryAnchor}
                >
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
              <Typography
                color={theme.palette.secondary.main}
                fontSize={"0.7rem"}
              >
                Over
              </Typography>
              <Box>
                <TextField
                  variant="standard"
                  sx={{
                    minWidth: "15%",
                    maxWidth: "55%",
                    "& .MuiInputBase-input": {
                      color: mode === "dark" ? "white" : "black",
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
              <Typography fontSize={"0.75rem"}>
                Price Range (Optional)
              </Typography>
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
                    color: mode === "dark" ? "white" : "black",
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
                    color: mode === "dark" ? "white" : "black",
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
      ) : (
        false
      )}
      {swapPrams.swapMode === "limit" ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: matches ? "row" : "column",
          }}
          gap={1}
        >
          <Box
            sx={{
              width: matches ? "60%" : "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              bgcolor: theme.palette.background.dark,
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                color={theme.palette.secondary.main}
                fontSize={"0.7rem"}
              >
                Buy {tokendata[swapPrams.SwapTokenToBuyId].symbol} at Rate
              </Typography>
              <Button sx={{ fontSize: "0.7rem" }}>Use Market</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
              }}
            >
              <TextField
                id="BuyingAmount"
                variant="standard"
                sx={{
                  minWidth: "15%",
                  maxWidth: "50%",
                  "& .MuiInputBase-input": {
                    color: mode === "dark" ? "white" : "black",
                  },
                  fontSize: "0.7rem",
                }}
                color="background"
                placeholder="0.00"
                onChange={(e) => SetAmount(e, "BuyAmount")}
                value={swapPrams.BuyAmount}
              />
              <Typography
                fontSize={"0.8rem"}
                color={theme.palette.secondary.main}
              >
                {tokendata[swapPrams.SwapTokenToSellId].symbol}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: theme.palette.background.dark,
              padding: "0.5rem",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              borderRadius: "0.5rem",
              width: matches ? "auto" : "100%",
            }}
          >
            <Box sx={{ minWidth: 120 }} width={"100%"} paddingTop={1}>
              <FormControl fullWidth>
                <InputLabel
                  color="secondary"
                  sx={{
                    color: theme.palette.secondary.light, // Default color
                    "&.Mui-focused": {
                      color: theme.palette.secondary.light, // Color when focused
                    },
                  }}
                >
                  Expiry
                </InputLabel>
                <Select
                  value={swapPrams.LimitExpriy}
                  label="Expriy"
                  onChange={(e) => {
                    dispatch(
                      updateSwap({ Type: "LimitExpriy", Value: e.target.value })
                    );
                  }}
                  sx={{
                    fontSize: "0.8rem",
                    "& .MuiSelect-select": {
                      color: theme.palette.secondary.light, // Change text color
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.secondary.light, // Change border color
                      border: "none", // Remove border
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove border
                      borderColor: theme.palette.secondary.light, // Change border color on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove border
                      borderColor: theme.palette.secondary.light, // Change border color when focused
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: alpha(theme.palette.background.light, 0.9),
                        color: theme.palette.secondary.main,
                      },
                    },
                  }}
                >
                  <MenuItem value={"10 Minutes"}>10 Minutes</MenuItem>
                  <MenuItem value={"1 Hour"}>1 Hour</MenuItem>
                  <MenuItem value={"1 Day"}>1 Day</MenuItem>
                  <MenuItem value={"3 Day"}>3 Day</MenuItem>
                  <MenuItem value={"7 Day"}>7 Day</MenuItem>
                  <MenuItem value={"30 Day"}>30 Day</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      ) : (
        false
      )}
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
            sx={{ borderRadius: "3rem", fontSize: "0.7rem" }}
          >
            2 Markets
          </Button>
          <Typography
            color={theme.palette.secondary.main}
            sx={{
              fontSize: "0.8rem",
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
          fontSize: "1.1rem",

          "&:disabled": {
            bgcolor: theme.palette.primary.light,
            color: theme.palette.background.default,
          },
          height: "3.5rem",
          borderRadius: "0.8rem",
          textTransform: "none",
        }}
        disabled={swapPrams.SellAmount && swapPrams.BuyAmount ? false : true}
      >
        {swapPrams.SellAmount && swapPrams.BuyAmount
          ? swapPrams.swapMode === "swap"
            ? "Swap"
            : swapPrams.swapMode === "limit"
            ? "Place Limit Order"
            : swapPrams.swapMode === "dca"
            ? "Start DCA"
            : "Start VA"
          : swapPrams.SellAmount
          ? "Waiting for Fetching The Price ..."
          : "Entre an amount"}
      </Button>
      {swapPrams.BuyAmount === 0 ? (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={theme.palette.secondary.main}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              fontSize: "0.8rem",
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          >
            1 {tokendata[swapPrams.SwapTokenToSellId].symbol} ={" "}
            {swapPrams.BuyAmount / swapPrams.SellAmount}{" "}
            {tokendata[swapPrams.SwapTokenToBuyId].symbol}
            <SwapHorizIcon fontSize="small" />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={() => {
              SetShowMore(!ShowMore);
            }}
            sx={{
              fontSize: "0.8rem",
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
            gap={2}
          >
            {ShowMore ? (
              <KeyboardArrowDownIcon fontSize="0.8rem" />
            ) : (
              <KeyboardArrowUpIcon fontSize="0.8rem" />
            )}
            <Typography fontSize={"0.8rem"}>
              {ShowMore ? "Show" : "Hide"} More Info
            </Typography>
            <CircularProgress
              size="0.8rem"
              variant="determinate"
              value={progress}
            />
          </Box>
        </Box>
      ) : (
        false
      )}
      <MoreInfo />
      {ShowMore && swapPrams.BuyAmount ? true : false}
    </Box>
  );
}

export default Trade;
