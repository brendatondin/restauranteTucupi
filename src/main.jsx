import React from "react";
import ReactDOM from "react-dom/client";
import TucupiProvider from "../src/context/index";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TucupiProvider>
      <Routes />
    </TucupiProvider>
  </React.StrictMode>
);
