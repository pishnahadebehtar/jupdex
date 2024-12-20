import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ClockIcon } from "@mui/x-date-pickers";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";
import Trade from "./TradeComponents/Trade.jsx";
import SwapSetting from "./SwapComponents/SwapSetting.jsx";
import { updateSettingStates } from "../../../state/SettingSlice.js";
import { useSelector, useDispatch } from "react-redux";
import SelectToken from "../../SelectToken.jsx";
import { updateSwap } from "../../../state/SwapSlice.js";
import tokenListData from "../../../assets/tokenData.js";
import TradingViewWidget from "../../TradingViewWidget.jsx";
import { Cancel, Repeat } from "@mui/icons-material";
import MiniChart from "./SwapComponents/MiniChart.jsx";
import SwapMode from "./SpotFeatures/SwapMode.jsx";
import OrderList from "./SpotFeatures/OrderList.jsx";
import DesktopMascot from "./DesktopMascot.jsx";
function Spot() {
  const matches = useMediaQuery("(min-width:800px)");
  const theme = useTheme();
  const [clockChecked, setClockChecked] = React.useState(false);
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
  const [PriceData, SetPriceData] = useState(0.0);
  // for calling the price function then sell amount changes
  useEffect(() => {
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
              "X-CoinAPI-Key": "2da4da1b-35a7-418a-a7d7-49d7f4d6896b", // Replace with your API key
            },
          }
        )
          .then((response) => response.json())
          .then((data) => (data ? SetPriceData(data) : console.log("Error:")))
          .catch((error) => console.error("Error:", error));
      } catch (error) {
        console.log(error.message);
      }
    }
    PriceApi();
  }, [
    SwapPrams.SellAmount,
    SwapPrams.SwapTokenToBuyId,
    SwapPrams.SwapTokenToSellId,
    dispatch,
  ]);
  useEffect(() => {
    console.log("test");
    dispatch(
      updateSwap({
        Type: "BuyAmount",
        Value: PriceData.rate
          ? PriceData.rate * SwapPrams.SellAmount
          : SwapPrams.BuyAmount,
      })
    );
  }, [PriceData]);
  //body of component starts here
  console.log(PriceData);
  return (
    <Box>
      {SettingPageOpen ? <SwapSetting /> : false}
      {SelectSwapTokenOpen === "Open" ? <SelectToken /> : false}
      {matches ? <DesktopMascot /> : false}
      <Box
        sx={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          justifyContent: "flex-start",
        }}
      >
        {!matches ? <SwapMode /> : false}

        {SwapPrams.swapMode !== "swap" ? (
          <Box
            width={matches ? "60vw" : "95vw"}
            display={"flex"}
            gap={1}
            padding={1}
            flexDirection={"column"}
          >
            <Box height={matches ? "90vh" : "60vh"}>
              <TradingViewWidget />
            </Box>
            {matches ? <OrderList /> : false}
          </Box>
        ) : (
          false
        )}
        <Box
          p={1}
          minHeight={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          gap={2}
          width={
            matches ? (SwapPrams.swapMode === "swap" ? "50vw" : "35vw") : "95vw"
          }
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {matches ? <SwapMode /> : false}

            {SwapPrams.swapMode === "swap" && matches ? (
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
            ) : (
              false
            )}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
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
                  padding: "0.1rem",
                  bgcolor: theme.palette.background.light,
                }}
                gap={0.5}
              >
                <Button
                  color={SwapSettingState === "Auto" ? "info" : "secondary"}
                  sx={{
                    borderRadius: "1.2rem",
                    bgcolor:
                      SwapSettingState === "Auto"
                        ? theme.palette.background.dark
                        : "rgba(19,27,36,0.1)",
                    "&:hover": {
                      color: theme.palette.info.dark,
                    },
                    height: "2rem",
                    fontSize: "0.8rem",
                    textTransform: "none",
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
                    borderRadius: "1.2rem",
                    bgcolor:
                      SwapSettingState === "Manual"
                        ? theme.palette.background.dark
                        : "rgba(19,27,36,0.1)",
                    "&:hover": {
                      color: theme.palette.info.dark,
                    },
                    fontSize: "0.8rem",
                    height: "2rem",
                    textTransform: "none",
                    textAlign: "center",
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
                    width: "1.5rem",
                    height: "1.5rem",
                    bgcolor: theme.palette.background.dark,
                  }}
                  onClick={() =>
                    dispatch(
                      updateSettingStates({
                        SettingName: "SwapSettingOpen",
                        SettingValue: true,
                      })
                    )
                  }
                >
                  <SettingsIcon
                    sx={{
                      color: theme.palette.secondary.main,
                      minWidth: "1.1rem",
                      minHeight: "1.1rem",
                      width: "0.9rem",
                      height: "0.9rem",
                      transition: "0.5s",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
                <Typography
                  fontSize={"0.6rem"}
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
          {!matches && SwapPrams.swapMode !== "swap" ? <OrderList /> : false}
          {SwapPrams.swapMode === "swap" ? (
            <MiniChart symbol={"CRYPTO:SOLUSD"} />
          ) : (
            false
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Spot;
