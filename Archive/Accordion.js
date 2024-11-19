import React, { useState } from "react";
import data from "../data";
function Accordion() {
  const [selected, setSelected] = useState([]);
  const handleClick = (id) => {
    let copySelected = [...selected];
    selected.includes(id)
      ? (copySelected = copySelected.filter((item) => item != id))
      : copySelected.push(id);
    setSelected(copySelected);
  };
  return (
    <div className="box">
      <h1> F & Q</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="q" onClick={() => handleClick(item.id)}>
              {item.question}{" "}
              <span>{selected.includes(item.id) ? "-" : }</span>
            </div>
            {selected.includes(item.id) ? (
              <div className="a">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
