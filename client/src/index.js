import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/configStore";
import { loadUser } from "./actions/auth";
import "react-datepicker/dist/react-datepicker.css";
import "./scss/main.scss";

store.dispatch(loadUser());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
