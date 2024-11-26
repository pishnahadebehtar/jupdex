import { Box, Typography, Button, TextField } from "@mui/material";
import React from "react";
import tokenListData from "../../../assets/tokenData";
import { useSelector, useDispatch } from "react-redux";
function SellSide() {
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
  const theme = useTheme();
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
                {tokenListData[swapPrams.SwapTokenToSellId].symbol}
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
  );
}

export default SellSide;
