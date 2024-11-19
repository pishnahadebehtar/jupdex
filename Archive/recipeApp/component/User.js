import React from "react";

import { useSelector } from "react-redux";
import Recipe from "./Recipe";
function User() {
  const fav = useSelector((store) => store.userSlice.fav);
  const history = useSelector((store) => store.userSlice.history);
  console.log(fav);
  return (
    <div className="user">
      {fav
        ? fav.map((item) => {
            return <Recipe data={item} key={item} />;
          })
        : null}
    </div>
  );
}

export default User;
