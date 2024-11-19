import React from "react";

function PopUp({ header, body, footer, showhide }) {
  return (
    <div className="popup">
      <div
        className="close"
        onClick={() => {
          showhide(2);
        }}
      >
        X
      </div>
      <div className="message">
        <div className="message-item">{header}</div>
        <div className="message-item">{body}</div>
        <div className="message-item">{footer}</div>
      </div>
    </div>
  );
}

export default PopUp;

/*
import { useState, useRef, useEffect } from "react";
import "./App.css";
import PopUp from "../public/Archive/PopUp";
function App() {
  const [showpopup, SetShowPopUp] = useState(0);
  const target = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          SetShowPopUp((prev) => {
            if (prev != 2) prev = 1;
            return prev;
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(target.current);
    return () => observer.disconnect;
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          SetShowPopUp((prev) => {
            if (prev != 2) prev = 1;
            return prev;
          })
        }
      >
        Click
      </button>
      <div
        ref={target}
        style={{ width: "98vw", height: "100vh", backgroundColor: "yellow" }}
      ></div>
      {showpopup === 1 ? (
        <PopUp
          header={"header"}
          body={"body"}
          footer={"footer"}
          showhide={SetShowPopUp}
        />
      ) : null}
    </div>
  );
}

export default App;


*/
