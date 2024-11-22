// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
  "symbol": "${symbol}",
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "dateRange": "1D",
  "colorTheme": "dark",
  "isTransparent": true,
  "autosize": true,
  "largeChartUrl": "",
  "chartOnly": false,
  "noTimeScale": true
}`;

    container.current.appendChild(script);
  }, []);

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
