import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./components/context/contacts-context";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./components/store/store";

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </Provider>,
  document.getElementById("root")
);
