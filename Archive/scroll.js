import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [data, SetData] = useState();
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState();
  const ref = useRef([]);
  const [scroll, SetScroll] = useState(0);
  async function fetchAPI() {
    try {
      SetLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data) {
        SetData(data);
        SetLoading(false);
      }
    } catch (error) {
      SetError(error.message);
      SetLoading(false);
    }
  }
  useEffect(() => {
    fetchAPI();
  }, []);
  useEffect(() => {
    if (ref && scroll)
      ref.current[scroll].scrollIntoView({
        behavior: "smooth",
      });
  }, [scroll]);
  return (
    <div className="App">
      {loading ? "LOADING" : null}
      {error ? error : null}
      <div className="list">
        {data
          ? data.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    SetScroll(index);
                  }}
                  key={item.id}
                  className="list-item"
                >
                  {item.id}
                </div>
              );
            })
          : null}
      </div>
      <div
        className="dokme"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        UP
      </div>
      {data
        ? data.map((item, index) => {
            return (
              <div
                ref={(element) => (ref.current[index] = element)}
                key={item.id}
                className="box"
              >
                {item.id}-----{item.title}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
