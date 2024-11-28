import React from "react";
import { Box } from "@mui/material";
function DesktopMascot() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "-9rem",
        left: "-9rem",
        transition: "5.5s",
        opacity: 1,
        "& :hover": {
          transform: "translate(150px, -150px)",
          transition: "1s",
          opacity: 0,
        },
      }}
    >
      <img
        src={require("../../../assets/mobilemascot.png")}
        alt="mobilemascot"
        width="255px"
        height="255px"
      />
    </Box>
  );
}

export default DesktopMascot;
