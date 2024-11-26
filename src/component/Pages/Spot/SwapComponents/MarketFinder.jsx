import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import {useTheme} from "@mui/material";
function MarketFinder() {
  const theme = useTheme();
  return (
    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={2}>
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
  );
}

export default MarketFinder;
