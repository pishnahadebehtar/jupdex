import React from "react";
import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import { Repeat } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useState } from "react";

function OrderList() {
  const [LimitDataMode, SetLimitDataMode] = useState("orders");
  const theme = useTheme();
  const match = useMediaQuery("(min-width:800px)");
  return (
    <Box display={"flex"} gap={2} flexDirection={"column"}>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box gap={1} display={"flex"}>
          <Button
            size="small"
            variant="outlined"
            color={LimitDataMode === "orders" ? "primary" : "secondary"}
            sx={{
              borderRadius: "1.25rem",
              textTransform: "none",

              fontWeight: 300,
              minWidth: ".25rem",
            }}
            onClick={() => SetLimitDataMode("orders")}
          >
            Open Orders
          </Button>
          <Button
            size="small"
            variant="outlined"
            color={LimitDataMode === "history" ? "primary" : "secondary"}
            sx={{
              borderRadius: "1.25rem",
              textTransform: "none",

              fontWeight: 300,
              minWidth: ".25rem",
            }}
            onClick={() => SetLimitDataMode("history")}
          >
            History Orders
          </Button>
        </Box>
        <Box display={"flex"} gap={1}>
          <Button
            color="secondary"
            size="small"
            variant="outlined"
            sx={{
              minWidth: ".25rem",
              borderRadius: "0.5rem",
              color: theme.palette.secondary.dark,
            }}
          >
            <Repeat sx={{ width: "1rem" }} />
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "0.5rem",
              textTransform: "none",
              fontWeight: 300,
              color: theme.palette.secondary.dark,
              transform: "none",
              padding: 0,
            }}
          >
            <Cancel sx={{ width: "1rem" }} /> {match ? "Cancel" : false}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "40vh",
          justifyContent: "center",
          alignItems: "center",
          border: `1px solid ${theme.palette.secondary.dark}`,
          borderRadius: "1.2rem",
          color: theme.palette.secondary.main,
        }}
      >
        <Typography
          color={theme.palette.secondary.dark}
          fontSize={"0.9rem"}
          fontWeight={200}
        >
          {LimitDataMode === "orders" ? "No Active Order" : "No History"}
        </Typography>
      </Box>
    </Box>
  );
}

export default OrderList;
