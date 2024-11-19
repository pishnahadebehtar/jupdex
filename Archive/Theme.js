import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

function Theme() {
  const [colors, SetColors] = useState([
    "#FFFF80",
    "#FFAA80",
    "#FF5580",
    "#FF0080",
  ]);
  const [copied, SetCopied] = useState("");
  const hexHash = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let colorStyle = {
    width: "100%",
    height: "45%",
    color: "white",
  };
  const GenRandColor = () => {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor = newColor + hexHash[Math.floor(Math.random() * 15)];
    }
    return newColor;
  };
  const handleBTN = () => {
    let copyColors = [...colors];
    for (let i = 0; i < 4; i++) {
      let color = GenRandColor();
      copyColors[i] = color;
    }
    SetColors(copyColors);
  };
  const handleCopy = (e) => {
    SetCopied(e);
    return navigator.clipboard.writeText(e);
  };
  return (
    <div className="box">
      {colors.map((item, index) => {
        let colorIndex = colors[index];
        index === 0
          ? (colorStyle = {
              borderRadius: "1rem 1rem 0 0 ",
              height: `${45 - index * 10}%`,
              backgroundColor: colorIndex,
            })
          : (colorStyle = {
              borderRadius: "0 0 0 0 ",
              height: `${45 - index * 10}%`,
              backgroundColor: colorIndex,
            });
        return (
          <div
            key={index}
            className="box"
            style={colorStyle}
            onClick={() => handleCopy(item)}
          >
            {copied === item ? "copied" : item}
          </div>
        );
      })}

      <button onClick={() => handleBTN()}>GENERATE</button>
    </div>
  );
}

export default Theme;
