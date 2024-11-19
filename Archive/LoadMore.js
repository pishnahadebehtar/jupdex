import React, { useEffect, useState } from "react";

function LoadMore() {
  const [data, SetData] = useState([]);
  const [Count, SetCount] = useState(5);
  async function GetItems() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const data = await response.json();
      SetData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetItems();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "2rem",
        marginTop: "15rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => {
          return (
            <img
              key={item.id}
              src={item.url}
              style={{ width: "15rem", margin: "1rem", borderRadius: "1rem" }}
              className={index <= Count ? "active" : "inactive"}
            />
          );
        })}
      </div>
      <button
        onClick={() => SetCount(Count + 5)}
        style={{ width: "10rem", backgroundColor: "pink" }}
        disabled={Count < 20 ? false : true}
      >
        {Count < 20 ? "LOAD MORE" : "No Load More basse dge"}
      </button>
    </div>
  );
}

export default LoadMore;
