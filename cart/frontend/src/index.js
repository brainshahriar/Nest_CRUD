import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productReducer, { productsFetch } from "./features/productSlice";

import { productsApi } from "./features/productApi";

const store = configureStore({
  reducer: {
    products:productReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
});

store.dispatch(productsFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
