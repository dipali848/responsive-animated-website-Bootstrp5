import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  rootElement
);
