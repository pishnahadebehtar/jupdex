import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

function Home() {
  const mode = useSelector((state) => state.ModeSlice.mode);
  const theme = useTheme();
 
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      bgcolor={mode === "dark" ? theme.palette.background.default : "white"}
      color={mode === "dark" ? "white" : "black"}
    >
      test
    </Box>
  );
}

export default Home;
