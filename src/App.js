import { Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./component/Nav.jsx";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import Reviews from "@mui/icons-material/Reviews.js";
import SideBar from "./component/SideBar.jsx";
import Spot from "./component/Spot.jsx";
import { ReviewsRounded } from "@mui/icons-material";

function App() {
  const isMenuOpen = useSelector((state) => state.ModeSlice.isMenuOpen);
  const mode = useSelector((state) => state.ModeSlice.mode);
  const theme = createTheme({
    palette: {
      primary: {
        main: mode === "dark" ? "#c7f284" : "#7ED4AD",
        dark: "hsla(83,81%,73%,.2)",
        light: "rgb(114,141,93)",
      },
      secondary: {
        main: "rgba(232, 249, 255, .5)",
        light: "rgba(232, 249, 255, .9)",
        dark: "rgba(232, 249, 255, .2)",
      },
      background: {
        light: mode === "dark" ? "rgba(24,34,45)" : "#fafafa",
        default: mode === "dark" ? " rgb(28 41 54 )" : "#fafafa",
        dark: "rgb(19 28 37)",
      },
      info: {
        main: mode === "dark" ? "rgba(0,188,240,0.7 )" : "#28a745",
        light: mode === "dark" ? "rgba(0,188,240,0.5 )" : "#28a745",
        dark: "rgba(0,188,240,0.9 )",
      },
    },
    typography: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: 14,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box position={"fixed"} zIndex={10} top={0}>
        {isMenuOpen && <SideBar />}
      </Box>
      <Box
        width="102vw"
        height="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        bgcolor={theme.palette.background.default}
        transition="0.5s"
      >
        <Nav />
        <Box marginTop={"15vh"}>
          <Routes>
            <Route path="/" element={<Spot />} />
            <Route path="/jupdex" element={<Spot />} />
          </Routes>
        </Box>
      </Box>
      <Box position={"absolut"} zIndex={10} bottom={0}>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "15vw",
            paddingRight: "5vw",
            paddingTop: "10vh",
            paddingBottom: "2vh",
            bgcolor: theme.palette.background.default,
          }}
        >
          <Box></Box>
          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: "1.25rem",
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.secondary.light,
            }}
          >
            Referral
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "15%",
              cursor: "pointer",
            }}
          >
            <IconButton>
              <ReviewsRounded
                color="primary"
                sx={{
                  "& :hover": { color: "primary" },
                }}
              />
            </IconButton>
            <Typography
              paddingLeft={"0.2rem"}
              color="primary"
              sx={{
                "& :hover": { color: theme.palette.primary.light },
              }}
            >
              Talk to us
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
