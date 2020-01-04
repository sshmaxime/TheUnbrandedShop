import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import "./index.css";

import configureStore from "./redux/store";
import * as serviceWorker from "./serviceWorker";

// Create Redux store
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
