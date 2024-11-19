import React, { useState, useEffect, useRef } from "react";

function ProgressTracker({ API }) {
  const [data, SetData] = useState();
  const [error, SetError] = useState();
  const [loading, SetLoading] = useState(true);
  const [width, SetWidth] = useState(0);
  const [counter, SetCounter] = useState(0);
  const [counterFlag, SetCounterFlag] = useState(true);
  const counterfunction = useRef(null);
  async function FetchAPI() {
    try {
      SetLoading(true);
      const response = await fetch(API);
      const data = await response.json();
      data ? SetData(data) : SetError("Something Not right");
      SetLoading(false);
      SetCounterFlag(true);
    } catch (error) {
      SetError(error.message);
      SetLoading(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let widthPR =
        ((document.documentElement.scrollTop + window.innerHeight) * 100) /
        document.documentElement.scrollHeight;

      SetWidth(widthPR);
    });

    return document.body.removeEventListener("scroll", () => {});
  }, []);
  useEffect(() => {
    FetchAPI();
  }, [API]);

  useEffect(() => {
    if (counterFlag && data)
      counterfunction.current = setInterval(() => {
        SetCounter((counter) => {
          if (counter === data.length) {
            SetCounterFlag(false);
          }
          return counter === data.length ? counter : counter + 1;
           if (c === data.length) {
             SetCounterFlag(false);
           }
           return c === data.lenght ? c : c + 1;
        });
      }, 100);
    return () => clearInterval(counterfunction.current);
  }, [data, counterFlag]);
  return (
    <div className="flex">
      <p
        className="bar"
        style={{
          width: `${width}%`,
        }}
      ></p>
      {loading ? "Data Loading" : null}
      {error ? error : null}
      {data ? <div className="circle">{counter}</div> : null}
      {data
        ? data.map((dataItem) => {
            return (
              <div className="flex" key={dataItem.id}>
                {dataItem.title}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ProgressTracker;
