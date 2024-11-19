import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
function Rating({ Num }) {
  const [rate, SetRate] = useState(0);
  const [hover, SetHover] = useState(0);
  const [animate, SetAnimate] = useState(false);
  const className = (index) => {
    let activeClass = "";
    animate === index + 1 && hover != 0 && rate != 0
      ? (activeClass = "active animate")
      : index < (hover || rate)
      ? (activeClass = "active")
      : animate === index + 1
      ? (activeClass = "animate")
      : (activeClass = "");
    return activeClass;
  };

  useEffect(() => {}, [rate, hover]);
  return (
    <div
      style={{
        boxShadow: "0 0 0.5rem black",
        borderRadius: "1rem",
        margin: "1rem",
      }}
    >
      {[...Array(Num)].map((item, index) => {
        return (
          <FaStar
            className={className(index)}
            key={index}
            size={30}
            style={{ margin: "1rem" }}
            onClick={() => {
              index + 1 === rate
                ? SetRate(0) && SetHover(0)
                : SetRate(index + 1);
              SetAnimate(index + 1);
            }}
            onMouseOver={() => SetHover(index + 1)}
            onMouseLeave={() => SetHover(rate)}
          />
        );
      })}
    </div>
  );
}

export default Rating;
