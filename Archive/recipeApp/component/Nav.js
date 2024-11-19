import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../state/searchSlice";
import { fetchAPI } from "../state/results";
import { updateHistory } from "../state/userSlice";
function Nav() {
  const search = useSelector((state) => state.searchSlice.value);
  const results = useSelector((store) => store.results.data);
  const isloading = useSelector((store) => store.results.loading);
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/user">account</Link>
      </div>
      <div className="search">
        <input
          value={search}
          onChange={(e) => dispatch(update(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(fetchAPI(search));
            dispatch(updateHistory(search));
          }}
        >
          search
        </button>
      </div>
    </div>
  );
}

export default Nav;
