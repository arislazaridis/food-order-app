import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Meals />
      </main>
    </Provider>
  );
}

export default App;
