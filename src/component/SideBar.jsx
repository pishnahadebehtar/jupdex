import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { updateIsMenuOpen } from "../state/modeSlice";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { Money } from "@mui/icons-material";
function SideBar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.ModeSlice.mode);
  const theme = useTheme();
  return (
    <Box
      width="250px"
      height="100vh"
      bgcolor={theme.palette.background.default}
      color={mode === "dark" ? "black" : "white"}
      position="absolute"
      left="0"
      top="0"
      zIndex="10"
      borderRadius={"10px"}
      boxShadow={`0 0 0.25rem  ${theme.palette.primary.main}`}
    >
      <Typography
        variant="h5"
        mt={2}
        sx={{ textDecoration: "underline" }}
        textAlign={"center"}
        color={mode === "dark" ? "white" : "black"}
      >
        Menu
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        minHeight="60vh"
        marginTop="5vh"
      >
        <Box
          minHeight={"60vh"}
          display={"flex"}
          flexDirection="column"
          gap="5vh"
        >
          <Link to="/">
            <Button
              startIcon={<HomeIcon />}
              variant="contained"
              sx={{
                width: "200px",
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/create">
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              sx={{ width: "200px" }}
            >
              Create
            </Button>
          </Link>
          <Link to="/spot">
            <Button
              startIcon={<Money />}
              variant="contained"
              sx={{ width: "200px" }}
            >
              Spot
            </Button>
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{ width: "200px" }}
          onClick={() => dispatch(updateIsMenuOpen(false))}
        >
          <CloseIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
}

export default SideBar;
