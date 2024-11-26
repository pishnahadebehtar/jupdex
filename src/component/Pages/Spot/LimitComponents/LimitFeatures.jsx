import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSwap } from "../../../../state/SwapSlice.js";
import tokendata from "../../../../assets/tokenData.js";
import { Box, Typography, TextField, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
function LimitFeatures() {
  const theme = useTheme();
  const swapPrams = useSelector((state) => state.SwapSlice);
  const dispatch = useDispatch();
  const SetAmount = (e, ref) => {
    const value = e.target.value;
    const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    if (value.match(regex) || value === "") {
      dispatch(updateSwap({ Type: ref, Value: value }));
    }
  };
  const matches = useMediaQuery("(min-width:800px)");
  return (
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
          <Typography color={theme.palette.secondary.main} fontSize={"0.7rem"}>
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
                color: "white",
              },
              fontSize: "0.7rem",
            }}
            color="background"
            placeholder="0.00"
            onChange={(e) => SetAmount(e, "BuyAmount")}
            value={swapPrams.BuyAmount}
          />
          <Typography fontSize={"0.8rem"} color={theme.palette.secondary.main}>
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
  );
}

export default LimitFeatures;
