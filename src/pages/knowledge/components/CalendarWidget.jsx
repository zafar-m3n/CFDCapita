import React, { useEffect, useRef } from "react";

const CalendarWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widgetScript = document.createElement("script");
    widgetScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    widgetScript.async = true;
    widgetScript.type = "text/javascript";
    widgetScript.innerHTML = `
      {
        "width": "100%",
        "height": "600",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "importanceFilter": "-1,0,1"
      }
    `;

    if (widgetRef.current) {
      widgetRef.current.appendChild(widgetScript);
    }

    return () => {
      // Cleanup to avoid duplicate widgets
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetRef}>
      <div className="tradingview-widget-container__widget" style={{ minHeight: "600px" }}></div>
      <div className="tradingview-widget-copyright text-center text-sm mt-4">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="text-blue-600">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default CalendarWidget;
