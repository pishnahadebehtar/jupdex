import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { ClockIcon } from "@mui/x-date-pickers";
import { updateSwap } from "../../../../state/SwapSlice";
import { useMediaQuery } from "@mui/material";
function SwapMode() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const SwapPrams = useSelector((state) => state.SwapSlice);
  const matches = useMediaQuery("(min-width:800px)");
  return (
    <Box
      display={"flex"}
      gap={1}
      sx={{
        margin: "1px",
        borderRadius: "1.2rem",
        padding: "0.3rem",
        bgcolor: theme.palette.background.light,
        width: SwapPrams.swapMode === "swap" ? "auto" : "100%",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{
          color:
            SwapPrams.swapMode === "swap"
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,
          borderRadius: "1.2rem",
          bgcolor:
            SwapPrams.swapMode === "swap"
              ? "rgba(199, 242, 132, 0.1)"
              : "rgba(19,27,36,.1)",

          "&:hover": {
            bgcolor: "rgba(199, 242, 132, 0.1)",
            color: theme.palette.secondary.light,
          },
          textTransform: "none",
        }}
        onClick={() =>
          dispatch(
            updateSwap({
              Type: "swapMode",
              Value: "swap",
            })
          )
        }
      >
        Swap
      </Button>
      <Button
        sx={{
          color:
            SwapPrams.swapMode === "limit"
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,
          borderRadius: "1.2rem",
          bgcolor:
            SwapPrams.swapMode === "limit"
              ? "rgba(199, 242, 132, 0.1)"
              : "rgba(19,27,36,.1)",

          "&:hover": {
            bgcolor: "rgba(199, 242, 132, 0.1)",
            color: theme.palette.secondary.light,
          },
        }}
        onClick={() =>
          dispatch(
            updateSwap({
              Type: "swapMode",
              Value: "limit",
            })
          )
        }
      >
        Limit
      </Button>
      <Button
        sx={{
          color:
            SwapPrams.swapMode === "dca"
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,
          borderRadius: "1.2rem",
          bgcolor:
            SwapPrams.swapMode === "dca"
              ? "rgba(199, 242, 132, 0.1)"
              : "rgba(19,27,36,.1)",

          "&:hover": {
            bgcolor: "rgba(199, 242, 132, 0.1)",
            color: theme.palette.secondary.light,
          },
          textTransform: "none",
        }}
        onClick={() =>
          dispatch(
            updateSwap({
              Type: "swapMode",
              Value: "dca",
            })
          )
        }
      >
        DCA
      </Button>
      <Button
        sx={{
          color:
            SwapPrams.swapMode === "va"
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,
          borderRadius: "1.2rem",
          bgcolor:
            SwapPrams.swapMode === "va"
              ? "rgba(199, 242, 132, 0.1)"
              : "rgba(19,27,36,0.1)",

          "&:hover": {
            bgcolor: "rgba(199, 242, 132, 0.1)",
            color: theme.palette.secondary.light,
          },
          textTransform: "none",
        }}
        onClick={() =>
          dispatch(
            updateSwap({
              Type: "swapMode",
              Value: "va",
            })
          )
        }
      >
        VA
      </Button>
      {SwapPrams.swapMode === "swap" && !matches ? (
        <IconButton
          sx={{
            width: "2rem",
            height: "2rem",
            bgcolor: theme.palette.secondary.dark,
          }}
        >
          <ClockIcon
            sx={{
              color: theme.palette.secondary.light,
              minWidth: "1.25rem",
              minHeight: "1.25rem",
              width: "1.5rem",
              height: "1.5rem",
              transition: "0.5s",
              cursor: "pointer",
              ":hover": {
                transition: "0.5s",
                color: theme.palette.primary.dark,
              },
            }}
          />
        </IconButton>
      ) : (
        false
      )}
    </Box>
  );
}

export default SwapMode;
