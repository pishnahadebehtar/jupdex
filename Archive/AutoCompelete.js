import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [data, SetData] = useState();
  const [error, SetError] = useState();
  const [loading, SetLoading] = useState(true);
  const [search, SetSearch] = useState("");
  const [results, SetResults] = useState();
  const [showresult, SetShowResult] = useState(false);
  const input = useRef();
  async function FetchAPI() {
    try {
      SetLoading(true);
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      if (data) {
        SetData(data);
        SetLoading(false);
      }
    } catch (error) {
      SetLoading(false);
      SetError(error.message);
    }
  }
  useEffect(() => {
    FetchAPI();
  }, []);
  useEffect(() => {
    if (data && search)
      SetResults(
        data.filter((item) => {
          return item.login.includes(search);
        })
      );
  }, [search, data]);

  const handleChange = (e) => {
    SetSearch(e.target.value);
  };
  const handleKeyup = (e) => {
    if (e.code != "Backspace")
      if (results)
        if (results[0]) {
          SetSearch(results[0].login);

          SetShowResult(e.key);
        } else {
          SetShowResult("none");
          SetSearch(e.target.value);
        }
      else {
        SetShowResult("none");
        SetSearch(e.target.value);
      }
  };
  useEffect(() => {
    if (showresult != "none") {
      input.current.focus();
      input.current.setSelectionRange(
        search.indexOf(showresult) + 1,
        search.length
      );
    }
    console.log(showresult);
  }, [showresult]);
  return (
    <div className="App">
      {loading ? "Loading" : null}
      {error ? error : null}
      <div>
        <input
          className="search"
          value={search}
          ref={input}
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => handleKeyup(e)}
          placeholder="SEARCH"
        />
        {results && search ? (
          <div className="results">
            {results.map((item) => {
              return (
                <div key={item.id} className="result">
                  <img src={item.avatar_url} width="100px" height="100px" />
                  <div>{item.login}</div>
                  <a href={item.html_url} target="self">
                    Go To The Page
                  </a>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
