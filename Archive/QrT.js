import React, { useState } from "react";
import QRCode from "react-qr-code";
function QrT() {
  const [qrtext, SetQrtext] = useState("");
  const [text, SetText] = useState("");
  return (
    <div>
      <div className="flex border">
        <input
          className="flex border"
          onChange={(e) => {
            SetText(e.target.value);
          }}
          type="text"
          value={text}
        />
        <button
          onClick={() => {
            SetQrtext(text);
          }}
        >
          GENERATE
        </button>
      </div>
      <QRCode className="flex border" size={250} value={qrtext} />
    </div>
  );
}

export default QrT;
