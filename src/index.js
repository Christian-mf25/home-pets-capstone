import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Providers from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
