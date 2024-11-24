import React, { useEffect } from "react";

const HubSpotMeetings = () => {
  useEffect(() => {
    // Function to load the HubSpot Meetings script
    const loadHubSpotMeetings = () => {
      const script = document.createElement("script");
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    };
    console.log("I am here");

    // Load the script
    loadHubSpotMeetings();
  }, []);

  return (
    <div
      className="meetings-iframe-container"
      data-src="https://meetings.hubspot.com/aidin-azari?embed=true"
    ></div>
  );
};

export default HubSpotMeetings;
