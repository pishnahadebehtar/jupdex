import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import {CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./state/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Provider>
);
