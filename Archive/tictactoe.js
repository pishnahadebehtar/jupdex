import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [items, SetItems] = useState([...Array(9)]);
  const [turn, SetTurn] = useState("X");
  const [Winner, SetWinner] = useState("NONE");
  const handleClick = (index) => {
    let cypitems = [...items];
    if (items[index]) return;
    if (turn === "X") {
      cypitems[index] = "X";
      SetItems(cypitems);
      SetTurn("O");
    } else {
      cypitems[index] = "O";
      SetItems(cypitems);
      SetTurn("X");
    }
  };
  const selectWinner = (items, turn) => {
    let pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < 8; index++) {
      let [x, y, z] = pattern[index];
      if (items[x] && items[x] === items[y] && items[y] === items[z])
        SetWinner(turn === "X" ? "O" : "X");
    }
  };
  useEffect(() => {
    selectWinner(items, turn);
  }, [items, turn]);
  return (
    <div className="App">
      <div>{Winner != "NONE" ? `The Winner is ${Winner}` : null}</div>
      <div className="tictactoe">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="item"
              onClick={() => handleClick(index)}
            >
              {items[index]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
