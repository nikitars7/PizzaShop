import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/PizzaShop">
      <App />
    </BrowserRouter>
  </Provider>
);
