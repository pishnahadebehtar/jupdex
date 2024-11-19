import React from "react";
import { updateFave } from "../state/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Recipe(data) {
  const dispatch = useDispatch();
  const results = useSelector((store) => store.results.data);
  console.log(
    results.data.recipes.filter((item) => {
      console.log(item.id, data);
      return item.id === data.data;
    })
  );
  return (
    <div>
      {results.data.recipes
        .filter((item) => item.id === data.data)
        .map((item) => {
          console.log(item);
          return (
            <div className="recipe">
              <img src={item.image_url} />
              <div>{item.publisher}</div>
              <div>{item.title}</div>
              <button onClick={() => dispatch(updateFave(item.id))}>
                Add to FAV
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Recipe;
