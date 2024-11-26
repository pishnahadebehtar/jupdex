import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./component/Nav.jsx";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SideBar from "./component/SideBar.jsx";
import Spot from "./component/Pages/Spot/Spot.jsx";
import {
  GitHub,
  Mail,
  Reddit,
  ReviewsRounded,
  X,
  YouTube,
} from "@mui/icons-material";
import { useState } from "react";

import Contact from "./component/Pages/Contact/Contact.jsx";

function App() {
  const isMenuOpen = useSelector((state) => state.ModeSlice.isMenuOpen);
  const mode = useSelector((state) => state.ModeSlice.mode);
  const [showSocial, setShowSocial] = useState(false);
  const match = useMediaQuery("(max-width: 800px)");
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
    disabledButton: {
      backgroundColor: "rgba(232, 249, 255, .9)",
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/jupdex/contact" element={<Contact />} />
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

              cursor: "pointer",
            }}
            onClick={() => setShowSocial(!showSocial)}
          >
            {showSocial ? (
              <ClickAwayListener onClickAway={() => setShowSocial(false)}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: "8rem",
                    height: "12rem",
                    bgcolor: theme.palette.background.dark,
                    borderRadius: "0.5rem",
                    position: "absolute",
                    marginTop: "-50vh",
                  }}
                  gap={0.5}
                >
                  <Typography color={theme.palette.secondary.light}>
                    Socials
                  </Typography>
                  <Divider
                    sx={{
                      bgcolor: theme.palette.secondary.light,
                      height: "1px",
                      width: "80%",
                    }}
                  ></Divider>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    color={theme.palette.secondary.light}
                    gap={1}
                    sx={{
                      "& :hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-starts"}
                      color={theme.palette.secondary.light}
                      gap={1}
                    >
                      <X size={"2rem"} />
                      <Typography fontSize={"0.75rem"}>X</Typography>
                    </Box>
                    <Link to={"/jupdex/contact"}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"flex-starts"}
                        color={theme.palette.secondary.light}
                        gap={1}
                      >
                        <Mail />
                        <Typography fontSize={"0.75rem"}>Contact</Typography>
                      </Box>
                    </Link>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-starts"}
                      color={theme.palette.secondary.light}
                      gap={1}
                    >
                      <YouTube size={"2rem"} />
                      <Typography fontSize={"0.75rem"}>YouTube</Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-starts"}
                      color={theme.palette.secondary.light}
                      gap={1}
                    >
                      <Reddit size={"2rem"} />
                      <Typography fontSize={"0.75rem"}>Reddit</Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-starts"}
                      color={theme.palette.secondary.light}
                      gap={1}
                    >
                      <GitHub size={"2rem"} />
                      <Typography fontSize={"0.75rem"}>Guid</Typography>
                    </Box>
                  </Box>
                </Box>
              </ClickAwayListener>
            ) : (
              false
            )}
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
