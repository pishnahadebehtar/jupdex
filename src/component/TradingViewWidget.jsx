// TradingViewWidget.jsx

import React, { useEffect, useRef, memo } from "react";
import tokenListData from "../assets/tokenData";
import {  useSelector } from "react-redux";
function TradingViewWidget() {
  const SwapPrams = useSelector((state) => state.SwapSlice);
  const container = useRef();
  const pairSymbol = tokenListData[SwapPrams.SwapTokenToSellId].pairs.findIndex(
    (pair) => pair[0] === tokenListData[SwapPrams.SwapTokenToBuyId].symbol
  );
  console.log(pairSymbol);
  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
    }
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${
            tokenListData[SwapPrams.SwapTokenToSellId].pairs[pairSymbol][1]
          } ",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "hide_top_toolbar": true,
          "hide_side_toolbar": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

    container.current.appendChild(script);
  }, [pairSymbol]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div
        className="tradingview-widget-container__widget"
        style={{
          height: "calc(100% - 32px)",
          width: "100%",
          borderRadius: "2rem",
        }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
