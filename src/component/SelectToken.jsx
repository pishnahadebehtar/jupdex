import {
  Box,
  Typography,
  Button,
  TextField,
  ClickAwayListener,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { updateSwap } from "../state/SwapSlice";
import tokenListData from "../assets/tokenData";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import VerifiedIcon from "@mui/icons-material/Verified";
function SelectToken() {
  const theme = useTheme();
  const match = useMediaQuery("(min-width:750px)");
  const dispatch = useDispatch();
  const swapPrams = useSelector((state) => state.SwapSlice);
  const [search, SetSearch] = useState("");
  const SellSideTokenObject = tokenListData.find(
    (token) => token.id === swapPrams.SwapTokenToSellId
  );
  const BuySideTokenOptions = tokenListData.filter((token) =>
    SellSideTokenObject.pairs.some((pair) => token.symbol === pair[0])
  );
  const handleFilter = (token) => {
    return search === ""
      ? true
      : token.name.toLowerCase().includes(search.toLowerCase()) ||
          token.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  };
  const handleSelectToken = (token) => {
    const isSame =
      swapPrams.SelectSwapTokenSide === "Sell"
        ? swapPrams.SwapTokenToBuyId === token.id
        : swapPrams.SwapTokenToSellId === token.id;
    if (isSame) {
      dispatch(
        updateSwap({
          Type:
            swapPrams.SelectSwapTokenSide === "Sell"
              ? "SwapTokenToBuyId"
              : "SwapTokenToSellId",
          Value:
            swapPrams.SelectSwapTokenSide === "Sell"
              ? swapPrams.SwapTokenToSellId
              : swapPrams.SwapTokenToBuyId,
        })
      );
    }

    dispatch(
      updateSwap({
        Type:
          swapPrams.SelectSwapTokenSide === "Sell"
            ? "SwapTokenToSellId"
            : "SwapTokenToBuyId",
        Value: token.id,
      })
    );
    dispatch(
      updateSwap({
        Type: "SelectSwapTokenOpen",
        Value: "Close",
      })
    );
  };
  const handleMap = (token, index) => {
    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1rem",

          "&:hover": {
            bgcolor: theme.palette.background.default,
            borderRadius: "10px",
            cursor: "pointer",
          },
        }}
        onClick={() => handleSelectToken(token)}
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={require(`../assets/${token.name}.png`)}
            width="35px"
            height="35px"
            alt={token.name}
          />
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
            margin={1}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: grey[500],
              }}
            >
              {token.symbol}{" "}
              <VerifiedIcon color="primary" sx={{ padding: "3px" }} />
            </Typography>
            <Typography sx={{ color: grey[500] }}>{token.name} </Typography>
            <Typography
              sx={{
                width: "70%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                color: grey[700],
              }}
            >
              {token.contractAddress}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography color={{ color: grey[500] }}> {token.price} </Typography>
        </Box>
      </Box>
    );
  };
  console.log(swapPrams.SelectSwapTokenSide);
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
      <ClickAwayListener
        onClickAway={() => {
          dispatch(
            updateSwap({
              Type: "SelectSwapTokenOpen",
              Value: "Close",
            })
          );
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={theme.palette.secondary.dark}
          sx={{
            width: match ? "50%" : "95%",
            borderRadius: "10px",
            boxShadow: `0 0 0.08rem  ${grey[200]}`,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: theme.palette.background.dark,
                padding: "10px",
                color: "white",
                "& .MuiCardHeader-subheader": {
                  color: "darkgray",
                },
                "& .MuiCardHeader-title": {
                  color: "white",
                },
              }}
            >
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                color="secondary"
                fullWidth
                sx={{
                  color: "white",
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& label": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "yellow",
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& :hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
                onChange={(e) => {
                  SetSearch(e.target.value);
                }}
              />
              <Button
                sx={{
                  borderRadius: "20px",
                  margin: "5px",
                }}
                onClick={() => {
                  dispatch(
                    updateSwap({
                      Type: "SelectSwapTokenOpen",
                      Value: "Close",
                    })
                  );
                }}
              >
                Esc
              </Button>
            </Box>
            <Box
              sx={{
                bgcolor: theme.palette.background.light,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                color: "white",
                width: "100%",
                maxHeight: "70vh",
                overflowY: "scroll",
              }}
            >
              {swapPrams.SelectSwapTokenSide === "Sell"
                ? tokenListData
                    .filter((token) => handleFilter(token))
                    .map((token, index) => handleMap(token, index))
                : BuySideTokenOptions.filter((token) =>
                    handleFilter(token)
                  ).map((token, index) => handleMap(token, index))}
            </Box>
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}

export default SelectToken;
