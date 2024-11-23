import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    // Function to load the HubSpot script
    const loadHubSpotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48247135",
          formId: "2e4f92c1-9bef-45fa-b5d9-966953cc8c96",
          target: "#hubspotForm",
        });
      }
    };

    // Check if the script is already loaded
    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = loadHubSpotForm;
      document.body.appendChild(script);
    } else {
      loadHubSpotForm();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default Contact;

//https://app.hubspot.com/invite-user/gOxinoqmj6RnKV2w?lang=en&via=link     "invitelink for hubspot user"
