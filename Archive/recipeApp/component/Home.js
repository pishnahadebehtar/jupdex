import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";

function Home() {
  const dispatch = useDispatch();
  const results = useSelector((store) => store.results.data);
  const isloaing = useSelector((store) => store.results.loading);
  return (
    <div className="home">
      {isloaing ? "Loading Your results ... plz wait" : null}
      {results.length != 0
        ? results.data.recipes.map((item, index) => {
            return <Recipe key={item.id} data={item.id} />;
          })
        : null}
    </div>
  );
}

export default Home;
