import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";

import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
