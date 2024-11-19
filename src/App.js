import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.jsx";
import Nav from "./component/Nav.jsx";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import Create from "./component/Create.jsx";
import SideBar from "./component/SideBar.jsx";
import Spot from "./component/Spot.jsx";
//thestfd
//sad
function App() {
  const isMenuOpen = useSelector((state) => state.ModeSlice.isMenuOpen);
  const mode = useSelector((state) => state.ModeSlice.mode);
  const theme = createTheme({
    palette: {
      primary: {
        main: mode === "dark" ? "#c7f284" : "#7ED4AD",
        dark: "hsla(83,81%,73%,.2)",
      },
      secondary: {
        main: "rgba(232, 249, 255, .5)",
        light: "rgba(232, 249, 255, .9)",
        dark: "rgba(232, 249, 255, .2)",
      },
      background: {
        light: mode === "dark" ? "rgba(29,37,44)" : "#fafafa",
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
      fontSize: "0.875rem",
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
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/spot" element={<Spot />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
