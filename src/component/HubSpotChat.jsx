import React, { useEffect } from "react";

const HubSpotChat = () => {
  useEffect(() => {
    // Function to load the HubSpot chat script
    const loadHubSpotChat = () => {
      const script = document.createElement("script");
      script.src = "//js-na1.hs-scripts.com/48247135.js";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.id = "hs-script-loader";
      document.body.appendChild(script);
    };

    // Check if the script is already loaded
    if (!document.getElementById("hs-script-loader")) {
      loadHubSpotChat();
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default HubSpotChat;
