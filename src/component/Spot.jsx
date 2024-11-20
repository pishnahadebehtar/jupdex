import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { ClockIcon } from "@mui/x-date-pickers";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";
import Trade from "./Trade.jsx";
import SwapSetting from "./SwapSetting.jsx";
import { updateSettingStates } from "../state/SettingSlice";
import { useSelector, useDispatch } from "react-redux";
import SelectToken from "./SelectToken.jsx";

import { updateSwap } from "../state/SwapSlice.js";
import tokenListData from "../assets/tokenData.js";
function Spot() {
  const matches = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const [clockChecked, setClockChecked] = React.useState(false);
  const [active, setActive] = React.useState("swap");

  const SwapSettingState = useSelector(
    (state) => state.SettingSlice.SwapSettingState
  );
  const dispatch = useDispatch();
  const SettingPageOpen = useSelector(
    (state) => state.SettingSlice.SwapSettingOpen
  );
  const MevProtect = useSelector((state) => state.SettingSlice.MEVProtect);
  const SlippageMode = useSelector((state) => state.SettingSlice.SlippageMode);
  const FixedSlippage = useSelector(
    (state) => state.SettingSlice.FixedSlippage
  );
  const SelectSwapTokenOpen = useSelector(
    (state) => state.SwapSlice.SelectSwapTokenOpen
  );

  const SettingState = useSelector((state) => state.SettingSlice);
  useEffect(() => {
    localStorage.setItem("SettingState", JSON.stringify(SettingState)); // Save the state to local storage because of Auto and manual button
  }, [SettingState]);
  const SwapPrams = useSelector((state) => state.SwapSlice);
  const [PriceData, SetPriceData] = useState("");
  async function PriceApi() {
    try {
      fetch(
        `https://rest.coinapi.io/v1/exchangerate/${
          tokenListData.filter(
            (token) => token.id === SwapPrams.SwapTokenToSellId
          )[0].symbol
        }/${
          tokenListData.filter(
            (token) => token.id === SwapPrams.SwapTokenToBuyId
          )[0].symbol
        }`,
        {
          headers: {
            "X-CoinAPI-Key": "API_KEy", // Replace with your API key
          },
        }
      )
        .then((response) => response.json())
        .then((data) => SetPriceData(data))
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error.message);
    }
  }
  // for calling the price function then sell amount changes
  useEffect(() => {
    PriceApi();
    if (PriceData) {
      dispatch(
        updateSwap({
          Type: "BuyAmount",
          Value: PriceData.rate * SwapPrams.SellAmount,
        })
      );
    }
  }, [
    SwapPrams.SellAmount,
    SwapPrams.SwapTokenToBuyId,
    SwapPrams.SwapTokenToSellId,
    PriceData,
    PriceApi,
    dispatch,
  ]);
  console.log(PriceData);
  //body of component starts here
  return (
    <Box>
      {SettingPageOpen ? <SwapSetting /> : false}
      {SelectSwapTokenOpen === "Open" ? <SelectToken /> : false}
      <Box
        p={2}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        gap={2}
      >
        <Box
          width={matches ? "50vw" : "95vw"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            gap={1}
            sx={{
              margin: "1px",
              borderRadius: "1.2rem",
              padding: "0.3rem",
              bgcolor: theme.palette.background.light,
            }}
          >
            <Button
              size="medium"
              sx={{
                color:
                  active === "swap"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.light,
                borderRadius: "1.2rem",
                bgcolor:
                  active === "swap"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={() => setActive("swap")}
            >
              Swap
            </Button>
            <Button
              size="medium"
              sx={{
                color:
                  active === "limit"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.dark,
                borderRadius: "1.2rem",
                bgcolor:
                  active === "limit"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={() => setActive("limit")}
            >
              Limit
            </Button>
            <Button
              size="medium"
              sx={{
                color:
                  active === "dca"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.dark,
                borderRadius: "1.2rem",
                bgcolor:
                  active === "dca"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,.1)",

                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={() => setActive("dca")}
            >
              DCA
            </Button>
            <Button
              size="medium"
              sx={{
                color:
                  active === "va"
                    ? theme.palette.primary.main
                    : theme.palette.secondary.dark,
                borderRadius: "1.2rem",
                bgcolor:
                  active === "va"
                    ? "rgba(199, 242, 132, 0.1)"
                    : "rgba(19,27,36,0.1)",

                "&:hover": {
                  bgcolor: "rgba(199, 242, 132, 0.1)",
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={() => setActive("va")}
            >
              VA
            </Button>
          </Box>
          <IconButton
            sx={{
              width: "2rem",
              height: "2rem",
              bgcolor: theme.palette.secondary.dark,
            }}
            onClick={() => {
              setClockChecked(!clockChecked);
            }}
          >
            <ClockIcon
              sx={{
                color: !clockChecked
                  ? theme.palette.secondary.light
                  : theme.palette.primary.dark,
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
        </Box>
        <Box
          width={matches ? "50vw" : "95vw"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              sx={{
                borderRadius: "1.2rem",

                bgcolor: theme.palette.background.light,
              }}
            >
              <Button
                color={SwapSettingState === "Auto" ? "info" : "secondary"}
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SwapSettingState === "Auto"
                      ? theme.palette.background.dark
                      : "rgba(19,27,36,0.1)",
                  "&:hover": {
                    color: theme.palette.info.dark,
                  },
                  fontSize: "0.8rem",
                }}
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "SwapSettingState",
                      SettingValue: "Auto",
                    })
                  );
                }}
              >
                Auto
              </Button>
              <Button
                color={SwapSettingState === "Manual" ? "info" : "secondary"}
                sx={{
                  margin: "0.2rem",
                  borderRadius: "1.2rem",
                  bgcolor:
                    SwapSettingState === "Manual"
                      ? theme.palette.background.dark
                      : "rgba(19,27,36,0.1)",
                  "&:hover": {
                    color: theme.palette.info.dark,
                  },
                  fontSize: "0.8rem",
                }}
                onClick={() => {
                  dispatch(
                    updateSettingStates({
                      SettingName: "SwapSettingState",
                      SettingValue: "Manual",
                    })
                  );
                }}
              >
                Manual
              </Button>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <IconButton
                sx={{
                  width: "2rem",
                  height: "2rem",
                  bgcolor: theme.palette.background.dark,
                }}
              >
                <SettingsIcon
                  onClick={() =>
                    dispatch(
                      updateSettingStates({
                        SettingName: "SwapSettingOpen",
                        SettingValue: true,
                      })
                    )
                  }
                  sx={{
                    color: theme.palette.secondary.main,
                    minWidth: "1.25rem",
                    minHeight: "1.25rem",
                    width: "1.25rem",
                    height: "1.25rem",
                    transition: "0.5s",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
              <Typography
                fontSize={"0.7rem"}
                color={theme.palette.secondary.main}
              >
                {SlippageMode === "fixed" ? FixedSlippage : ""}{" "}
                {MevProtect ? "MEV Protect: On" : "Dynamic,MEV Protect: Off"}
              </Typography>
            </Box>
          </Box>
          <IconButton
            sx={{
              width: "2rem",
              height: "2rem",
              bgcolor: theme.palette.background.light,
            }}
          >
            <ReplayIcon
              sx={{
                color: theme.palette.secondary.dark,
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
        </Box>
        <Trade />
      </Box>
    </Box>
  );
}

export default Spot;
