import React from "react";
import ReactDOM from "react-dom";

import Amplify from "aws-amplify";
import awsAmplifyConfig from "./config/awsAmplify";

import App from "./App";
import { StoreProvider } from "./store/Store";

import "./index.scss";

Amplify.configure(awsAmplifyConfig);

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

ReactDOM.render(app, document.getElementById("root"));
