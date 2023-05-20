import "./App.css";
import React from "react";
import store from "./models/store";
import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
